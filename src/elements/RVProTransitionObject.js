class RVProTransitionObject
{
    constructor() {
        /**
         * @type {number}
         */
        this.transitionType = -1;

        /**
         *
         * @type {boolean}
         */
        this.motionEnabled = false;

        /**
         *
         * @type {number}
         */
        this.transitionDuration = 0;

        /**
         *
         * @type {number}
         */
        this.motionDuration = 0;

        /**
         *
         * @type {number}
         */
        this.motionSpeed = 0;

        /**
         *
         * @type {string}
         */
        this.rvXMLIvarName = 'transitionObject';
    }
}

exports.RVProTransitionObject = RVProTransitionObject;