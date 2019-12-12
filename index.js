const fs = require('fs');
const untildify = require('untildify');
const xml2js = require('xml2js');

const classes = require('classes.js').classes;


const PLAYLISTS_FILE = '/playlists.xml';
const _attrkey = 'ATTR';
const _parser = new xml2js.Parser({ attrkey: _attrkey });


/**
 * @type string
 * @param {string} path
 * @param {boolean} reloadOnChange
 */
function load(path, reloadOnChange=true)
{
    path = untildify(path);

    if(!path.endsWith(PLAYLISTS_FILE))
        path += PLAYLISTS_FILE;

    reload(path);

    if(reloadOnChange) {
        fs.watchFile(path, (curr, prev) => {
            reload(path);
        });
    }
}

/**
 *
 * @param {string} path
 */
function reload(path)
{
    console.log(path);

    let xmlContents = fs.readFileSync(path, 'utf8');
    _parser.parseString(xmlContents, function(err, result)
    {
        if(err !== null)
            console.error(err);

        // console.log(JSON.stringify(result));

        let pl = map(result);
        // console.log(JSON.stringify(pl));
    });
}

/**
 *
 * @param {object} data
 */
function map(data)
{
    for(let prop in data)
    {
        if(prop == _attrkey)
            continue;

        let item = data[prop];

        //console.log(prop);
        let cls = classes[prop];

        if(cls != null)
        {
            let obj = new cls();
            if(item[_attrkey] != null)
                Object.assign(obj, item[_attrkey]);

            let children = map(item);
            if(children)
                Object.assign(obj, children);

            return obj;
        }
        else
        {
            let result = {};
            if(Array.isArray(item))
            {
                //console.log('is array');
                result = [];
                for(let i in item)
                {
                    //console.log('item ' + i);
                    let subItem = item[i];
                    let subResult = map(subItem);
                    if(subItem[_attrkey] != null)
                        Object.assign(subResult, subItem[_attrkey]);
                    // console.log('==========');
                    // console.log(JSON.stringify(subItem));
                    // console.log('^==========');

                    result.push(subItem);
                    // result.push({'index':i});
                }
            }
            else
            {
                result = map(item);
            }

            let val = {};
            val[prop] = result;
            return val;
        }
    }

    console.log('unknown object');
}

exports.load = load;