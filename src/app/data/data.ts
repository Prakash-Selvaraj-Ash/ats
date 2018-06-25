import { Product, ProductDomain } from './../models/product';
import { DataCNC } from './dataCNC'


export class Data {
    private KjellbergDescription1: string = "With just a few settings the new plasma cutting units of the Smart Focus series achieve excellent results in the cutting range from 1 to 100 mm. Even under challenging conditions highest cutting quality and speed are realised. Therefore we use our proven cutting technologies as for example Contour Cut for cutting mild steel. The optimised gas control units and torches protect the consumables, reduce the gas consumption and the costs per cutting metre.";

    private pugCuttingProduct1: Product =
        {
            id: 1,
            name: "Consumable",
            description: "We have carved a niche amongst the most trusted names in this business, engaged in offering a comprehensive range of AREV PUG Gas Cutting Machine.",
            image: "./../assets/arev.jpg",
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

    private consumablesProduct1: Product =
        {
            id: 1,
            name: "Consumable",
            description: "Consumables description",
            image: "./../assets/B&Bartoni/BB consumablea.jpg",
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
    private consumablesProduct2: Product =
        {
            id: 2,
            name: "Consumable",
            description: "Consumables description",
            image: "./../assets/B&Bartoni/B&B Silver plus electrode.jpg",
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
    private consumablesProduct3: Product =
        {
            id: 3,
            name: "Consumable",
            description: "Consumables description",
            image: "./../assets/B&Bartoni/Gas nozzle.jpg",
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
    private consumablesProduct4: Product =
        {
            id: 4,
            name: "Consumable",
            description: "Consumables description",
            image: "./../assets/B&Bartoni/B&B consumable1.jpg",
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


    

    private kjellbergProduct1: Product = {
        id: 1,
        name: "Plasma Cutting Machine",
        description: this.KjellbergDescription1,
        image: "./../assets/Kjellberg/Smart-Focus.jpg",
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

    mainProducts: ProductDomain[] = [
        { id: 0, name: "Pug Cutting", isLogoAvailable: true, logoImage: "./../assets/AREV-Logo.png", products: [this.pugCuttingProduct1] },
        { id: 1, name: "Consumables", isLogoAvailable: true, logoImage: "./../assets/B&Bartoni/B&B Logo.jpg", products: [this.consumablesProduct1, this.consumablesProduct2, this.consumablesProduct3, this.consumablesProduct4] },
        { id: 2, name: "CNC Profile Cutting Machine", isLogoAvailable: true, logoImage: "./../assets/sparkon_logo.png", products: new DataCNC().cncData },
        { id: 3, name: "Cutting Machine Plasma", isLogoAvailable: true, logoImage: "./../assets/Kjellberg/Logo.png", products: [this.kjellbergProduct1] }
    ];

}