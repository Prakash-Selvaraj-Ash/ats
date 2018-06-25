import { Product, ProductDomain } from './../models/product';

export class DataCNC{
    private cncProduct1: Product =
        {
            id: 1,
            name: "FastCut",
            description: "CNC cutting description",
            image: "./../assets/fastCut.png",
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
    private cncProduct2: Product = {
        id: 2,
        name: "QUick Cut",
        description: "CNC cutting description",
        image: "./../assets/quickCut.png",
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

    private cncProduct3: Product = {
        id: 3,
        name: "Speed Cut",
        description: "CNC cutting description",
        image: "./../assets/speedCut.png",
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

    private cncProduct4: Product = {
        id: 4,
        name: "Max Cut",
        description: "CNC cutting description",
        image: "./../assets/maxCut.png",
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

    private cncProduct5: Product = {
        id: 5,
        name: "Max Cut",
        description: "CNC cutting description",
        image: "./../assets/maxCut.png",
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

    private cncProduct6: Product = {
        id: 6,
        name: "Fiber Laser 3015Q",
        description: "CNC cutting description",
        image: "./../assets/fiberLaser1.png",
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

    private cncProduct7: Product = {
        id: 6,
        name: "Fiber Laser 3015E",
        description: "CNC cutting description",
        image: "./../assets/fiberLaser2.png",
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

    private cncProduct8: Product = {
        id: 6,
        name: "New Cut",
        description: "CNC cutting description",
        image: "./../assets/newCut.png",
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

    private cncProduct9: Product = {
        id: 6,
        name: "Strip Cut",
        description: "CNC cutting description",
        image: "./../assets/stripCut.png",
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

    cncData : Product[] = [
        this.cncProduct1,
        this.cncProduct2,
        this.cncProduct3,
        this.cncProduct4,
        this.cncProduct5,
        this.cncProduct6,
        this.cncProduct7,
        this.cncProduct8
    ]
}