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
        descripions: [
            {
                key: "Model",
                value: "DMXM TORCH w/ LEADS 7,6M (25')"
            }
        ]
    }

    private abicorProduct3: Product = {
        id: 3,
        name: "DURAMAX REPLACEMENT HAND TORCH",
        description: "",
        image: "./../assets/abicor-binzel/handtorch.png",
        otherDetails: [],
        descripions: [
            {
                key: "Model",
                value: "DMXH TRCH W L7,6M(25’)"
            }
        ]
    }

    private abicorProduct4: Product = {
        id: 4,
        name: "EX-TRAFIRE®100SD",
        description: "",
        image: "./../assets/abicor-binzel/extrafire100sd.png",
        otherDetails: [],
        descripions: [
            { key: "AMPS (A)", value: "30–100" },
            { key: "INPUT VOLTAGE (VAC)", value: "400±15%" },
            { key: "PLASMA GAS", value: "COMPRESSED AIR" },
            { key: "CERTIFICATION", value: "CE, C-TICK, CCC" },
            { key: "MODES", value: "CUTTING / GOUGING" },
            { key: "FREQUENCY (Hz)", value: "50/60" },
            { key: "MAXIMUM INPUT POWER (kVA)", value: "20.7" },
            { key: "OUTPUT VOLTAGE (VDC)", value: "170 (EXTRA-BOOST 220V)" },
            { key: "DUTY CYCLE @ 40 °C", value: "50% @ 100A, 100% @ 80A" },
            { key: "DIMENSION (L × H × w) MM", value: "560 × 400 × 265" },
            { key: "WEIGHT (kG)", value: "24" },
            { key: "RECOMMENDED CUTTING CAPACITY (MM)", value: "35" },
            { key: "SEVERANCE CUTTING CAPACITY (MM)", value: "50" },
            { key: "PIERCING CUTTING CAPACITY (MM)", value: "25" },
            { key: "AIR FLOW @ (LPM/BAR)", value: "270 @ 5.5" },
            { key: "MAXIMUM INPUT PRESSURE (BAR/PSI)", value: "10/145" },
            { key: "PROTECTION LEVEL", value: "IP23S" },
            { key: "INSULATION CLASS", value: "H/F" },
            { key: "CNC INTERFACE", value: "YES" },
            { key: "INDUSTRY 4.0", value: "NO" },
            { key: "TYPE OF HAND TORCH", value: "FHT-EX®105H" }
        ]
    }

    private abicorProduct5: Product = {
        id: 5,
        name: "EX-TRACK CNC",
        description: "",
        image: "./../assets/abicor-binzel/extrack.jpeg",
        otherDetails: [],
        descripions: [
            { key: "Input Voltage (VaC)", value: "230V OR 120V, 50/60Hz, 180W, 0.5A" },
            { key: "Cutting area", value: "3000×1500mm / 3050×1525mm (10×5FT)" },
            { key: "MAX. position speed", value: "UP TO 3000mm/mIN (118IPm)" },
            { key: "Vertical stroke", value: "100mm (4 INCH) WITH MOTORIZED LIFTER" },
            { key: "OXY-FUEL CUTTING RANGE", value: "UP TO 100mm (4 INCH)" },
            { key: "PLASMA CUTTING RANGE", value: "UP TO 35mm (1 3/8 INCH)" },
            { key: "PLASMA INTERFACE", value: "YES" },
            { key: "TORCH HEIGHT CONTROL", value: "ARC VOLTAGE HEIGHT CONTROL" },
            { key: "TORCH INCLUDED", value: "YES/OXY-FUEL" },
            { key: "NESTING SOFTWARE", value: "YES" },
            { key: "PACKAGING", value: "2 BOXES" },
            { key: "TOTAL WEIGHT", value: "99KG" }
        ]
    }

    abicorData: Product[] = [
        this.abicorProduct4,
        //this.abicorProduct1,
        this.abicorProduct2,
        this.abicorProduct3,
        this.abicorProduct5
    ]
}