
class RVPVPPlaylist
{
    constructor() {
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
         * @type {RVPVPMediaVideoCue[]}
         */
        this.cues = null;
    }
}

exports.RVPVPPlaylist = RVPVPPlaylist;