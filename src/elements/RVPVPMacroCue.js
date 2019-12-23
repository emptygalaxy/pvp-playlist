const RVXMLElement = require('./RVXMLElement').RVXMLElement;

class RVPVPMacroCue extends RVXMLElement
{
    constructor(element) {
        super(element);

        /**
         *
         * @type {string}
         */
        this.name = null;

        /**
         * @type {RVPVPMacroChildMedia[]}
         */
        this.childCues = [];

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

                if(type != null) {
                    /**
                     * @type {RVPVPMacroChildMedia}
                     */
                    let cue = new type(cueElement);

                    this.childCues.push(cue);
                }
            }
        }
    }
}

exports.RVPVPMacroCue = RVPVPMacroCue;