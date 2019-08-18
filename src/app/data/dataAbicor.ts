import { Product } from './../models/product';

export class Abicor {
    private abicorProduct1: Product = {
        id: 1,
        name: "EX-TRAFIRE® 55SD",
        description: "",
        image: "./../assets/abicor-binzel/extrafire55.png",
        otherDetails: [],
        descripions: [
            {
                key: "AMPS (A)",
                value: "30–55"
            },
            {
                key: "INPUT VOLTAGE (VAC)",
                value: "400V ± 15%"
            },
            {
                key: "PLASMA GAS",
                value: "COMPRESSED AIR"
            },
            {
                key: "MODES",
                value: "CUTTING / GRID"
            },
            {
                key: "FREQUENCY (HZ)",
                value: "50/60"
            },
            {
                key: "MAXIMUM INPUT POWER (KVA)",
                value: "14.9"
            },
            {
                key: "OUTPUT VOLTAGE (VDC)",
                value: "170"
            },
            {
                key: "DUTY CYCLE @ 40 °C",
                value: "50% @ 55A, 100% @ 41A"
            },
            {
                key: "DIMENSION (L × H × W) MM",
                value: "469.9 × 228.6 × 177"
            },
            {
                key: "WEIGHT(KG)",
                value: "11.8"
            },
            {
                key: "RECOMMENDED CUTTING CAPACITY (MM)",
                value: "20"
            },
            {
                key: "SEVERANCE CUTTING CAPACITY (MM)",
                value: "30"
            },
            {
                key: "PIERCING CUTTING CAPACITY (MM)",
                value: "20"
            },
            {
                key: "FAIR FLOW @ (LPM/BAR)",
                value: "270 @ 5,5"
            },
            {
                key: "MAXIMUM INPUT PRESSURE (BAR/PSI)",
                value: "10/145"
            },
            {
                key: "PROTECTION LEVEL",
                value: "IP23S"
            },
            {
                key: "INSULATION CLASS",
                value: "H/F"
            },
            {
                key: "CNC INTERFACE",
                value: "YES"
            },
            {
                key: "TYPE OF HAND TORCH",
                value: "FHT-EX®105H"
            }
        ]
    }

    private abicorProduct2: Product = {
        id: 2,
        name: "DURAMAX REPLACEMENT MACHINE TORCH",
        description: "",
        image: "./../assets/abicor-binzel/machinetorch.png",
        otherDetails: [],
        descripions:[
            {
                key:"Model",
                value:"DMXM TORCH w/ LEADS 7,6M (25')"
            }
        ]
    }

    private abicorProduct3: Product = {
        id: 3,
        name: "DURAMAX REPLACEMENT HAND TORCH",
        description: "",
        image: "./../assets/abicor-binzel/handtorch.png",
        otherDetails: [],
        descripions:[
            {
                key:"Model",
                value:"DMXH TRCH W L7,6M(25’)"
            }
        ]
    }

    abicorData: Product[] = [
        this.abicorProduct1,
        this.abicorProduct2,
        this.abicorProduct3
    ]
}