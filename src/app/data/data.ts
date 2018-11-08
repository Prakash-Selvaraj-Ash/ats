import { Product, ProductDomain } from './../models/product';
import { DataCNC } from './dataCNC'


export class Data {
    private KjellbergDescription1: string = "With just a few settings the new plasma cutting units of the Smart Focus series achieve excellent results in the cutting range from 1 to 100 mm. Even under challenging conditions highest cutting quality and speed are realised. Therefore we use our proven cutting technologies as for example Contour Cut for cutting mild steel. The optimised gas control units and torches protect the consumables, reduce the gas consumption and the costs per cutting metre.";

    private pugCuttingProduct1: Product =
        {
            id: 1,
            name: "Pug Cutting",
            description: "We have carved a niche amongst the most trusted names in this business, engaged in offering a comprehensive range of AREV PUG Gas Cutting Machine.",
            image: "./../assets/arev.jpg",
            otherDetails: [],
            descripions: [
                { key: "Machine Model", value: "AREV" },
                { key: "Cutting Speed", value: "80 – 3000 mm / min" },
                { key: "Drive Wheel", value: "120 mm Dia double sided sealed ball bearing used for smooth  movements" },
                { key: "Gear", value: "Long life Hardened materials used" },
                { key: "Machine Enclosure", value: "Fully covered heavy  gauge sheet metal  CNC Punched,  Bend & Powder coated" },
                { key: "Motor", value: "New age Rotor coil with PMDC (Permanent magnet. No field coil is used  decreasing power consumption and maintenance & increasing reliability and efficiency" },
                { key: "Motor supply", value: "24VDC Motor will run cooler on continuous operation increasing  the  motor life and  Operator safety" },
                { key: "Protection", value: "2 fuses one for input and another for output provide for better safety" },
                { key: "Spare parts", value: "Branded Spare parts of quality used assuring long life" },
                { key: "Speed Control Method", value: "Precise cutting movements achieved using Step less 24V DC Drive Circuit Control Technology. It will increase the life of speed control Pot & Motor" },
                { key: "Switch control", value: "Main Power ON/ OFF switch  provide for better safety, other than Forward - Off-  Reverse Switch." },
                { key: "Trolley  (Pug Machine)", value: "AREV Pug (Trolley) is Used for Oxy Fuel/Plasma cutting as well as automated welding (MIG)." },
                { key: "Warranty", value: "1 Year" },
                { key: "Weight", value: "10 Kgs  (For stable movements ,with 35Kg Pulling capacity)" }
            ]
        }
    private consumablesProduct1: Product =
        {
            id: 1,
            name: "Hypertherm Plasma Consumables",
            description: "We are a most trusted name among the topmost companies in this business, involved in offeringGas Cutting Consumables.",
            image: "./../assets/B&Bartoni/Consumables/3.jpg",
            otherDetails: [],
            descripions: [
                { key: "Packaging Type", value: "Box" },
                { key: "Material", value: "Copper" },
                { key: "Suitable For", value: "Air, O2, HPR- XD, HPD, Powermax" }
            ]
        }
    private consumablesProduct2: Product =
        {
            id: 2,
            name: "Hypertherm Consumables Swirl Ring",
            description: "Leveraging the skills of our qualified team of professionals, we are instrumental in offering a wide range ofHypertherm Consumables Swirl Ring.",
            image: "./../assets/B&Bartoni/Consumables/1.jpg",
            otherDetails: [],
            descripions: [
                { key: "Packaging Type", value: "Plastic Box" },
                { key: "Material", value: "Ceramic" },
                { key: "Model No", value: "220488" },
                { key: "Suitable For", value: "Air, O2" }
            ]
        }
    private consumablesProduct3: Product =
        {
            id: 3,
            name: "Plasma Consumable Shield",
            description: "Our company has set benchmark in offeringPlasma Consumable Shield.",
            image: "./../assets/B&Bartoni/Consumables/2.jpg",
            otherDetails: [],
            descripions: [
                { key: "Packaging Type", value: "Box" },
                { key: "Material", value: "Mild Steel" },
                { key: "Model No", value: "220536" },
                { key: "Suitable For", value: "Shield 130 A Air" },
                { key: "Other Details", value: "130A Air" }
            ]
        }
    private consumablesProduct4: Product =
        {
            id: 4,
            name: "Hypertherm Electrode",
            description: "Banking on the skills of our qualified team of professionals, we are involved in providingHypertherm Electrode.",
            image: "./../assets/B&Bartoni/Consumables/4.jpg",
            otherDetails: [],
            descripions: [
                { key: "Model No", value: "220842" },
                { key: "Cutting Current", value: "45 A - 105 A" },
                { key: "Material", value: "Copper" },
                { key: "Packaging Type", value: "Packet" }
            ]
        }
    private consumablesProduct5: Product =
        {
            id: 4,
            name: "Hypertherm Cutting Electrode",
            description: "Matching up with the ever increasing requirements of the customers, our company is engaged in providingHypertherm Cutting Electrode.",
            image: "./../assets/B&Bartoni/Consumables/5.jpg",
            otherDetails: [],
            descripions: [
                { key: "Model No", value: "B220528" },
                { key: "Cutting Current", value: "45-50A" },
                { key: "Material", value: "Copper" },
                { key: "Packaging Type", value: "Packet" },
                { key: "Other Details", value: "Air, O2, SC" }
            ]
        }

