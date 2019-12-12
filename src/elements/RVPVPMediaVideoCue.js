const PlaylistType = require('../PlaylistType.js').PlaylistType;
const PlaybackBehavior = require('../PlaybackBehavior.js').PlaybackBehavior;

class RVPVPMediaVideoCue
{
    constructor()
    {
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
    }
}

exports.RVPVPMediaVideoCue = RVPVPMediaVideoCue;