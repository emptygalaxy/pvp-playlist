const RVXMLElement = require('./RVXMLElement').RVXMLElement;
const PlaylistType = require('../PlaylistType.js').PlaylistType;
const PlaybackBehavior = require('../PlaybackBehavior.js').PlaybackBehavior;

class RVPVPMediaVideoCue extends RVXMLElement
{
    constructor(element)
    {
        super(element);

        /**
         *
         * @type {string}
         */
        this.name = null;

        /**
         *
         * @type {string}
         */
        this.uuid = null;

        /**
         *
         * @type {string}
         */
        this.source = null;

        /**
         * @type {number}
         */
        this.playbackBehavior = PlaybackBehavior.LOOP;

        if(element.attributes.name === 'LOOP')
        {

        }

        this.build();
    }

    build()
    {
        super.build();
    }
}

module.exports.RVPVPMediaVideoCue = RVPVPMediaVideoCue;