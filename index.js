const fs = require('fs');
const untildify = require('untildify');
const xmlConvert = require('xml-js');
const EventEmitter = require('events');

const classes = require('./classes.js').classes;


const PLAYLISTS_FILE = '/playlists.xml';
const converterOptions = {ignoreComment: true, alwaysChildren: true, compact: false};

const emitter = new EventEmitter();

let xmlRoot;

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
    // read xml contents from playlists.xml
    let xmlContents = fs.readFileSync(path, 'utf8');

    // convert xml to object
    xmlRoot= xmlConvert.xml2js(xmlContents, converterOptions);

    // create root document
    let rootDoc = new classes.RVPVPDocument(xmlRoot);

    // notify the ready event
    emitter.emit('load', rootDoc);
}

/**
 *
 * @param {string} eventName
 * @param {function} listener
 */
function on(eventName, listener)
{
    emitter.on(eventName, listener);
}

/**
 *
 * @param {string} eventName
 * @param {function} listener
 */
function off(eventName, listener)
{
    emitter.on(eventName, listener);
}

/**
 *
 * @param {string} path
 */
function save(path)
{
    path = untildify(path);

    let contents = xmlConvert.js2xml(xmlRoot, converterOptions);
    let result = fs.writeFileSync(path, contents, 'utf8');
    console.log(result);
}

exports.load = load;

exports.on = on;
exports.off = off;
exports.save = save;

// export classes
exports.RVPVPDocument = classes.RVPVPDocument;
exports.RVPVPPlaylist = classes.RVPVPPlaylist;