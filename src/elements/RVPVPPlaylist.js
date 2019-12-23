const RVXMLElement = require('./RVXMLElement').RVXMLElement;
const RVPVPMacroCue = require('./RVPVPMacroCue').RVPVPMacroCue;

class RVPVPPlaylist extends RVXMLElement
{
    constructor(element) {
        super(element);

        /**
         * @type {string}
         */
        this.name = null;

        /**
         * @type {string}
         */
        this.uuid = null;

        /**
         * @type {number}
         */
        this.type = 0;

        /**
         * @type {string}
         */
        this.smartDirectory = null;

        /**
         * @type {number}
         */
        this.startingTimecode = 0;

        /**
         * @type {boolean}
         */
        this.timecodeEnabled = false;

        /**
         * @public
         * @type {RVXMLElement[]}
         */
        this.cues = [];

        this.build();
    }

    build()
    {
        super.build();

        if(this.xmlElement.elements.length > 0)
        {
            let cuesElement = this.xmlElement.elements[0].elements;
            for(let prop in cuesElement)
            {
                let cueElement = cuesElement[prop];

                let type = RVXMLElement.getConstructor(cueElement.name);

                if(type != null)
                {
                    /**
                     * @type {RVXMLElement}
                     */
                    let cue = new type(cueElement);

                    this.cues.push(cue);
                }
            }
        }
    }
}

module.exports.RVPVPPlaylist = RVPVPPlaylist;