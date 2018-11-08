import { Product } from './../models/product';

export class DataCNC {
    private cncProduct1: Product =
        {
            id: 1,
            name: "FastCut CNC Table Plasma Cutting Machine",
            description: "Since our commencement, we are immersed in presenting an elite array ofFastCut CNC Table Plasma Cutting Machine.",
            image: "./../assets/fastCut.png",
            otherDetails: [
                "SPARKON Fastcut series is an Economic plasma Table CNC cutting machine. She is the best choice for the thin sheet plate cut. Plasma cut carbon steel thickness 0.5-8mm. Used for cut material carbon steel, stainless steel, copper, aluminum (thickness depends on the plasma source)."
            ],
            descripions: [
                {
                    key: "THC",
                    value: "AUTO THC or AIR THC"
                },
                {
                    key: "Cut type",
                    value: "Plasma or gas"
                },
                {
                    key: "Display",
                    value: "7.0 inch"
                },
                {
                    key: "Nest soIware",
                    value: "FastCAM"
                },
                {
                    key: "Motor",
                    value: "Stepper"
                },
                {
                    key: "Power supply",
                    value: "220V"
                },
                {
                    key: "Transmission",
                    value: "Pinion and Rack"
                },
                {
                    key: "Cutting Area",
                    value: "1500X3000mm"
                },
                {
                    key: "Brand",
                    value: "Spark-On"
                },
                {
                    key: "Controller",
                    value: "STARFIRE SF-2100S"
                }
            ]
        }

    private cncProduct2: Product = {
        id: 2,
        name: "Quick Cut CNC Plasma Cutting Machine",
        description: "We are the leading organization in the market to offer the best quality range ofQuick Cut CNC Plasma Cutting Machine.",
        image: "./../assets/quickCut.png",
        otherDetails: [],
        descripions: [
            {
                key: "THC",
                value: "AUTO THC or AIR THC"
            },
            {
                key: "Cut type",
                value: "Plasma or gas"
            },
            {
                key: "Display",
                value: "7.0 inch"
            },
            {
                key: "Power supply",
                value: "220V"
            },
            {
                key: "Cutting Area",
                value: "1500X3000mm"
            },
            {
                key: "Nest Software",
                value: "FastCAM"
            },
            {
                key: "Brand",
                value: "Spark-On"
            }
        ]
    }

    private cncProduct3: Product = {
        id: 3,
        name: "Speed Cut",
        description: "CNC cutting description",
        image: "./../assets/speedCut.png",
        otherDetails: [
            "A good choice for the flame plasma cutting. It is specially designed for metal plate cutting process",
            "Machine size can be productive due to customer's requirement on X and Y direction.",
            "Strong gantry system ensures durability, stability, and quick speed. CNC controller gives screen of 7, English, Russia, Spanish and others.",
            "CNC controller gives easy operations interface, shape library and cutting parameters program",
            "Efficiency improvement and cutting quality functions including Mirror, rotation, scale, repeat, etc USB terminal is to supporting program and data inputting and outputting.",
            "Automatic torch height controller on flame and plasma torches. With auto ignition device on flame torch flash arrestor on the flame torch.",
            "For light industries requesting ordinary thickness by both plasma and flame.",
        ],
        descripions: [
            {
                key: "Input voltage",
                value: "110/220/230/240/380/400/415V"
            },
            {
                key: "Rail width",
                value: "2500/3000/3500/4000 mm"
            },
            {
                key: "Effective cutting width",
                value: "600mm less than rail distance"
            },
            {
                key: "CN torch",
                value: "1-2 Piece"
            },
            {
                key: "Flame cutting thickness",
                value: "6-150 mm"
            },
            {
                key: "Flame cutting speed",
                value: "50-750 mm/min"
            },
            {
                key: "Moving speed",
                value: "12000 mm/min"
            },
            {
                key: "Flame cutting gas",
                value: "Acetylene"
            },
            {
                key: "Plasma power source",
                value: "Suits hyperthem powermax 45 65 85 105 125"
            },
            {
                key: "Frequency",
                value: "50-60 Hz"
            },
            {
                key: "Brand",
                value: "Spark-On"
            },
            {
                key: "Model",
                value: "SPEEDCUT"
            }
        ]
    }

