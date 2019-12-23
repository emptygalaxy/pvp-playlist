const RVXMLElement = require('./RVXMLElement').RVXMLElement;
const RVPVPMediaVideoCue = require('./RVPVPMediaVideoCue').RVPVPMediaVideoCue;
const RVProTransitionObject = require('./RVProTransitionObject').RVProTransitionObject;

class RVPVPMacroChildMedia extends RVXMLElement
{
    constructor(element)
    {
        super(element);

        /**
         * @type {string}
         */
        this.layerId = null;

        /**
         * @type {string}
         */
        this.layerName = null;

        /**
         * @type {string}
         */
        this.playbackBehavior = null;

        /**
         *
         * @type {RVPVPMediaVideoCue}
         */
        this.mediaVideoCue = null;

        /**
         *
         * @type {RVProTransitionObject}
         */
        this.transition = null;

        this.build();
    }

    build()
    {
        super.build();

        for(let prop in this.xmlElement.elements)
        {
            let item = this.xmlElement.elements[prop];
            switch(item.name)
            {
                case 'RVPVPMediaVideoCue':
                    this.mediaVideoCue = new RVPVPMediaVideoCue(item);
                    break;

                case 'RVProTransitionObject':
                    this.transition = new RVProTransitionObject(item);
                    break;

                default:
                    alert('Unknown type: ' + item.name);
                    break;
            }
        }
    }
}

exports.RVPVPMacroChildMedia = RVPVPMacroChildMedia;