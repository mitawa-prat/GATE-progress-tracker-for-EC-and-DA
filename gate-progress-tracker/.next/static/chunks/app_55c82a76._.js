(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/data/syllabus.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Comprehensive syllabus for all 30 GATE 2026 papers
__turbopack_context__.s([
    "allowedCombinations",
    ()=>allowedCombinations,
    "commonTopics",
    ()=>commonTopics,
    "syllabus",
    ()=>syllabus
]);
const syllabus = {
    AE: [
        "Flight Mechanics: Atmosphere, Airplane Performance",
        "Aerodynamics: Airfoils, Lift, Drag",
        "Structures: Stress-Strain, Flight Vehicle Structures",
        "Propulsion: Gas Turbines, Rocket Propulsion",
        "Space Dynamics: Orbital Mechanics",
        "Engineering Mathematics: Linear Algebra, Calculus, Differential Equations"
    ],
    AG: [
        "Farm Machinery: Design, Operation",
        "Soil and Water Conservation: Irrigation, Drainage",
        "Agricultural Processing: Drying, Milling",
        "Farm Power: Engines, Tractors",
        "Engineering Mathematics: Linear Algebra, Calculus"
    ],
    AR: [
        "Architecture: History, Design",
        "Planning: Urban, Regional",
        "Building Materials and Construction",
        "Environmental Planning: Sustainability",
        "Infrastructure: Transport, Water Supply"
    ],
    BM: [
        "Human Anatomy and Physiology",
        "Biomedical Instrumentation: Sensors, Amplifiers",
        "Biomechanics: Kinematics, Kinetics",
        "Medical Imaging: X-Ray, MRI",
        "Biomaterials",
        "Engineering Mathematics: Linear Algebra, Probability"
    ],
    BT: [
        "Biochemistry: Enzymes, Metabolism",
        "Microbiology: Microbial Genetics",
        "Molecular Biology: DNA, RNA",
        "Bioprocess Engineering: Fermentation",
        "Immunology",
        "Engineering Mathematics: Calculus, Numerical Methods"
    ],
    CE: [
        "Structural Engineering: Beams, Columns",
        "Geotechnical Engineering: Soil Mechanics",
        "Water Resources: Hydrology, Irrigation",
        "Transportation Engineering: Highways, Traffic",
        "Environmental Engineering: Water Treatment",
        "Engineering Mathematics: Linear Algebra, Calculus"
    ],
    CH: [
        "Chemical Reaction Engineering: Kinetics, Reactors",
        "Process Calculations: Material Balance",
        "Fluid Mechanics: Flow, Pumps",
        "Heat Transfer: Conduction, Convection",
        "Mass Transfer: Distillation, Absorption",
        "Engineering Mathematics: Differential Equations"
    ],
    CS: [
        "Algorithms: Sorting, Graph Algorithms",
        "Data Structures: Arrays, Trees",
        "Operating Systems: Processes, Memory Management",
        "Databases: SQL, Normalization",
        "Computer Networks: OSI, TCP/IP",
        "Engineering Mathematics: Discrete Math, Probability"
    ],
    CY: [
        "Physical Chemistry: Thermodynamics, Kinetics",
        "Inorganic Chemistry: Coordination Compounds",
        "Organic Chemistry: Reaction Mechanisms",
        "Analytical Chemistry: Spectroscopy",
        "Quantum Chemistry"
    ],
    DA: [
        "Probability and Statistics: Distributions, Hypothesis Testing",
        "Linear Algebra: Matrices, Eigenvalues",
        "Calculus: Optimization, Partial Derivatives",
        "Programming: Python, Data Structures",
        "Machine Learning: Regression, Classification",
        "Data Visualization: Plots, Charts"
    ],
    EC: [
        "Engineering Mathematics: Linear Algebra, Calculus, Probability",
        "Networks: KCL, KVL, Thevenin",
        "Signals and Systems: Fourier, Laplace, Z-Transform",
        "Electronic Devices: Semiconductors, Diodes",
        "Analog Circuits: Amplifiers, Oscillators",
        "Digital Circuits: Logic Gates, Microprocessors",
        "Control Systems: Stability, Bode Plots",
        "Communications: AM, FM, Digital Modulation",
        "Electromagnetics: Maxwell's Equations, Antennas"
    ],
    EE: [
        "Electric Circuits: KCL, KVL, AC Analysis",
        "Electromagnetic Fields: Maxwell's Equations",
        "Signals and Systems: Fourier, Laplace",
        "Electrical Machines: Transformers, Motors",
        "Power Systems: Load Flow, Fault Analysis",
        "Engineering Mathematics: Linear Algebra, Probability"
    ],
    ES: [
        "Environmental Chemistry: Pollutants",
        "Water and Wastewater Treatment",
        "Air Pollution: Control Technologies",
        "Solid Waste Management",
        "Environmental Laws",
        "Mathematics: Linear Algebra, Statistics"
    ],
    EY: [
        "Ecology: Ecosystems, Biodiversity",
        "Evolution: Natural Selection, Genetics",
        "Behavioral Ecology",
        "Conservation Biology",
        "Quantitative Ecology: Statistics"
    ],
    GE: [
        "Surveying: Levelling, Triangulation",
        "Remote Sensing: GIS, GPS",
        "Photogrammetry",
        "Geodesy",
        "Mathematics: Numerical Methods"
    ],
    GG: [
        "Geology: Mineralogy, Petrology",
        "Geophysics: Seismic, Gravity",
        "Structural Geology",
        "Hydrogeology",
        "Mathematics: Statistics"
    ],
    IN: [
        "Electrical Circuits: Network Analysis",
        "Analog Electronics: Amplifiers",
        "Digital Electronics: Microcontrollers",
        "Signals and Systems: Transforms",
        "Sensors and Transducers",
        "Engineering Mathematics: Linear Algebra, Calculus"
    ],
    MA: [
        "Linear Algebra: Vector Spaces, Eigenvalues",
        "Calculus: Multivariable, Series",
        "Differential Equations: ODE, PDE",
        "Complex Analysis",
        "Probability and Statistics",
        "Numerical Analysis"
    ],
    ME: [
        "Mechanics: Statics, Dynamics",
        "Thermodynamics: Laws, Cycles",
        "Fluid Mechanics: Flow, Bernoulli",
        "Heat Transfer: Conduction, Convection",
        "Manufacturing: Machining, Welding",
        "Engineering Mathematics: Linear Algebra, Calculus"
    ],
    MN: [
        "Mine Development: Drilling, Blasting",
        "Mine Ventilation",
        "Mine Safety",
        "Rock Mechanics",
        "Mineral Economics",
        "Mathematics: Numerical Methods"
    ],
    MT: [
        "Physical Metallurgy: Phase Diagrams",
        "Mechanical Metallurgy: Stress-Strain",
        "Extractive Metallurgy: Pyrometallurgy",
        "Materials Characterization",
        "Corrosion",
        "Mathematics: Differential Equations"
    ],
    NM: [
        "Ship Design: Stability, Hydrodynamics",
        "Marine Structures: Strength",
        "Marine Propulsion",
        "Ocean Engineering",
        "Mathematics: Calculus, Numerical Methods"
    ],
    PE: [
        "Petroleum Formation: Geology",
        "Drilling Technology",
        "Reservoir Engineering",
        "Production Operations",
        "Refining Processes",
        "Mathematics: Differential Equations"
    ],
    PH: [
        "Classical Mechanics: Lagrangian, Hamiltonian",
        "Quantum Mechanics: Wave Functions",
        "Electromagnetism: Maxwell's Equations",
        "Thermodynamics: Statistical Mechanics",
        "Solid State Physics",
        "Mathematical Physics"
    ],
    PI: [
        "Manufacturing Processes: Casting, Forming",
        "Industrial Engineering: Optimization",
        "Metrology: Measurement Systems",
        "Production Planning: Scheduling",
        "Quality Control",
        "Engineering Mathematics: Linear Algebra"
    ],
    ST: [
        "Probability: Distributions, Expectation",
        "Statistical Inference: Hypothesis Testing",
        "Regression Analysis",
        "Multivariate Analysis",
        "Stochastic Processes"
    ],
    TF: [
        "Textile Fibres: Natural, Synthetic",
        "Yarn Manufacture: Spinning",
        "Fabric Manufacture: Weaving, Knitting",
        "Textile Testing",
        "Chemical Processing",
        "Mathematics: Statistics"
    ],
    XE: [
        "Engineering Mathematics: Linear Algebra, Calculus",
        "Fluid Mechanics: Flow, Viscosity",
        "Materials Science: Properties, Composites",
        "Thermodynamics: Laws, Cycles",
        "Solid Mechanics: Stress, Strain",
        "Polymer Science: Synthesis",
        "Food Technology",
        "Energy Science: Renewable Energy"
    ],
    XH: [
        "Reasoning and Comprehension",
        "Economics: Micro, Macro",
        "English: Literature, Criticism",
        "Linguistics: Phonetics, Syntax",
        "Philosophy: Ethics, Logic",
        "Psychology: Cognitive, Social",
        "Sociology: Social Theory"
    ],
    XL: [
        "Chemistry: Organic, Inorganic",
        "Biochemistry: Enzymes, Metabolism",
        "Botany: Plant Physiology",
        "Microbiology: Microbial Genetics",
        "Zoology: Animal Physiology",
        "Food Technology"
    ],
    GA: [
        "Quantitative Aptitude: Ratios, Percentages",
        "Data Interpretation: Tables, Graphs",
        "Logical Reasoning: Puzzles, Syllogisms",
        "Verbal Ability: Reading Comprehension",
        "Vocabulary: Synonyms, Antonyms"
    ]
};
const allowedCombinations = {
    AE: [
        'CE',
        'ME',
        'XE'
    ],
    AG: [
        'CE'
    ],
    AR: [
        'CE',
        'GE'
    ],
    BM: [
        'BT',
        'IN'
    ],
    BT: [
        'BM',
        'XL'
    ],
    CE: [
        'AE',
        'AG',
        'AR',
        'ES',
        'GE',
        'NM',
        'XE'
    ],
    CH: [
        'ES',
        'PE',
        'XE'
    ],
    CS: [
        'DA',
        'EC',
        'GE',
        'MA',
        'PH',
        'ST'
    ],
    CY: [
        'XE',
        'XL'
    ],
    DA: [
        'CS',
        'EC',
        'EE',
        'MA',
        'ME',
        'PH',
        'ST',
        'XE'
    ],
    EC: [
        'CS',
        'DA',
        'EE',
        'IN',
        'PH'
    ],
    EE: [
        'DA',
        'EC',
        'IN',
        'PH'
    ],
    ES: [
        'CE',
        'CH',
        'GE'
    ],
    EY: [
        'XL'
    ],
    GE: [
        'AR',
        'CE',
        'CS',
        'ES',
        'GG'
    ],
    GG: [
        'GE'
    ],
    IN: [
        'BM',
        'EC',
        'EE',
        'ME'
    ],
    MA: [
        'CS',
        'DA',
        'PH',
        'ST'
    ],
    ME: [
        'AE',
        'DA',
        'IN',
        'NM',
        'PI',
        'XE'
    ],
    MN: [],
    MT: [
        'XE'
    ],
    NM: [
        'CE',
        'ME'
    ],
    PE: [
        'CH'
    ],
    PH: [
        'CS',
        'DA',
        'EC',
        'EE',
        'MA',
        'XE'
    ],
    PI: [
        'ME',
        'XE'
    ],
    ST: [
        'CS',
        'DA',
        'MA',
        'XH'
    ],
    TF: [],
    XE: [
        'AE',
        'CE',
        'CH',
        'CY',
        'DA',
        'ME',
        'MT',
        'PH',
        'PI'
    ],
    XH: [
        'ST'
    ],
    XL: [
        'BT',
        'CY',
        'EY'
    ]
};
const commonTopics = [
    "Linear Algebra: Matrices, Determinants, Eigenvalues",
    "Calculus: Limits, Continuity, Differentiation, Integration",
    "Probability and Statistics: Mean, Variance, Probability Distributions",
    "Numerical Methods: Solutions of Equations, Interpolation",
    "Vector Analysis: Gradient, Divergence, Curl",
    "Differential Equations: First Order, Higher Order"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/PaperSelectionModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PaperSelectionModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$syllabus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/data/syllabus.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function PaperSelectionModal(param) {
    let { isOpen, onSave } = param;
    _s();
    const [numPapers, setNumPapers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('1');
    const [paper1, setPaper1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [paper2, setPaper2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const papers = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$syllabus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syllabus"]).filter((p)=>p !== 'GA');
    const handleSave = ()=>{
        var _allowedCombinations_paper1;
        if (!paper1 || numPapers === '2' && !paper2) {
            alert('Please select all required papers.');
            return;
        }
        if (numPapers === '2' && !((_allowedCombinations_paper1 = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$syllabus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allowedCombinations"][paper1]) === null || _allowedCombinations_paper1 === void 0 ? void 0 : _allowedCombinations_paper1.includes(paper2))) {
            alert('Invalid paper combination. Please select an allowed secondary paper.');
            return;
        }
        const selectedPapers = numPapers === '1' ? [
            paper1,
            'GA'
        ] : [
            paper1,
            paper2,
            'GA'
        ];
        onSave(selectedPapers);
    };
    const getSecondaryPaperOptions = ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$syllabus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allowedCombinations"][paper1] || [];
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-gray-700 p-6 rounded-lg w-full max-w-md mx-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-semibold mb-4 dark:text-white",
                    children: "Select GATE 2026 Papers"
                }, void 0, false, {
                    fileName: "[project]/app/components/PaperSelectionModal.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                            children: "Number of Papers"
                        }, void 0, false, {
                            fileName: "[project]/app/components/PaperSelectionModal.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: numPapers,
                            onChange: (e)=>{
                                setNumPapers(e.target.value);
                                setPaper2('');
                            },
                            className: "w-full p-2 border rounded-md dark:bg-gray-600 dark:border-gray-500 dark:text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "1",
                                    children: "1 Paper"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/PaperSelectionModal.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "2",
                                    children: "2 Papers"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/PaperSelectionModal.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/PaperSelectionModal.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/PaperSelectionModal.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                            children: "Primary Paper"
                        }, void 0, false, {
                            fileName: "[project]/app/components/PaperSelectionModal.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: paper1,
                            onChange: (e)=>{
                                setPaper1(e.target.value);
                                setPaper2('');
                            },
                            className: "w-full p-2 border rounded-md dark:bg-gray-600 dark:border-gray-500 dark:text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "Select Primary Paper"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/PaperSelectionModal.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this),
                                papers.map((paper)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: paper,
                                        children: paper
                                    }, paper, false, {
                                        fileName: "[project]/app/components/PaperSelectionModal.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/PaperSelectionModal.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/PaperSelectionModal.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                numPapers === '2' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                            children: "Secondary Paper"
                        }, void 0, false, {
                            fileName: "[project]/app/components/PaperSelectionModal.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: paper2,
                            onChange: (e)=>setPaper2(e.target.value),
                            className: "w-full p-2 border rounded-md dark:bg-gray-600 dark:border-gray-500 dark:text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "Select Secondary Paper"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/PaperSelectionModal.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this),
                                getSecondaryPaperOptions().map((paper)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: paper,
                                        children: paper
                                    }, paper, false, {
                                        fileName: "[project]/app/components/PaperSelectionModal.tsx",
                                        lineNumber: 92,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/PaperSelectionModal.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/PaperSelectionModal.tsx",
                    lineNumber: 81,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleSave,
                    className: "w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors",
                    children: "Save Selection"
                }, void 0, false, {
                    fileName: "[project]/app/components/PaperSelectionModal.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/PaperSelectionModal.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/PaperSelectionModal.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(PaperSelectionModal, "Et8pBzBYu+psJ0QIo29Vf1HAHYI=");
_c = PaperSelectionModal;
var _c;
__turbopack_context__.k.register(_c, "PaperSelectionModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ProgressChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProgressChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
'use client';
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Title"]);
function ProgressChart(param) {
    let { subject, progress } = param;
    const data = {
        labels: [
            'Completed',
            'Remaining'
        ],
        datasets: [
            {
                data: [
                    progress,
                    100 - progress
                ],
                backgroundColor: [
                    '#36a2eb',
                    '#e5e7eb'
                ],
                borderWidth: 1,
                borderColor: '#fff'
            }
        ]
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 1000,
            easing: 'easeInOutQuad'
        },
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 10
                    },
                    color: '#374151'
                }
            },
            title: {
                display: true,
                text: "".concat(subject, " Progress"),
                font: {
                    size: 12
                },
                color: '#374151'
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "chart-container w-48 h-32 mx-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Doughnut"], {
            data: data,
            options: options
        }, void 0, false, {
            fileName: "[project]/app/components/ProgressChart.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/ProgressChart.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_c = ProgressChart;
var _c;
__turbopack_context__.k.register(_c, "ProgressChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ProgressSummary.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProgressSummary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProgressChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ProgressChart.tsx [app-client] (ecmascript)");
'use client';
;
;
function ProgressSummary(param) {
    let { selectedPapers, topicStatuses } = param;
    const calculateProgress = (subject)=>{
        if (!topicStatuses[subject]) return 0;
        const totalTopics = topicStatuses[subject].length;
        const completedTopics = topicStatuses[subject].filter((item)=>item.status === 'Completed').length;
        return totalTopics > 0 ? Math.round(completedTopics / totalTopics * 100) : 0;
    };
    const getSubjectColor = (subject, index)=>{
        if (subject === 'GA') return 'yellow';
        return index === 0 ? 'blue' : 'green';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold mb-4 dark:text-white",
                children: "Progress Summary"
            }, void 0, false, {
                fileName: "[project]/app/components/ProgressSummary.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4",
                children: selectedPapers.map((subject, index)=>{
                    const progress = calculateProgress(subject);
                    const colorClass = getSubjectColor(subject, index);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-".concat(colorClass, "-100 dark:bg-").concat(colorClass === 'yellow' ? 'yellow-900' : colorClass === 'blue' ? 'blue-900' : 'green-900', " p-4 rounded-md"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-medium text-".concat(colorClass, "-800 dark:text-").concat(colorClass, "-200"),
                                children: [
                                    subject,
                                    " Completion"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/ProgressSummary.tsx",
                                lineNumber: 40,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-".concat(colorClass, "-600 dark:text-").concat(colorClass, "-300"),
                                children: [
                                    progress,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/ProgressSummary.tsx",
                                lineNumber: 43,
                                columnNumber: 15
                            }, this)
                        ]
                    }, subject, true, {
                        fileName: "[project]/app/components/ProgressSummary.tsx",
                        lineNumber: 36,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/components/ProgressSummary.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
                children: selectedPapers.map((subject)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProgressChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        subject: subject,
                        progress: calculateProgress(subject)
                    }, subject, false, {
                        fileName: "[project]/app/components/ProgressSummary.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/ProgressSummary.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ProgressSummary.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = ProgressSummary;
var _c;
__turbopack_context__.k.register(_c, "ProgressSummary");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/TopicManagement.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TopicManagement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$syllabus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/data/syllabus.ts [app-client] (ecmascript)");
'use client';
;
;
function TopicManagement(param) {
    let { selectedPapers, topicStatuses, onUpdateTopicStatus, onUpdateTopicDifficulty, onUpdateTopicNotes } = param;
    const getSubjectColor = (subject, index)=>{
        if (subject === 'GA') return 'text-yellow-600 dark:text-yellow-400';
        return index === 0 ? 'text-blue-600 dark:text-blue-400' : 'text-green-600 dark:text-green-400';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold mb-4 dark:text-white",
                children: "Syllabus Topics"
            }, void 0, false, {
                fileName: "[project]/app/components/TopicManagement.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: selectedPapers.map((subject, index)=>{
                    var _topicStatuses_subject;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-medium mb-3 ".concat(getSubjectColor(subject, index)),
                                children: subject
                            }, void 0, false, {
                                fileName: "[project]/app/components/TopicManagement.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-h-96 overflow-y-auto border rounded-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "w-full border-collapse",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "bg-gray-200 dark:bg-gray-600 sticky top-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "border p-2 text-left dark:text-white dark:border-gray-500",
                                                            children: "Topic"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/TopicManagement.tsx",
                                                            lineNumber: 42,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "border p-2 text-left dark:text-white dark:border-gray-500",
                                                            children: "Tag"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/TopicManagement.tsx",
                                                            lineNumber: 43,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "border p-2 text-left dark:text-white dark:border-gray-500",
                                                            children: "Difficulty"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/TopicManagement.tsx",
                                                            lineNumber: 44,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "border p-2 text-left dark:text-white dark:border-gray-500",
                                                            children: "Status"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/TopicManagement.tsx",
                                                            lineNumber: 45,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "border p-2 text-left dark:text-white dark:border-gray-500",
                                                            children: "Notes"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/TopicManagement.tsx",
                                                            lineNumber: 46,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/TopicManagement.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/TopicManagement.tsx",
                                                lineNumber: 40,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: (_topicStatuses_subject = topicStatuses[subject]) === null || _topicStatuses_subject === void 0 ? void 0 : _topicStatuses_subject.map((item, itemIndex)=>{
                                                    const isCommon = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$syllabus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commonTopics"].includes(item.topic);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "hover:bg-gray-50 dark:hover:bg-gray-700",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "border p-2 dark:text-white dark:border-gray-500",
                                                                children: item.topic
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/TopicManagement.tsx",
                                                                lineNumber: 55,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "border p-2 dark:border-gray-500",
                                                                children: isCommon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs",
                                                                    children: "Common"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/TopicManagement.tsx",
                                                                    lineNumber: 60,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/TopicManagement.tsx",
                                                                lineNumber: 58,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "border p-2 dark:border-gray-500",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: item.difficulty,
                                                                    onChange: (e)=>onUpdateTopicDifficulty(subject, item.topic, e.target.value),
                                                                    className: "p-1 border rounded-md w-full dark:bg-gray-600 dark:border-gray-500 dark:text-white",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "Easy",
                                                                            children: "Easy"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/TopicManagement.tsx",
                                                                            lineNumber: 71,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "Moderate",
                                                                            children: "Moderate"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/TopicManagement.tsx",
                                                                            lineNumber: 72,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "Hard",
                                                                            children: "Hard"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/TopicManagement.tsx",
                                                                            lineNumber: 73,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/TopicManagement.tsx",
                                                                    lineNumber: 66,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/TopicManagement.tsx",
                                                                lineNumber: 65,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "border p-2 dark:border-gray-500",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: item.status,
                                                                    onChange: (e)=>onUpdateTopicStatus(subject, item.topic, e.target.value),
                                                                    className: "p-1 border rounded-md w-full dark:bg-gray-600 dark:border-gray-500 dark:text-white",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "Not Started",
                                                                            children: "Not Started"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/TopicManagement.tsx",
                                                                            lineNumber: 82,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "In Progress",
                                                                            children: "In Progress"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/TopicManagement.tsx",
                                                                            lineNumber: 83,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "Completed",
                                                                            children: "Completed"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/TopicManagement.tsx",
                                                                            lineNumber: 84,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/TopicManagement.tsx",
                                                                    lineNumber: 77,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/TopicManagement.tsx",
                                                                lineNumber: 76,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "border p-2 dark:border-gray-500",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                    value: item.notes,
                                                                    onChange: (e)=>onUpdateTopicNotes(subject, item.topic, e.target.value),
                                                                    className: "p-1 border rounded-md w-full resize-none dark:bg-gray-600 dark:border-gray-500 dark:text-white",
                                                                    rows: 2,
                                                                    placeholder: "Add notes (e.g., resources, doubts)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/TopicManagement.tsx",
                                                                    lineNumber: 88,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/TopicManagement.tsx",
                                                                lineNumber: 87,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, itemIndex, true, {
                                                        fileName: "[project]/app/components/TopicManagement.tsx",
                                                        lineNumber: 54,
                                                        columnNumber: 25
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/TopicManagement.tsx",
                                                lineNumber: 49,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/TopicManagement.tsx",
                                        lineNumber: 39,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/TopicManagement.tsx",
                                    lineNumber: 38,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/TopicManagement.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this)
                        ]
                    }, subject, true, {
                        fileName: "[project]/app/components/TopicManagement.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/components/TopicManagement.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TopicManagement.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c = TopicManagement;
var _c;
__turbopack_context__.k.register(_c, "TopicManagement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/TaskManagement.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TaskManagement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function TaskManagement(param) {
    let { selectedPapers, tasks, onAddTask, onDeleteTask } = param;
    _s();
    const [taskDate, setTaskDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "TaskManagement.useState": ()=>new Date().toISOString().split('T')[0]
    }["TaskManagement.useState"]);
    const [subject, setSubject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(selectedPapers[0] || '');
    const [topic, setTopic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Not Started');
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "TaskManagement.useEffect": ()=>{
            if (selectedPapers.length > 0 && !subject) {
                setSubject(selectedPapers[0]);
            }
        }
    }["TaskManagement.useEffect"], [
        selectedPapers,
        subject
    ]);
    const handleAddTask = ()=>{
        if (!taskDate || !topic || !subject) {
            alert('Please fill in Date, Subject, and Topic.');
            return;
        }
        const task = {
            date: taskDate,
            subject,
            topic,
            status,
            notes
        };
        onAddTask(task);
        // Reset form
        setTaskDate(new Date().toISOString().split('T')[0]);
        setSubject(selectedPapers[0] || '');
        setTopic('');
        setStatus('Not Started');
        setNotes('');
        alert('Task added successfully!');
    };
    const sortedTasks = [
        ...tasks
    ].sort((a, b)=>new Date(b.date).getTime() - new Date(a.date).getTime());
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold mb-4 dark:text-white",
                        children: "Add Daily Task/Notes"
                    }, void 0, false, {
                        fileName: "[project]/app/components/TaskManagement.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Date"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/TaskManagement.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        value: taskDate,
                                        onChange: (e)=>setTaskDate(e.target.value),
                                        className: "w-full p-2 border rounded-md dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/TaskManagement.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/TaskManagement.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Subject"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/TaskManagement.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: subject,
                                        onChange: (e)=>setSubject(e.target.value),
                                        className: "w-full p-2 border rounded-md dark:bg-gray-600 dark:border-gray-500 dark:text-white",
                                        children: selectedPapers.map((paper)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: paper,
                                                children: paper
                                            }, paper, false, {
                                                fileName: "[project]/app/components/TaskManagement.tsx",
                                                lineNumber: 82,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/TaskManagement.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/TaskManagement.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Topic"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/TaskManagement.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: topic,
                                        onChange: (e)=>setTopic(e.target.value),
                                        className: "w-full p-2 border rounded-md dark:bg-gray-600 dark:border-gray-500 dark:text-white",
                                        placeholder: "e.g., Linear Algebra, Python"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/TaskManagement.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/TaskManagement.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Completion Status"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/TaskManagement.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: status,
                                        onChange: (e)=>setStatus(e.target.value),
                                        className: "w-full p-2 border rounded-md dark:bg-gray-600 dark:border-gray-500 dark:text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Not Started",
                                                children: "Not Started"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/TaskManagement.tsx",
                                                lineNumber: 109,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "In Progress",
                                                children: "In Progress"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/TaskManagement.tsx",
                                                lineNumber: 110,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Completed",
                                                children: "Completed"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/TaskManagement.tsx",
                                                lineNumber: 111,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/TaskManagement.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/TaskManagement.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sm:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Notes"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/TaskManagement.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: notes,
                                        onChange: (e)=>setNotes(e.target.value),
                                        className: "w-full p-2 border rounded-md resize-none dark:bg-gray-600 dark:border-gray-500 dark:text-white",
                                        rows: 4,
                                        placeholder: "e.g., Struggled with FFT, need to revise"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/TaskManagement.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/TaskManagement.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sm:col-span-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleAddTask,
                                    className: "w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors",
                                    children: "Add Task"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/TaskManagement.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/TaskManagement.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/TaskManagement.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/TaskManagement.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold mb-4 dark:text-white",
                        children: "Task History"
                    }, void 0, false, {
                        fileName: "[project]/app/components/TaskManagement.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-h-96 overflow-y-auto border rounded-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full border-collapse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-gray-200 dark:bg-gray-600 sticky top-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border p-2 text-left dark:text-white dark:border-gray-500",
                                                children: "Date"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/TaskManagement.tsx",
                                                lineNumber: 146,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border p-2 text-left dark:text-white dark:border-gray-500",
                                                children: "Subject"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/TaskManagement.tsx",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border p-2 text-left dark:text-white dark:border-gray-500",
                                                children: "Topic"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/TaskManagement.tsx",
                                                lineNumber: 148,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border p-2 text-left dark:text-white dark:border-gray-500",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/TaskManagement.tsx",
                                                lineNumber: 149,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border p-2 text-left dark:text-white dark:border-gray-500",
                                                children: "Notes"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/TaskManagement.tsx",
                                                lineNumber: 150,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border p-2 text-left dark:text-white dark:border-gray-500",
                                                children: "Actions"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/TaskManagement.tsx",
                                                lineNumber: 151,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/TaskManagement.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/TaskManagement.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: [
                                        sortedTasks.map((task)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "hover:bg-gray-50 dark:hover:bg-gray-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border p-2 dark:text-white dark:border-gray-500",
                                                        children: task.date
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/TaskManagement.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border p-2 dark:text-white dark:border-gray-500",
                                                        children: task.subject
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/TaskManagement.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border p-2 dark:text-white dark:border-gray-500",
                                                        children: task.topic
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/TaskManagement.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border p-2 dark:text-white dark:border-gray-500",
                                                        children: task.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/TaskManagement.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border p-2 dark:text-white dark:border-gray-500",
                                                        children: task.notes
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/TaskManagement.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border p-2 dark:border-gray-500",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>onDeleteTask(task.id),
                                                            className: "text-red-600 dark:text-red-400 hover:underline",
                                                            children: "Delete"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/TaskManagement.tsx",
                                                            lineNumber: 163,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/TaskManagement.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, task.id, true, {
                                                fileName: "[project]/app/components/TaskManagement.tsx",
                                                lineNumber: 156,
                                                columnNumber: 17
                                            }, this)),
                                        sortedTasks.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                colSpan: 6,
                                                className: "border p-4 text-center text-gray-500 dark:text-gray-400 dark:border-gray-500",
                                                children: "No tasks added yet. Add your first task above!"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/TaskManagement.tsx",
                                                lineNumber: 174,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/TaskManagement.tsx",
                                            lineNumber: 173,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/TaskManagement.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/TaskManagement.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/TaskManagement.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/TaskManagement.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TaskManagement.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(TaskManagement, "1VJ7PJu240u2Qe0/qH4atMfJBMc=");
_c = TaskManagement;
var _c;
__turbopack_context__.k.register(_c, "TaskManagement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/hooks/useLocalStorage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLocalStorage",
    ()=>useLocalStorage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useLocalStorage(key, initialValue) {
    _s();
    const [storedValue, setStoredValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useLocalStorage.useState": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            try {
                const item = window.localStorage.getItem(key);
                return item ? JSON.parse(item) : initialValue;
            } catch (error) {
                console.error('Error reading localStorage key "'.concat(key, '":'), error);
                return initialValue;
            }
        }
    }["useLocalStorage.useState"]);
    const setValue = (value)=>{
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            if ("TURBOPACK compile-time truthy", 1) {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        } catch (error) {
            console.error('Error setting localStorage key "'.concat(key, '":'), error);
        }
    };
    return [
        storedValue,
        setValue
    ];
}
_s(useLocalStorage, "aT9ffETjOHXg1SYW0cpOsafGasE=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$PaperSelectionModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/PaperSelectionModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProgressSummary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ProgressSummary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TopicManagement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/TopicManagement.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TaskManagement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/TaskManagement.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useLocalStorage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$syllabus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/data/syllabus.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function Home() {
    _s();
    const [selectedPapers, setSelectedPapers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"])('selectedPapers', []);
    const [topicStatuses, setTopicStatuses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"])('gateTopicStatuses', {});
    const [tasks, setTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"])('gateTasks', []);
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"])('darkMode', false);
    const [showPaperModal, setShowPaperModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Initialize topic statuses when papers are selected
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (selectedPapers.length > 0) {
                const newTopicStatuses = {
                    ...topicStatuses
                };
                let hasChanges = false;
                selectedPapers.forEach({
                    "Home.useEffect": (paper)=>{
                        if (!newTopicStatuses[paper] && __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$syllabus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syllabus"][paper]) {
                            newTopicStatuses[paper] = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$syllabus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syllabus"][paper].map({
                                "Home.useEffect": (topic)=>({
                                        topic,
                                        status: 'Not Started',
                                        difficulty: 'Moderate',
                                        notes: ''
                                    })
                            }["Home.useEffect"]);
                            hasChanges = true;
                        }
                    }
                }["Home.useEffect"]);
                if (hasChanges) {
                    setTopicStatuses(newTopicStatuses);
                }
            }
        }
    }["Home.useEffect"], [
        selectedPapers,
        topicStatuses,
        setTopicStatuses
    ]);
    // Show paper selection modal if no papers are selected
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            setShowPaperModal(selectedPapers.length === 0);
        }
    }["Home.useEffect"], [
        selectedPapers
    ]);
    // Apply dark mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                document.documentElement.classList.toggle('dark', isDarkMode);
            }
        }
    }["Home.useEffect"], [
        isDarkMode
    ]);
    const handlePaperSelection = (papers)=>{
        setSelectedPapers(papers);
        setShowPaperModal(false);
    };
    const handleUpdateTopicStatus = (subject, topic, status)=>{
        setTopicStatuses((prev)=>({
                ...prev,
                [subject]: prev[subject].map((item)=>item.topic === topic ? {
                        ...item,
                        status
                    } : item)
            }));
    };
    const handleUpdateTopicDifficulty = (subject, topic, difficulty)=>{
        setTopicStatuses((prev)=>({
                ...prev,
                [subject]: prev[subject].map((item)=>item.topic === topic ? {
                        ...item,
                        difficulty
                    } : item)
            }));
    };
    const handleUpdateTopicNotes = (subject, topic, notes)=>{
        setTopicStatuses((prev)=>({
                ...prev,
                [subject]: prev[subject].map((item)=>item.topic === topic ? {
                        ...item,
                        notes
                    } : item)
            }));
    };
    const handleAddTask = (task)=>{
        const newTask = {
            ...task,
            id: Date.now()
        };
        setTasks((prev)=>[
                ...prev,
                newTask
            ]);
    };
    const handleDeleteTask = (id)=>{
        setTasks((prev)=>prev.filter((task)=>task.id !== id));
    };
    const handleReset = ()=>{
        if (confirm('Are you sure you want to reset all data?')) {
            if (confirm('This will reset all statuses, difficulties, notes, tasks, paper selection, and dark mode settings. Proceed?')) {
                setSelectedPapers([]);
                setTopicStatuses({});
                setTasks([]);
                setIsDarkMode(false);
                setShowPaperModal(true);
            }
        }
    };
    const getTitle = ()=>{
        if (selectedPapers.length === 0) return 'GATE 2026 Progress Tracker';
        const paperText = selectedPapers.filter((p)=>p !== 'GA').join(' & ');
        return "GATE 2026 Progress Tracker (".concat(paperText, ")");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col items-center p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$PaperSelectionModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showPaperModal,
                onSave: handlePaperSelection
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-5xl bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row justify-between items-center mb-6 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400",
                                children: getTitle()
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsDarkMode(!isDarkMode),
                                        className: "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors w-full sm:w-auto",
                                        children: isDarkMode ? 'Disable Night Mode' : 'Enable Night Mode'
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleReset,
                                        className: "bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors w-full sm:w-auto",
                                        children: "Reset All Data"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    selectedPapers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProgressSummary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                selectedPapers: selectedPapers,
                                topicStatuses: topicStatuses
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TopicManagement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                selectedPapers: selectedPapers,
                                topicStatuses: topicStatuses,
                                onUpdateTopicStatus: handleUpdateTopicStatus,
                                onUpdateTopicDifficulty: handleUpdateTopicDifficulty,
                                onUpdateTopicNotes: handleUpdateTopicNotes
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TaskManagement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                selectedPapers: selectedPapers,
                                tasks: tasks,
                                onAddTask: handleAddTask,
                                onDeleteTask: handleDeleteTask
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 160,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
_s(Home, "NCBSkGldZPww0eKJ7wlWKmzlZxc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_55c82a76._.js.map