    private cncProduct4: Product = {
        id: 4,
        name: "Max Cut CNC Plasma Cutting Machine",
        description: "Backed by expert and experienced professionals, we provideMax Cut CNC Plasma Cutting Machine.",
        image: "./../assets/maxCut.png",
        otherDetails: [
            "CNC controller American, European and hung brand options",
            "Automatic THC hyper them and hung brand options",
            "Servo motor Panasonic",
            "Gearbox Germany brand NEUGART",
            "Linear rail TBI or HIWIN",
            "Relay Omron",
            "Breaker Schneider",
            "Nesting software options"
        ],
        descripions: [
            {
                key: "Cutting model",
                value: "Plasma"
            },
            {
                key: "Input voltage",
                value: "110/220/230/240/380/400/415V"
            },
            {
                key: "Rail width",
                value: "3000-6000 mm"
            },
            {
                key: "Effective cutting width",
                value: "800mm less than rail width (2 CNC torches)"
            },
            {
                key: "Rail length",
                value: "8000/12000/16000 mm"
            },
            {
                key: "Effective cutting length",
                value: "2000mm less than rail length"
            },
            {
                key: "CNC controller",
                value: "15/17 Inches colorful monitor "
            },
            {
                key: "CNC torches",
                value: "1-4 sets"
            },
            {
                key: "Positioning accuracy",
                value: "0.5/ 1000 mm"
            },
            {
                key: "Repeating accuracy",
                value: "0.2/1000 mm"
            },
            {
                key: "Positioning speed",
                value: "12"
            },
            {
                key: "Flame cutting gas",
                value: "Acetylene"
            },
            {
                key: "Flame cutting thickness",
                value: "5-150 mm"
            },
            {
                key: "Flame cutting speed",
                value: "50-750 mm/min"
            },
            {
                key: "Frequency",
                value: "50-60 Hz"
            },
            {
                key: "Brand",
                value: "Spark-On"
            },
            {
                key: "Model",
                value: "Max Cut"
            }
        ]
    }

    private cncProduct5: Product = {
        id: 5,
        name: "Newcut CNC Plasma Cutting Machine",
        description: "As an authentic name of this domain, we hold expertise in providing a high-quality array ofNewcut CNC Plasma Cutting Machine.",
        image: "./../assets/newCut.png",
        otherDetails: [],
        descripions: [
            {
                key: "Input voltage",
                value: "220 V (customized voltage is available)"
            },
            {
                key: "Frequency",
                value: "50-60 Hz"
            },
            {
                key: "Monitor",
                value: "LCD 5.7 Inch with keyboard"
            },
            {
                key: "Flame cutting speed",
                value: "6-750 mm/min"
            },
            {
                key: "Cutting mode",
                value: "Flame/plasma"
            },
            {
                key: "Brand",
                value: "Spark-On"
            }
        ]
    }

    private cncProduct6: Product = {
        id: 6,
        name: "Strip Cut CNC Plasma Cutting Machine",
        description: "By keeping track of current market development, we are into offering an excellent range ofStrip Cut CNC Plasma Cutting Machine.",
        image: "./../assets/stripCut.png",
        otherDetails: [
            "It is featured to cut strips",
            "Strong steel structure gantry to support durability",
            "Supplied with easy control box",
            "The moto is DC motor",
            "Torch quantity on Y can be optional",
            "1 torch is on X"
        ],
        descripions: [
            {
                key: "Gantry",
                value: "STRIPCUT"
            },
            {
                key: "Power voltage",
                value: "110/220/230 V"
            },
            {
                key: "Phase",
                value: "Single Phase"
            },
            {
                key: "Effective cutting width",
                value: "X mm"
            },
            {
                key: "Effective cutting length",
                value: "Y-2000mm"
            },
            {
                key: "Rail width",
                value: "X mm"
            },
            {
                key: "Rail length",
                value: "Y mm"
            },
            {
                key: "Maximum speed",
                value: "8000 mm/min"
            },
            {
                key: "Horizontal torch",
                value: "1 set"
            },
            {
                key: "Minimum strip width",
                value: "80"
            },
            {
                key: "Max cutting thickness by torch",
                value: "6-150mm"
            },
            {
                key: "Brand",
                value: "Spark-On"
            }
        ]
    }

    private cncProduct7: Product = {
        id: 7,
        name: "Fiber Laser Cutting Machine",
        description: "By keeping track of current market development, we are into offering an excellent range ofFiber Laser Cutting Machine.",
        image: "./../assets/fiberLaser2.png",
        otherDetails: [],
        descripions: [
            {
                key: "Voltage",
                value: "220 - 440 V"
            },
            {
                key: "Frequency",
                value: "50 - 60 Hz"
            },
            {
                key: "Overall size",
                value: "4500*2400*2100 mm"
            },
            {
                key: "Total weight",
                value: "4000 Kg"
            },
            {
                key: "Repeating accuracy",
                value: "0.03 mm"
            },
            {
                key: "Max transverse speed",
                value: "80 m/min"
            },
            {
                key: "Brand",
                value: "Spark-On"
            },
            {
                key: "Phase",
                value: "Single phase"
            }
        ]
    }

    cncData: Product[] = [
        this.cncProduct1,
        this.cncProduct2,
        this.cncProduct3,
        this.cncProduct4,
        this.cncProduct5,
        this.cncProduct6,
        this.cncProduct7
    ]
}