        private consumablesProduct6: Product =
        {
            id: 5,
            name: "Plasma Nozzles",
            description: "Our association is broadly known for maintaining the quality in offering Plasma Nozzles.",
            image: "./../assets/B&Bartoni/Consumables/6.jpg",
            otherDetails: [],
            descripions: [
                { key: "Model No", value: "220941" },
                { key: "Material", value: "Copper" },
                { key: "Packaging Type", value: "Box" },
                { key: "Other Details", value: "Hypertherm Powermax 105" }
            ]
        }

        private consumablesProduct7: Product =
        {
            id: 6,
            name: "Air Plasma Cutting Nozzle",
            description: "Our company holds immense experience in this domain and is involved in offering a wide assortment of AirPlasma Cutting Nozzle.",
            image: "./../assets/B&Bartoni/Consumables/7.jpg",
            otherDetails: [],
            descripions: [
                { key: "Model No", value: "220941" },
                { key: "Material", value: "Copper" },
                { key: "Packaging Type", value: "Box" },
                { key: "Other Details", value: "Hypertherm Powermax 105" }
            ]
        }

    private kjellbergProduct1: Product = {
        id: 1,
        name: "Plasma Cutting Machine",
        description: this.KjellbergDescription1,
        image: "./../assets/Kjellberg/Smart-Focus.jpg",
        otherDetails: [],
        descripions: [
            { key: "Machine Model", value: "AREV" },
            { key: "Cutting Capacity", value: "100 mm Thick MS" },
            { key: "Bevel Cuts", value: "(Upto 45Deg) Upto 75mm Thick MS" },
            { key: "Cutting Speed", value: "77 – 3000mm / Min" },
            { key: "Cutter", value: "Nozzle Mixing Type" },
            { key: "Speed Control", value: "DC Drive Circuitry Technology" },
            { key: "Input Supply Voltage", value: "AC 230V / 50Hz" },
            { key: "Fuse", value: "5 Amps" },
            { key: "Color", value: "Blue and Black" },
            { key: "Option", value: "Circle Cutting and Four Wheel" },
            { key: "Gas Hose Connection for 5 mm Hoses ", value: "1/4 “ BSP RH & LH" }
        ]
    }

    private filletTractorProduct1: Product = {
        id: 1,
        name: "Fillet Welding Tractor",
        description: "We are specialized in offering Fillet Welding Tractor.",
        image: "./../assets/fillet/1.jpg",
        otherDetails: [],
        descripions: [
            {
                key: "Driven Type",
                value: "Electric"
            },
            {
                key: "Feature",
                value: "Portable"
            },
            {
                key: "Output Current (Ampere)",
                value: "0-100"
            },
            {
                key: "Material",
                value: "Mild Steel"
            },
            {
                key: "Frequency (Hz)",
                value: "50 - 60 Hz"
            },
            {
                key: "Phase",
                value: "Single"
            }
        ]
    }

    private bevelingMachineProduct1: Product = {
        id: 1,
        name: "Portable Beveling Machine",
        description: "This latest generation portable beveling machine performs auto feed beveling on steel plates on top, face and bottom edges.",
        image: "./../assets/beveling/1.png",
        otherDetails: [],
        descripions: [
            {
                key: "Voltage ",
                value: "~220–240 V"
            },
            {
                key: "Power ",
                value: "1600 W"
            },
            {
                key: "Spindle speed (no load) ",
                value: "2780 rpm"
            },
            {
                key: "Bevel angle (b)",
                value: "60 to –60°"
            },
            {
                key: "Maximum bevel width (b) ",
                value: "35 mm (1.38’’)"
            },
            {
                key: "Feed speed ",
                value: "250 – 500 mm/min"
            },
            {
                key: "Plate thickness",
                value: "max 35mm"
            },
            {
                key: "Weight (machine with 1 guide track)",
                value: "53.5 kg (118 lbs)"
            }
        ]
    }

    mainProducts: ProductDomain[] = [
        { id: 0, name: "Pug Cutting", isLogoAvailable: true, logoImage: "./../assets/AREV-Logo.png", products: [this.pugCuttingProduct1] },
        { id: 1, name: "Consumables", isLogoAvailable: true, logoImage: "./../assets/B&Bartoni/B&B Logo.jpg", products: [this.consumablesProduct1, this.consumablesProduct2, this.consumablesProduct3, this.consumablesProduct4, this.consumablesProduct5, this.consumablesProduct6, this.consumablesProduct7] },
        { id: 2, name: "CNC Profile Cutting Machine", isLogoAvailable: true, logoImage: "./../assets/sparkon_logo.png", products: new DataCNC().cncData },
        { id: 3, name: "Cutting Machine Plasma", isLogoAvailable: true, logoImage: "./../assets/Kjellberg/Logo.png", products: [this.kjellbergProduct1] },
        { id: 4, name: "Fillet Welding Tractor", isLogoAvailable: true, logoImage: "./../assets/promotech_logo.png", products: [this.filletTractorProduct1] },
        { id: 5, name: "Beveling machine", isLogoAvailable: true, logoImage: "./../assets/promotech_logo.png", products: [this.bevelingMachineProduct1] }
    ];

}