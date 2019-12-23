const RVXMLElement = require('./RVXMLElement').RVXMLElement;

class RVProTransitionObject extends RVXMLElement
{
    constructor(element)
    {
        super(element);

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

        this.build();
    }

    build()
    {
        super.build();
    }

}

exports.RVProTransitionObject = RVProTransitionObject;