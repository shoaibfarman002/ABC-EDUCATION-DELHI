/* ════════════════════════════════════════════════════════
   ABC INSTITUTE — MOCK TEST ENGINE  |  js/mocktest.js
   ────────────────────────────────────────────────────────
   Exam structures:
   • JEE, CUET, DU/IPU, GK, Maths  → flat 25 questions
   • NEET                           → 180 Qs sectioned (Bio 90, Chem 45, Phy 45)
   • JMI Entrance                   → Class selector (6/9/11) → 100 Qs / 4 subjects
   • AMU Entrance                   → Class selector (6/9/11) → 100 Qs / 4 subjects
   • Diploma Entrance               → Institute selector (JMI/PUSHA/AMU) → 100 Qs
                                       Maths(40) · Physics(20) · Chemistry(20) · English(20)
════════════════════════════════════════════════════════ */
var QB = {
  /* ══════════════════════════════════════
   JEE MAINS  (25 flat)
══════════════════════════════════════ */
  jee: {
    title: "JEE Mains Mock Test",
    subject: "Physics · Chemistry · Mathematics",
    marks: "+4 / -1",
    time: 30,
    qs: [
      {
        q: "A body thrown vertically upward with velocity u. Maximum height reached is:",
        opts: ["u²/g", "u²/2g", "2u²/g", "u/g"],
        ans: 1,
        exp: "At max height v=0. Using v²=u²-2gh → h=u²/2g.",
      },
      {
        q: "Unit of electric field intensity:",
        opts: ["N/C", "C/N", "J/C", "C/J"],
        ans: 0,
        exp: "E=Force/Charge=N/C.",
      },
      {
        q: "Which is NOT a scalar quantity?",
        opts: ["Mass", "Speed", "Velocity", "Temperature"],
        ans: 2,
        exp: "Velocity has direction — vector. Others are scalars.",
      },
      {
        q: "Molecular formula of benzene:",
        opts: ["C6H12", "C6H6", "C6H14", "C4H6"],
        ans: 1,
        exp: "Benzene aromatic ring — C6H6.",
      },
      {
        q: "If sinθ=3/5, then cosθ=",
        opts: ["4/5", "3/4", "5/3", "5/4"],
        ans: 0,
        exp: "sin²+cos²=1 → cos=4/5.",
      },
      {
        q: "Newton's second law:",
        opts: [
          "F=ma",
          "Action=Reaction",
          "Body at rest stays",
          "Energy conserved",
        ],
        ans: 0,
        exp: "F=ma.",
      },
      {
        q: "Oxidation state of Mn in KMnO4:",
        opts: ["+2", "+4", "+6", "+7"],
        ans: 3,
        exp: "K=+1,O=-8 → Mn=+7.",
      },
      {
        q: "Derivative of sin x:",
        opts: ["cos x", "-cos x", "tan x", "-sin x"],
        ans: 0,
        exp: "d/dx(sin x)=cos x.",
      },
      {
        q: "Gas produced when Zn reacts with dilute H2SO4:",
        opts: ["O2", "SO2", "H2", "H2S"],
        ans: 2,
        exp: "Zn+H2SO4→ZnSO4+H2↑",
      },
      {
        q: "Sum of first 10 natural numbers:",
        opts: ["50", "55", "45", "60"],
        ans: 1,
        exp: "n(n+1)/2=55.",
      },
      {
        q: "Speed of light in vacuum:",
        opts: ["3×10⁸ m/s", "3×10⁶ m/s", "3×10¹⁰ m/s", "3×10⁴ m/s"],
        ans: 0,
        exp: "c=3×10⁸ m/s.",
      },
      {
        q: "Valency of Carbon:",
        opts: ["2", "3", "4", "6"],
        ans: 2,
        exp: "Carbon has 4 valence electrons.",
      },
      {
        q: "SI unit of force:",
        opts: ["Joule", "Watt", "Newton", "Pascal"],
        ans: 2,
        exp: "N=kg·m/s².",
      },
      {
        q: "log₁₀(1000)=",
        opts: ["2", "3", "4", "10"],
        ans: 1,
        exp: "log₁₀(10³)=3.",
      },
      {
        q: "Which gas makes up most of Earth's atmosphere?",
        opts: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
        ans: 2,
        exp: "Nitrogen ~78%.",
      },
      {
        q: "Area of circle with radius r:",
        opts: ["πr", "πr²", "2πr", "4πr²"],
        ans: 1,
        exp: "Area=πr².",
      },
      {
        q: "Atomic number of Carbon:",
        opts: ["6", "8", "12", "14"],
        ans: 0,
        exp: "Carbon has 6 protons.",
      },
      {
        q: "If f(x)=x², then f'(x)=",
        opts: ["x", "2x", "x²", "2x²"],
        ans: 1,
        exp: "d/dx(x²)=2x.",
      },
      {
        q: "pH of pure water at 25°C:",
        opts: ["7", "5", "9", "14"],
        ans: 0,
        exp: "Pure water pH=7.",
      },
      {
        q: "Which is an alkali metal?",
        opts: ["Calcium", "Iron", "Sodium", "Aluminium"],
        ans: 2,
        exp: "Sodium (Na) is Group 1.",
      },
      {
        q: "Gravitational acceleration on Earth:",
        opts: ["8.9 m/s²", "9.8 m/s²", "10.8 m/s²", "11 m/s²"],
        ans: 1,
        exp: "g≈9.8 m/s².",
      },
      {
        q: "Integral of cos x:",
        opts: ["sin x", "-sin x", "tan x", "-cos x"],
        ans: 0,
        exp: "∫cos x dx=sin x+C.",
      },
      {
        q: "Hybridization of carbon in CH4:",
        opts: ["sp", "sp²", "sp³", "sp³d"],
        ans: 2,
        exp: "CH4 sp³ — tetrahedral.",
      },
      {
        q: "LCM of 12 and 18:",
        opts: ["24", "36", "48", "6"],
        ans: 1,
        exp: "LCM(12,18)=36.",
      },
      {
        q: "Which law states PV=nRT?",
        opts: ["Boyle's", "Charles's", "Ideal Gas", "Dalton's"],
        ans: 2,
        exp: "PV=nRT is the Ideal Gas Law.",
      },
    ],
  },

  /* ══════════════════════════════════════
   NEET UG  (180 sectioned: Bio-90, Chem-45, Phy-45)
══════════════════════════════════════ */
  neet: {
    title: "NEET UG Mock Test",
    subject: "Biology(90) · Chemistry(45) · Physics(45)",
    marks: "+4 / -1",
    time: 200,
    sectioned: true,
    sections: [
      {
        name: "Biology",
        icon: "🌿",
        color: "#27ae60",
        qs: [
          {
            q: "Powerhouse of the cell:",
            opts: ["Nucleus", "Ribosome", "Mitochondria", "Golgi body"],
            ans: 2,
            exp: "Mitochondria produce ATP.",
          },
          {
            q: "Basic unit of DNA:",
            opts: ["Nucleoside", "Nucleotide", "Amino acid", "Fatty acid"],
            ans: 1,
            exp: "Nucleotide=phosphate+sugar+base.",
          },
          {
            q: "Vitamin synthesized in skin by sunlight:",
            opts: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
            ans: 3,
            exp: "Vitamin D made via UV rays.",
          },
          {
            q: "Photosynthesis occurs in:",
            opts: ["Mitochondria", "Chloroplast", "Ribosome", "Nucleus"],
            ans: 1,
            exp: "Chloroplasts have chlorophyll.",
          },
          {
            q: "pH of human blood:",
            opts: ["7.0", "6.8", "7.4", "8.0"],
            ans: 2,
            exp: "Blood pH=7.35–7.45.",
          },
          {
            q: "Universal Donor blood group:",
            opts: ["A", "B", "AB", "O"],
            ans: 3,
            exp: "O negative — no A/B antigens.",
          },
          {
            q: "Movement of water through semi-permeable membrane:",
            opts: ["Diffusion", "Osmosis", "Active transport", "Endocytosis"],
            ans: 1,
            exp: "Osmosis=water movement across semi-permeable membrane.",
          },
          {
            q: "Fight or Flight hormone:",
            opts: ["Insulin", "Thyroxine", "Adrenaline", "Estrogen"],
            ans: 2,
            exp: "Adrenaline triggers fight-or-flight.",
          },
          {
            q: "Chromosomes in normal human body cell:",
            opts: ["23", "46", "48", "44"],
            ans: 1,
            exp: "46 chromosomes (23 pairs).",
          },
          {
            q: "Insulin secreted by which pancreatic cells:",
            opts: ["Alpha", "Delta", "Beta", "Gamma"],
            ans: 2,
            exp: "Beta cells of Islets of Langerhans.",
          },
          {
            q: "Site of protein synthesis:",
            opts: ["Mitochondria", "Ribosome", "Nucleus", "Lysosome"],
            ans: 1,
            exp: "Ribosomes translate mRNA.",
          },
          {
            q: "Full form of DNA:",
            opts: [
              "Deoxyribonucleic acid",
              "Diribonucleic acid",
              "Deoxyribonicotinic acid",
              "Diribonucleotide acid",
            ],
            ans: 0,
            exp: "DNA=Deoxyribonucleic Acid.",
          },
          {
            q: "Which blood cells carry oxygen?",
            opts: ["WBC", "Platelets", "RBC", "Plasma"],
            ans: 2,
            exp: "RBC contain haemoglobin.",
          },
          {
            q: "Vitamin deficiency causing scurvy:",
            opts: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
            ans: 2,
            exp: "Vitamin C deficiency.",
          },
          {
            q: "Plant cell wall is made of:",
            opts: ["Chitin", "Cellulose", "Lignin", "Starch"],
            ans: 1,
            exp: "Cellulose is main structural component.",
          },
          {
            q: "Number of pairs of ribs in human body:",
            opts: ["10", "11", "12", "14"],
            ans: 2,
            exp: "12 pairs = 24 ribs.",
          },
          {
            q: "Largest organ of the human body:",
            opts: ["Liver", "Brain", "Skin", "Kidney"],
            ans: 2,
            exp: "Skin ~2 m².",
          },
          {
            q: "Breakdown of glucose to release energy:",
            opts: ["Photosynthesis", "Respiration", "Transpiration", "Osmosis"],
            ans: 1,
            exp: "Cellular respiration → ATP.",
          },
          {
            q: "Which is NOT a function of the liver?",
            opts: [
              "Bile production",
              "Glycogen storage",
              "Insulin production",
              "Detoxification",
            ],
            ans: 2,
            exp: "Insulin produced by pancreas.",
          },
          {
            q: "Nephron is the functional unit of:",
            opts: ["Heart", "Liver", "Kidney", "Lungs"],
            ans: 2,
            exp: "Nephron filters blood.",
          },
          {
            q: "Gas released by plants during photosynthesis:",
            opts: ["CO2", "N2", "O2", "H2"],
            ans: 2,
            exp: "Plants release O2.",
          },
          {
            q: "Haemoglobin contains which metal?",
            opts: ["Zinc", "Copper", "Iron", "Magnesium"],
            ans: 2,
            exp: "Iron (Fe) binds oxygen.",
          },
          {
            q: "Brain part controlling balance:",
            opts: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
            ans: 1,
            exp: "Cerebellum coordinates balance.",
          },
          {
            q: "Enzyme breaking starch in saliva:",
            opts: ["Pepsin", "Lipase", "Amylase", "Trypsin"],
            ans: 2,
            exp: "Salivary amylase.",
          },
          {
            q: "Normal human body temperature:",
            opts: ["35°C", "37°C", "39°C", "40°C"],
            ans: 1,
            exp: "≈37°C (98.6°F).",
          },
          {
            q: "Water conduction upward in plants:",
            opts: ["Phloem", "Xylem", "Cortex", "Epidermis"],
            ans: 1,
            exp: "Xylem transports water.",
          },
          {
            q: "Darwin's theory based on:",
            opts: [
              "Inheritance of acquired chars",
              "Natural selection",
              "Mutation theory",
              "Germplasm theory",
            ],
            ans: 1,
            exp: "Natural selection (1859).",
          },
          {
            q: "Hormone regulating blood sugar:",
            opts: ["Thyroxine", "Insulin", "Adrenaline", "Testosterone"],
            ans: 1,
            exp: "Insulin lowers blood glucose.",
          },
          {
            q: "Site of fertilisation in human females:",
            opts: ["Uterus", "Ovary", "Fallopian tube", "Cervix"],
            ans: 2,
            exp: "Fertilisation in fallopian tube.",
          },
          {
            q: "Vestigial organ in humans:",
            opts: ["Pancreas", "Appendix", "Thyroid", "Spleen"],
            ans: 1,
            exp: "Appendix is vestigial.",
          },
          {
            q: "Respiration in plants through:",
            opts: ["Stomata", "Roots only", "Leaves only", "Stem only"],
            ans: 0,
            exp: "Stomata allow gas exchange.",
          },
          {
            q: "Study of heredity called:",
            opts: ["Ecology", "Genetics", "Taxonomy", "Morphology"],
            ans: 1,
            exp: "Genetics = heredity & variation.",
          },
          {
            q: "AIDS caused by:",
            opts: ["Bacteria", "Fungus", "Virus", "Protozoa"],
            ans: 2,
            exp: "HIV virus causes AIDS.",
          },
          {
            q: "Green pigment in plants:",
            opts: ["Xanthophyll", "Carotene", "Chlorophyll", "Anthocyanin"],
            ans: 2,
            exp: "Chlorophyll appears green.",
          },
          {
            q: "Maintaining internal balance called:",
            opts: ["Metabolism", "Homeostasis", "Respiration", "Excretion"],
            ans: 1,
            exp: "Homeostasis keeps internal conditions stable.",
          },
          {
            q: "Universal recipient blood group:",
            opts: ["A", "B", "O", "AB"],
            ans: 3,
            exp: "AB+ can receive from all.",
          },
          {
            q: "Functional unit of kidney:",
            opts: ["Axon", "Neuron", "Nephron", "Alveolus"],
            ans: 2,
            exp: "Nephron filters blood.",
          },
          {
            q: "Vitamin helping blood clotting:",
            opts: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
            ans: 3,
            exp: "Vitamin K for clotting factors.",
          },
          {
            q: "Meiosis results in:",
            opts: ["2 diploid", "4 diploid", "2 haploid", "4 haploid cells"],
            ans: 3,
            exp: "4 haploid cells.",
          },
          {
            q: "Root pressure responsible for:",
            opts: [
              "Transpiration",
              "Photosynthesis",
              "Guttation",
              "Respiration",
            ],
            ans: 2,
            exp: "Guttation = water drops at leaf margins.",
          },
          {
            q: "Organelle with digestive enzymes:",
            opts: ["Ribosome", "Golgi body", "Lysosome", "Vacuole"],
            ans: 2,
            exp: 'Lysosomes = "suicide bags".',
          },
          {
            q: "Basic unit of nervous system:",
            opts: ["Nephron", "Neuron", "Sarcomere", "Axon"],
            ans: 1,
            exp: "Neuron = structural/functional unit.",
          },
          {
            q: "Brain part for thinking:",
            opts: ["Cerebellum", "Medulla", "Cerebrum", "Hypothalamus"],
            ans: 2,
            exp: "Cerebrum controls intellect.",
          },
          {
            q: "Photosynthesis: 6CO2+6H2O →",
            opts: ["C6H12O6+6CO2", "C6H12O6+6O2", "6CO2+H2O", "C6H6+O2"],
            ans: 1,
            exp: "Produces glucose + O2.",
          },
          {
            q: "Vector for malaria:",
            opts: [
              "Housefly",
              "Anopheles mosquito",
              "Aedes mosquito",
              "Sandfly",
            ],
            ans: 1,
            exp: "Female Anopheles transmits Plasmodium.",
          },
          {
            q: "Example of asexual reproduction:",
            opts: [
              "Budding in Hydra",
              "Pollination",
              "Fertilisation",
              "Meiosis",
            ],
            ans: 0,
            exp: "Hydra buds asexually.",
          },
          {
            q: "Functional unit of lung:",
            opts: ["Nephron", "Neuron", "Alveolus", "Bronchiole"],
            ans: 2,
            exp: "Alveoli = gas exchange.",
          },
          {
            q: "Protein synthesis at:",
            opts: ["Nucleus", "Mitochondria", "Ribosome", "Lysosome"],
            ans: 2,
            exp: "Ribosomes = translation site.",
          },
          {
            q: "Which is NOT a plant hormone?",
            opts: ["Auxin", "Gibberellin", "Insulin", "Cytokinin"],
            ans: 2,
            exp: "Insulin is an animal hormone.",
          },
          {
            q: "Chambers in human heart:",
            opts: ["2", "3", "4", "5"],
            ans: 2,
            exp: "4 chambers: 2 atria+2 ventricles.",
          },
          {
            q: "Longest bone in human body:",
            opts: ["Humerus", "Tibia", "Femur", "Fibula"],
            ans: 2,
            exp: "Femur = longest & strongest.",
          },
          {
            q: "Role of stomata:",
            opts: [
              "Absorb water",
              "Gas exchange & transpiration",
              "Photosynthesis only",
              "Nutrient absorption",
            ],
            ans: 1,
            exp: "Stomata regulate gas exchange & water loss.",
          },
          {
            q: "Iodine deficiency causes:",
            opts: ["Rickets", "Scurvy", "Goitre", "Anaemia"],
            ans: 2,
            exp: "Needed for thyroxine; deficiency → goitre.",
          },
          {
            q: "Future plant in seed found in:",
            opts: ["Seed coat", "Endosperm", "Embryo", "Cotyledon"],
            ans: 2,
            exp: "Embryo has plumule & radicle.",
          },
          {
            q: "Tendons connect:",
            opts: [
              "Bone to bone",
              "Muscle to bone",
              "Muscle to muscle",
              "Bone to skin",
            ],
            ans: 1,
            exp: "Tendons connect muscle to bone.",
          },
          {
            q: "Largest gland in human body:",
            opts: ["Pancreas", "Kidney", "Liver", "Thyroid"],
            ans: 2,
            exp: "Liver — 500+ functions.",
          },
          {
            q: "RNA differs from DNA in having:",
            opts: [
              "Thymine instead of Uracil",
              "Uracil instead of Thymine",
              "Deoxyribose sugar",
              "Double helix",
            ],
            ans: 1,
            exp: "RNA has Uracil, DNA has Thymine.",
          },
          {
            q: "Fight-or-flight hormone:",
            opts: ["Insulin", "Estrogen", "Adrenaline", "Thyroxine"],
            ans: 2,
            exp: "Adrenaline = epinephrine.",
          },
          {
            q: '"Control room" of the cell:',
            opts: ["Ribosome", "Mitochondria", "Nucleus", "Golgi body"],
            ans: 2,
            exp: "Nucleus controls cell activities.",
          },
          {
            q: "Transpiration is:",
            opts: [
              "Water absorption by roots",
              "Gas exchange",
              "Loss of water vapour from leaves",
              "Food transport",
            ],
            ans: 2,
            exp: "Water evaporation from plant surfaces.",
          },
          {
            q: "Water-soluble vitamin:",
            opts: ["Vitamin A", "Vitamin D", "Vitamin E", "Vitamin C"],
            ans: 3,
            exp: "Vitamin C & B are water-soluble.",
          },
          {
            q: "Platelets help in:",
            opts: [
              "Oxygen transport",
              "Immune response",
              "Blood clotting",
              "Hormone production",
            ],
            ans: 2,
            exp: "Platelets aggregate at wounds.",
          },
          {
            q: "Glucose stored in animals as:",
            opts: ["Starch", "Sucrose", "Glycogen", "Cellulose"],
            ans: 2,
            exp: "Glycogen in liver & muscles.",
          },
          {
            q: '"Master gland":',
            opts: ["Thyroid", "Adrenal", "Pancreas", "Pituitary"],
            ans: 3,
            exp: "Pituitary regulates other endocrine glands.",
          },
          {
            q: "Mushrooms & yeasts belong to:",
            opts: ["Monera", "Protista", "Fungi", "Plantae"],
            ans: 2,
            exp: "Kingdom Fungi.",
          },
          {
            q: "Glucose → ethanol by yeast:",
            opts: [
              "Aerobic respiration",
              "Fermentation",
              "Photosynthesis",
              "Digestion",
            ],
            ans: 1,
            exp: "Yeast fermentation — anaerobic.",
          },
          {
            q: "Vitamin B12 deficiency causes:",
            opts: [
              "Scurvy",
              "Night blindness",
              "Pernicious anaemia",
              "Rickets",
            ],
            ans: 2,
            exp: "Pernicious anaemia.",
          },
          {
            q: "Outer protective layer of cell:",
            opts: ["Cell wall", "Cell membrane", "Nucleus", "Cytoplasm"],
            ans: 1,
            exp: "Cell membrane controls entry/exit.",
          },
          {
            q: "Muscle type in the heart:",
            opts: ["Voluntary", "Involuntary skeletal", "Cardiac", "Smooth"],
            ans: 2,
            exp: "Cardiac muscle — involuntary & striated.",
          },
          {
            q: "Peristalsis occurs in:",
            opts: ["Lungs", "Kidney", "Alimentary canal", "Brain"],
            ans: 2,
            exp: "Smooth muscle moves food in gut.",
          },
          {
            q: "Green colour due to:",
            opts: ["Xanthophyll", "Carotene", "Anthocyanin", "Chlorophyll"],
            ans: 3,
            exp: "Chlorophyll reflects green.",
          },
          {
            q: "Cranial nerves in humans:",
            opts: ["10 pairs", "12 pairs", "31 pairs", "8 pairs"],
            ans: 1,
            exp: "12 pairs of cranial nerves.",
          },
          {
            q: "Smallest cell in human body:",
            opts: ["Red blood cell", "Sperm cell", "Platelet", "Ovum"],
            ans: 1,
            exp: "Sperm = smallest; ovum = largest.",
          },
          {
            q: "Cilia & flagella made of:",
            opts: ["Actin", "Myosin", "Tubulin", "Keratin"],
            ans: 2,
            exp: "Microtubules of tubulin.",
          },
          {
            q: "Reproduction NOT involving gametes:",
            opts: [
              "Sexual reproduction",
              "Fertilisation",
              "Vegetative reproduction",
              "Pollination",
            ],
            ans: 2,
            exp: "Vegetative/asexual = no gametes.",
          },
          {
            q: "Water from roots to leaves via:",
            opts: ["Phloem", "Cambium", "Xylem", "Cortex"],
            ans: 2,
            exp: "Xylem — transpiration pull.",
          },
          {
            q: "Body temperature regulated by:",
            opts: ["Cerebrum", "Cerebellum", "Hypothalamus", "Medulla"],
            ans: 2,
            exp: "Hypothalamus = body's thermostat.",
          },
          {
            q: "Example of endocrine gland:",
            opts: ["Salivary gland", "Sweat gland", "Thyroid gland", "Liver"],
            ans: 2,
            exp: "Thyroid secretes thyroxine into blood.",
          },
          {
            q: "Food from leaves to other parts:",
            opts: ["Transpiration", "Translocation", "Osmosis", "Diffusion"],
            ans: 1,
            exp: "Translocation through phloem.",
          },
          {
            q: "Nutrient NOT a source of energy:",
            opts: ["Carbohydrate", "Fat", "Protein", "Water"],
            ans: 3,
            exp: "Water provides no calories.",
          },
          {
            q: "Cells producing antibodies:",
            opts: ["RBC", "Platelets", "B-lymphocytes", "Neutrophils"],
            ans: 2,
            exp: "B-cells secrete antibodies.",
          },
          {
            q: "Nitrogen fixation converts:",
            opts: [
              "N2 to ammonia",
              "O2 to ozone",
              "CO2 to glucose",
              "H2O to H2",
            ],
            ans: 0,
            exp: "Rhizobium converts N2 to NH3.",
          },
          {
            q: "Sickle cell anaemia — mutation in:",
            opts: ["WBC", "Platelet", "Haemoglobin gene", "Insulin gene"],
            ans: 2,
            exp: "Single point mutation in Hb gene.",
          },
          {
            q: "Enzyme for DNA replication:",
            opts: ["RNA polymerase", "Lipase", "DNA polymerase", "Amylase"],
            ans: 2,
            exp: "DNA polymerase synthesises new strands.",
          },
          {
            q: "Ecosystem = community +:",
            opts: ["Population", "Biome", "Abiotic environment", "Niche"],
            ans: 2,
            exp: "Biotic+abiotic = ecosystem.",
          },
          {
            q: "Bond holding DNA strands:",
            opts: ["Covalent", "Ionic", "Hydrogen", "Peptide"],
            ans: 2,
            exp: "Hydrogen bonds between A-T, G-C.",
          },
          {
            q: "Gut bacteria relationship:",
            opts: [
              "Pathogenic",
              "Parasitic",
              "Symbiotic/commensal",
              "Saprophytic",
            ],
            ans: 2,
            exp: "Symbiotic/commensal with host.",
          },
          {
            q: "NOT a part of the human ear:",
            opts: ["Cochlea", "Malleus", "Incus", "Iris"],
            ans: 3,
            exp: "Iris is part of the eye.",
          },
          {
            q: "Cartilage is a type of:",
            opts: [
              "Muscle tissue",
              "Nervous tissue",
              "Connective tissue",
              "Epithelial tissue",
            ],
            ans: 2,
            exp: "Flexible connective tissue.",
          },
          {
            q: "Which of the following is NOT a mode of nutrition?",
            opts: [
              "Autotrophic",
              "Heterotrophic",
              "Saprotrophic",
              "Homeotrophic",
            ],
            ans: 3,
            exp: "Homeotrophic is not a mode of nutrition. Autotrophic, heterotrophic, and saprotrophic are valid modes.",
          },
        ],
      },
      {
        name: "Chemistry",
        icon: "⚗️",
        color: "#8e44ad",
        qs: [
          {
            q: "Oxidation state of Mn in KMnO4:",
            opts: ["+2", "+4", "+6", "+7"],
            ans: 3,
            exp: "K=+1,O=-8 → Mn=+7.",
          },
          {
            q: "Molecular formula of benzene:",
            opts: ["C6H12", "C6H6", "C6H14", "C4H6"],
            ans: 1,
            exp: "Benzene = C6H6.",
          },
          {
            q: "Gas produced: Zn + dilute H2SO4:",
            opts: ["O2", "SO2", "H2", "H2S"],
            ans: 2,
            exp: "Zn+H2SO4→ZnSO4+H2↑",
          },
          {
            q: "pH of pure water at 25°C:",
            opts: ["7", "5", "9", "14"],
            ans: 0,
            exp: "pH=7 neutral.",
          },
          {
            q: "Alkali metal:",
            opts: ["Calcium", "Iron", "Sodium", "Aluminium"],
            ans: 2,
            exp: "Sodium = Group 1.",
          },
          {
            q: "Hybridization of C in CH4:",
            opts: ["sp", "sp²", "sp³", "sp³d"],
            ans: 2,
            exp: "sp³ tetrahedral.",
          },
          {
            q: "PV=nRT is:",
            opts: ["Boyle's", "Charles's", "Ideal Gas Law", "Dalton's"],
            ans: 2,
            exp: "Ideal Gas Law.",
          },
          {
            q: "Atomic number of Carbon:",
            opts: ["6", "8", "12", "14"],
            ans: 0,
            exp: "6 protons.",
          },
          {
            q: "Valency of Carbon:",
            opts: ["2", "3", "4", "6"],
            ans: 2,
            exp: "4 valence electrons.",
          },
          {
            q: "Chemical formula of water:",
            opts: ["HO", "H2O", "H2O2", "OH"],
            ans: 1,
            exp: "H2O.",
          },
          {
            q: "Metal liquid at room temperature:",
            opts: ["Iron", "Gold", "Mercury", "Silver"],
            ans: 2,
            exp: "Mercury (Hg).",
          },
          {
            q: "Chemical symbol of Gold:",
            opts: ["Go", "Gd", "Au", "Ag"],
            ans: 2,
            exp: "Au from Latin Aurum.",
          },
          {
            q: "Gas in fire extinguishers:",
            opts: ["Oxygen", "Nitrogen", "CO2", "Hydrogen"],
            ans: 2,
            exp: "CO2 cuts off oxygen.",
          },
          {
            q: "Rusting of iron is:",
            opts: ["Physical change", "Chemical change", "Both", "Neither"],
            ans: 1,
            exp: "Irreversible chemical change.",
          },
          {
            q: "Noble gas:",
            opts: ["Chlorine", "Oxygen", "Argon", "Nitrogen"],
            ans: 2,
            exp: "Argon — Group 18.",
          },
          {
            q: "Acid in vinegar:",
            opts: [
              "Hydrochloric acid",
              "Acetic acid",
              "Citric acid",
              "Lactic acid",
            ],
            ans: 1,
            exp: "Acetic acid (CH3COOH).",
          },
          {
            q: "Litmus turns red in:",
            opts: ["Base", "Neutral", "Acid", "Salt"],
            ans: 2,
            exp: "Red in acid, blue in base.",
          },
          {
            q: "Iron ore to iron in blast furnace:",
            opts: ["Oxidation", "Reduction", "Electrolysis", "Distillation"],
            ans: 1,
            exp: "Fe2O3 reduced by coke.",
          },
          {
            q: "Baking soda is:",
            opts: ["NaCl", "Na2CO3", "NaHCO3", "NaOH"],
            ans: 2,
            exp: "Sodium bicarbonate NaHCO3.",
          },
          {
            q: "Acid + metal carbonate →",
            opts: ["O2", "H2", "CO2", "N2"],
            ans: 2,
            exp: "Produces CO2 gas.",
          },
          {
            q: "AB → A+B is:",
            opts: [
              "Combination",
              "Decomposition",
              "Displacement",
              "Double displacement",
            ],
            ans: 1,
            exp: "Decomposition reaction.",
          },
          {
            q: "Boiling point of water at 1 atm:",
            opts: ["90°C", "95°C", "100°C", "110°C"],
            ans: 2,
            exp: "100°C.",
          },
          {
            q: "Atomic mass of Oxygen:",
            opts: ["14", "16", "18", "12"],
            ans: 1,
            exp: "16 u.",
          },
          {
            q: "Carbon allotrope as lubricant:",
            opts: ["Diamond", "Graphite", "Fullerene", "Coal"],
            ans: 1,
            exp: "Graphite layers slide — lubricant.",
          },
          {
            q: "Formula of common salt:",
            opts: ["NaOH", "KCl", "NaCl", "Na2CO3"],
            ans: 2,
            exp: "NaCl = sodium chloride.",
          },
          {
            q: "pH of strong acid:",
            opts: ["7", "8–14", "0–3", "5–6"],
            ans: 2,
            exp: "Strong acid pH ~0–3.",
          },
          {
            q: "Mixture example:",
            opts: ["Water", "Salt", "Air", "Glucose"],
            ans: 2,
            exp: "Air = mixture of gases.",
          },
          {
            q: "Noble gas outermost shell electrons (except He):",
            opts: ["2", "6", "8", "10"],
            ans: 2,
            exp: "8 electrons = stable octet.",
          },
          {
            q: "Acid in lemon juice:",
            opts: ["Acetic", "Lactic", "Citric", "Formic"],
            ans: 2,
            exp: "Citric acid (C6H8O7).",
          },
          {
            q: "Electrolysis of water gives:",
            opts: [
              "H2 only",
              "O2 only",
              "H2 at cathode & O2 at anode",
              "CO2 & H2",
            ],
            ans: 2,
            exp: "H2 at cathode, O2 at anode.",
          },
          {
            q: "Physical change example:",
            opts: [
              "Burning wood",
              "Rusting iron",
              "Melting ice",
              "Cooking food",
            ],
            ans: 2,
            exp: "Melting ice = reversible state change.",
          },
          {
            q: "Milk of Magnesia is:",
            opts: ["Acidic", "Neutral", "Basic", "Amphoteric"],
            ans: 2,
            exp: "Mg(OH)2 = mild base.",
          },
          {
            q: "Galvanization = coating iron with:",
            opts: ["Tin", "Copper", "Zinc", "Chromium"],
            ans: 2,
            exp: "Zinc prevents rusting.",
          },
          {
            q: "Sharing of electrons forms:",
            opts: [
              "Ionic bond",
              "Covalent bond",
              "Metallic bond",
              "Hydrogen bond",
            ],
            ans: 1,
            exp: "Covalent bond = electron sharing.",
          },
          {
            q: "Separating crude oil fractions:",
            opts: [
              "Distillation",
              "Filtration",
              "Chromatography",
              "Evaporation",
            ],
            ans: 0,
            exp: "Fractional distillation.",
          },
          {
            q: "Symbol Fe stands for:",
            opts: ["Fluorine", "Francium", "Iron", "Fermium"],
            ans: 2,
            exp: "Fe = Ferrum = Iron.",
          },
          {
            q: "Plaster of Paris:",
            opts: ["CaSO4·H2O", "CaSO4·2H2O", "CaSO4·½H2O", "CaCO3"],
            ans: 2,
            exp: "Calcium sulphate hemihydrate.",
          },
          {
            q: "Reaction releasing energy:",
            opts: [
              "Endothermic",
              "Exothermic",
              "Decomposition",
              "Displacement",
            ],
            ans: 1,
            exp: "Exothermic releases heat.",
          },
          {
            q: "Bleaching powder contains:",
            opts: ["CaCl2", "Ca(OCl)Cl", "NaOCl", "Na2CO3"],
            ans: 1,
            exp: "Calcium hypochlorite chloride.",
          },
          {
            q: "Most reactive metal:",
            opts: ["Gold", "Silver", "Potassium", "Copper"],
            ans: 2,
            exp: "Potassium — top of reactivity series.",
          },
          {
            q: "Nylon is a:",
            opts: [
              "Natural polymer",
              "Synthetic polymer",
              "Monomer",
              "Copolymer",
            ],
            ans: 1,
            exp: "Synthetic polyamide.",
          },
          {
            q: "Charge of electron:",
            opts: ["+1", "-1", "0", "+2"],
            ans: 1,
            exp: "-1.6×10⁻¹⁹ C.",
          },
          {
            q: "Primary greenhouse gas:",
            opts: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
            ans: 2,
            exp: "CO2 causes global warming.",
          },
          {
            q: "Hard water contains:",
            opts: ["NaCl", "Ca²⁺ & Mg²⁺ ions", "KCl", "Fe ions"],
            ans: 1,
            exp: "Dissolved Ca & Mg salts.",
          },
          {
            q: "Chemical name of Vitamin C:",
            opts: ["Retinol", "Ascorbic acid", "Riboflavin", "Calciferol"],
            ans: 1,
            exp: "Ascorbic acid C6H8O6.",
          },
        ],
      },
      {
        name: "Physics",
        icon: "⚛️",
        color: "#2980b9",
        qs: [
          {
            q: "Body thrown up with velocity u. Max height:",
            opts: ["u²/g", "u²/2g", "2u²/g", "u/g"],
            ans: 1,
            exp: "v²=u²-2gh → h=u²/2g.",
          },
          {
            q: "Unit of electric field:",
            opts: ["N/C", "C/N", "J/C", "C/J"],
            ans: 0,
            exp: "E=Force/Charge=N/C.",
          },
          {
            q: "NOT a scalar:",
            opts: ["Mass", "Speed", "Velocity", "Temperature"],
            ans: 2,
            exp: "Velocity is a vector.",
          },
          {
            q: "Newton's second law:",
            opts: [
              "F=ma",
              "Action=Reaction",
              "Body at rest stays",
              "Energy conserved",
            ],
            ans: 0,
            exp: "F=ma.",
          },
          {
            q: "Speed of light:",
            opts: ["3×10⁸ m/s", "3×10⁶ m/s", "3×10¹⁰ m/s", "3×10⁴ m/s"],
            ans: 0,
            exp: "c=3×10⁸ m/s.",
          },
          {
            q: "SI unit of force:",
            opts: ["Joule", "Watt", "Newton", "Pascal"],
            ans: 2,
            exp: "N=kg·m/s².",
          },
          {
            q: "Gravitational acceleration on Earth:",
            opts: ["8.9 m/s²", "9.8 m/s²", "10.8 m/s²", "11 m/s²"],
            ans: 1,
            exp: "g≈9.8 m/s².",
          },
          {
            q: "Unit of electrical resistance:",
            opts: ["Volt", "Ampere", "Ohm", "Watt"],
            ans: 2,
            exp: "Resistance in Ohms (Ω).",
          },
          {
            q: "Image formed by plane mirror:",
            opts: [
              "Real & inverted",
              "Virtual & erect",
              "Real & erect",
              "Virtual & inverted",
            ],
            ans: 1,
            exp: "Virtual, erect, laterally inverted.",
          },
          {
            q: "SI unit of work and energy:",
            opts: ["Watt", "Newton", "Joule", "Pascal"],
            ans: 2,
            exp: "Joule = N·m.",
          },
          {
            q: "Ohm's law:",
            opts: ["Newton's", "Faraday's", "Ohm's", "Coulomb's"],
            ans: 2,
            exp: "V=IR.",
          },
          {
            q: "Bending of light around obstacles:",
            opts: ["Reflection", "Refraction", "Diffraction", "Dispersion"],
            ans: 2,
            exp: "Diffraction.",
          },
          {
            q: "Nuclear fission used in:",
            opts: [
              "Solar cells",
              "Nuclear reactors",
              "Windmills",
              "Hydroelectric",
            ],
            ans: 1,
            exp: "Nuclear reactors use fission.",
          },
          {
            q: "Device: mechanical → electrical energy:",
            opts: ["Motor", "Transformer", "Generator", "Battery"],
            ans: 2,
            exp: "Generator/dynamo.",
          },
          {
            q: "Unit of power:",
            opts: ["Joule", "Newton", "Watt", "Pascal"],
            ans: 2,
            exp: "Watt = J/s.",
          },
          {
            q: "Lens correcting myopia:",
            opts: ["Convex", "Concave", "Bifocal", "Plano-convex"],
            ans: 1,
            exp: "Concave lens corrects short-sightedness.",
          },
          {
            q: "Force between two masses:",
            opts: ["Coulomb's", "Ohm's", "Newton's gravitation", "Faraday's"],
            ans: 2,
            exp: "F=Gm1m2/r².",
          },
          {
            q: "Blue colour of sky due to:",
            opts: ["Reflection", "Refraction", "Scattering", "Diffraction"],
            ans: 2,
            exp: "Rayleigh scattering.",
          },
          {
            q: "Circular motion acceleration direction:",
            opts: ["Outward", "Along path", "Toward center", "Upward"],
            ans: 2,
            exp: "Centripetal acceleration toward center.",
          },
          {
            q: "Wave not requiring medium:",
            opts: ["Sound", "Water", "Seismic", "Electromagnetic"],
            ans: 3,
            exp: "EM waves travel through vacuum.",
          },
          {
            q: "SI unit of pressure:",
            opts: ["Newton", "Pascal", "Joule", "Watt"],
            ans: 1,
            exp: "Pa=N/m².",
          },
          {
            q: "Rear-view mirror in vehicles:",
            opts: ["Plane", "Concave", "Convex", "Parabolic"],
            ans: 2,
            exp: "Convex = wider field of view.",
          },
          {
            q: "Transformer principle:",
            opts: [
              "Electromagnetic induction",
              "Static electricity",
              "Nuclear fission",
              "Photoelectric effect",
            ],
            ans: 0,
            exp: "Faraday's law of induction.",
          },
          {
            q: "Speed of sound in air at 0°C:",
            opts: ["330 m/s", "300 m/s", "3×10⁸ m/s", "150 m/s"],
            ans: 0,
            exp: "≈330–340 m/s.",
          },
          {
            q: "Semiconductor:",
            opts: ["Copper", "Iron", "Silicon", "Aluminium"],
            ans: 2,
            exp: "Silicon — conductivity between conductor & insulator.",
          },
          {
            q: "Archimedes' principle:",
            opts: ["Gravity", "Buoyancy", "Magnetism", "Electricity"],
            ans: 1,
            exp: "Buoyant force = weight of fluid displaced.",
          },
          {
            q: "White light splitting by prism:",
            opts: ["Reflection", "Diffraction", "Dispersion", "Scattering"],
            ans: 2,
            exp: "Dispersion → VIBGYOR.",
          },
          {
            q: "Charge carried by protons:",
            opts: ["Negative", "Neutral", "Positive", "Both"],
            ans: 2,
            exp: "+1.6×10⁻¹⁹ C.",
          },
          {
            q: "Kinetic energy depends on:",
            opts: [
              "Mass only",
              "Velocity only",
              "Both mass & velocity",
              "Height",
            ],
            ans: 2,
            exp: "KE=½mv².",
          },
          {
            q: "Study of heat & work:",
            opts: ["Mechanics", "Optics", "Thermodynamics", "Electrostatics"],
            ans: 2,
            exp: "Thermodynamics.",
          },
          {
            q: "NOT a renewable energy:",
            opts: ["Solar", "Wind", "Coal", "Hydroelectric"],
            ans: 2,
            exp: "Coal is non-renewable.",
          },
          {
            q: "Fuse wire melts due to:",
            opts: [
              "Low resistance",
              "High voltage",
              "Excess current (heating)",
              "Magnetic effect",
            ],
            ans: 2,
            exp: "Excess current → heat → melts.",
          },
          {
            q: "Unit of electric charge:",
            opts: ["Ampere", "Volt", "Coulomb", "Ohm"],
            ans: 2,
            exp: "Coulomb (C).",
          },
          {
            q: "Total internal reflection from:",
            opts: [
              "Rarer to denser",
              "Denser to rarer beyond critical angle",
              "Air to glass",
              "Water to glass",
            ],
            ans: 1,
            exp: "TIR: denser to rarer > critical angle.",
          },
          {
            q: "Instrument measuring current:",
            opts: ["Voltmeter", "Galvanometer", "Ammeter", "Ohmmeter"],
            ans: 2,
            exp: "Ammeter in series.",
          },
          {
            q: "Unit kWh measures:",
            opts: ["Power", "Force", "Energy", "Current"],
            ans: 2,
            exp: "kWh = electrical energy unit.",
          },
          {
            q: "Nucleus radius ≈",
            opts: ["10⁻¹⁰ m", "10⁻¹⁵ m", "10⁻²⁰ m", "10⁻⁵ m"],
            ans: 1,
            exp: "Nucleus ≈10⁻¹⁵ m.",
          },
          {
            q: "Moment of inertia is rotational analogue of:",
            opts: ["Force", "Velocity", "Mass", "Acceleration"],
            ans: 2,
            exp: "Mass resists linear; MI resists rotational.",
          },
          {
            q: "Sound wave type:",
            opts: ["Transverse", "Longitudinal", "Electromagnetic", "Surface"],
            ans: 1,
            exp: "Longitudinal — particles vibrate parallel.",
          },
          {
            q: "First law of thermodynamics:",
            opts: [
              "Conservation of momentum",
              "Conservation of energy",
              "Conservation of mass",
              "Newton's 2nd law",
            ],
            ans: 1,
            exp: "Energy cannot be created/destroyed.",
          },
          {
            q: "Particle nature of light proven by:",
            opts: [
              "Diffraction",
              "Interference",
              "Photoelectric effect",
              "Polarisation",
            ],
            ans: 2,
            exp: "Photoelectric effect (Einstein 1905).",
          },
          {
            q: "Magnetic field inside solenoid:",
            opts: ["Circular", "Converging", "Parallel & uniform", "Diverging"],
            ans: 2,
            exp: "Uniform parallel field inside solenoid.",
          },
          {
            q: "Escape velocity from Earth:",
            opts: ["7.9 km/s", "11.2 km/s", "5.0 km/s", "15 km/s"],
            ans: 1,
            exp: "√(2gR)≈11.2 km/s.",
          },
          {
            q: "Aeroplanes fly due to:",
            opts: ["Archimedes'", "Bernoulli's", "Pascal's", "Hooke's"],
            ans: 1,
            exp: "Bernoulli's: faster airflow → lower pressure → lift.",
          },
          {
            q: "Half-life of radioactive substance:",
            opts: [
              "All atoms decay",
              "Half atoms decay",
              "One atom decay",
              "Activity doubles",
            ],
            ans: 1,
            exp: "Time for half the nuclei to decay.",
          },
        ],
      },
    ],
  },

  /* ══════════════════════════════════════
   CUET UG  (25 flat)
══════════════════════════════════════ */
  cuet: {
    title: "CUET UG Mock Test",
    subject: "Domain Subject · General Test",
    marks: "+5 / -1",
    time: 30,
    qs: [
      {
        q: "Article abolishing untouchability:",
        opts: ["Article 14", "Article 17", "Article 19", "Article 21"],
        ans: 1,
        exp: "Article 17.",
      },
      {
        q: "First Battle of Panipat (1526):",
        opts: [
          "Akbar-Hemu",
          "Babur-Ibrahim Lodi",
          "Humayun-Sher Shah",
          "Babur-Rana Sanga",
        ],
        ans: 1,
        exp: "Babur defeated Ibrahim Lodi.",
      },
      {
        q: "Smallest planet:",
        opts: ["Mars", "Venus", "Mercury", "Saturn"],
        ans: 2,
        exp: "Mercury.",
      },
      {
        q: "Odd one out: 3,5,7,9,11",
        opts: ["3", "5", "9", "11"],
        ans: 2,
        exp: "9=3×3 not prime.",
      },
      {
        q: 'Who wrote "Vande Mataram"?',
        opts: ["R.N. Tagore", "Bankim Chandra", "Subramanya Bharati", "Iqbal"],
        ans: 1,
        exp: "Bankim Chandra Chatterjee.",
      },
      {
        q: "UN headquarters:",
        opts: ["Geneva", "London", "New York", "Paris"],
        ans: 2,
        exp: "New York City.",
      },
      {
        q: "If A>B and B>C, then A is ___ C:",
        opts: ["Less than", "Equal to", "Greater than", "Cannot determine"],
        ans: 2,
        exp: "Transitive: A>B>C.",
      },
      {
        q: "Process by which plants make food:",
        opts: [
          "Respiration",
          "Transpiration",
          "Photosynthesis",
          "Fermentation",
        ],
        ans: 2,
        exp: "Photosynthesis.",
      },
      {
        q: "Largest state by area in India:",
        opts: ["Maharashtra", "M.P.", "Uttar Pradesh", "Rajasthan"],
        ans: 3,
        exp: "Rajasthan 342,239 km².",
      },
      {
        q: 'Synonym of "Eloquent":',
        opts: ["Silent", "Articulate", "Confused", "Lazy"],
        ans: 1,
        exp: "Articulate = fluent & persuasive.",
      },
      {
        q: "Capital of Australia:",
        opts: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        ans: 2,
        exp: "Canberra.",
      },
      {
        q: "Instrument measuring atmospheric pressure:",
        opts: ["Thermometer", "Barometer", "Hygrometer", "Anemometer"],
        ans: 1,
        exp: "Barometer.",
      },
      {
        q: "2+2×4-1=",
        opts: ["15", "9", "7", "11"],
        ans: 1,
        exp: "BODMAS: 2+8-1=9.",
      },
      {
        q: "First woman PM of India:",
        opts: [
          "Sarojini Naidu",
          "Indira Gandhi",
          "Sucheta K.",
          "Vijaya Lakshmi",
        ],
        ans: 1,
        exp: "Indira Gandhi (1966).",
      },
      {
        q: '"The Discovery of India" by:',
        opts: [
          "Mahatma Gandhi",
          "R.N. Tagore",
          "Jawaharlal Nehru",
          "Dr. Ambedkar",
        ],
        ans: 2,
        exp: "Nehru wrote it in 1944.",
      },
      {
        q: "Cube root of 729:",
        opts: ["7", "8", "9", "11"],
        ans: 2,
        exp: "9³=729.",
      },
      {
        q: "Red Planet:",
        opts: ["Venus", "Jupiter", "Saturn", "Mars"],
        ans: 3,
        exp: "Mars — iron oxide surface.",
      },
      {
        q: "Father of Indian Constitution:",
        opts: ["Gandhi", "Nehru", "B.R. Ambedkar", "Sardar Patel"],
        ans: 2,
        exp: "Dr. B.R. Ambedkar.",
      },
      {
        q: 'Antonym of "Transparent":',
        opts: ["Clear", "Opaque", "Bright", "Shiny"],
        ans: 1,
        exp: "Opaque.",
      },
      {
        q: "Speed 60 km/h, distance in 2.5 h:",
        opts: ["120 km", "130 km", "150 km", "140 km"],
        ans: 2,
        exp: "60×2.5=150 km.",
      },
      {
        q: "Chemical formula of water:",
        opts: ["HO", "H2O", "H2O2", "OH"],
        ans: 1,
        exp: "H2O.",
      },
      {
        q: "Who invented telephone?",
        opts: ["Edison", "Bell", "Marconi", "Tesla"],
        ans: 1,
        exp: "Alexander Graham Bell (1876).",
      },
      {
        q: "India independence:",
        opts: ["15 Aug 1946", "15 Aug 1947", "26 Jan 1950", "26 Jan 1947"],
        ans: 1,
        exp: "15 August 1947.",
      },
      {
        q: "Highest peak:",
        opts: ["K2", "Mt Everest", "Kangchenjunga", "Lhotse"],
        ans: 1,
        exp: "Everest 8,848.86 m.",
      },
      {
        q: "Gas in fire extinguishers:",
        opts: ["Oxygen", "Nitrogen", "CO2", "Hydrogen"],
        ans: 2,
        exp: "CO2 cuts off oxygen.",
      },
    ],
  },
  /* ══════════════════════════════════════
   JMI ENTRANCE — CLASS-WISE (6 / 9 / 11)
   Each: Maths(30)+Science(25)+SocSci(25)+English(20)=100 Qs
══════════════════════════════════════ */
  jmi_6: {
    title: "JMI Entrance — Class 6",
    subject: "Maths(30)·Science(25)·Social Science(25)·English(20)",
    marks: "+1 / 0",
    time: 120,
    sectioned: true,
    sections: [
      {
        name: "Mathematics",
        icon: "📐",
        color: "#e67e22",
        qs: [
          {
            q: "What is 456 + 789?",
            opts: ["1245", "1145", "1345", "1225"],
            ans: 0,
            exp: "456+789=1245.",
          },
          {
            q: "LCM of 4 and 6:",
            opts: ["24", "12", "6", "18"],
            ans: 1,
            exp: "LCM(4,6)=12.",
          },
          {
            q: "15 × 8 =",
            opts: ["110", "120", "130", "105"],
            ans: 1,
            exp: "15×8=120.",
          },
          {
            q: "Smallest prime number:",
            opts: ["1", "2", "3", "0"],
            ans: 1,
            exp: "2 is smallest prime.",
          },
          {
            q: "3/4 + 1/4 =",
            opts: ["1", "4/8", "2/4", "3/8"],
            ans: 0,
            exp: "4/4=1.",
          },
          {
            q: "Rectangle l=10cm, b=5cm. Area:",
            opts: ["15 cm²", "30 cm²", "50 cm²", "25 cm²"],
            ans: 2,
            exp: "10×5=50 cm².",
          },
          {
            q: "0.5 × 0.2 =",
            opts: ["1.0", "0.10", "0.01", "0.7"],
            ans: 1,
            exp: "0.5×0.2=0.10.",
          },
          {
            q: "Fraction equivalent to 2/4:",
            opts: ["1/3", "1/2", "3/4", "2/3"],
            ans: 1,
            exp: "2/4=1/2.",
          },
          {
            q: "Sides in a pentagon:",
            opts: ["4", "5", "6", "8"],
            ans: 1,
            exp: "Pentagon has 5 sides.",
          },
          {
            q: "1000 ÷ 25 =",
            opts: ["40", "50", "20", "45"],
            ans: 0,
            exp: "1000÷25=40.",
          },
          {
            q: "HCF of 12 and 18:",
            opts: ["3", "6", "9", "12"],
            ans: 1,
            exp: "HCF=6.",
          },
          {
            q: "4567 rounded to nearest hundred:",
            opts: ["4500", "4600", "4000", "5000"],
            ans: 1,
            exp: "4600.",
          },
          {
            q: "25% of 80:",
            opts: ["15", "20", "25", "30"],
            ans: 1,
            exp: "25/100×80=20.",
          },
          {
            q: "If a=5, find 3a+2:",
            opts: ["12", "15", "17", "20"],
            ans: 2,
            exp: "3×5+2=17.",
          },
          {
            q: "Perimeter of equilateral triangle side 9cm:",
            opts: ["18 cm", "27 cm", "36 cm", "9 cm"],
            ans: 1,
            exp: "3×9=27 cm.",
          },
          {
            q: "Place value of 7 in 3,765:",
            opts: ["7", "70", "700", "7000"],
            ans: 2,
            exp: "Hundreds place = 700.",
          },
          {
            q: "Greater: 5/8 or 3/4?",
            opts: ["5/8", "3/4", "Equal", "Cannot say"],
            ans: 1,
            exp: "3/4=6/8>5/8.",
          },
          {
            q: "Simplify: 48÷6−3",
            opts: ["5", "6", "7", "4"],
            ans: 0,
            exp: "8−3=5.",
          },
          {
            q: "Minutes in 2.5 hours:",
            opts: ["120", "130", "150", "160"],
            ans: 2,
            exp: "2.5×60=150.",
          },
          { q: "2³ =", opts: ["5", "6", "8", "9"], ans: 2, exp: "2×2×2=8." },
          {
            q: "Sum of angles in a quadrilateral:",
            opts: ["180°", "270°", "360°", "90°"],
            ans: 2,
            exp: "360°.",
          },
          {
            q: "Divisible by both 3 and 5:",
            opts: ["10", "15", "20", "25"],
            ans: 1,
            exp: "15÷3=5, 15÷5=3.",
          },
          {
            q: "Average of 10,20,30:",
            opts: ["15", "20", "25", "30"],
            ans: 1,
            exp: "60/3=20.",
          },
          {
            q: "7/10 as decimal:",
            opts: ["0.07", "7.0", "0.7", "70.0"],
            ans: 2,
            exp: "0.7.",
          },
          {
            q: "5 dozen items:",
            opts: ["50", "55", "60", "65"],
            ans: 2,
            exp: "5×12=60.",
          },
          {
            q: "Square perimeter 36cm. Side:",
            opts: ["6 cm", "8 cm", "9 cm", "12 cm"],
            ans: 2,
            exp: "36÷4=9.",
          },
          {
            q: "Next: 3,6,12,24,__",
            opts: ["36", "40", "48", "50"],
            ans: 2,
            exp: "×2: 48.",
          },
          {
            q: "NOT a factor of 24:",
            opts: ["6", "8", "7", "12"],
            ans: 2,
            exp: "24÷7 not whole.",
          },
          {
            q: "Cost of 15 pens @ Rs.6 each:",
            opts: ["Rs.75", "Rs.80", "Rs.90", "Rs.85"],
            ans: 2,
            exp: "15×6=90.",
          },
          {
            q: "Roman numeral for 50:",
            opts: ["L", "C", "D", "V"],
            ans: 0,
            exp: "L=50.",
          },
        ],
      },
      {
        name: "Science",
        icon: "🔬",
        color: "#27ae60",
        qs: [
          {
            q: "Gas absorbed in photosynthesis:",
            opts: ["Oxygen", "Nitrogen", "CO2", "Hydrogen"],
            ans: 2,
            exp: "Plants absorb CO2.",
          },
          {
            q: "Organ that pumps blood:",
            opts: ["Lungs", "Liver", "Kidney", "Heart"],
            ans: 3,
            exp: "Heart pumps blood.",
          },
          {
            q: "Boiling point of water:",
            opts: ["50°C", "75°C", "100°C", "150°C"],
            ans: 2,
            exp: "100°C.",
          },
          {
            q: "Planet closest to Sun:",
            opts: ["Earth", "Venus", "Mercury", "Mars"],
            ans: 2,
            exp: "Mercury.",
          },
          {
            q: "Solid, liquid, gas are:",
            opts: ["Elements", "Compounds", "States of matter", "Mixtures"],
            ans: 2,
            exp: "Three states of matter.",
          },
          {
            q: "Animals eating only plants:",
            opts: ["Carnivores", "Omnivores", "Herbivores", "Decomposers"],
            ans: 2,
            exp: "Herbivores.",
          },
          {
            q: "Unit of temperature:",
            opts: ["Kg", "Metre", "Degree Celsius", "Newton"],
            ans: 2,
            exp: "°C or K.",
          },
          {
            q: "Good conductor of electricity:",
            opts: ["Rubber", "Wood", "Copper", "Plastic"],
            ans: 2,
            exp: "Copper.",
          },
          {
            q: "Water changes to vapour by:",
            opts: ["Condensation", "Evaporation", "Melting", "Freezing"],
            ans: 1,
            exp: "Evaporation.",
          },
          {
            q: "Earth revolves around Sun in:",
            opts: ["24 hours", "30 days", "365 days", "12 hours"],
            ans: 2,
            exp: "~365.25 days.",
          },
          {
            q: "Bones+muscles form:",
            opts: [
              "Digestive system",
              "Musculoskeletal system",
              "Nervous system",
              "Circulatory system",
            ],
            ans: 1,
            exp: "Musculoskeletal system.",
          },
          {
            q: "Natural magnet:",
            opts: ["Steel bar", "Lodestone", "Iron nail", "Copper rod"],
            ans: 1,
            exp: "Lodestone = magnetite.",
          },
          {
            q: "Sound produced by:",
            opts: ["Light waves", "Vibration", "Heat", "Electricity"],
            ans: 1,
            exp: "Vibrating objects.",
          },
          {
            q: "Outermost layer of Earth:",
            opts: ["Core", "Mantle", "Crust", "Lithosphere"],
            ans: 2,
            exp: "Crust.",
          },
          {
            q: "Lungs are part of:",
            opts: ["Digestive", "Circulatory", "Respiratory", "Nervous"],
            ans: 2,
            exp: "Respiratory system.",
          },
          {
            q: "Force pulling objects to Earth:",
            opts: ["Magnetic", "Gravitational", "Frictional", "Electric"],
            ans: 1,
            exp: "Gravity.",
          },
          {
            q: "Plant making own food =",
            opts: ["Heterotroph", "Decomposer", "Autotroph", "Parasite"],
            ans: 2,
            exp: "Autotroph.",
          },
          {
            q: "Shadow forms because light travels in:",
            opts: [
              "Curved lines",
              "Circles",
              "Straight lines",
              "All directions",
            ],
            ans: 2,
            exp: "Straight lines.",
          },
          {
            q: "Planet with rings:",
            opts: ["Mars", "Jupiter", "Saturn", "Venus"],
            ans: 2,
            exp: "Saturn.",
          },
          {
            q: "Mixture example:",
            opts: ["Water", "Salt", "Air", "Sugar"],
            ans: 2,
            exp: "Air = mixture of gases.",
          },
          {
            q: "Caterpillar → butterfly process:",
            opts: [
              "Germination",
              "Metamorphosis",
              "Pollination",
              "Reproduction",
            ],
            ans: 1,
            exp: "Metamorphosis.",
          },
          {
            q: "Organ producing bile:",
            opts: ["Pancreas", "Kidney", "Liver", "Stomach"],
            ans: 2,
            exp: "Liver produces bile.",
          },
          {
            q: "Concave mirror used in:",
            opts: [
              "Rear-view mirror",
              "Torches/headlights",
              "Periscope",
              "Kaleidoscope",
            ],
            ans: 1,
            exp: "Focuses light in torches.",
          },
          {
            q: "Cold-blooded animal:",
            opts: ["Dog", "Frog", "Pigeon", "Rabbit"],
            ans: 1,
            exp: "Frog — amphibian.",
          },
          {
            q: "Hardest natural substance:",
            opts: ["Iron", "Gold", "Diamond", "Quartz"],
            ans: 2,
            exp: "Diamond — Mohs 10.",
          },
        ],
      },
      {
        name: "Social Science",
        icon: "🌍",
        color: "#c0392b",
        qs: [
          {
            q: "Capital of India:",
            opts: ["Mumbai", "Kolkata", "New Delhi", "Chennai"],
            ans: 2,
            exp: "New Delhi since 1911.",
          },
          {
            q: "Largest continent:",
            opts: ["Africa", "Europe", "Asia", "North America"],
            ans: 2,
            exp: "Asia — 44.6 million km².",
          },
          {
            q: "First PM of India:",
            opts: ["Gandhi", "Ambedkar", "Nehru", "Patel"],
            ans: 2,
            exp: "Jawaharlal Nehru (1947–1964).",
          },
          {
            q: "Ocean surrounding India on three sides:",
            opts: ["Pacific", "Atlantic", "Indian", "Arctic"],
            ans: 2,
            exp: "Indian Ocean, Bay of Bengal, Arabian Sea.",
          },
          {
            q: "National emblem of India features:",
            opts: ["Tiger", "Elephant", "Four lions", "Peacock"],
            ans: 2,
            exp: "Four Asiatic lions from Sarnath.",
          },
          {
            q: "Gandhi born in which state?",
            opts: ["Maharashtra", "Gujarat", "Rajasthan", "U.P."],
            ans: 1,
            exp: "Porbandar, Gujarat (2 Oct 1869).",
          },
          {
            q: "Himalayas lie in which direction from Deccan Plateau?",
            opts: ["South", "West", "North", "East"],
            ans: 2,
            exp: "North.",
          },
          {
            q: "India became independent on:",
            opts: ["26 Jan 1950", "15 Aug 1948", "15 Aug 1947", "26 Jan 1947"],
            ans: 2,
            exp: "15 August 1947.",
          },
          {
            q: "Indian National Anthem written by:",
            opts: [
              "Bankim Chandra",
              "Subramanya Bharati",
              "R.N. Tagore",
              "Iqbal",
            ],
            ans: 2,
            exp: "Rabindranath Tagore.",
          },
          {
            q: "River flowing through Delhi:",
            opts: ["Ganga", "Yamuna", "Brahmaputra", "Godavari"],
            ans: 1,
            exp: "Yamuna.",
          },
          {
            q: "Upper House of Parliament:",
            opts: ["Lok Sabha", "Rajya Sabha", "Vidhan Sabha", "Both"],
            ans: 1,
            exp: "Rajya Sabha.",
          },
          {
            q: "Smallest state of India by area:",
            opts: ["Goa", "Sikkim", "Tripura", "Nagaland"],
            ans: 0,
            exp: "Goa ~3,702 km².",
          },
          {
            q: "Ashoka from which dynasty?",
            opts: ["Gupta", "Mughal", "Maurya", "Chola"],
            ans: 2,
            exp: "Maurya Empire.",
          },
          {
            q: '"Dark Continent":',
            opts: ["Asia", "Africa", "South America", "Antarctica"],
            ans: 1,
            exp: "Africa.",
          },
          {
            q: "Longest river in India:",
            opts: ["Yamuna", "Brahmaputra", "Ganga", "Godavari"],
            ans: 2,
            exp: "Ganga ~2,525 km.",
          },
          {
            q: "Panchayati Raj relates to:",
            opts: [
              "Central govt",
              "State govt",
              "Local self-govt",
              "Judiciary",
            ],
            ans: 2,
            exp: "Rural local self-government.",
          },
          {
            q: "Tropic of Cancer passes through:",
            opts: [
              "Only south India",
              "Only north India",
              "Central India",
              "Eastern India",
            ],
            ans: 2,
            exp: "23.5°N through central India.",
          },
          {
            q: "First Battle of Panipat:",
            opts: ["1526", "1556", "1761", "1857"],
            ans: 0,
            exp: "Babur vs Ibrahim Lodi.",
          },
          {
            q: "Parliament of India has:",
            opts: ["1", "2", "3", "4"],
            ans: 1,
            exp: "Two Houses.",
          },
          {
            q: "National animal of India:",
            opts: ["Lion", "Elephant", "Bengal Tiger", "Peacock"],
            ans: 2,
            exp: "Bengal Tiger.",
          },
          {
            q: "Who discovered India by sea route?",
            opts: ["Columbus", "Magellan", "Vasco da Gama", "Cook"],
            ans: 2,
            exp: "Vasco da Gama (1498).",
          },
          {
            q: "Great Wall of China built to protect against:",
            opts: [
              "Floods",
              "Invasions from north",
              "Earthquakes",
              "Sea pirates",
            ],
            ans: 1,
            exp: "Northern invasions.",
          },
          {
            q: "Desert found in India:",
            opts: ["Sahara", "Gobi", "Thar", "Kalahari"],
            ans: 2,
            exp: "Thar Desert in Rajasthan.",
          },
          {
            q: "Fundamental Rights guaranteed by:",
            opts: [
              "State govt",
              "Local govt",
              "Central govt",
              "The Constitution",
            ],
            ans: 3,
            exp: "Part III of Indian Constitution.",
          },
          {
            q: "Mount Everest in which country?",
            opts: ["India", "China", "Nepal", "Bhutan"],
            ans: 2,
            exp: "Nepal.",
          },
        ],
      },
      {
        name: "English",
        icon: "📝",
        color: "#2980b9",
        qs: [
          {
            q: "Correct spelling:",
            opts: ["Recieve", "Receive", "Receve", "Receeve"],
            ans: 1,
            exp: "R-E-C-E-I-V-E — i before e except after c.",
          },
          {
            q: 'Antonym of "beautiful":',
            opts: ["Lovely", "Pretty", "Ugly", "Nice"],
            ans: 2,
            exp: "Ugly.",
          },
          {
            q: 'Synonym of "happy":',
            opts: ["Sad", "Joyful", "Angry", "Tired"],
            ans: 1,
            exp: "Joyful.",
          },
          {
            q: "The cat ___ on the mat:",
            opts: ["sit", "sits", "sitting", "sitted"],
            ans: 1,
            exp: '"Cat" = 3rd person singular → sits.',
          },
          {
            q: 'Plural of "child":',
            opts: ["Childs", "Childes", "Children", "Childen"],
            ans: 2,
            exp: "Children.",
          },
          {
            q: "Which is a proper noun?",
            opts: ["City", "River", "Delhi", "Mountain"],
            ans: 2,
            exp: "Delhi = specific name.",
          },
          {
            q: 'Opposite of "ancient":',
            opts: ["Old", "Modern", "Antique", "Historical"],
            ans: 1,
            exp: "Modern.",
          },
          {
            q: "She ___ to school every day:",
            opts: ["go", "going", "goes", "gone"],
            ans: 2,
            exp: "3rd person singular → goes.",
          },
          {
            q: "Correct sentence:",
            opts: [
              "He go to market.",
              "He goes to market.",
              "He going to market.",
              "He went to markets.",
            ],
            ans: 1,
            exp: "He goes to market.",
          },
          {
            q: '"quickly" is a:',
            opts: ["Noun", "Adjective", "Adverb", "Verb"],
            ans: 2,
            exp: "Adverb — modifies a verb.",
          },
          {
            q: 'Verb in "The dog runs fast":',
            opts: ["dog", "runs", "fast", "The"],
            ans: 1,
            exp: '"runs" is the verb.',
          },
          {
            q: "Correct article: ___ umbrella:",
            opts: ["A", "An", "The", "No article"],
            ans: 1,
            exp: '"An" before vowel sound.',
          },
          {
            q: 'Antonym of "courage":',
            opts: ["Bravery", "Boldness", "Cowardice", "Valour"],
            ans: 2,
            exp: "Cowardice.",
          },
          {
            q: '"I have completed my homework." Tense?',
            opts: [
              "Simple past",
              "Present perfect",
              "Past perfect",
              "Simple present",
            ],
            ans: 1,
            exp: 'Present perfect — "have completed".',
          },
          {
            q: "Fill: She is ___ honest girl:",
            opts: ["a", "an", "the", "no article"],
            ans: 1,
            exp: '"An" — silent h, vowel sound.',
          },
          {
            q: "Which word is a conjunction?",
            opts: ["Quickly", "Beautiful", "Because", "Run"],
            ans: 2,
            exp: '"Because" joins clauses.',
          },
          {
            q: 'Singular of "mice":',
            opts: ["Mices", "Micen", "Mouse", "Mouses"],
            ans: 2,
            exp: "Mouse → mice (irregular).",
          },
          {
            q: "The teacher praised ___ students:",
            opts: ["her", "hers", "she", "herself"],
            ans: 0,
            exp: '"Her" = possessive adjective.',
          },
          {
            q: "Question mark sentence:",
            opts: [
              "Come here.",
              "What is your name?",
              "I love books.",
              "Run fast!",
            ],
            ans: 1,
            exp: "Questions end with ?.",
          },
          {
            q: '"Fast" in "He runs fast" is a:',
            opts: ["Noun", "Verb", "Adverb", "Adjective"],
            ans: 2,
            exp: "Adverb — describes how he runs.",
          },
        ],
      },
    ],
  },

  jmi_9: {
    title: "JMI Entrance — Class 9",
    subject: "Maths(30)·Science(25)·Social Science(25)·English(20)",
    marks: "+1 / 0",
    time: 120,
    sectioned: true,
    sections: [
      {
        name: "Mathematics",
        icon: "📐",
        color: "#e67e22",
        qs: [
          {
            q: "If 2x+5=15, x=",
            opts: ["4", "5", "6", "10"],
            ans: 1,
            exp: "2x=10 → x=5.",
          },
          {
            q: "HCF of 36 and 48:",
            opts: ["6", "12", "18", "24"],
            ans: 1,
            exp: "HCF=12.",
          },
          {
            q: "Area of circle r=7cm (π=22/7):",
            opts: ["154 cm²", "144 cm²", "176 cm²", "132 cm²"],
            ans: 0,
            exp: "πr²=154 cm².",
          },
          {
            q: "15% of 200:",
            opts: ["25", "30", "35", "20"],
            ans: 1,
            exp: "30.",
          },
          {
            q: "Sum of angles of triangle:",
            opts: ["90°", "180°", "270°", "360°"],
            ans: 1,
            exp: "180°.",
          },
          {
            q: "(a+b)² =",
            opts: ["a²+b²", "a²+2ab+b²", "a²-2ab+b²", "2a+2b"],
            ans: 1,
            exp: "a²+2ab+b².",
          },
          {
            q: "LCM of 4 and 6:",
            opts: ["12", "18", "24", "6"],
            ans: 0,
            exp: "12.",
          },
          {
            q: "Train 240km in 4h. Speed:",
            opts: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
            ans: 1,
            exp: "60 km/h.",
          },
          {
            q: "√64+√36=",
            opts: ["14", "12", "16", "10"],
            ans: 0,
            exp: "8+6=14.",
          },
          {
            q: "SI: P=1000,R=5%,T=2yr:",
            opts: ["100", "50", "200", "150"],
            ans: 0,
            exp: "SI=100.",
          },
          {
            q: "Volume of cube side 4cm:",
            opts: ["16 cm³", "48 cm³", "64 cm³", "32 cm³"],
            ans: 2,
            exp: "4³=64 cm³.",
          },
          {
            q: "Diagonal of square side a:",
            opts: ["a", "a√2", "a/2", "2a"],
            ans: 1,
            exp: "a√2 by Pythagoras.",
          },
          {
            q: "2³+3²=",
            opts: ["13", "15", "17", "19"],
            ans: 2,
            exp: "8+9=17.",
          },
          {
            q: "Average of 10,20,30,40,50:",
            opts: ["25", "30", "35", "40"],
            ans: 1,
            exp: "150/5=30.",
          },
          {
            q: "Profit%: CP=400,SP=500:",
            opts: ["20%", "25%", "15%", "10%"],
            ans: 1,
            exp: "100/400×100=25%.",
          },
          {
            q: "Sum of first 5 odd numbers:",
            opts: ["20", "25", "30", "15"],
            ans: 1,
            exp: "1+3+5+7+9=25.",
          },
          {
            q: "Circumference r=7 (π=22/7):",
            opts: ["22", "44", "66", "88"],
            ans: 1,
            exp: "2×22/7×7=44.",
          },
          {
            q: "BODMAS: 8÷2×(2+2)=",
            opts: ["1", "4", "8", "16"],
            ans: 3,
            exp: "4×4=16.",
          },
          {
            q: "a=3,b=4: a²+b²=",
            opts: ["7", "12", "25", "14"],
            ans: 2,
            exp: "9+16=25.",
          },
          {
            q: "Factorise x²-9:",
            opts: ["(x-3)²", "(x+3)(x-3)", "(x+9)(x-1)", "x(x-9)"],
            ans: 1,
            exp: "Difference of squares.",
          },
          {
            q: "3x-7=11, x=",
            opts: ["4", "5", "6", "7"],
            ans: 2,
            exp: "3x=18 → x=6.",
          },
          {
            q: "Boys:Girls=3:2, 30 students. Girls:",
            opts: ["10", "12", "18", "15"],
            ans: 1,
            exp: "(2/5)×30=12.",
          },
          {
            q: "Irrational number:",
            opts: ["√4", "√9", "√16", "√2"],
            ans: 3,
            exp: "√2 cannot be p/q.",
          },
          {
            q: "Median of 3,7,5,9,1:",
            opts: ["5", "7", "3", "9"],
            ans: 0,
            exp: "Sorted: 1,3,5,7,9 → middle=5.",
          },
          {
            q: "Exterior angle of regular hexagon:",
            opts: ["30°", "45°", "60°", "90°"],
            ans: 2,
            exp: "360°/6=60°.",
          },
          {
            q: "Surface area of cube side 3cm:",
            opts: ["27 cm²", "36 cm²", "54 cm²", "72 cm²"],
            ans: 2,
            exp: "6×9=54 cm².",
          },
          {
            q: "x:y=2:3, y:z=3:4. x:z=",
            opts: ["1:2", "2:4", "2:3", "3:4"],
            ans: 1,
            exp: "x:z=2:4.",
          },
          {
            q: "Mode of 2,3,4,4,5,5,5,6:",
            opts: ["4", "5", "3", "6"],
            ans: 1,
            exp: "5 appears 3 times.",
          },
          {
            q: "√(25×16)=",
            opts: ["20", "40", "50", "100"],
            ans: 0,
            exp: "√400=20.",
          },
          {
            q: "Buy Rs.200,sell Rs.250. Profit%:",
            opts: ["20%", "25%", "30%", "15%"],
            ans: 1,
            exp: "50/200×100=25%.",
          },
        ],
      },
      {
        name: "Science",
        icon: "🔬",
        color: "#27ae60",
        qs: [
          {
            q: "Powerhouse of cell:",
            opts: ["Nucleus", "Ribosome", "Mitochondria", "Golgi body"],
            ans: 2,
            exp: "Mitochondria produce ATP.",
          },
          {
            q: "Newton's second law:",
            opts: ["F=ma", "F=mv", "F=m/a", "F=v/a"],
            ans: 0,
            exp: "F=ma.",
          },
          {
            q: "Gas produced in photosynthesis:",
            opts: ["CO2", "N2", "O2", "H2"],
            ans: 2,
            exp: "O2.",
          },
          {
            q: "Speed of light:",
            opts: ["3×10⁸ m/s", "3×10⁶ m/s", "3×10¹⁰ m/s", "3×10⁴ m/s"],
            ans: 0,
            exp: "3×10⁸ m/s.",
          },
          {
            q: "Baking soda:",
            opts: ["NaCl", "Na2CO3", "NaHCO3", "NaOH"],
            ans: 2,
            exp: "NaHCO3.",
          },
          {
            q: "SI unit of force:",
            opts: ["Joule", "Watt", "Newton", "Pascal"],
            ans: 2,
            exp: "Newton.",
          },
          {
            q: "Water-transporting tissue:",
            opts: ["Phloem", "Xylem", "Cortex", "Epidermis"],
            ans: 1,
            exp: "Xylem.",
          },
          {
            q: "NOT a greenhouse gas:",
            opts: ["CO2", "CH4", "N2O", "O2"],
            ans: 3,
            exp: "O2 is not a greenhouse gas.",
          },
          {
            q: "Human body bones:",
            opts: ["206", "208", "204", "210"],
            ans: 0,
            exp: "206 bones.",
          },
          {
            q: "Acid+Base →",
            opts: ["Acid+Water", "Salt+Water", "Gas+Water", "Oxide+Water"],
            ans: 1,
            exp: "Neutralisation → salt+water.",
          },
          {
            q: "Mirror in headlights:",
            opts: ["Convex", "Concave", "Plane", "Both"],
            ans: 1,
            exp: "Concave focuses light.",
          },
          {
            q: "Water loss from plant leaves:",
            opts: ["Respiration", "Osmosis", "Transpiration", "Photosynthesis"],
            ans: 2,
            exp: "Transpiration.",
          },
          {
            q: "Archimedes' principle — buoyant force =",
            opts: [
              "Weight of object",
              "Weight of fluid displaced",
              "Density of object",
              "Volume of object",
            ],
            ans: 1,
            exp: "= weight of fluid displaced.",
          },
          {
            q: "DNA stands for:",
            opts: [
              "Deoxyribonucleic acid",
              "Diribonucleic acid",
              "Deoxyribonicotinic acid",
              "Dinitrogenous acid",
            ],
            ans: 0,
            exp: "Deoxyribonucleic Acid.",
          },
          {
            q: "Metal resistance when temp increases:",
            opts: ["Decreases", "Same", "Increases", "Becomes zero"],
            ans: 2,
            exp: "Resistance increases.",
          },
          {
            q: "Gas in electric bulbs:",
            opts: ["Oxygen", "Nitrogen/Argon", "CO2", "Hydrogen"],
            ans: 1,
            exp: "Inert gas prevents oxidation.",
          },
          {
            q: "Refraction changes light's:",
            opts: ["Colour", "Frequency", "Speed & direction", "Amplitude"],
            ans: 2,
            exp: "Speed and direction change.",
          },
          {
            q: "Universal solvent:",
            opts: ["Alcohol", "Acid", "Water", "Benzene"],
            ans: 2,
            exp: "Water dissolves most substances.",
          },
          {
            q: "Chambers in human heart:",
            opts: ["2", "3", "4", "5"],
            ans: 2,
            exp: "4 chambers.",
          },
          {
            q: "Physical change:",
            opts: [
              "Burning wood",
              "Rusting iron",
              "Melting ice",
              "Cooking food",
            ],
            ans: 2,
            exp: "Melting ice — reversible.",
          },
          {
            q: "Conservation of energy states:",
            opts: [
              "Energy can be created",
              "Energy can be destroyed",
              "Cannot be created/destroyed",
              "Energy always in motion",
            ],
            ans: 2,
            exp: "Cannot be created or destroyed.",
          },
          {
            q: "Acid in stomach:",
            opts: ["H2SO4", "HNO3", "HCl", "CH3COOH"],
            ans: 2,
            exp: "HCl in gastric juice.",
          },
          {
            q: "Nucleus controls cell via:",
            opts: ["Enzymes", "Ribosomes", "DNA", "ATP"],
            ans: 2,
            exp: "DNA carries genetic instructions.",
          },
          {
            q: "Convex lens corrects:",
            opts: [
              "Myopia",
              "Hypermetropia",
              "Astigmatism",
              "Colour blindness",
            ],
            ans: 1,
            exp: "Hypermetropia (far-sightedness).",
          },
          {
            q: "Chemical → heat energy example:",
            opts: [
              "Fan running",
              "Light bulb on",
              "Food burning",
              "Hydroelectric dam",
            ],
            ans: 2,
            exp: "Combustion converts chemical → heat.",
          },
        ],
      },
      {
        name: "Social Science",
        icon: "🌍",
        color: "#c0392b",
        qs: [
          {
            q: "Article abolishing untouchability:",
            opts: ["Article 14", "Article 17", "Article 19", "Article 21"],
            ans: 1,
            exp: "Article 17.",
          },
          {
            q: "First Battle of Panipat (1526):",
            opts: [
              "Akbar-Hemu",
              "Babur-Ibrahim Lodi",
              "Humayun-Sher Shah",
              "Babur-Rana Sanga",
            ],
            ans: 1,
            exp: "Babur vs Ibrahim Lodi.",
          },
          {
            q: "Tropic of Cancer at latitude:",
            opts: ["0°", "23.5°N", "66.5°N", "30°N"],
            ans: 1,
            exp: "23.5°N.",
          },
          {
            q: "French Revolution:",
            opts: ["1789", "1848", "1756", "1801"],
            ans: 0,
            exp: "1789 — storming of Bastille.",
          },
          {
            q: "Largest state by area:",
            opts: ["Maharashtra", "M.P.", "U.P.", "Rajasthan"],
            ans: 3,
            exp: "Rajasthan.",
          },
          {
            q: '"Sorrow of Bihar":',
            opts: ["Ganga", "Yamuna", "Kosi", "Damodar"],
            ans: 2,
            exp: "Kosi river.",
          },
          {
            q: "First general elections in India:",
            opts: ["1947", "1952", "1957", "1950"],
            ans: 1,
            exp: "1951–52.",
          },
          {
            q: "Industrial Revolution began in:",
            opts: ["France", "USA", "Britain", "Germany"],
            ans: 2,
            exp: "Britain, late 18th century.",
          },
          {
            q: "Non-renewable resource:",
            opts: ["Solar energy", "Wind energy", "Coal", "Tidal energy"],
            ans: 2,
            exp: "Coal is fossil fuel.",
          },
          {
            q: "Demand curve slopes:",
            opts: ["Upward", "Downward", "Horizontal", "Vertical"],
            ans: 1,
            exp: "Downward — higher price → less demand.",
          },
          {
            q: "Constitution in force on:",
            opts: ["15 Aug 1947", "26 Jan 1950", "26 Nov 1949", "15 Aug 1950"],
            ans: 1,
            exp: "26 January 1950.",
          },
          {
            q: "Arthashastra written by:",
            opts: ["Chandragupta", "Ashoka", "Chanakya", "Akbar"],
            ans: 2,
            exp: "Chanakya (Kautilya).",
          },
          {
            q: "Same crop year after year:",
            opts: [
              "Mixed farming",
              "Crop rotation",
              "Monoculture",
              "Shifting cultivation",
            ],
            ans: 2,
            exp: "Monoculture.",
          },
          {
            q: "Chipko Movement related to:",
            opts: ["Water", "Forest", "Soil", "Air pollution"],
            ans: 1,
            exp: "Forest conservation (1973).",
          },
          {
            q: "Lok Sabha elected every ___ years:",
            opts: ["3", "4", "5", "6"],
            ans: 2,
            exp: "5 years.",
          },
          {
            q: "Primary sector activity:",
            opts: ["Banking", "Manufacturing", "Agriculture", "Transport"],
            ans: 2,
            exp: "Agriculture = primary sector.",
          },
          {
            q: "Taj Mahal built by:",
            opts: ["Akbar", "Aurangzeb", "Shah Jahan", "Humayun"],
            ans: 2,
            exp: "Shah Jahan for Mumtaz Mahal.",
          },
          {
            q: '"World Parliament":',
            opts: ["IMF", "World Bank", "United Nations", "WTO"],
            ans: 2,
            exp: "UN General Assembly.",
          },
          {
            q: "Latitude of equator:",
            opts: ["0°", "23.5°N", "90°N", "66.5°S"],
            ans: 0,
            exp: "0°.",
          },
          {
            q: "Vande Mataram by:",
            opts: ["R.N. Tagore", "Bankim Chandra", "Iqbal", "Bharati"],
            ans: 1,
            exp: "Bankim Chandra Chatterjee.",
          },
          {
            q: "Poverty line based on:",
            opts: [
              "Per capita income",
              "Minimum calorie intake",
              "GDP",
              "Literacy rate",
            ],
            ans: 1,
            exp: "Minimum calorie requirement.",
          },
          {
            q: "Ozone layer in:",
            opts: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
            ans: 1,
            exp: "Stratosphere, 15–35 km.",
          },
          {
            q: "Mixed economy means:",
            opts: [
              "Only private",
              "Only public",
              "Both private & public",
              "International economy",
            ],
            ans: 2,
            exp: "Both sectors coexist.",
          },
          {
            q: "Salt March led by:",
            opts: ["Nehru", "Gandhi", "Bose", "Bhagat Singh"],
            ans: 1,
            exp: "Gandhi (1930).",
          },
          {
            q: "NOT a Fundamental Right:",
            opts: [
              "Right to equality",
              "Right to freedom",
              "Right to property",
              "Right against exploitation",
            ],
            ans: 2,
            exp: "Right to property removed by 44th Amendment.",
          },
        ],
      },
      {
        name: "English",
        icon: "📝",
        color: "#2980b9",
        qs: [
          {
            q: "She ___ to school yesterday:",
            opts: ["go", "goes", "went", "going"],
            ans: 2,
            exp: "Past tense → went.",
          },
          {
            q: 'Antonym of "courage":',
            opts: ["Bravery", "Boldness", "Cowardice", "Strength"],
            ans: 2,
            exp: "Cowardice.",
          },
          {
            q: "Compound sentence:",
            opts: [
              "He ran.",
              "He ran and she walked.",
              "Although he ran.",
              "He ran quickly.",
            ],
            ans: 1,
            exp: 'Two independent clauses joined by "and".',
          },
          {
            q: 'Adverb in "She sings beautifully":',
            opts: ["She", "sings", "beautifully", "None"],
            ans: 2,
            exp: '"Beautifully" modifies "sings".',
          },
          {
            q: 'Synonym of "diligent":',
            opts: ["Lazy", "Hardworking", "Careless", "Slow"],
            ans: 1,
            exp: "Hardworking.",
          },
          {
            q: '"None of the students ___ passed":',
            opts: ["have", "has", "are", "were"],
            ans: 1,
            exp: '"None" (singular) → has.',
          },
          {
            q: "Collective noun:",
            opts: ["Dog", "Run", "Flock", "Beautiful"],
            ans: 2,
            exp: '"Flock" = group of birds/sheep.',
          },
          {
            q: 'Passive of "She writes a letter":',
            opts: [
              "A letter wrote by her.",
              "A letter is written by her.",
              "A letter has written.",
              "She is writing a letter.",
            ],
            ans: 1,
            exp: "A letter is written by her.",
          },
          {
            q: "Fill: ___ apple a day…:",
            opts: ["A", "An", "The", "No article"],
            ans: 1,
            exp: '"An" before vowel sound.',
          },
          {
            q: 'Conjunction in "I stayed because it rained":',
            opts: ["stayed", "home", "because", "raining"],
            ans: 2,
            exp: '"Because" = subordinating conjunction.',
          },
          {
            q: 'Antonym of "transparent":',
            opts: ["Clear", "Opaque", "Bright", "Shiny"],
            ans: 1,
            exp: "Opaque.",
          },
          {
            q: "Past perfect tense:",
            opts: [
              "She eats breakfast.",
              "She had eaten breakfast.",
              "She was eating.",
              "She has eaten.",
            ],
            ans: 1,
            exp: '"Had eaten" = past perfect.',
          },
          {
            q: 'Synonym of "eloquent":',
            opts: ["Silent", "Articulate", "Confused", "Boring"],
            ans: 1,
            exp: "Articulate.",
          },
          {
            q: 'He said "I am happy" → indirect:',
            opts: [
              "He said he is happy.",
              "He said he was happy.",
              "He said I was happy.",
              "He says he was happy.",
            ],
            ans: 1,
            exp: "Backshift: am → was.",
          },
          {
            q: '"honesty" is a ___ noun:',
            opts: ["Proper", "Common", "Abstract", "Collective"],
            ans: 2,
            exp: "Abstract — names a quality.",
          },
          {
            q: "Preposition:",
            opts: ["Run", "Above", "Quickly", "Beautiful"],
            ans: 1,
            exp: '"Above" shows position.',
          },
          {
            q: "Correct spelling:",
            opts: ["Grammer", "Grammar", "Gramar", "Grammarr"],
            ans: 1,
            exp: "G-R-A-M-M-A-R.",
          },
          {
            q: '"The cake was eaten by children" — voice:',
            opts: ["Active", "Passive", "Neutral", "Imperative"],
            ans: 1,
            exp: "Passive voice.",
          },
          {
            q: 'Antonym of "generous":',
            opts: ["Kind", "Giving", "Miserly", "Polite"],
            ans: 2,
            exp: "Miserly.",
          },
          {
            q: '"She is the tallest girl." — Degree:',
            opts: ["Positive", "Comparative", "Superlative", "Absolute"],
            ans: 2,
            exp: "Superlative.",
          },
        ],
      },
    ],
  },

  jmi_11: {
    title: "JMI Entrance — Class 11",
    subject: "Maths(30)·Science(25)·Social Science(25)·English(20)",
    marks: "+1 / 0",
    time: 120,
    sectioned: true,
    sections: [
      {
        name: "Mathematics",
        icon: "📐",
        color: "#e67e22",
        qs: [
          {
            q: "If sinθ=3/5, cosθ=",
            opts: ["4/5", "3/4", "5/3", "5/4"],
            ans: 0,
            exp: "sin²+cos²=1 → cos=4/5.",
          },
          {
            q: "d/dx(sin x)=",
            opts: ["cos x", "-cos x", "tan x", "-sin x"],
            ans: 0,
            exp: "cos x.",
          },
          {
            q: "∫cos x dx=",
            opts: ["sin x", "-sin x", "tan x", "-cos x"],
            ans: 0,
            exp: "sin x+C.",
          },
          {
            q: "log₁₀(1000)=",
            opts: ["2", "3", "4", "10"],
            ans: 1,
            exp: "log₁₀(10³)=3.",
          },
          {
            q: "Sum of first n natural numbers:",
            opts: ["n(n+1)", "n(n+1)/2", "n²", "n(n-1)/2"],
            ans: 1,
            exp: "n(n+1)/2.",
          },
          {
            q: "Value of i² (i=√-1):",
            opts: ["1", "-1", "i", "-i"],
            ans: 1,
            exp: "i²=-1.",
          },
          {
            q: "A={1,2,3}, B={2,3,4}. A∩B=",
            opts: ["{1,2,3,4}", "{2,3}", "{1,4}", "{1,2}"],
            ans: 1,
            exp: "{2,3}.",
          },
          {
            q: "NOT a function:",
            opts: ["f(x)=x²", "f(x)=√x (x≥0)", "y²=x", "f(x)=|x|"],
            ans: 2,
            exp: "y²=x: two y per x.",
          },
          {
            q: "lim(x→0)(sin x/x)=",
            opts: ["0", "1", "∞", "undefined"],
            ans: 1,
            exp: "Standard limit =1.",
          },
          {
            q: "Terms in (a+b)⁵:",
            opts: ["4", "5", "6", "7"],
            ans: 2,
            exp: "n+1=6 terms.",
          },
          {
            q: "Slope of 2x-3y+6=0:",
            opts: ["2/3", "3/2", "-2/3", "2"],
            ans: 0,
            exp: "y=(2x+6)/3 → slope=2/3.",
          },
          {
            q: "Σ(1 to n) of r=",
            opts: ["n²", "n(n+1)/2", "n(n-1)", "n²/2"],
            ans: 1,
            exp: "n(n+1)/2.",
          },
          {
            q: "P(A)=0.3,P(B)=0.4,P(A∩B)=0.1. P(A∪B)=",
            opts: ["0.6", "0.7", "0.5", "0.8"],
            ans: 0,
            exp: "0.3+0.4-0.1=0.6.",
          },
          {
            q: "C(5,2)=",
            opts: ["10", "20", "5", "15"],
            ans: 0,
            exp: "5!/(2!3!)=10.",
          },
          {
            q: "Distance between (0,0) and (3,4):",
            opts: ["5", "7", "3", "4"],
            ans: 0,
            exp: "√(9+16)=5.",
          },
          {
            q: "Period of sin x:",
            opts: ["π", "2π", "π/2", "4π"],
            ans: 1,
            exp: "2π.",
          },
          {
            q: "Mean of 5,10,15,20,25:",
            opts: ["10", "15", "20", "25"],
            ans: 1,
            exp: "75/5=15.",
          },
          {
            q: "Diagonals in hexagon:",
            opts: ["6", "9", "12", "15"],
            ans: 1,
            exp: "n(n-3)/2=9.",
          },
          {
            q: "f(x)=x²-4, f(3)=",
            opts: ["5", "9", "13", "7"],
            ans: 0,
            exp: "9-4=5.",
          },
          {
            q: "tan 45°=",
            opts: ["0", "1", "√3", "1/√3"],
            ans: 1,
            exp: "tan 45°=1.",
          },
          {
            q: "|-15|=",
            opts: ["-15", "15", "0", "150"],
            ans: 1,
            exp: "Absolute value=15.",
          },
          {
            q: "Eccentricity of circle:",
            opts: ["0", "1", "e", "∞"],
            ans: 0,
            exp: "Circle: e=0.",
          },
          {
            q: "GP: 2,6,18,54 — common ratio:",
            opts: ["2", "3", "4", "6"],
            ans: 1,
            exp: "r=6/2=3.",
          },
          {
            q: "Subsets of {a,b,c}:",
            opts: ["6", "7", "8", "9"],
            ans: 2,
            exp: "2³=8.",
          },
          {
            q: "Equation of circle:",
            opts: ["x²+y²=r²", "y=mx+c", "x²/a²+y²/b²=1", "y²=4ax"],
            ans: 0,
            exp: "x²+y²=r².",
          },
          {
            q: "sin²x+cos²x=",
            opts: ["0", "1", "2", "sin2x"],
            ans: 1,
            exp: "Fundamental identity=1.",
          },
          {
            q: "d/dx(eˣ)=",
            opts: ["eˣ/x", "eˣ", "xeˣ⁻¹", "1/eˣ"],
            ans: 1,
            exp: "eˣ.",
          },
          {
            q: "Median of 3,5,7,9,11:",
            opts: ["3", "5", "7", "9"],
            ans: 2,
            exp: "Middle=7.",
          },
          {
            q: "Term of AP 3,7,11,… equal to 51:",
            opts: ["10th", "12th", "13th", "11th"],
            ans: 2,
            exp: "3+(n-1)4=51 → n=13.",
          },
          {
            q: "(1+x)ⁿ first two terms:",
            opts: ["1+x", "1+nx", "1+nx+n(n-1)x²/2", "1-nx"],
            ans: 1,
            exp: "1+nx.",
          },
        ],
      },
      {
        name: "Science",
        icon: "🔬",
        color: "#27ae60",
        qs: [
          {
            q: "Unit of electric field:",
            opts: ["N/C", "C/N", "J/C", "C/J"],
            ans: 0,
            exp: "N/C.",
          },
          {
            q: "Hybridization of C in CH4:",
            opts: ["sp", "sp²", "sp³", "sp³d"],
            ans: 2,
            exp: "sp³.",
          },
          {
            q: "Ideal Gas Law:",
            opts: ["Boyle's", "Charles's", "PV=nRT", "Dalton's"],
            ans: 2,
            exp: "PV=nRT.",
          },
          {
            q: "Mn oxidation state in KMnO4:",
            opts: ["+2", "+4", "+6", "+7"],
            ans: 3,
            exp: "+7.",
          },
          {
            q: "d/dx(sin x) in SHM context:",
            opts: ["cos x", "-cos x", "sin x", "-sin x"],
            ans: 0,
            exp: "cos x.",
          },
          {
            q: "g on Earth:",
            opts: ["8.9 m/s²", "9.8 m/s²", "10.8 m/s²", "11 m/s²"],
            ans: 1,
            exp: "9.8 m/s².",
          },
          {
            q: "Linear molecule:",
            opts: ["H2O", "NH3", "CO2", "CH4"],
            ans: 2,
            exp: "CO2 = O=C=O, sp hybrid.",
          },
          {
            q: "Ohm's law: V=",
            opts: ["I/R", "IR", "I+R", "I²R"],
            ans: 1,
            exp: "V=IR.",
          },
          {
            q: "Exhibits resonance:",
            opts: ["CH4", "H2O", "Benzene", "NH3"],
            ans: 2,
            exp: "Benzene — delocalized electrons.",
          },
          {
            q: "g independent of:",
            opts: [
              "Height above surface",
              "Mass of falling object",
              "Distance from centre",
              "Rotation of Earth",
            ],
            ans: 1,
            exp: "Galileo: all objects fall equally.",
          },
          {
            q: "Boyle's law: PV=",
            opts: ["constant", "increases", "decreases", "zero"],
            ans: 0,
            exp: "PV=constant at const. T.",
          },
          {
            q: "Shape of orbital described by:",
            opts: [
              "Principal (n)",
              "Azimuthal (l)",
              "Magnetic (ml)",
              "Spin (ms)",
            ],
            ans: 1,
            exp: "Azimuthal quantum number.",
          },
          {
            q: "Newton's 3rd law:",
            opts: ["F=ma", "Action=-Reaction", "v=u+at", "PV=nRT"],
            ans: 1,
            exp: "Equal & opposite reaction.",
          },
          {
            q: "Molar mass of H2O:",
            opts: ["16 g/mol", "18 g/mol", "20 g/mol", "12 g/mol"],
            ans: 1,
            exp: "2+16=18 g/mol.",
          },
          {
            q: "Bond in NaCl:",
            opts: ["Covalent", "Ionic", "Metallic", "Hydrogen"],
            ans: 1,
            exp: "Ionic bond.",
          },
          {
            q: "d=120km, t=2h. Speed=",
            opts: ["60 km/h", "50 km/h", "80 km/h", "40 km/h"],
            ans: 0,
            exp: "60 km/h.",
          },
          {
            q: "Most electronegative element:",
            opts: ["Oxygen", "Chlorine", "Fluorine", "Nitrogen"],
            ans: 2,
            exp: "Fluorine (4.0).",
          },
          {
            q: "Conservation of momentum holds when:",
            opts: [
              "Mass is constant",
              "Energy is constant",
              "No external force",
              "Velocity is constant",
            ],
            ans: 2,
            exp: "No external force.",
          },
          {
            q: "Intensive property:",
            opts: ["Mass", "Volume", "Temperature", "Quantity of matter"],
            ans: 2,
            exp: "Temperature is intensive.",
          },
          {
            q: "Nuclear fission = splitting of:",
            opts: ["Light nuclei", "Heavy nuclei", "Electrons", "Protons"],
            ans: 1,
            exp: "Heavy nuclei like U-235.",
          },
          {
            q: "Highest frequency in EM spectrum:",
            opts: ["Radio waves", "Infrared", "Visible light", "Gamma rays"],
            ans: 3,
            exp: "Gamma rays.",
          },
          {
            q: "Le Chatelier's principle:",
            opts: [
              "Shift right always",
              "Shift left always",
              "Oppose any change",
              "Shift toward higher T",
            ],
            ans: 2,
            exp: "System adjusts to counteract change.",
          },
          {
            q: "Escape velocity of Earth:",
            opts: ["7.9 km/s", "11.2 km/s", "5.0 km/s", "15 km/s"],
            ans: 1,
            exp: "11.2 km/s.",
          },
          {
            q: "Halogens belong to group:",
            opts: ["1", "2", "17", "18"],
            ans: 2,
            exp: "Group 17.",
          },
          {
            q: "Transformer works on:",
            opts: [
              "Coulomb's",
              "Ohm's",
              "Electromagnetic induction",
              "Archimedes'",
            ],
            ans: 2,
            exp: "Faraday's law of induction.",
          },
        ],
      },
      {
        name: "Social Science",
        icon: "🌍",
        color: "#c0392b",
        qs: [
          {
            q: "Constitution adopted on:",
            opts: ["15 Aug 1947", "26 Jan 1950", "26 Nov 1949", "15 Aug 1950"],
            ans: 2,
            exp: "26 November 1949.",
          },
          {
            q: "Freedom of speech — Article:",
            opts: ["Article 14", "Article 17", "Article 19", "Article 21"],
            ans: 2,
            exp: "Article 19(1)(a).",
          },
          {
            q: '"Great Depression" began:',
            opts: ["1919", "1929", "1939", "1949"],
            ans: 1,
            exp: "Wall Street Crash 1929.",
          },
          {
            q: "Monetary policy controlled by:",
            opts: ["Finance Ministry", "SEBI", "RBI", "State govts"],
            ans: 2,
            exp: "RBI.",
          },
          {
            q: "Feature of federal government:",
            opts: [
              "Single constitution",
              "Division of powers",
              "Single citizenship",
              "Uniform law",
            ],
            ans: 1,
            exp: "Division of powers.",
          },
          {
            q: '"Laissez-faire" means:',
            opts: [
              "State controls economy",
              "Free market, minimal govt",
              "Mixed economy",
              "Planned economy",
            ],
            ans: 1,
            exp: "Minimal state interference.",
          },
          {
            q: '"Do or Die" slogan — movement:',
            opts: [
              "Non-Cooperation",
              "Civil Disobedience",
              "Quit India",
              "Swadeshi",
            ],
            ans: 2,
            exp: "Quit India (1942).",
          },
          {
            q: "GDP stands for:",
            opts: [
              "Gross Domestic Product",
              "Gross Department Product",
              "General Domestic Product",
              "Gross Development Plan",
            ],
            ans: 0,
            exp: "Gross Domestic Product.",
          },
          {
            q: "Preamble includes:",
            opts: ["Federal", "Democratic", "Sovereign", "All of these"],
            ans: 3,
            exp: "Sovereign, Socialist, Secular, Democratic Republic.",
          },
          {
            q: "Globalisation refers to:",
            opts: [
              "Only trade",
              "Integration of world economies",
              "Cultural exchange only",
              "Political unity",
            ],
            ans: 1,
            exp: "Integration of economies & cultures.",
          },
          {
            q: '"Sorrow of China":',
            opts: [
              "Yangtze",
              "Yellow River (Huang He)",
              "Pearl River",
              "Mekong",
            ],
            ans: 1,
            exp: "Huang He.",
          },
          {
            q: "DPSPs in Part:",
            opts: ["II", "III", "IV", "V"],
            ans: 2,
            exp: "Part IV (Articles 36–51).",
          },
          {
            q: "HDI introduced by:",
            opts: ["World Bank", "IMF", "UNDP", "WHO"],
            ans: 2,
            exp: "UNDP 1990.",
          },
          {
            q: "Ozone depletion caused by:",
            opts: ["CO2", "SO2", "CFCs", "NO2"],
            ans: 2,
            exp: "CFCs.",
          },
          {
            q: "NOT a cause of World War I:",
            opts: [
              "Nationalism",
              "Imperialism",
              "Nuclear weapons",
              "Alliance system",
            ],
            ans: 2,
            exp: "Nuclear weapons came in 1945.",
          },
          {
            q: "Voting age lowered to 18 by ___ Amendment:",
            opts: ["42nd", "44th", "61st", "73rd"],
            ans: 2,
            exp: "61st Amendment (1988).",
          },
          {
            q: "NAM founded by:",
            opts: [
              "Nehru,Nasser,Tito",
              "Churchill,Roosevelt,Stalin",
              "Kennedy,Khrushchev,Mao",
              "Gandhi,Jinnah,Ambedkar",
            ],
            ans: 0,
            exp: "Nehru, Nasser, Tito (1961).",
          },
          {
            q: "Inflation =",
            opts: [
              "Decrease in prices",
              "Sustained increase in price level",
              "Increase in production",
              "Decrease in unemployment",
            ],
            ans: 1,
            exp: "Sustained rise in general price level.",
          },
          {
            q: '"Cold War" refers to:',
            opts: [
              "War in cold countries",
              "Ideological conflict USA vs USSR",
              "Nuclear war",
              "Trade war",
            ],
            ans: 1,
            exp: "1947–1991 geopolitical rivalry.",
          },
          {
            q: "Sustainable development example:",
            opts: [
              "Deforestation",
              "Solar energy use",
              "Over-mining",
              "Burning fossil fuels",
            ],
            ans: 1,
            exp: "Solar energy.",
          },
          {
            q: "UDHR adopted in:",
            opts: ["1945", "1947", "1948", "1950"],
            ans: 2,
            exp: "10 December 1948.",
          },
          {
            q: "Right to Education — Article:",
            opts: ["Article 14", "Article 21A", "Article 19", "Article 32"],
            ans: 1,
            exp: "Article 21A (86th Amendment 2002).",
          },
          {
            q: "UN headquarters:",
            opts: ["Geneva", "London", "New York", "Paris"],
            ans: 2,
            exp: "New York.",
          },
          {
            q: "Market economy based on:",
            opts: [
              "Socialist model",
              "Command model",
              "Market forces",
              "Mixed model",
            ],
            ans: 2,
            exp: "Supply and demand.",
          },
          {
            q: '"Poverty as capability deprivation" — view of:',
            opts: ["Adam Smith", "Amartya Sen", "Karl Marx", "J.M. Keynes"],
            ans: 1,
            exp: "Amartya Sen (Nobel 1998).",
          },
        ],
      },
      {
        name: "English",
        icon: "📝",
        color: "#2980b9",
        qs: [
          {
            q: "Oxymoron example:",
            opts: [
              "As busy as a bee",
              "Open secret",
              "She runs fast",
              "The tall tree",
            ],
            ans: 1,
            exp: '"Open secret" — contradictory terms.',
          },
          {
            q: '"The wind whispered" — figure of speech:',
            opts: ["Simile", "Metaphor", "Personification", "Hyperbole"],
            ans: 2,
            exp: "Personification.",
          },
          {
            q: "Subjunctive mood expresses:",
            opts: ["Fact", "Command", "Wish or hypothesis", "Question"],
            ans: 2,
            exp: '"If I were you…"',
          },
          {
            q: "Correctly punctuated:",
            opts: [
              "Its a dogs life.",
              "It's a dog's life.",
              "Its a dog's life.",
              "It's a dogs life.",
            ],
            ans: 1,
            exp: '"It\'s"=it is; "dog\'s"=possessive.',
          },
          {
            q: 'Synonym of "ephemeral":',
            opts: ["Permanent", "Transient", "Ancient", "Robust"],
            ans: 1,
            exp: "Lasting briefly.",
          },
          {
            q: "Future perfect tense:",
            opts: [
              "She will eat.",
              "She will have eaten by noon.",
              "She was eating.",
              "She has eaten.",
            ],
            ans: 1,
            exp: '"Will have eaten."',
          },
          {
            q: "Elegy is a poem that:",
            opts: [
              "Celebrates hero",
              "Mourns the dead",
              "Describes nature",
              "Praises God",
            ],
            ans: 1,
            exp: "Lament for the dead.",
          },
          {
            q: 'Antonym of "loquacious":',
            opts: ["Talkative", "Verbose", "Taciturn", "Eloquent"],
            ans: 2,
            exp: "Taciturn = habitually silent.",
          },
          {
            q: 'Gerund in "Swimming is good exercise":',
            opts: ["is", "good", "Swimming", "exercise"],
            ans: 2,
            exp: '"Swimming" = verb used as noun.',
          },
          {
            q: '"It was the best of times, it was the worst…" — device:',
            opts: ["Alliteration", "Anaphora", "Metaphor", "Simile"],
            ans: 1,
            exp: "Anaphora = repetition at clause start.",
          },
          {
            q: '"Neither boys nor teacher ___ ready":',
            opts: ["were", "are", "was", "been"],
            ans: 2,
            exp: "Closer subject (teacher) singular → was.",
          },
          {
            q: "Soliloquy = character:",
            opts: [
              "Speaks to another",
              "Speaks thoughts aloud alone",
              "Sings a song",
              "Fights another",
            ],
            ans: 1,
            exp: "Inner thoughts aloud on stage.",
          },
          {
            q: '"Although it was raining, we went out." — clause type:',
            opts: [
              "Independent",
              "Noun clause",
              "Adverbial clause",
              "Adjective clause",
            ],
            ans: 2,
            exp: "Adverbial clause of concession.",
          },
          {
            q: '"Pride and Prejudice" author:',
            opts: [
              "Charlotte Brontë",
              "Emily Brontë",
              "Jane Austen",
              "George Eliot",
            ],
            ans: 2,
            exp: "Jane Austen (1813).",
          },
          {
            q: 'Antonym of "ambiguous":',
            opts: ["Unclear", "Vague", "Unambiguous/Clear", "Obscure"],
            ans: 2,
            exp: "Clear/unambiguous.",
          },
          {
            q: "Alliteration example:",
            opts: [
              "She sells seashells",
              "As brave as a lion",
              "The night was dark",
              "He ran quickly",
            ],
            ans: 0,
            exp: "Repetition of consonant sounds.",
          },
          {
            q: '"Denouement" refers to:',
            opts: [
              "Climax",
              "Rising action",
              "Resolution/final outcome",
              "Introduction",
            ],
            ans: 2,
            exp: "Final resolution after climax.",
          },
          {
            q: "Correct semicolon use:",
            opts: [
              "I love English; and Maths.",
              "I love English; I enjoy Maths too.",
              "I love; English.",
              "I; love English.",
            ],
            ans: 1,
            exp: "Links two independent clauses.",
          },
          {
            q: '"Pathetic fallacy" means:',
            opts: [
              "False pity",
              "Human emotions attributed to nature",
              "Extreme exaggeration",
              "Story about animals",
            ],
            ans: 1,
            exp: '"The angry storm."',
          },
          {
            q: '"Life is a journey" — device:',
            opts: ["Simile", "Hyperbole", "Metaphor", "Onomatopoeia"],
            ans: 2,
            exp: "Metaphor — direct comparison.",
          },
        ],
      },
    ],
  },
  /* ══════════════════════════════════════
   AMU ENTRANCE — CLASS-WISE (6 / 9 / 11)
   Different questions from JMI
   Each: Maths(30)+Science(25)+SocSci(25)+English(20)=100 Qs
══════════════════════════════════════ */
  amu_6: {
    title: "AMU Entrance — Class 6",
    subject: "Maths(30)·Science(25)·Social Science(25)·English(20)",
    marks: "+1 / 0",
    time: 120,
    sectioned: true,
    sections: [
      {
        name: "Mathematics",
        icon: "📐",
        color: "#e67e22",
        qs: [
          {
            q: "What is 325 + 468?",
            opts: ["793", "783", "803", "773"],
            ans: 0,
            exp: "325+468=793.",
          },
          {
            q: "What is 900 - 347?",
            opts: ["553", "563", "543", "573"],
            ans: 0,
            exp: "900-347=553.",
          },
          {
            q: "Multiply: 24 × 5 =",
            opts: ["100", "110", "120", "130"],
            ans: 2,
            exp: "24×5=120.",
          },
          {
            q: "Divide: 144 ÷ 12 =",
            opts: ["10", "11", "12", "13"],
            ans: 2,
            exp: "144÷12=12.",
          },
          {
            q: "Which is the largest? 2/3, 3/4, 1/2, 5/6",
            opts: ["2/3", "3/4", "1/2", "5/6"],
            ans: 3,
            exp: "5/6≈0.833 is largest.",
          },
          {
            q: "Find: 3/5 + 2/5 =",
            opts: ["5/10", "1", "5/5", "6/10"],
            ans: 1,
            exp: "5/5=1.",
          },
          {
            q: "Square of 9:",
            opts: ["18", "72", "81", "90"],
            ans: 2,
            exp: "9²=81.",
          },
          {
            q: "Which number is divisible by 6?",
            opts: ["14", "20", "24", "26"],
            ans: 2,
            exp: "24÷6=4.",
          },
          {
            q: "Perimeter of rectangle l=8, b=3:",
            opts: ["22 cm", "24 cm", "11 cm", "16 cm"],
            ans: 0,
            exp: "2(8+3)=22 cm.",
          },
          {
            q: "Simplify: 3/9 =",
            opts: ["1/2", "1/3", "2/3", "3/6"],
            ans: 1,
            exp: "3/9=1/3.",
          },
          {
            q: "Place value of 5 in 1,5,432:",
            opts: ["5", "50", "500", "5000"],
            ans: 3,
            exp: "Thousands place = 5000.",
          },
          {
            q: "What is 20% of 150?",
            opts: ["25", "30", "35", "20"],
            ans: 1,
            exp: "20/100×150=30.",
          },
          {
            q: "What is the next prime after 7?",
            opts: ["8", "9", "10", "11"],
            ans: 3,
            exp: "11 is prime.",
          },
          {
            q: "Sides of a triangle = 5,7,9. Perimeter:",
            opts: ["19", "20", "21", "22"],
            ans: 2,
            exp: "5+7+9=21.",
          },
          {
            q: "Area of square side 6 cm:",
            opts: ["12 cm²", "24 cm²", "36 cm²", "48 cm²"],
            ans: 2,
            exp: "6²=36 cm².",
          },
          {
            q: "Round 2847 to nearest thousand:",
            opts: ["2000", "3000", "2800", "2900"],
            ans: 1,
            exp: "847>500 → 3000.",
          },
          {
            q: "If 5x = 35, then x =",
            opts: ["5", "6", "7", "8"],
            ans: 2,
            exp: "x=35/5=7.",
          },
          {
            q: "7 + 3 × 4 - 2 = (BODMAS)",
            opts: ["17", "18", "40", "16"],
            ans: 0,
            exp: "7+12-2=17.",
          },
          {
            q: "LCM of 6 and 8:",
            opts: ["24", "12", "48", "6"],
            ans: 0,
            exp: "LCM(6,8)=24.",
          },
          {
            q: "HCF of 20 and 30:",
            opts: ["5", "10", "15", "20"],
            ans: 1,
            exp: "HCF=10.",
          },
          {
            q: "What is 1.5 + 2.3?",
            opts: ["3.6", "3.8", "3.5", "4.0"],
            ans: 1,
            exp: "1.5+2.3=3.8.",
          },
          {
            q: "Diameter of circle with radius 7 cm:",
            opts: ["7 cm", "14 cm", "21 cm", "28 cm"],
            ans: 1,
            exp: "d=2r=14 cm.",
          },
          {
            q: "If I buy 3 books at Rs.15 each, total cost:",
            opts: ["Rs.30", "Rs.35", "Rs.40", "Rs.45"],
            ans: 3,
            exp: "3×15=Rs.45.",
          },
          {
            q: "What fraction of 60 is 15?",
            opts: ["1/2", "1/3", "1/4", "1/5"],
            ans: 2,
            exp: "15/60=1/4.",
          },
          {
            q: "Successor of 9999:",
            opts: ["9990", "9998", "10000", "10001"],
            ans: 2,
            exp: "9999+1=10000.",
          },
          {
            q: "Write in Roman numerals: 40",
            opts: ["XXXX", "XL", "LX", "VX"],
            ans: 1,
            exp: "XL=40.",
          },
          {
            q: "Temperature at morning 8°C, afternoon 22°C. Rise:",
            opts: ["14°C", "12°C", "10°C", "16°C"],
            ans: 0,
            exp: "22-8=14°C.",
          },
          {
            q: "Which shape has no corners?",
            opts: ["Triangle", "Square", "Circle", "Rectangle"],
            ans: 2,
            exp: "Circle has no corners.",
          },
          {
            q: "Find missing: 4, 8, __, 16, 20",
            opts: ["10", "11", "12", "13"],
            ans: 2,
            exp: "+4 pattern: 12.",
          },
          {
            q: "A clock shows 3:00. Angle between hands:",
            opts: ["60°", "90°", "120°", "45°"],
            ans: 1,
            exp: "At 3:00 angle = 90°.",
          },
        ],
      },
      {
        name: "Science",
        icon: "🔬",
        color: "#27ae60",
        qs: [
          {
            q: "Which planet is largest in solar system?",
            opts: ["Saturn", "Mars", "Jupiter", "Neptune"],
            ans: 2,
            exp: "Jupiter is the largest planet.",
          },
          {
            q: "What do plants need for photosynthesis?",
            opts: [
              "Only water",
              "Only sunlight",
              "CO2, water & sunlight",
              "O2 & water",
            ],
            ans: 2,
            exp: "CO2+H2O+light → glucose+O2.",
          },
          {
            q: "Which part of plant absorbs water from soil?",
            opts: ["Leaves", "Stem", "Roots", "Flowers"],
            ans: 2,
            exp: "Root hairs absorb water.",
          },
          {
            q: "How many teeth does an adult human have?",
            opts: ["28", "30", "32", "36"],
            ans: 2,
            exp: "32 permanent teeth including wisdom teeth.",
          },
          {
            q: "Mosquito bite causes which disease?",
            opts: ["Typhoid", "Malaria", "Jaundice", "Cholera"],
            ans: 1,
            exp: "Anopheles mosquito carries malaria parasite.",
          },
          {
            q: "Which sense organ is used for smelling?",
            opts: ["Eyes", "Ears", "Nose", "Tongue"],
            ans: 2,
            exp: "Nose (olfactory organ) detects smell.",
          },
          {
            q: "What is the outer covering of a seed called?",
            opts: ["Fruit", "Seed coat (testa)", "Petal", "Husk"],
            ans: 1,
            exp: "Seed coat/testa protects the embryo.",
          },
          {
            q: "Which fuel is used in LPG cylinders?",
            opts: ["Petrol", "Kerosene", "Liquefied Petroleum Gas", "Diesel"],
            ans: 2,
            exp: "LPG = butane/propane mixture.",
          },
          {
            q: "How does a fish breathe?",
            opts: ["Lungs", "Gills", "Skin", "Nostrils"],
            ans: 1,
            exp: "Fish breathe through gills.",
          },
          {
            q: "Which of these is NOT a source of light?",
            opts: ["Sun", "Electric bulb", "Moon", "Fire"],
            ans: 2,
            exp: "Moon reflects sunlight — not a light source itself.",
          },
          {
            q: "Which metal is used in making electrical wires?",
            opts: ["Iron", "Gold", "Copper", "Aluminium"],
            ans: 2,
            exp: "Copper — excellent conductor.",
          },
          {
            q: "Wind is caused by:",
            opts: [
              "Rotation of Earth",
              "Unequal heating of air",
              "Rain",
              "Ocean currents",
            ],
            ans: 1,
            exp: "Unequal heating creates pressure differences → wind.",
          },
          {
            q: "What is ice (solid water) called?",
            opts: ["Steam", "Vapour", "Ice", "All are water"],
            ans: 2,
            exp: "Solid state of water = ice.",
          },
          {
            q: "Which part of eye controls light entry?",
            opts: ["Retina", "Cornea", "Pupil", "Iris"],
            ans: 3,
            exp: "Iris controls pupil size → regulates light.",
          },
          {
            q: "Frogs live on land and in water — they are:",
            opts: ["Mammals", "Reptiles", "Amphibians", "Birds"],
            ans: 2,
            exp: "Amphibians live in both water and on land.",
          },
          {
            q: "Kitchen waste can be converted to compost by:",
            opts: [
              "Burning",
              "Mixing with chemicals",
              "Bacteria/earthworms",
              "Freezing",
            ],
            ans: 2,
            exp: "Microorganisms decompose organic waste into compost.",
          },
          {
            q: "Which organ filters blood?",
            opts: ["Heart", "Liver", "Lungs", "Kidney"],
            ans: 3,
            exp: "Kidneys filter blood and produce urine.",
          },
          {
            q: "The Sun rises in the:",
            opts: ["West", "North", "East", "South"],
            ans: 2,
            exp: "Earth rotates from west to east — Sun appears to rise in East.",
          },
          {
            q: "Milk is a:",
            opts: ["Element", "Mixture", "Compound", "Pure substance"],
            ans: 1,
            exp: "Milk = mixture of water, fats, proteins, etc.",
          },
          {
            q: "What makes bread dough rise?",
            opts: ["Salt", "Sugar", "Yeast", "Baking soda"],
            ans: 2,
            exp: "Yeast ferments dough, producing CO2 which makes it rise.",
          },
          {
            q: "Which bird cannot fly?",
            opts: ["Eagle", "Sparrow", "Ostrich", "Parrot"],
            ans: 2,
            exp: "Ostrich — heavy body, tiny wings.",
          },
          {
            q: "The hardest part of human body:",
            opts: ["Bone", "Nail", "Tooth enamel", "Hair"],
            ans: 2,
            exp: "Tooth enamel = hardest substance in human body.",
          },
          {
            q: "What happens to water when cooled to 0°C?",
            opts: ["Evaporates", "Boils", "Freezes", "Expands to gas"],
            ans: 2,
            exp: "Water freezes (solidifies) at 0°C.",
          },
          {
            q: "Which planet has the most moons?",
            opts: ["Mars", "Saturn", "Jupiter", "Uranus"],
            ans: 1,
            exp: "Saturn has the most confirmed moons (100+).",
          },
          {
            q: "Which gas supports burning?",
            opts: ["CO2", "N2", "O2", "H2"],
            ans: 2,
            exp: "Oxygen supports combustion.",
          },
        ],
      },
      {
        name: "Social Science",
        icon: "🌍",
        color: "#c0392b",
        qs: [
          {
            q: "AMU is located in which city?",
            opts: ["Delhi", "Agra", "Aligarh", "Lucknow"],
            ans: 2,
            exp: "Aligarh Muslim University, Aligarh, UP.",
          },
          {
            q: "Founder of AMU:",
            opts: [
              "Aurangzeb",
              "Sir Syed Ahmad Khan",
              "Bahadur Shah",
              "Tipu Sultan",
            ],
            ans: 1,
            exp: "Sir Syed Ahmad Khan (1875).",
          },
          {
            q: "National bird of India:",
            opts: ["Sparrow", "Eagle", "Peacock", "Parrot"],
            ans: 2,
            exp: "Peacock (1963).",
          },
          {
            q: "Which river flows through Agra (near Taj Mahal)?",
            opts: ["Ganga", "Yamuna", "Brahmaputra", "Godavari"],
            ans: 1,
            exp: "Yamuna river.",
          },
          {
            q: "Capital of Uttar Pradesh:",
            opts: ["Agra", "Varanasi", "Lucknow", "Allahabad"],
            ans: 2,
            exp: "Lucknow.",
          },
          {
            q: "India's national flower:",
            opts: ["Rose", "Sunflower", "Lotus", "Marigold"],
            ans: 2,
            exp: "Lotus.",
          },
          {
            q: "Which direction does the Sun set?",
            opts: ["East", "North", "West", "South"],
            ans: 2,
            exp: "West.",
          },
          {
            q: "How many days in a week?",
            opts: ["5", "6", "7", "8"],
            ans: 2,
            exp: "7 days.",
          },
          {
            q: "Smallest continent:",
            opts: ["Africa", "Europe", "Australia", "South America"],
            ans: 2,
            exp: "Australia.",
          },
          {
            q: "Who was the first President of India?",
            opts: ["Nehru", "Ambedkar", "Rajendra Prasad", "Patel"],
            ans: 2,
            exp: "Dr. Rajendra Prasad.",
          },
          {
            q: "Currency of India:",
            opts: ["Dollar", "Pound", "Rupee", "Euro"],
            ans: 2,
            exp: "Indian Rupee (₹).",
          },
          {
            q: "National language of India:",
            opts: ["English", "Hindi", "Urdu", "Sanskrit"],
            ans: 1,
            exp: "Hindi is the official language (Article 343).",
          },
          {
            q: "The Taj Mahal was built by:",
            opts: ["Akbar", "Aurangzeb", "Shah Jahan", "Humayun"],
            ans: 2,
            exp: "Shah Jahan for Mumtaz Mahal.",
          },
          {
            q: "Which ocean lies to the west of India?",
            opts: ["Pacific", "Atlantic", "Indian", "Arabian Sea"],
            ans: 3,
            exp: "Arabian Sea (part of Indian Ocean) to west.",
          },
          {
            q: "India has ___ states:",
            opts: ["25", "26", "28", "30"],
            ans: 2,
            exp: "28 states.",
          },
          {
            q: "How many continents are there?",
            opts: ["5", "6", "7", "8"],
            ans: 2,
            exp: "7 continents.",
          },
          {
            q: "Which is NOT a neighbouring country of India?",
            opts: ["Pakistan", "Bangladesh", "China", "Iraq"],
            ans: 3,
            exp: "Iraq does not share a border with India.",
          },
          {
            q: "Gandhiji's weapon for independence was:",
            opts: ["War", "Terrorism", "Non-violence (Ahimsa)", "Weapons"],
            ans: 2,
            exp: "Ahimsa = non-violence.",
          },
          {
            q: "Monsoon season in India is during:",
            opts: [
              "Dec–Feb",
              "March–May",
              "June–September",
              "October–November",
            ],
            ans: 2,
            exp: "Southwest monsoon: June–September.",
          },
          {
            q: "India is in which continent?",
            opts: ["Africa", "Europe", "Asia", "Australia"],
            ans: 2,
            exp: "Asia.",
          },
          {
            q: "Which is the smallest district in India?",
            opts: ["Mahe", "Mumbai City", "Puducherry", "Goa"],
            ans: 0,
            exp: "Mahe (Puducherry) = smallest district ~9 km².",
          },
          {
            q: "What colour is the Ashoka Chakra in Indian flag?",
            opts: ["Black", "Green", "Blue", "Red"],
            ans: 2,
            exp: "Navy blue.",
          },
          {
            q: "On which date do we celebrate Teachers' Day?",
            opts: ["2 Oct", "26 Jan", "5 Sept", "15 Aug"],
            ans: 2,
            exp: "5 September — birthday of Dr. S. Radhakrishnan.",
          },
          {
            q: "The Ganga river originates from:",
            opts: ["Manasarovar", "Gangotri Glacier", "Yamunotri", "Kedarnath"],
            ans: 1,
            exp: "Gangotri Glacier, Uttarakhand.",
          },
          {
            q: "Which state is famous for the Sundarbans?",
            opts: ["Odisha", "Assam", "West Bengal", "Tamil Nadu"],
            ans: 2,
            exp: "Sundarbans mangrove forest in West Bengal.",
          },
        ],
      },
      {
        name: "English",
        icon: "📝",
        color: "#2980b9",
        qs: [
          {
            q: 'Opposite of "hot":',
            opts: ["Warm", "Cool", "Cold", "Mild"],
            ans: 2,
            exp: "Cold is the antonym of hot.",
          },
          {
            q: 'Plural of "mouse":',
            opts: ["Mouses", "Mousees", "Mice", "Mices"],
            ans: 2,
            exp: "Mouse → mice (irregular).",
          },
          {
            q: 'Choose correct: "I ___ my homework yesterday."',
            opts: ["do", "does", "did", "doing"],
            ans: 2,
            exp: "Past tense → did.",
          },
          {
            q: 'What type of word is "beautiful"?',
            opts: ["Noun", "Verb", "Adverb", "Adjective"],
            ans: 3,
            exp: '"Beautiful" describes a noun = adjective.',
          },
          {
            q: '"The cat sat ___ the mat."',
            opts: ["in", "on", "at", "by"],
            ans: 1,
            exp: '"on" — on top of the mat.',
          },
          {
            q: 'Which word rhymes with "light"?',
            opts: ["Sit", "Night", "Bite", "Both B & C"],
            ans: 3,
            exp: '"Night" and "bite" rhyme with "light".',
          },
          {
            q: 'Sentence type: "What a beautiful day!"',
            opts: ["Declarative", "Interrogative", "Imperative", "Exclamatory"],
            ans: 3,
            exp: "Exclamatory sentence shows strong feeling.",
          },
          {
            q: '"He is taller ___ his brother."',
            opts: ["then", "than", "that", "to"],
            ans: 1,
            exp: '"Than" used in comparisons.',
          },
          {
            q: 'Noun in "The bird sings sweetly":',
            opts: ["bird", "sings", "sweetly", "The"],
            ans: 0,
            exp: '"Bird" is a noun.',
          },
          {
            q: 'Opposite of "old":',
            opts: ["Ancient", "Young", "Elderly", "Senior"],
            ans: 1,
            exp: "Young.",
          },
          {
            q: 'How many vowels in "EDUCATION"?',
            opts: ["4", "5", "6", "3"],
            ans: 1,
            exp: "E,U,A,I,O = 5 vowels.",
          },
          {
            q: '"She ___ a doctor." (simple present)',
            opts: ["am", "is", "are", "be"],
            ans: 1,
            exp: '"She" → is.',
          },
          {
            q: "Which is a question?",
            opts: ["Go away.", "How are you?", "Come here!", "I am fine."],
            ans: 1,
            exp: "Questions end with ?.",
          },
          {
            q: 'Synonym of "big":',
            opts: ["Small", "Tiny", "Large", "Narrow"],
            ans: 2,
            exp: "Large.",
          },
          {
            q: 'Letters in "ALIGARH":',
            opts: ["6", "7", "8", "9"],
            ans: 1,
            exp: "A-L-I-G-A-R-H = 7 letters.",
          },
          {
            q: '"Quickly" describes ___ type of word:',
            opts: ["Noun", "Verb", "Adverb", "Adjective"],
            ans: 2,
            exp: "Adverb — modifies verb.",
          },
          {
            q: 'Choose correct: "There ___ many students."',
            opts: ["is", "am", "are", "be"],
            ans: 2,
            exp: '"Many" = plural → are.',
          },
          {
            q: 'Opposite of "inside":',
            opts: ["Away", "Outside", "Beyond", "Beneath"],
            ans: 1,
            exp: "Outside.",
          },
          {
            q: 'Identify verb: "The children play in the park."',
            opts: ["children", "play", "park", "The"],
            ans: 1,
            exp: '"play" = action word.',
          },
          {
            q: "Which is a compound word?",
            opts: ["Beautiful", "Sunflower", "Quickly", "Running"],
            ans: 1,
            exp: '"Sunflower" = sun + flower.',
          },
        ],
      },
    ],
  },

  amu_9: {
    title: "AMU Entrance — Class 9",
    subject: "Maths(30)·Science(25)·Social Science(25)·English(20)",
    marks: "+1 / 0",
    time: 120,
    sectioned: true,
    sections: [
      {
        name: "Mathematics",
        icon: "📐",
        color: "#e67e22",
        qs: [
          {
            q: "Square root of 169:",
            opts: ["11", "12", "13", "14"],
            ans: 2,
            exp: "13×13=169.",
          },
          {
            q: "What is 15²?",
            opts: ["175", "200", "225", "250"],
            ans: 2,
            exp: "225.",
          },
          {
            q: "Train at 80 km/h. Distance in 2.5 hours:",
            opts: ["160 km", "180 km", "200 km", "210 km"],
            ans: 2,
            exp: "80×2.5=200 km.",
          },
          {
            q: "5 books cost Rs.125. Cost of 8 books:",
            opts: ["Rs.180", "Rs.190", "Rs.200", "Rs.210"],
            ans: 2,
            exp: "1 book=Rs.25; 8×25=Rs.200.",
          },
          {
            q: "Factorize: x²-16",
            opts: ["(x-4)²", "(x+4)(x-4)", "(x+8)(x-8)", "x(x-16)"],
            ans: 1,
            exp: "Difference of squares.",
          },
          {
            q: "Solve: 4x+8=24",
            opts: ["3", "4", "5", "6"],
            ans: 1,
            exp: "4x=16 → x=4.",
          },
          {
            q: "Area of triangle base=12, height=8:",
            opts: ["48 m²", "96 m²", "40 m²", "60 m²"],
            ans: 0,
            exp: "½×12×8=48 m².",
          },
          {
            q: "What is 30% of 250?",
            opts: ["65", "70", "75", "80"],
            ans: 2,
            exp: "30/100×250=75.",
          },
          {
            q: "LCM of 8, 12, 16:",
            opts: ["24", "32", "48", "96"],
            ans: 2,
            exp: "LCM=48.",
          },
          {
            q: "HCF of 45 and 75:",
            opts: ["5", "10", "15", "25"],
            ans: 2,
            exp: "HCF=15.",
          },
          {
            q: "Sum of interior angles of pentagon:",
            opts: ["360°", "450°", "540°", "720°"],
            ans: 2,
            exp: "(5-2)×180=540°.",
          },
          {
            q: "Which is a perfect cube?",
            opts: ["8", "9", "12", "18"],
            ans: 0,
            exp: "2³=8.",
          },
          {
            q: "If x+y=10 and x-y=4, then x=",
            opts: ["5", "6", "7", "8"],
            ans: 2,
            exp: "2x=14 → x=7.",
          },
          {
            q: "Volume of cuboid 5×4×3 cm:",
            opts: ["36 cm³", "48 cm³", "60 cm³", "72 cm³"],
            ans: 2,
            exp: "5×4×3=60 cm³.",
          },
          {
            q: "Compound interest on Rs.1000 at 10% for 2 years:",
            opts: ["Rs.100", "Rs.200", "Rs.210", "Rs.220"],
            ans: 2,
            exp: "CI=1000(1.1²-1)=1000×0.21=Rs.210.",
          },
          {
            q: "Which is irrational?",
            opts: ["0.5", "√25", "2/3", "√3"],
            ans: 3,
            exp: "√3 cannot be expressed as fraction.",
          },
          {
            q: "If ratio 3:5 and total=40, larger part=",
            opts: ["15", "20", "25", "30"],
            ans: 2,
            exp: "(5/8)×40=25.",
          },
          {
            q: "Median of 4,8,2,6,10:",
            opts: ["4", "5", "6", "8"],
            ans: 2,
            exp: "Sorted: 2,4,6,8,10 → middle=6.",
          },
          {
            q: "Profit%: CP=600, SP=750:",
            opts: ["20%", "25%", "30%", "15%"],
            ans: 1,
            exp: "150/600×100=25%.",
          },
          {
            q: "Speed of train=60km/h. Time for 150 km:",
            opts: ["2 h", "2.5 h", "3 h", "3.5 h"],
            ans: 1,
            exp: "150/60=2.5 h.",
          },
          {
            q: "Number of diagonals in a quadrilateral:",
            opts: ["1", "2", "3", "4"],
            ans: 1,
            exp: "4(4-3)/2=2.",
          },
          {
            q: "Find x: 2x/3=8",
            opts: ["10", "11", "12", "13"],
            ans: 2,
            exp: "2x=24 → x=12.",
          },
          {
            q: "√225=",
            opts: ["13", "14", "15", "16"],
            ans: 2,
            exp: "15×15=225.",
          },
          {
            q: "Angle in semicircle:",
            opts: ["45°", "60°", "90°", "180°"],
            ans: 2,
            exp: "Angle in semicircle=90° (Thales' theorem).",
          },
          {
            q: "If P(A)=3/5, P(not A)=",
            opts: ["2/5", "1/5", "3/5", "4/5"],
            ans: 0,
            exp: "1-3/5=2/5.",
          },
          {
            q: "Mode of 3,5,5,7,9,5,3:",
            opts: ["3", "5", "7", "9"],
            ans: 1,
            exp: "5 appears 3 times.",
          },
          {
            q: "Perimeter of rhombus with side 9cm:",
            opts: ["18 cm", "27 cm", "36 cm", "45 cm"],
            ans: 2,
            exp: "4×9=36 cm.",
          },
          {
            q: "Value of √(0.04):",
            opts: ["0.02", "0.2", "0.4", "2"],
            ans: 1,
            exp: "√(4/100)=2/10=0.2.",
          },
          {
            q: "If f(x)=3x-1, f(4)=",
            opts: ["10", "11", "12", "13"],
            ans: 1,
            exp: "3×4-1=11.",
          },
          {
            q: "Circumference of circle d=14cm (π=22/7):",
            opts: ["22 cm", "33 cm", "44 cm", "66 cm"],
            ans: 2,
            exp: "πd=22/7×14=44 cm.",
          },
        ],
      },
      {
        name: "Science",
        icon: "🔬",
        color: "#27ae60",
        qs: [
          {
            q: "Aligarh is famous for which industry?",
            opts: ["Textile", "Lock making", "Glassware", "Pottery"],
            ans: 1,
            exp: 'Aligarh is known as "lock city of India".',
          },
          {
            q: "Which acid is in lemon juice?",
            opts: ["Acetic acid", "Lactic acid", "Citric acid", "Formic acid"],
            ans: 2,
            exp: "Citric acid.",
          },
          {
            q: "Unit of electric current:",
            opts: ["Volt", "Ohm", "Ampere", "Watt"],
            ans: 2,
            exp: "Current measured in Amperes (A).",
          },
          {
            q: "What is the chemical symbol for iron?",
            opts: ["Ir", "Fe", "Fo", "In"],
            ans: 1,
            exp: "Fe from Latin Ferrum.",
          },
          {
            q: "Ohm's law: V=",
            opts: ["I/R", "IR", "I+R", "I-R"],
            ans: 1,
            exp: "V=IR.",
          },
          {
            q: "Which organ produces bile juice?",
            opts: ["Pancreas", "Kidney", "Liver", "Stomach"],
            ans: 2,
            exp: "Liver produces bile.",
          },
          {
            q: "What type of lens magnifies objects?",
            opts: ["Concave", "Convex", "Plane", "Bifocal"],
            ans: 1,
            exp: "Convex (converging) lens magnifies.",
          },
          {
            q: "Atomic number of Hydrogen:",
            opts: ["1", "2", "3", "4"],
            ans: 0,
            exp: "H has 1 proton.",
          },
          {
            q: "What gas do humans breathe out?",
            opts: ["O2", "N2", "CO2", "H2"],
            ans: 2,
            exp: "We exhale CO2.",
          },
          {
            q: "Which of these is a chemical change?",
            opts: [
              "Tearing paper",
              "Melting wax",
              "Burning wood",
              "Dissolving salt",
            ],
            ans: 2,
            exp: "Burning wood = irreversible chemical change.",
          },
          {
            q: "Speed = Distance/Time. Unit is:",
            opts: ["m", "m/s", "m/s²", "kg"],
            ans: 1,
            exp: "m/s (metre per second).",
          },
          {
            q: "Which planet has the Great Red Spot?",
            opts: ["Mars", "Saturn", "Neptune", "Jupiter"],
            ans: 3,
            exp: "Jupiter — a giant storm.",
          },
          {
            q: "Concave mirror focal length is:",
            opts: ["Positive", "Negative", "Zero", "Infinite"],
            ans: 1,
            exp: "Concave mirror f is negative (sign convention).",
          },
          {
            q: "Formula of carbon dioxide:",
            opts: ["CO", "CO2", "C2O", "C2O2"],
            ans: 1,
            exp: "CO2.",
          },
          {
            q: "Tissue connecting muscle to bone:",
            opts: ["Ligament", "Cartilage", "Tendon", "Nerve"],
            ans: 2,
            exp: "Tendon.",
          },
          {
            q: "Newton's 3rd law example:",
            opts: [
              "Car accelerating",
              "Rocket launching",
              "Ball rolling",
              "Pendulum swinging",
            ],
            ans: 1,
            exp: "Rocket: exhaust gas down, rocket goes up.",
          },
          {
            q: "Which metal does not rust?",
            opts: ["Iron", "Steel", "Gold", "Copper"],
            ans: 2,
            exp: "Gold does not oxidize.",
          },
          {
            q: "Which element is most abundant in human body?",
            opts: ["Carbon", "Nitrogen", "Oxygen", "Hydrogen"],
            ans: 2,
            exp: "Oxygen ~65% of body mass.",
          },
          {
            q: "Light travels fastest in:",
            opts: ["Water", "Glass", "Air", "Vacuum"],
            ans: 3,
            exp: "3×10⁸ m/s in vacuum.",
          },
          {
            q: "Which is a non-contact force?",
            opts: ["Friction", "Normal force", "Gravity", "Tension"],
            ans: 2,
            exp: "Gravity acts without contact.",
          },
          {
            q: "What causes seasons on Earth?",
            opts: [
              "Distance from Sun",
              "Earth's tilt on its axis",
              "Speed of rotation",
              "Moon's gravity",
            ],
            ans: 1,
            exp: "23.5° tilt causes seasons.",
          },
          {
            q: "Which metal is used in thermometers?",
            opts: ["Iron", "Copper", "Mercury", "Aluminium"],
            ans: 2,
            exp: "Mercury expands uniformly with temperature.",
          },
          {
            q: "Formula of baking soda:",
            opts: ["NaCl", "Na2CO3", "NaHCO3", "NaOH"],
            ans: 2,
            exp: "Sodium bicarbonate NaHCO3.",
          },
          {
            q: "Photosynthesis takes place in presence of:",
            opts: ["Darkness", "Sunlight", "Water only", "CO2 only"],
            ans: 1,
            exp: "Sunlight provides energy.",
          },
          {
            q: "The process of rain formation begins with:",
            opts: [
              "Evaporation",
              "Condensation",
              "Precipitation",
              "Collection",
            ],
            ans: 0,
            exp: "Water cycle starts with evaporation from water bodies.",
          },
        ],
      },
      {
        name: "Social Science",
        icon: "🌍",
        color: "#c0392b",
        qs: [
          {
            q: "AMU was established in year:",
            opts: ["1857", "1875", "1905", "1920"],
            ans: 1,
            exp: "MAO College founded 1875, became AMU 1920.",
          },
          {
            q: "Who was Sir Syed Ahmad Khan?",
            opts: [
              "A Mughal emperor",
              "Founder of AMU & Muslim reformer",
              "A freedom fighter",
              "A British officer",
            ],
            ans: 1,
            exp: "Sir Syed was a Muslim reformer and educator.",
          },
          {
            q: "Aligarh is in which division of UP?",
            opts: ["Agra", "Bareilly", "Aligarh", "Kanpur"],
            ans: 2,
            exp: "Aligarh division, Uttar Pradesh.",
          },
          {
            q: "Which river flows near Aligarh?",
            opts: ["Ganga", "Yamuna", "Kali Nadi", "Son"],
            ans: 2,
            exp: "Kali Nadi flows near Aligarh.",
          },
          {
            q: "The Mughal emperor who built the Red Fort in Delhi:",
            opts: ["Akbar", "Aurangzeb", "Shah Jahan", "Babur"],
            ans: 2,
            exp: "Shah Jahan built Red Fort (1648).",
          },
          {
            q: "Diwali is a festival of:",
            opts: ["Muslims", "Sikhs", "Hindus", "Christians"],
            ans: 2,
            exp: "Diwali = Hindu festival of lights.",
          },
          {
            q: "Eid-ul-Fitr marks the end of:",
            opts: ["Hajj", "Muharram", "Ramadan", "Shaban"],
            ans: 2,
            exp: "Eid-ul-Fitr celebrates end of Ramadan fasting.",
          },
          {
            q: "Gandhi was assassinated on:",
            opts: ["30 Jan 1948", "15 Aug 1947", "26 Jan 1950", "2 Oct 1948"],
            ans: 0,
            exp: "30 January 1948.",
          },
          {
            q: "Headquarters of United Nations:",
            opts: ["Geneva", "London", "New York", "Paris"],
            ans: 2,
            exp: "New York City.",
          },
          {
            q: "Which of these is a Union Territory of India?",
            opts: ["Goa", "Assam", "Delhi", "Bihar"],
            ans: 2,
            exp: "Delhi (NCT) is a Union Territory.",
          },
          {
            q: "Swami Vivekananda was born in:",
            opts: ["Delhi", "Kolkata", "Mumbai", "Varanasi"],
            ans: 1,
            exp: "Kolkata (Calcutta), 12 January 1863.",
          },
          {
            q: "Which is the highest court in India?",
            opts: [
              "High Court",
              "District Court",
              "Supreme Court",
              "Lok Adalat",
            ],
            ans: 2,
            exp: "Supreme Court of India.",
          },
          {
            q: "Which river is called Ganga of South?",
            opts: ["Godavari", "Krishna", "Kaveri", "Mahanadi"],
            ans: 0,
            exp: "Godavari is called Dakshina Ganga (Ganga of South).",
          },
          {
            q: "Which country gifted Statue of Liberty to USA?",
            opts: ["UK", "France", "Canada", "Germany"],
            ans: 1,
            exp: "France gifted it in 1886.",
          },
          {
            q: "What is the currency of Saudi Arabia?",
            opts: ["Dinar", "Riyal", "Dirham", "Toman"],
            ans: 1,
            exp: "Saudi Riyal.",
          },
          {
            q: 'The book "Amar Jawan" is related to:',
            opts: [
              "Indian soldiers",
              "Mughal history",
              "Sports",
              "Agriculture",
            ],
            ans: 0,
            exp: "Dedicated to unknown soldiers.",
          },
          {
            q: "Which is the largest Muslim country by population?",
            opts: ["Saudi Arabia", "Egypt", "Indonesia", "Pakistan"],
            ans: 2,
            exp: "Indonesia has the largest Muslim population.",
          },
          {
            q: "Chandragupta Maurya's advisor was:",
            opts: ["Birbal", "Chanakya", "Tansen", "Todar Mal"],
            ans: 1,
            exp: "Chanakya (Kautilya).",
          },
          {
            q: "The first telegraph line in India was laid in:",
            opts: ["1847", "1851", "1857", "1861"],
            ans: 1,
            exp: "First telegraph line Calcutta to Diamond Harbour (1851).",
          },
          {
            q: "Which state has the longest coastline in India?",
            opts: ["Maharashtra", "Odisha", "Tamil Nadu", "Gujarat"],
            ans: 3,
            exp: "Gujarat has longest coastline ~1,600 km.",
          },
          {
            q: "Satyamev Jayate is taken from:",
            opts: ["Rigveda", "Mundaka Upanishad", "Bhagavad Gita", "Ramayana"],
            ans: 1,
            exp: "From Mundaka Upanishad.",
          },
          {
            q: "Operation Flood was related to:",
            opts: [
              "Irrigation",
              "Milk production (White Revolution)",
              "Food grains",
              "Fish",
            ],
            ans: 1,
            exp: "Operation Flood by Dr. Verghese Kurien — White Revolution.",
          },
          {
            q: "Which is the national song of India?",
            opts: [
              "Jana Gana Mana",
              "Vande Mataram",
              "Saare Jahan se Accha",
              "Ae Mere Watan",
            ],
            ans: 1,
            exp: "Vande Mataram (national song); Jana Gana Mana (national anthem).",
          },
          {
            q: "The study of maps is called:",
            opts: ["Geology", "Cartography", "Geography", "Meteorology"],
            ans: 1,
            exp: "Cartography = making and studying maps.",
          },
          {
            q: "Which day is celebrated as World Environment Day?",
            opts: ["5 June", "22 April", "5 March", "10 October"],
            ans: 0,
            exp: "5 June — World Environment Day (since 1972).",
          },
        ],
      },
      {
        name: "English",
        icon: "📝",
        color: "#2980b9",
        qs: [
          {
            q: 'Correct: "She ___ to Aligarh last year."',
            opts: ["go", "goes", "went", "gone"],
            ans: 2,
            exp: "Past tense → went.",
          },
          {
            q: 'Antonym of "modern":',
            opts: ["New", "Recent", "Ancient", "Current"],
            ans: 2,
            exp: "Ancient.",
          },
          {
            q: 'Choose correct tense: "By tomorrow, she ___ the letter."',
            opts: ["writes", "wrote", "will have written", "has written"],
            ans: 2,
            exp: "Future perfect: will have written.",
          },
          {
            q: 'Synonym of "brave":',
            opts: ["Coward", "Timid", "Courageous", "Fearful"],
            ans: 2,
            exp: "Courageous.",
          },
          {
            q: "Fill: ___ Quran was revealed to Prophet Muhammad.",
            opts: ["A", "An", "The", "No article"],
            ans: 2,
            exp: '"The" — specific, unique book.',
          },
          {
            q: '"Neither the students nor the teacher ___ ready."',
            opts: ["were", "are", "was", "been"],
            ans: 2,
            exp: "Closer subject (teacher) → was.",
          },
          {
            q: 'Identify noun: "Honesty is the best policy."',
            opts: ["Honesty", "best", "policy", "Both A & C"],
            ans: 3,
            exp: '"Honesty" and "policy" are nouns.',
          },
          {
            q: 'Passive voice: "AMU students respect teachers."',
            opts: [
              "Teachers respect AMU students.",
              "Teachers are respected by AMU students.",
              "AMU students are respected.",
              "Teachers were respected.",
            ],
            ans: 1,
            exp: "Passive: teachers are respected by AMU students.",
          },
          {
            q: 'Preposition: "He is good ___ mathematics."',
            opts: ["in", "on", "at", "for"],
            ans: 2,
            exp: '"Good at" = correct idiom.',
          },
          {
            q: "Which sentence is in past continuous?",
            opts: [
              "She sang.",
              "She was singing.",
              "She has sung.",
              "She sings.",
            ],
            ans: 1,
            exp: '"Was singing" = past continuous.',
          },
          {
            q: 'Antonym of "expand":',
            opts: ["Grow", "Widen", "Contract", "Enlarge"],
            ans: 2,
            exp: "Contract.",
          },
          {
            q: 'Conjunction: "Study hard ___ you will fail."',
            opts: ["and", "but", "or", "otherwise"],
            ans: 3,
            exp: '"Otherwise" shows consequence.',
          },
          {
            q: '"He speaks fluently." — Adverb:',
            opts: ["He", "speaks", "fluently", "None"],
            ans: 2,
            exp: '"Fluently" modifies "speaks".',
          },
          {
            q: "Correct spelling:",
            opts: ["Seperate", "Separete", "Separate", "Separrate"],
            ans: 2,
            exp: "S-E-P-A-R-A-T-E.",
          },
          {
            q: 'Identify figure of speech: "As brave as a lion."',
            opts: ["Metaphor", "Simile", "Personification", "Hyperbole"],
            ans: 1,
            exp: 'Simile — comparison using "as".',
          },
          {
            q: 'Sentence type: "Please sit down."',
            opts: ["Declarative", "Exclamatory", "Imperative", "Interrogative"],
            ans: 2,
            exp: "Imperative = command/request.",
          },
          {
            q: '"The news ___ shocking." (correct verb)',
            opts: ["are", "were", "is", "have been"],
            ans: 2,
            exp: '"News" is singular → is.',
          },
          {
            q: 'Indirect: She said, "I will come tomorrow."',
            opts: [
              "She said she would come the next day.",
              "She said she will come tomorrow.",
              "She says she would come.",
              "She told she would come.",
            ],
            ans: 0,
            exp: "Will→would; tomorrow→next day.",
          },
          {
            q: 'Synonym of "enormous":',
            opts: ["Tiny", "Huge", "Average", "Small"],
            ans: 1,
            exp: "Enormous = huge.",
          },
          {
            q: 'Identify clause type: "The book that I read was interesting."',
            opts: [
              "Noun clause",
              "Adverbial clause",
              "Adjective/relative clause",
              "Main clause",
            ],
            ans: 2,
            exp: '"That I read" = adjective/relative clause modifying "book".',
          },
        ],
      },
    ],
  },

  amu_11: {
    title: "AMU Entrance — Class 11",
    subject: "Maths(30)·Science(25)·Social Science(25)·English(20)",
    marks: "+1 / 0",
    time: 120,
    sectioned: true,
    sections: [
      {
        name: "Mathematics",
        icon: "📐",
        color: "#e67e22",
        qs: [
          {
            q: "If 3x - 2 = 10, then x =",
            opts: ["3", "4", "5", "6"],
            ans: 1,
            exp: "3x=12 → x=4.",
          },
          {
            q: "Value of sin 30° × cos 60°:",
            opts: ["1/4", "1/2", "1", "1/3"],
            ans: 0,
            exp: "(1/2)×(1/2)=1/4.",
          },
          {
            q: "d/dx(x³)=",
            opts: ["x²", "3x", "3x²", "x³/3"],
            ans: 2,
            exp: "Power rule: 3x².",
          },
          {
            q: "∫x dx =",
            opts: ["x²", "x²/2 + C", "2x+C", "x+C"],
            ans: 1,
            exp: "∫x dx=x²/2+C.",
          },
          {
            q: "If A={2,4,6} and B={4,6,8}, A∪B=",
            opts: ["{2,4,6,8}", "{4,6}", "{2,4,6}", "{4,6,8}"],
            ans: 0,
            exp: "Union = all elements = {2,4,6,8}.",
          },
          {
            q: "log₂(8) =",
            opts: ["2", "3", "4", "8"],
            ans: 1,
            exp: "2³=8 → log₂(8)=3.",
          },
          {
            q: "Roots of x²-5x+6=0:",
            opts: ["1,6", "2,3", "3,4", "1,5"],
            ans: 1,
            exp: "(x-2)(x-3)=0 → x=2,3.",
          },
          {
            q: "P(A)=1/4, P(B)=1/3, independent. P(A∩B)=",
            opts: ["1/12", "1/7", "7/12", "1/2"],
            ans: 0,
            exp: "P(A)×P(B)=1/4×1/3=1/12.",
          },
          {
            q: "tan 60°=",
            opts: ["1", "√3", "1/√3", "√2"],
            ans: 1,
            exp: "tan 60°=√3.",
          },
          {
            q: "n(A)=4. Subsets of A=",
            opts: ["8", "12", "16", "4"],
            ans: 2,
            exp: "2⁴=16.",
          },
          {
            q: "AM of first 10 positive integers:",
            opts: ["5", "5.5", "6", "4.5"],
            ans: 1,
            exp: "55/10=5.5.",
          },
          {
            q: "Angle sum of hexagon interior angles:",
            opts: ["540°", "600°", "720°", "360°"],
            ans: 2,
            exp: "(6-2)×180=720°.",
          },
          {
            q: "If |x|=5, x=",
            opts: ["5 only", "-5 only", "±5", "0"],
            ans: 2,
            exp: "|x|=5 → x=±5.",
          },
          {
            q: "lim(x→2)(x²-4)/(x-2)=",
            opts: ["2", "4", "0", "∞"],
            ans: 1,
            exp: "Factor: (x+2)(x-2)/(x-2)→x+2=4.",
          },
          {
            q: "Which of following is not defined: log_a(b) when",
            opts: ["a=2,b=4", "a=10,b=0.1", "a=1,b=5", "a=3,b=9"],
            ans: 2,
            exp: "Base=1 makes logarithm undefined.",
          },
          {
            q: "In AP: a=3,d=4. 10th term=",
            opts: ["39", "40", "41", "43"],
            ans: 0,
            exp: "a+(n-1)d=3+9×4=39.",
          },
          {
            q: "Number of ways to arrange 4 people in a line:",
            opts: ["16", "24", "12", "8"],
            ans: 1,
            exp: "4!=24.",
          },
          {
            q: "cos(90°)=",
            opts: ["1", "0", "-1", "√2/2"],
            ans: 1,
            exp: "cos90°=0.",
          },
          {
            q: "Equation of line through (0,0) slope 3:",
            opts: ["y=3", "x=3", "y=3x", "3y=x"],
            ans: 2,
            exp: "y=mx=3x.",
          },
          {
            q: "Variance of 2,4,6 =",
            opts: ["2", "2.67", "4", "8/3"],
            ans: 1,
            exp: "Mean=4; variance=(4+0+4)/3=8/3≈2.67.",
          },
          {
            q: "x intercept of line 2x+3y=6:",
            opts: ["2", "3", "6", "1"],
            ans: 1,
            exp: "y=0: 2x=6 → x=3.",
          },
          {
            q: "Product of roots of 2x²-7x+3=0:",
            opts: ["7/2", "3/2", "7", "3"],
            ans: 1,
            exp: "c/a=3/2.",
          },
          {
            q: "Range of f(x)=|x|:",
            opts: ["All reals", "[0,∞)", "(-∞,0]", "[-1,1]"],
            ans: 1,
            exp: "|x|≥0 → range=[0,∞).",
          },
          {
            q: "n(AΔB) when n(A∩B)=3, n(A)=8, n(B)=7:",
            opts: ["5", "9", "10", "12"],
            ans: 1,
            exp: "|AΔB|=n(A)+n(B)-2n(A∩B)=8+7-6=9.",
          },
          {
            q: "cot 45°=",
            opts: ["0", "1", "√3", "1/√3"],
            ans: 1,
            exp: "cot45°=1.",
          },
          {
            q: "If 2ⁿ=64, n=",
            opts: ["5", "6", "7", "8"],
            ans: 1,
            exp: "2⁶=64.",
          },
          {
            q: "Midpoint of (2,4) and (8,10):",
            opts: ["(4,6)", "(5,7)", "(6,8)", "(10,14)"],
            ans: 1,
            exp: "(2+8)/2=5, (4+10)/2=7 → (5,7).",
          },
          {
            q: "∫₀¹ x dx =",
            opts: ["0", "1/2", "1", "2"],
            ans: 1,
            exp: "[x²/2]₀¹=1/2.",
          },
          {
            q: "In GP 2,6,18,… 5th term=",
            opts: ["54", "108", "162", "486"],
            ans: 2,
            exp: "ar⁴=2×81=162.",
          },
          {
            q: "Which is NOT a function of its domain?",
            opts: ["f(x)=x²", "f(x)=1/x (x≠0)", "y=±√x (x>0)", "f(x)=eˣ"],
            ans: 2,
            exp: "y=±√x gives two values per x — not a function.",
          },
        ],
      },
      {
        name: "Science",
        icon: "🔬",
        color: "#27ae60",
        qs: [
          {
            q: "Bond angle in water molecule (H2O):",
            opts: ["90°", "104.5°", "109.5°", "120°"],
            ans: 1,
            exp: "H-O-H bond angle≈104.5° due to lone pairs.",
          },
          {
            q: "Which law relates gas pressure and volume?",
            opts: ["Boyle's", "Charles's", "Dalton's", "Graham's"],
            ans: 0,
            exp: "Boyle's: P∝1/V at constant T.",
          },
          {
            q: "Centripetal acceleration formula:",
            opts: ["v²/r", "vr", "v/r²", "r/v²"],
            ans: 0,
            exp: "a=v²/r directed toward center.",
          },
          {
            q: "Electronegativity increases as we go:",
            opts: [
              "Down a group",
              "Across period (right)",
              "Down period",
              "Across period (left)",
            ],
            ans: 1,
            exp: "Electronegativity increases left→right in period.",
          },
          {
            q: "Which type of reaction is: A+BC→AC+B?",
            opts: [
              "Combination",
              "Decomposition",
              "Single displacement",
              "Double displacement",
            ],
            ans: 2,
            exp: "Single displacement reaction.",
          },
          {
            q: "Moment of force = Force ×",
            opts: [
              "Mass",
              "Velocity",
              "Perpendicular distance",
              "Acceleration",
            ],
            ans: 2,
            exp: "Torque = F × d (perpendicular distance).",
          },
          {
            q: "Valence electrons of phosphorus (P):",
            opts: ["3", "5", "7", "2"],
            ans: 1,
            exp: "P is in Group 15 → 5 valence electrons.",
          },
          {
            q: "Which has highest ionization energy?",
            opts: ["Na", "Mg", "Al", "Cl"],
            ans: 3,
            exp: "Ionization energy increases across period; Cl highest here.",
          },
          {
            q: "If velocity-time graph is straight line with +ve slope, motion is:",
            opts: [
              "Uniform",
              "Uniformly accelerated",
              "Retarded",
              "Non-uniform",
            ],
            ans: 1,
            exp: "Constant acceleration = straight line on v-t graph.",
          },
          {
            q: "Hybridization of N in NH3:",
            opts: ["sp", "sp²", "sp³", "sp³d"],
            ans: 2,
            exp: "NH3: sp³ with one lone pair.",
          },
          {
            q: "Which wave property determines pitch of sound?",
            opts: ["Amplitude", "Wavelength", "Frequency", "Speed"],
            ans: 2,
            exp: "Higher frequency = higher pitch.",
          },
          {
            q: "Energy of a photon E=",
            opts: ["hν/c", "hν", "h/ν", "hc"],
            ans: 1,
            exp: "E=hν (Planck's equation).",
          },
          {
            q: "Isomers have same ___ but different ___:",
            opts: [
              "Mass & formula",
              "Molecular formula & structure",
              "Structure & mass",
              "Name & formula",
            ],
            ans: 1,
            exp: "Same molecular formula, different structural arrangement.",
          },
          {
            q: "Impulse = Force ×",
            opts: ["Distance", "Velocity", "Time", "Acceleration"],
            ans: 2,
            exp: "Impulse = F×t = change in momentum.",
          },
          {
            q: "IUPAC name of CH3-CH2-OH:",
            opts: ["Methanol", "Ethanol", "Propanol", "Butanol"],
            ans: 1,
            exp: "Ethanol (2 carbons + OH group).",
          },
          {
            q: "Which quantum number gives electron spin?",
            opts: ["n", "l", "ml", "ms"],
            ans: 3,
            exp: "Spin quantum number ms = ±½.",
          },
          {
            q: "Electric power P=",
            opts: ["VI", "V/I", "I/V", "V+I"],
            ans: 0,
            exp: "P=VI=I²R=V²/R.",
          },
          {
            q: "Standard electrode potential of SHE:",
            opts: ["1V", "0V", "-1V", "0.5V"],
            ans: 1,
            exp: "Standard Hydrogen Electrode (SHE)=0V by definition.",
          },
          {
            q: "Bodies in simple harmonic motion have:",
            opts: [
              "Constant velocity",
              "Constant acceleration",
              "Restoring force ∝ displacement",
              "Zero net force",
            ],
            ans: 2,
            exp: "SHM: F=-kx, restoring force proportional to displacement.",
          },
          {
            q: "Moles in 44g of CO2:",
            opts: ["0.5", "1", "2", "44"],
            ans: 1,
            exp: "Molar mass CO2=44 → 44/44=1 mole.",
          },
          {
            q: "Kirchhoff's current law states:",
            opts: [
              "Sum of voltages=0",
              "Sum of currents at junction=0",
              "V=IR",
              "P=VI",
            ],
            ans: 1,
            exp: "Sum of currents entering = leaving a junction.",
          },
          {
            q: "Which compound undergoes aldol condensation?",
            opts: ["Methanol", "Acetaldehyde", "Benzene", "CCl4"],
            ans: 1,
            exp: "Aldehydes/ketones with α-H undergo aldol condensation.",
          },
          {
            q: "Gravitational PE = mgh. If h doubles, PE:",
            opts: ["Stays same", "Halves", "Doubles", "Quadruples"],
            ans: 2,
            exp: "PE∝h → doubles.",
          },
          {
            q: "Which element is a metalloid?",
            opts: ["Sodium", "Chlorine", "Silicon", "Copper"],
            ans: 2,
            exp: "Silicon has properties of both metal and non-metal.",
          },
          {
            q: "The rate of reaction depends on:",
            opts: [
              "Concentration of reactants",
              "Temperature",
              "Catalyst",
              "All of the above",
            ],
            ans: 3,
            exp: "All three factors affect rate of reaction.",
          },
        ],
      },
      {
        name: "Social Science",
        icon: "🌍",
        color: "#c0392b",
        qs: [
          {
            q: "AMU became a university in:",
            opts: ["1875", "1905", "1920", "1947"],
            ans: 2,
            exp: "MAO College became AMU in 1920 by Act of Parliament.",
          },
          {
            q: "Which Article gives freedom of religion?",
            opts: ["Article 14", "Article 19", "Article 25", "Article 32"],
            ans: 2,
            exp: "Article 25 — freedom of conscience and religion.",
          },
          {
            q: "Green Revolution is associated with:",
            opts: [
              "Dr. M.S. Swaminathan",
              "Dr. Verghese Kurien",
              "Dr. APJ Kalam",
              "Dr. Homi Bhabha",
            ],
            ans: 0,
            exp: "Father of Green Revolution in India.",
          },
          {
            q: "Which type of economy does India have?",
            opts: ["Capitalist", "Socialist", "Communist", "Mixed economy"],
            ans: 3,
            exp: "India has a mixed economy.",
          },
          {
            q: "The policy of Apartheid was practiced in:",
            opts: ["India", "USA", "South Africa", "Australia"],
            ans: 2,
            exp: "Racial segregation policy in South Africa.",
          },
          {
            q: "Bretton Woods Conference established:",
            opts: ["UN", "WTO", "IMF & World Bank", "NATO"],
            ans: 2,
            exp: "IMF and World Bank created at Bretton Woods (1944).",
          },
          {
            q: 'Who proposed "Drain of Wealth" theory?',
            opts: ["Gandhi", "Dadabhai Naoroji", "Nehru", "Ambedkar"],
            ans: 1,
            exp: 'Dadabhai Naoroji in "Poverty and Un-British Rule" (1901).',
          },
          {
            q: "Fiscal Policy involves:",
            opts: [
              "Money supply",
              "Exchange rates",
              "Govt spending & taxation",
              "Interest rates",
            ],
            ans: 2,
            exp: "Fiscal policy = government budget, taxation, spending.",
          },
          {
            q: "Which movement demanded complete independence?",
            opts: [
              "Swadeshi",
              "Non-Cooperation",
              "Poorna Swaraj (Purna Swaraj)",
              "Civil Disobedience",
            ],
            ans: 2,
            exp: "Lahore Session 1929 — Purna Swaraj resolution.",
          },
          {
            q: '"Invisible hand" concept given by:',
            opts: ["Karl Marx", "Adam Smith", "Keynes", "Ricardo"],
            ans: 1,
            exp: "Adam Smith — market self-regulates (Wealth of Nations, 1776).",
          },
          {
            q: "Which Article abolishes bonded labour?",
            opts: ["Article 17", "Article 23", "Article 24", "Article 21"],
            ans: 1,
            exp: "Article 23 prohibits trafficking and forced labour.",
          },
          {
            q: "SAARC headquartered in:",
            opts: ["Delhi", "Islamabad", "Kathmandu", "Colombo"],
            ans: 2,
            exp: "SAARC Secretariat in Kathmandu, Nepal.",
          },
          {
            q: "Which revolution ended feudalism in France?",
            opts: [
              "American Revolution",
              "French Revolution",
              "Industrial Revolution",
              "Russian Revolution",
            ],
            ans: 1,
            exp: "French Revolution (1789).",
          },
          {
            q: "Balance of Payments records:",
            opts: [
              "Trade only",
              "All international economic transactions",
              "Domestic trade",
              "Budget only",
            ],
            ans: 1,
            exp: "BOP = all transactions between a country and the world.",
          },
          {
            q: 'The concept of "sustainable development" promoted by:',
            opts: [
              "Brundtland Report (1987)",
              "Rio Conference",
              "Kyoto Protocol",
              "Paris Agreement",
            ],
            ans: 0,
            exp: '"Our Common Future" — Brundtland Commission 1987.',
          },
          {
            q: "Preamble of Indian Constitution begins with:",
            opts: [
              '"We the People"',
              '"We the Citizens"',
              '"We the Parliament"',
              '"In the name of God"',
            ],
            ans: 0,
            exp: '"We, the People of India…"',
          },
          {
            q: "Non-Cooperation Movement (1920) was launched because of:",
            opts: [
              "Partition of Bengal",
              "Jallianwala Bagh massacre",
              "Salt tax",
              "Simon Commission",
            ],
            ans: 1,
            exp: "Jallianwala Bagh (1919) was a major trigger.",
          },
          {
            q: "Which of these is NOT a Directive Principle?",
            opts: [
              "Equal pay for equal work",
              "Free legal aid",
              "Right to vote at 18",
              "Separation of judiciary",
            ],
            ans: 2,
            exp: "Right to vote is a legal right, not a DPSP.",
          },
          {
            q: "National Income = GDP minus:",
            opts: ["Imports", "Exports", "Depreciation", "Inflation"],
            ans: 2,
            exp: "NNP = GNP - Depreciation; NI relates similarly.",
          },
          {
            q: "Which organization promotes free trade globally?",
            opts: ["IMF", "World Bank", "WTO", "OPEC"],
            ans: 2,
            exp: "WTO — World Trade Organization.",
          },
          {
            q: '"Shock Therapy" was applied in:',
            opts: ["India", "China", "Russia & Eastern Europe", "USA"],
            ans: 2,
            exp: "Rapid transition from communism to capitalism in 1990s.",
          },
          {
            q: "Right to Information Act passed in:",
            opts: ["2000", "2003", "2005", "2008"],
            ans: 2,
            exp: "RTI Act enacted in 2005.",
          },
          {
            q: "Which INC session declared Purna Swaraj?",
            opts: ["Surat", "Lahore", "Nagpur", "Calcutta"],
            ans: 1,
            exp: "Lahore Session December 1929.",
          },
          {
            q: "Human Development Index measures:",
            opts: [
              "GDP only",
              "Income,Health,Education",
              "Literacy only",
              "Poverty only",
            ],
            ans: 1,
            exp: "HDI = income + health (life expectancy) + education.",
          },
          {
            q: "India's first Five Year Plan launched in:",
            opts: ["1947", "1950", "1951", "1956"],
            ans: 2,
            exp: "First Five Year Plan: 1951–1956.",
          },
        ],
      },
      {
        name: "English",
        icon: "📝",
        color: "#2980b9",
        qs: [
          {
            q: '"He is known ___ his honesty."',
            opts: ["by", "for", "of", "with"],
            ans: 1,
            exp: '"Known for" = correct idiom.',
          },
          {
            q: 'Identify the mood: "Would that I were young again!"',
            opts: ["Indicative", "Imperative", "Subjunctive", "Conditional"],
            ans: 2,
            exp: "Subjunctive mood expresses wish.",
          },
          {
            q: 'Synonym of "garrulous":',
            opts: ["Quiet", "Talkative", "Brave", "Angry"],
            ans: 1,
            exp: "Garrulous = excessively talkative.",
          },
          {
            q: '"The quality of mercy is not strained." — literary device:',
            opts: ["Simile", "Alliteration", "Metaphor", "Personification"],
            ans: 2,
            exp: "Metaphor — mercy described as having a quality.",
          },
          {
            q: "Correct: She insisted ___ seeing the manager.",
            opts: ["in", "on", "for", "at"],
            ans: 1,
            exp: '"Insist on" = correct preposition.',
          },
          {
            q: 'Identify the gerund phrase: "Walking in the rain is romantic."',
            opts: [
              "in the rain",
              "Walking in the rain",
              "is romantic",
              "romantic",
            ],
            ans: 1,
            exp: '"Walking in the rain" = gerund phrase (subject).',
          },
          {
            q: 'Antonym of "verbose":',
            opts: ["Talkative", "Wordy", "Concise", "Elaborate"],
            ans: 2,
            exp: "Verbose=wordy; antonym=concise.",
          },
          {
            q: 'In reported speech, "will" becomes:',
            opts: ["shall", "would", "will", "could"],
            ans: 1,
            exp: "Will → would in reported speech.",
          },
          {
            q: 'Identify figure of speech: "I have a thousand things to do."',
            opts: ["Simile", "Metaphor", "Hyperbole", "Oxymoron"],
            ans: 2,
            exp: "Hyperbole = extreme exaggeration.",
          },
          {
            q: 'The suffix "-tion" creates which word type?',
            opts: ["Verb", "Adjective", "Noun", "Adverb"],
            ans: 2,
            exp: '"Action", "education", "nation" = nouns ending in -tion.',
          },
          {
            q: 'Choose: "He is one of those writers who ___ honestly."',
            opts: ["writes", "write", "written", "wrote"],
            ans: 1,
            exp: '"Who" refers to "writers" (plural) → write.',
          },
          {
            q: "Oxymoron in:",
            opts: ["Bittersweet memories", "Fast car", "Red rose", "Blue sky"],
            ans: 0,
            exp: '"Bittersweet" = contradictory adjective.',
          },
          {
            q: '"She not only sings ___ also dances."',
            opts: ["but", "and", "or", "yet"],
            ans: 0,
            exp: '"Not only… but also" = paired conjunction.',
          },
          {
            q: 'Passive: "Scientists discovered a new planet."',
            opts: [
              "A new planet discovered.",
              "A new planet was discovered by scientists.",
              "Scientists were discovered.",
              "A planet has discovered.",
            ],
            ans: 1,
            exp: "Correct passive voice.",
          },
          {
            q: "Which is a portmanteau word?",
            opts: ["Brunch", "Beautiful", "Running", "School"],
            ans: 0,
            exp: '"Brunch" = breakfast + lunch.',
          },
          {
            q: 'The term "in medias res" means:',
            opts: [
              "At the end",
              "In the middle of things",
              "At the beginning",
              "In sequence",
            ],
            ans: 1,
            exp: "Story starting in the middle of action.",
          },
          {
            q: 'Correct: "Neither he ___ she was present."',
            opts: ["and", "but", "nor", "or"],
            ans: 2,
            exp: '"Neither…nor" — paired conjunction.',
          },
          {
            q: 'Antonym of "perspicuous":',
            opts: ["Clear", "Obvious", "Obscure", "Transparent"],
            ans: 2,
            exp: "Perspicuous=clear; antonym=obscure.",
          },
          {
            q: "Which rhetorical question implies:",
            opts: [
              "Needs an answer",
              "Expects no answer",
              "Is a command",
              "Is hypothetical",
            ],
            ans: 1,
            exp: "Rhetorical question expects no literal answer.",
          },
          {
            q: 'Identify the appositive: "My friend, a doctor, helped me."',
            opts: ["My friend", "a doctor", "helped me", "me"],
            ans: 1,
            exp: '"A doctor" renames "my friend" — it is an appositive.',
          },
        ],
      },
    ],
  },
  /* ══════════════════════════════════════
   DIPLOMA ENTRANCE — INSTITUTE SELECTOR (JMI / PUSHA / AMU)
   100 questions: Maths(40) · Physics(20) · Chemistry(20) · English(20)
   Different paper per institute; engine picks diploma_jmi / diploma_pusha / diploma_amu
══════════════════════════════════════ */
  diploma_jmi: {
    title: "Diploma Entrance — JMI",
    subject: "Maths(40)·Physics(20)·Chemistry(20)·English(20)",
    marks: "+1 / 0",
    time: 120,
    sectioned: true,
    sections: [
      {
        name: "Mathematics",
        icon: "📐",
        color: "#e67e22",
        qs: [
          {
            q: "If 5x - 3 = 22, x =",
            opts: ["4", "5", "6", "7"],
            ans: 1,
            exp: "5x=25 → x=5.",
          },
          {
            q: "LCM of 15 and 20:",
            opts: ["40", "50", "60", "80"],
            ans: 2,
            exp: "LCM=60.",
          },
          {
            q: "√(144) + √(81) =",
            opts: ["20", "21", "22", "23"],
            ans: 1,
            exp: "12+9=21.",
          },
          {
            q: "Area of circle r=14 cm (π=22/7):",
            opts: ["154 cm²", "308 cm²", "616 cm²", "77 cm²"],
            ans: 2,
            exp: "22/7×196=616 cm².",
          },
          {
            q: "Volume of cylinder r=7, h=10 (π=22/7):",
            opts: ["1540 cm³", "1440 cm³", "1240 cm³", "980 cm³"],
            ans: 0,
            exp: "πr²h=22/7×49×10=1540 cm³.",
          },
          {
            q: "If tanθ=1, θ=",
            opts: ["30°", "45°", "60°", "90°"],
            ans: 1,
            exp: "tan45°=1.",
          },
          {
            q: "Solve: x²-7x+12=0",
            opts: ["3,4", "2,6", "1,12", "4,5"],
            ans: 0,
            exp: "(x-3)(x-4)=0.",
          },
          {
            q: "HCF of 84 and 120:",
            opts: ["6", "12", "24", "42"],
            ans: 2,
            exp: "HCF=12. (84=12×7, 120=12×10)",
          },
          {
            q: "(2+3)² - 2² - 3² =",
            opts: ["8", "10", "12", "13"],
            ans: 2,
            exp: "25-4-9=12.",
          },
          {
            q: "Distance formula between (1,2) and (4,6):",
            opts: ["3", "4", "5", "7"],
            ans: 2,
            exp: "√(9+16)=5.",
          },
          {
            q: "In triangle: a=3,b=4,c=5. It is:",
            opts: ["Acute", "Obtuse", "Right-angled", "Equilateral"],
            ans: 2,
            exp: "3²+4²=5² → right-angled.",
          },
          {
            q: "cos 60° × sin 90° =",
            opts: ["0", "1/2", "1", "√3/2"],
            ans: 1,
            exp: "(1/2)×1=1/2.",
          },
          {
            q: "Compound interest on Rs.2000 at 10% for 2 years:",
            opts: ["Rs.400", "Rs.420", "Rs.440", "Rs.460"],
            ans: 1,
            exp: "CI=2000(1.1²-1)=2000×0.21=Rs.420.",
          },
          {
            q: "Mode of 4,5,6,6,7,7,7,8:",
            opts: ["6", "7", "8", "5"],
            ans: 1,
            exp: "7 appears 3 times.",
          },
          {
            q: "If 2sin²θ=1, θ=",
            opts: ["30°", "45°", "60°", "90°"],
            ans: 1,
            exp: "sin²θ=1/2 → sinθ=1/√2 → θ=45°.",
          },
          {
            q: "Area of equilateral triangle side 6cm:",
            opts: ["9√3 cm²", "6√3 cm²", "12√3 cm²", "18 cm²"],
            ans: 0,
            exp: "(√3/4)×36=9√3 cm².",
          },
          {
            q: "Arithmetic mean of 15,25,35,45,55:",
            opts: ["30", "35", "40", "25"],
            ans: 1,
            exp: "(175)/5=35.",
          },
          {
            q: "Discriminant of 2x²-5x+3=0:",
            opts: ["1", "2", "3", "4"],
            ans: 0,
            exp: "b²-4ac=25-24=1.",
          },
          {
            q: "Perimeter of right triangle sides 5,12,13:",
            opts: ["25", "30", "35", "40"],
            ans: 1,
            exp: "5+12+13=30.",
          },
          {
            q: "Which is a Pythagorean triplet?",
            opts: ["3,5,7", "4,5,6", "5,12,14", "8,15,17"],
            ans: 3,
            exp: "8²+15²=64+225=289=17².",
          },
          {
            q: "Sum of GP: 1+2+4+8 (4 terms):",
            opts: ["12", "14", "15", "16"],
            ans: 2,
            exp: "a(rⁿ-1)/(r-1)=1×(16-1)/(2-1)=15.",
          },
          {
            q: "Angle between hour & minute hand at 6:00:",
            opts: ["90°", "120°", "180°", "360°"],
            ans: 2,
            exp: "6 o'clock — hour at 6, minute at 12 → 180°.",
          },
          {
            q: "If log₁₀(x)=3, x=",
            opts: ["30", "100", "300", "1000"],
            ans: 3,
            exp: "10³=1000.",
          },
          {
            q: "Solve: 3x+2y=12, x=2 → y=",
            opts: ["2", "3", "4", "5"],
            ans: 1,
            exp: "6+2y=12 → y=3.",
          },
          {
            q: "Value of sin²45°+cos²45°:",
            opts: ["0", "1/2", "1", "2"],
            ans: 2,
            exp: "Identity: always 1.",
          },
          {
            q: "Product of roots: 3x²-7x+2=0",
            opts: ["2/3", "7/3", "3/2", "7"],
            ans: 0,
            exp: "c/a=2/3.",
          },
          {
            q: "√(0.0009) =",
            opts: ["0.03", "0.003", "0.3", "3"],
            ans: 0,
            exp: "√(9×10⁻⁴)=3×10⁻²=0.03.",
          },
          {
            q: "1 km = ___ cm:",
            opts: ["10,000", "100,000", "1,000,000", "1,00,000"],
            ans: 1,
            exp: "1 km=1000m=100,000 cm.",
          },
          {
            q: "If f(x)=2x²+3, f(-2)=",
            opts: ["5", "8", "11", "14"],
            ans: 2,
            exp: "2×4+3=11.",
          },
          {
            q: "Median of 3,7,1,9,5,11,13:",
            opts: ["5", "7", "9", "11"],
            ans: 1,
            exp: "Sorted: 1,3,5,7,9,11,13 → middle=7.",
          },
          {
            q: "Surface area of sphere r=7 (π=22/7):",
            opts: ["616 cm²", "308 cm²", "1232 cm²", "154 cm²"],
            ans: 0,
            exp: "4πr²=4×22/7×49=616 cm².",
          },
          {
            q: "Which of these is NOT rational?",
            opts: ["0.5", "√4", "π", "22/7"],
            ans: 2,
            exp: "π is irrational.",
          },
          {
            q: "Quadratic formula roots of ax²+bx+c=0:",
            opts: ["(-b±√D)/2", "(-b±√D)/2a", "(b±√D)/2a", "b/2a"],
            ans: 1,
            exp: "x=(-b±√(b²-4ac))/2a.",
          },
          {
            q: "tan(90°) is:",
            opts: ["0", "1", "Undefined", "√3"],
            ans: 2,
            exp: "tan90° is undefined.",
          },
          {
            q: "In AP: first term=2, common difference=3. 8th term=",
            opts: ["20", "22", "23", "25"],
            ans: 2,
            exp: "a+(n-1)d=2+7×3=23.",
          },
          {
            q: "Cosine rule: a²=",
            opts: ["b²+c²", "b²+c²+2bc cosA", "b²+c²-2bc cosA", "b+c"],
            ans: 2,
            exp: "a²=b²+c²-2bc cosA.",
          },
          {
            q: "Angle subtended at centre = 2 × angle at:",
            opts: [
              "Center",
              "Same arc on circumference",
              "Opposite side",
              "Diameter",
            ],
            ans: 1,
            exp: "Central angle=2× inscribed angle.",
          },
          {
            q: "If a train travels 360 km in 4.5 h, speed:",
            opts: ["70 km/h", "75 km/h", "80 km/h", "90 km/h"],
            ans: 2,
            exp: "360/4.5=80 km/h.",
          },
          {
            q: "What is ⁴C₂?",
            opts: ["4", "6", "8", "12"],
            ans: 1,
            exp: "4!/(2!2!)=6.",
          },
          {
            q: "Angle of elevation 60°, height 30m. Horizontal distance:",
            opts: ["10√3 m", "30√3 m", "10 m", "30 m"],
            ans: 0,
            exp: "tan60°=30/d → d=30/√3=10√3 m.",
          },
        ],
      },
      {
        name: "Physics",
        icon: "⚛️",
        color: "#2980b9",
        qs: [
          {
            q: "SI unit of work:",
            opts: ["Watt", "Newton", "Joule", "Pascal"],
            ans: 2,
            exp: "Joule=N·m.",
          },
          {
            q: "Force = mass × acceleration. If m=10kg, a=5m/s², F=",
            opts: ["2 N", "15 N", "50 N", "100 N"],
            ans: 2,
            exp: "F=10×5=50 N.",
          },
          {
            q: "Velocity of object after 5 sec from rest with a=4m/s²:",
            opts: ["10 m/s", "15 m/s", "20 m/s", "25 m/s"],
            ans: 2,
            exp: "v=u+at=0+4×5=20 m/s.",
          },
          {
            q: "Which lens is used as magnifying glass?",
            opts: ["Concave", "Convex", "Plane", "Biconcave"],
            ans: 1,
            exp: "Convex (converging) lens magnifies.",
          },
          {
            q: "Pressure in liquid depends on:",
            opts: ["Volume only", "Density & depth", "Area only", "Mass only"],
            ans: 1,
            exp: "P=ρgh — density and depth.",
          },
          {
            q: "Ohm's law: if V=12V, R=4Ω, I=",
            opts: ["2 A", "3 A", "4 A", "6 A"],
            ans: 1,
            exp: "I=V/R=12/4=3A.",
          },
          {
            q: "Which colour of light has highest frequency?",
            opts: ["Red", "Yellow", "Green", "Violet"],
            ans: 3,
            exp: "Violet has highest frequency in visible spectrum.",
          },
          {
            q: "Sound cannot travel through:",
            opts: ["Air", "Water", "Iron", "Vacuum"],
            ans: 3,
            exp: "Sound needs a medium; vacuum has none.",
          },
          {
            q: "Image in concave mirror (beyond C):",
            opts: [
              "Virtual & erect",
              "Real & erect",
              "Real & inverted",
              "Virtual & inverted",
            ],
            ans: 2,
            exp: "Real, inverted, diminished.",
          },
          {
            q: "If KE=100J, mass=2kg. Velocity=",
            opts: ["5 m/s", "10 m/s", "20 m/s", "50 m/s"],
            ans: 1,
            exp: "KE=½mv² → v=√(2×100/2)=10 m/s.",
          },
          {
            q: "Magnetic field unit:",
            opts: ["Newton", "Tesla", "Ampere", "Volt"],
            ans: 1,
            exp: "Tesla (T) is unit of magnetic flux density.",
          },
          {
            q: "Which mirror forms always virtual image?",
            opts: ["Concave", "Convex", "Both", "Neither"],
            ans: 1,
            exp: "Convex mirror always forms virtual, erect, diminished image.",
          },
          {
            q: "Boyle's law: P₁V₁ = P₂V₂ at constant:",
            opts: ["Pressure", "Volume", "Temperature", "None"],
            ans: 2,
            exp: "Constant temperature.",
          },
          {
            q: "Electric power consumed: V=220V, I=5A. P=",
            opts: ["44 W", "225 W", "1100 W", "440 W"],
            ans: 2,
            exp: "P=VI=220×5=1100 W.",
          },
          {
            q: "Unit of frequency:",
            opts: ["Metre", "Second", "Hertz", "Watt"],
            ans: 2,
            exp: "Hz=cycles per second.",
          },
          {
            q: "Which has more inertia?",
            opts: [
              "Feather",
              "Tennis ball",
              "Cricket ball",
              "Table tennis ball",
            ],
            ans: 2,
            exp: "More mass = more inertia.",
          },
          {
            q: "Angle of incidence = angle of reflection. This is:",
            opts: ["Refraction", "Diffraction", "Reflection law", "Dispersion"],
            ans: 2,
            exp: "Law of reflection.",
          },
          {
            q: "If object placed at focus of convex lens, image at:",
            opts: ["Focus", "Center", "Infinity", "At lens"],
            ans: 2,
            exp: "Rays emerge parallel → meet at infinity.",
          },
          {
            q: "1 kWh = ___ Joules:",
            opts: ["360J", "3600J", "36000J", "3,600,000J"],
            ans: 3,
            exp: "1 kWh=1000×3600=3,600,000 J.",
          },
          {
            q: "SI unit of electric charge:",
            opts: ["Ampere", "Volt", "Coulomb", "Ohm"],
            ans: 2,
            exp: "Coulomb (C).",
          },
        ],
      },
      {
        name: "Chemistry",
        icon: "⚗️",
        color: "#8e44ad",
        qs: [
          {
            q: "Atomic number of Sodium (Na):",
            opts: ["10", "11", "12", "13"],
            ans: 1,
            exp: "Na has 11 protons.",
          },
          {
            q: "What is the pH of a neutral solution?",
            opts: ["0", "5", "7", "14"],
            ans: 2,
            exp: "pH=7 = neutral.",
          },
          {
            q: "Which gas is produced when acid reacts with metal?",
            opts: ["O2", "N2", "H2", "CO2"],
            ans: 2,
            exp: "Metal+acid→salt+H2↑.",
          },
          {
            q: "Chemical formula of sulphuric acid:",
            opts: ["HCl", "H2SO3", "H2SO4", "HSO4"],
            ans: 2,
            exp: "H2SO4.",
          },
          {
            q: "Which is a physical change?",
            opts: [
              "Burning paper",
              "Rusting iron",
              "Dissolving sugar in water",
              "Souring of milk",
            ],
            ans: 2,
            exp: "Dissolving sugar = reversible.",
          },
          {
            q: "Valency of chlorine:",
            opts: ["1", "2", "3", "7"],
            ans: 0,
            exp: "Cl has 7 valence e⁻; needs 1 more → valency=1.",
          },
          {
            q: "Metals are generally ___ at room temperature:",
            opts: ["Gas", "Liquid", "Solid", "Plasma"],
            ans: 2,
            exp: "Most metals solid at RT (except Hg).",
          },
          {
            q: "Which is an example of polymer?",
            opts: ["NaCl", "H2O", "Polythene", "CO2"],
            ans: 2,
            exp: "Polythene = polymer of ethylene.",
          },
          {
            q: "Rusting of iron requires:",
            opts: ["Only water", "Only oxygen", "Both water & oxygen", "CO2"],
            ans: 2,
            exp: "Iron+O2+H2O → Fe2O3 (rust).",
          },
          {
            q: "Washing soda is:",
            opts: ["NaCl", "NaHCO3", "Na2CO3·10H2O", "NaOH"],
            ans: 2,
            exp: "Washing soda=Na2CO3·10H2O.",
          },
          {
            q: "What is the chemical name of slaked lime?",
            opts: ["CaCO3", "CaO", "Ca(OH)2", "CaCl2"],
            ans: 2,
            exp: "Slaked lime=Ca(OH)2.",
          },
          {
            q: "The process of heating an ore in limited air:",
            opts: ["Roasting", "Smelting", "Calcination", "Refining"],
            ans: 2,
            exp: "Calcination = heating in limited/absence of air.",
          },
          {
            q: "Which gas has smell of rotten eggs?",
            opts: ["SO2", "H2S", "NO2", "NH3"],
            ans: 1,
            exp: "Hydrogen sulphide (H2S).",
          },
          {
            q: "Atomic mass of Nitrogen:",
            opts: ["12", "14", "16", "18"],
            ans: 1,
            exp: "N=14 u.",
          },
          {
            q: "Catalyst changes ___ of reaction:",
            opts: ["Enthalpy", "Products", "Rate", "Equilibrium position"],
            ans: 2,
            exp: "Catalyst speeds up reaction without being consumed.",
          },
          {
            q: "Which type of bond in H2O?",
            opts: ["Ionic", "Covalent", "Metallic", "Coordinate"],
            ans: 1,
            exp: "O-H covalent bonds.",
          },
          {
            q: "Petroleum is a ___ resource:",
            opts: ["Renewable", "Non-renewable", "Inexhaustible", "Living"],
            ans: 1,
            exp: "Fossil fuel = non-renewable.",
          },
          {
            q: "Chemical formula of quick lime:",
            opts: ["CaCO3", "CaO", "Ca(OH)2", "CaCl2"],
            ans: 1,
            exp: "Quick lime=CaO.",
          },
          {
            q: "Oxidation is:",
            opts: [
              "Gain of electrons",
              "Loss of electrons",
              "Gain of protons",
              "Loss of protons",
            ],
            ans: 1,
            exp: "Oxidation=loss of electrons.",
          },
          {
            q: "Which of the following is a strong acid?",
            opts: [
              "Acetic acid",
              "Citric acid",
              "Carbonic acid",
              "Hydrochloric acid",
            ],
            ans: 3,
            exp: "HCl completely ionizes = strong acid.",
          },
        ],
      },
      {
        name: "English",
        icon: "📝",
        color: "#34495e",
        qs: [
          {
            q: 'Choose correct: "She ___ to JMI every day."',
            opts: ["go", "goes", "went", "going"],
            ans: 1,
            exp: "3rd person singular → goes.",
          },
          {
            q: 'Antonym of "difficult":',
            opts: ["Hard", "Tough", "Easy", "Complex"],
            ans: 2,
            exp: "Easy.",
          },
          {
            q: 'Fill: "He is interested ___ computers."',
            opts: ["at", "for", "in", "on"],
            ans: 2,
            exp: '"Interested in" = correct idiom.',
          },
          {
            q: 'Identify the noun: "Kindness is a virtue."',
            opts: ["Kindness", "is", "a", "virtue"],
            ans: 0,
            exp: '"Kindness" = abstract noun. (Both kindness and virtue are nouns, but question asks to identify ONE)',
          },
          {
            q: 'Passive voice: "The mechanic repaired the car."',
            opts: [
              "The car repaired.",
              "The car was repaired by the mechanic.",
              "The car has been repaired.",
              "The mechanic was repaired.",
            ],
            ans: 1,
            exp: "Correct passive voice.",
          },
          {
            q: "Which is a complex sentence?",
            opts: [
              "She sang.",
              "She sang and danced.",
              "She sang because she was happy.",
              "Sing!",
            ],
            ans: 2,
            exp: "Complex = main clause + subordinate clause.",
          },
          {
            q: 'Synonym of "sufficient":',
            opts: ["Less", "Enough", "Extra", "Short"],
            ans: 1,
            exp: "Sufficient = enough.",
          },
          {
            q: 'Correct: "The committee ___ reached a decision."',
            opts: ["have", "has", "are", "were"],
            ans: 1,
            exp: "Committee = collective noun (singular) → has.",
          },
          {
            q: '"He works hard so that he ___ pass."',
            opts: ["can", "could", "would", "will"],
            ans: 0,
            exp: '"So that" of purpose → can.',
          },
          {
            q: 'Identify adjective: "She wore a beautiful dress."',
            opts: ["She", "wore", "beautiful", "dress"],
            ans: 2,
            exp: '"Beautiful" modifies "dress" = adjective.',
          },
          {
            q: "Which sentence has correct punctuation?",
            opts: [
              "Its raining today.",
              "It's raining today.",
              "Its' raining today.",
              "Its raining, today.",
            ],
            ans: 1,
            exp: '"It\'s" = it is.',
          },
          {
            q: 'Antonym of "ancient":',
            opts: ["Old", "Modern", "Antique", "Aged"],
            ans: 1,
            exp: "Modern.",
          },
          {
            q: 'Identify adverb: "He spoke loudly."',
            opts: ["He", "spoke", "loudly", "None"],
            ans: 2,
            exp: '"Loudly" modifies verb "spoke".',
          },
          {
            q: '"I wish I ___ taller." (correct form)',
            opts: ["am", "was", "were", "be"],
            ans: 2,
            exp: 'Subjunctive after "wish" → were.',
          },
          {
            q: 'Reported speech: She said, "I am working."',
            opts: [
              "She said she is working.",
              "She said she was working.",
              "She says she is working.",
              "She told she working.",
            ],
            ans: 1,
            exp: "Backshift: am → was.",
          },
          {
            q: 'Choose correct article: "He is ___ engineer."',
            opts: ["a", "an", "the", "no article"],
            ans: 1,
            exp: '"An" before vowel sound (engineer).',
          },
          {
            q: 'Conjunction in "Work hard, otherwise you will fail":',
            opts: ["Work", "hard", "otherwise", "will"],
            ans: 2,
            exp: '"Otherwise" = conjunction showing consequence.',
          },
          {
            q: '"The stars twinkled like diamonds." — figure of speech:',
            opts: ["Metaphor", "Simile", "Personification", "Hyperbole"],
            ans: 1,
            exp: 'Simile uses "like" or "as".',
          },
          {
            q: 'Plural of "criterion":',
            opts: ["Criterions", "Criterias", "Criteria", "Criterium"],
            ans: 2,
            exp: "Criteria (Greek origin plural).",
          },
          {
            q: "Which is an interjection?",
            opts: ["Run", "Beautiful", "Wow!", "Quickly"],
            ans: 2,
            exp: '"Wow!" expresses strong emotion = interjection.',
          },
        ],
      },
    ],
  },

  diploma_pusha: {
    title: "Diploma Entrance — PUSHA",
    subject: "Maths(40)·Physics(20)·Chemistry(20)·English(20)",
    marks: "+1 / 0",
    time: 120,
    sectioned: true,
    sections: [
      {
        name: "Mathematics",
        icon: "📐",
        color: "#e67e22",
        qs: [
          {
            q: "Solve: 7x + 4 = 53",
            opts: ["6", "7", "8", "9"],
            ans: 1,
            exp: "7x=49 → x=7.",
          },
          {
            q: "Area of trapezium parallel sides 8,12, height 5:",
            opts: ["40", "50", "60", "70"],
            ans: 1,
            exp: "½(8+12)×5=50.",
          },
          {
            q: "√(196)=",
            opts: ["12", "13", "14", "15"],
            ans: 2,
            exp: "14²=196.",
          },
          {
            q: "If P(E)=0.4, P(E')=",
            opts: ["0.4", "0.5", "0.6", "0.8"],
            ans: 2,
            exp: "1-0.4=0.6.",
          },
          {
            q: "Factorize: 4x²-9",
            opts: ["(2x-3)²", "(2x+3)(2x-3)", "(4x+3)(x-3)", "(x+3)(4x-3)"],
            ans: 1,
            exp: "Difference of squares.",
          },
          {
            q: "Solve system: x+y=7, x-y=3 → x=",
            opts: ["4", "5", "6", "7"],
            ans: 1,
            exp: "2x=10 → x=5.",
          },
          {
            q: "cos²θ + sin²θ =",
            opts: ["0", "1", "2", "sinθcosθ"],
            ans: 1,
            exp: "Fundamental identity.",
          },
          {
            q: "Volume of cone r=7, h=12 (π=22/7):",
            opts: ["616 cm³", "628 cm³", "730 cm³", "308 cm³"],
            ans: 0,
            exp: "⅓πr²h=⅓×22/7×49×12=616 cm³.",
          },
          {
            q: "In a GP with first term 3 and ratio 2, 6th term:",
            opts: ["48", "96", "192", "48"],
            ans: 1,
            exp: "ar⁵=3×32=96.",
          },
          {
            q: "tan θ = 4/3, sinθ=",
            opts: ["3/5", "4/5", "3/4", "5/4"],
            ans: 1,
            exp: "hyp=5; sin=4/5.",
          },
          {
            q: "Perimeter of sector r=7, angle=60° (π=22/7):",
            opts: ["14+7.33", "14+22/3", "21.33", "25.33"],
            ans: 1,
            exp: "2r + arc = 14 + (60/360)×2×22/7×7=14+22/3.",
          },
          {
            q: "How many terms in AP 5,8,11,…,56?",
            opts: ["16", "17", "18", "19"],
            ans: 2,
            exp: "5+(n-1)3=56 → n=18.",
          },
          {
            q: "Which of the following is always positive?",
            opts: ["sinθ", "cosθ", "tanθ", "sin²θ+cos²θ"],
            ans: 3,
            exp: "sin²+cos²=1 always.",
          },
          {
            q: "Area of parallelogram base=10, height=6:",
            opts: ["30", "60", "16", "80"],
            ans: 1,
            exp: "b×h=10×6=60.",
          },
          {
            q: "If A is 2×2 matrix with determinant 0, it is:",
            opts: ["Identity", "Invertible", "Singular", "Scalar"],
            ans: 2,
            exp: "Det=0 → singular matrix.",
          },
          {
            q: "Rounding 3.7896 to 2 decimal places:",
            opts: ["3.78", "3.79", "3.80", "3.77"],
            ans: 1,
            exp: "3rd decimal=9≥5 → round up: 3.79.",
          },
          {
            q: "Class width in histogram = Upper limit −",
            opts: ["Frequency", "Lower limit", "Mid-value", "Mode"],
            ans: 1,
            exp: "Class width = upper - lower limit.",
          },
          {
            q: "Simple interest: Rs.5000, 8%, 3 years:",
            opts: ["Rs.1000", "Rs.1100", "Rs.1200", "Rs.1500"],
            ans: 2,
            exp: "5000×8×3/100=Rs.1200.",
          },
          {
            q: "Which set is empty?",
            opts: ["{0}", "{null}", "{x: x²=-1, x∈R}", "{x: x<0 and x>1}"],
            ans: 3,
            exp: "No real number is both <0 and >1.",
          },
          {
            q: "sec²θ - tan²θ =",
            opts: ["0", "1", "2", "sec²θ"],
            ans: 1,
            exp: "Trigonometric identity = 1.",
          },
          {
            q: "Points A(1,1) B(4,5). Slope=",
            opts: ["3/4", "4/3", "1", "3"],
            ans: 1,
            exp: "(5-1)/(4-1)=4/3.",
          },
          {
            q: "Length of arc r=21, angle=120° (π=22/7):",
            opts: ["22", "44", "66", "88"],
            ans: 1,
            exp: "(120/360)×2×22/7×21=44.",
          },
          {
            q: "If f(x)=x²-2x+1, f(3)=",
            opts: ["2", "4", "6", "8"],
            ans: 1,
            exp: "9-6+1=4.",
          },
          {
            q: "Variance = 0 means:",
            opts: [
              "All data zero",
              "All data equal",
              "No data",
              "Mean is zero",
            ],
            ans: 1,
            exp: "No spread = all values equal.",
          },
          {
            q: "Which is a perfect square: 121, 125, 128, 135?",
            opts: ["121", "125", "128", "135"],
            ans: 0,
            exp: "11²=121.",
          },
          {
            q: "Curved surface area of cylinder r=5, h=14:",
            opts: ["440 cm²", "220 cm²", "880 cm²", "110 cm²"],
            ans: 0,
            exp: "2πrh=2×22/7×5×14=440 cm².",
          },
          {
            q: "The sum of first n odd numbers = ",
            opts: ["n²/2", "n(n+1)/2", "n²", "2n"],
            ans: 2,
            exp: "1+3+5+…+(2n-1)=n².",
          },
          {
            q: "Which is not a measure of central tendency?",
            opts: ["Mean", "Median", "Mode", "Range"],
            ans: 3,
            exp: "Range is a measure of dispersion, not central tendency.",
          },
          {
            q: "3 sin²θ + 3 cos²θ =",
            opts: ["0", "1", "3", "6"],
            ans: 2,
            exp: "3(sin²+cos²)=3×1=3.",
          },
          {
            q: "If A and B are complementary, A+B=",
            opts: ["90°", "180°", "270°", "360°"],
            ans: 0,
            exp: "Complementary angles sum to 90°.",
          },
          {
            q: "Diagonal of rectangle l=8, b=6:",
            opts: ["7", "9", "10", "14"],
            ans: 2,
            exp: "√(64+36)=10.",
          },
          {
            q: "Find x: 2/x = 8/20",
            opts: ["4", "5", "6", "8"],
            ans: 1,
            exp: "x=2×20/8=5.",
          },
          {
            q: "n(A)=5, n(B)=4, n(A∩B)=2. n(A∪B)=",
            opts: ["7", "9", "11", "6"],
            ans: 0,
            exp: "5+4-2=7.",
          },
          {
            q: "Which graph represents a function?",
            opts: [
              "Circle",
              "Vertical line",
              "Parabola opening up",
              "Horizontal ellipse",
            ],
            ans: 2,
            exp: "Vertical line test: parabola passes it.",
          },
          {
            q: "tan²θ + 1 = ",
            opts: ["sec²θ", "cosec²θ", "cot²θ", "cos²θ"],
            ans: 0,
            exp: "1+tan²θ=sec²θ.",
          },
          {
            q: "If 4th term of GP is 54 and ratio=3, first term=",
            opts: ["2", "3", "6", "9"],
            ans: 0,
            exp: "ar³=54 → a×27=54 → a=2.",
          },
          {
            q: "Which is the formula for distance in uniform acceleration?",
            opts: ["v=u+at", "s=ut+½at²", "v²=u²-2as", "F=ma"],
            ans: 1,
            exp: "s=ut+½at².",
          },
          {
            q: "log(AB) = ",
            opts: ["logA - logB", "logA + logB", "logA × logB", "logA / logB"],
            ans: 1,
            exp: "log(AB)=logA+logB.",
          },
          {
            q: "If the mean of 5 numbers is 12, their sum=",
            opts: ["50", "55", "60", "65"],
            ans: 2,
            exp: "5×12=60.",
          },
          {
            q: "Which angle is reflex?",
            opts: ["45°", "90°", "180°", "270°"],
            ans: 3,
            exp: "Reflex angle: 180°<θ<360°.",
          },
        ],
      },
      {
        name: "Physics",
        icon: "⚛️",
        color: "#2980b9",
        qs: [
          {
            q: "Newton's first law is also called:",
            opts: [
              "Law of force",
              "Law of inertia",
              "Law of acceleration",
              "Law of momentum",
            ],
            ans: 1,
            exp: "Objects remain at rest or in motion unless acted on.",
          },
          {
            q: "Which is a vector quantity?",
            opts: ["Mass", "Speed", "Temperature", "Displacement"],
            ans: 3,
            exp: "Displacement has direction.",
          },
          {
            q: "Work done = 0 when force and displacement are:",
            opts: ["Parallel", "Perpendicular", "Opposite", "Equal"],
            ans: 1,
            exp: "W=Fs cosθ; θ=90° → W=0.",
          },
          {
            q: "Resistance in series: R1=3Ω, R2=5Ω. Total R=",
            opts: ["2 Ω", "8 Ω", "15 Ω", "1.875 Ω"],
            ans: 1,
            exp: "Series: R=R1+R2=8Ω.",
          },
          {
            q: "Resistance in parallel: R1=4Ω, R2=4Ω. Total R=",
            opts: ["8 Ω", "4 Ω", "2 Ω", "1 Ω"],
            ans: 2,
            exp: "1/R=1/4+1/4=1/2 → R=2Ω.",
          },
          {
            q: "Image formed by convex mirror is always:",
            opts: [
              "Real, inverted",
              "Virtual, erect, diminished",
              "Virtual, inverted",
              "Real, erect",
            ],
            ans: 1,
            exp: "Convex mirror always virtual, erect, diminished.",
          },
          {
            q: "Specific heat capacity of water:",
            opts: ["1 J/kg·K", "2100 J/kg·K", "4200 J/kg·K", "420 J/kg·K"],
            ans: 2,
            exp: "4200 J/kg·K.",
          },
          {
            q: "Law of floatation states object floats when:",
            opts: [
              "Weight > buoyancy",
              "Weight < buoyancy",
              "Weight = buoyancy",
              "Density > water",
            ],
            ans: 2,
            exp: "Float: weight = buoyant force.",
          },
          {
            q: "Which has more penetrating power?",
            opts: ["Alpha particle", "Beta particle", "Gamma ray", "X-ray"],
            ans: 2,
            exp: "Gamma rays penetrate most.",
          },
          {
            q: "Moment of couple = Force ×",
            opts: ["Mass", "Distance between forces", "Height", "Velocity"],
            ans: 1,
            exp: "Torque of couple = F × d (perpendicular distance between forces).",
          },
          {
            q: "Critical angle is related to:",
            opts: [
              "Reflection",
              "Total internal reflection",
              "Diffraction",
              "Polarisation",
            ],
            ans: 1,
            exp: "Beyond critical angle: total internal reflection.",
          },
          {
            q: "Latent heat is heat absorbed/released without change in:",
            opts: ["Mass", "Pressure", "Temperature", "Volume"],
            ans: 2,
            exp: "Phase change at constant temperature.",
          },
          {
            q: "Electromagnetic induction discovered by:",
            opts: ["Newton", "Faraday", "Maxwell", "Hertz"],
            ans: 1,
            exp: "Faraday (1831).",
          },
          {
            q: "Distance covered = Area under ___ graph:",
            opts: [
              "Displacement-time",
              "Velocity-time",
              "Acceleration-time",
              "Force-time",
            ],
            ans: 1,
            exp: "Area under v-t graph = distance.",
          },
          {
            q: "Which phenomenon is responsible for RADAR?",
            opts: ["Refraction", "Reflection", "Diffraction", "Interference"],
            ans: 1,
            exp: "RADAR uses reflection of radio waves.",
          },
          {
            q: "A body of mass 5kg moving at 4m/s. Momentum=",
            opts: ["1.25 kg·m/s", "9 kg·m/s", "20 kg·m/s", "25 kg·m/s"],
            ans: 2,
            exp: "p=mv=5×4=20 kg·m/s.",
          },
          {
            q: "LDR (Light Dependent Resistor) resistance:",
            opts: [
              "Increases in light",
              "Decreases in light",
              "Stays same",
              "Is zero always",
            ],
            ans: 1,
            exp: "LDR resistance decreases when light increases.",
          },
          {
            q: "Terminal velocity occurs when:",
            opts: [
              "Gravity=0",
              "Drag force=gravity",
              "Acceleration=max",
              "Velocity=0",
            ],
            ans: 1,
            exp: "When drag=gravity, no net force → constant velocity.",
          },
          {
            q: "Which mirror is used in solar furnaces?",
            opts: ["Plane", "Convex", "Concave (parabolic)", "Spherical"],
            ans: 2,
            exp: "Concave (parabolic) mirror focuses sunlight.",
          },
          {
            q: "Frequency of AC mains in India:",
            opts: ["50 Hz", "60 Hz", "100 Hz", "25 Hz"],
            ans: 0,
            exp: "50 Hz in India.",
          },
        ],
      },
      {
        name: "Chemistry",
        icon: "⚗️",
        color: "#8e44ad",
        qs: [
          {
            q: "pH scale ranges from:",
            opts: ["0-7", "0-14", "1-14", "0-100"],
            ans: 1,
            exp: "pH scale: 0–14.",
          },
          {
            q: "Which is the lightest element?",
            opts: ["Helium", "Oxygen", "Hydrogen", "Carbon"],
            ans: 2,
            exp: "Hydrogen — atomic mass 1.",
          },
          {
            q: "Number of electrons in neutral Na atom:",
            opts: ["10", "11", "12", "23"],
            ans: 1,
            exp: "Atomic number of Na=11.",
          },
          {
            q: "Which of these is a salt?",
            opts: ["H2SO4", "NaOH", "NaCl", "H2O"],
            ans: 2,
            exp: "NaCl = sodium chloride (salt).",
          },
          {
            q: "Catalyst increases reaction rate by:",
            opts: [
              "Increasing activation energy",
              "Decreasing activation energy",
              "Changing products",
              "Adding energy",
            ],
            ans: 1,
            exp: "Catalyst lowers activation energy.",
          },
          {
            q: "Organic compounds always contain:",
            opts: ["Nitrogen", "Sulphur", "Carbon", "Phosphorus"],
            ans: 2,
            exp: "All organic compounds contain carbon.",
          },
          {
            q: "Molar mass of NaOH:",
            opts: ["30", "38", "40", "48"],
            ans: 2,
            exp: "Na(23)+O(16)+H(1)=40 g/mol.",
          },
          {
            q: "Which process is used to separate crude oil?",
            opts: [
              "Filtration",
              "Fractional distillation",
              "Crystallisation",
              "Decantation",
            ],
            ans: 1,
            exp: "Fractional distillation.",
          },
          {
            q: "Bleaching agent in bleaching powder:",
            opts: ["Cl2", "Ca(OCl)Cl", "NaOCl", "CaCl2"],
            ans: 1,
            exp: "Ca(OCl)Cl releases Cl2 when wet.",
          },
          {
            q: "Which gas turns lime water milky?",
            opts: ["O2", "CO2", "H2", "N2"],
            ans: 1,
            exp: "CO2 + Ca(OH)2 → CaCO3 (milky) + H2O.",
          },
          {
            q: "Electron configuration of Na (Z=11):",
            opts: ["2,8,1", "2,9", "2,8,2", "2,7,2"],
            ans: 0,
            exp: "2,8,1.",
          },
          {
            q: "Which metal is extracted by electrolysis?",
            opts: ["Iron", "Copper", "Aluminium", "Zinc"],
            ans: 2,
            exp: "Aluminium from bauxite by electrolysis (Hall process).",
          },
          {
            q: "Acid rain caused by:",
            opts: ["CO2 & CO", "SO2 & NO2", "CH4 & CO2", "H2S & SO3"],
            ans: 1,
            exp: "SO2 & NOx dissolve in rain → H2SO4 & HNO3.",
          },
          {
            q: "Which is a noble gas?",
            opts: ["Chlorine", "Oxygen", "Neon", "Nitrogen"],
            ans: 2,
            exp: "Neon — Group 18.",
          },
          {
            q: "The process of making iron from iron ore:",
            opts: [
              "Electrolysis",
              "Smelting in blast furnace",
              "Fractional distillation",
              "Calcination",
            ],
            ans: 1,
            exp: "Blast furnace smelting.",
          },
          {
            q: "Phenolphthalein indicator in base:",
            opts: ["Red", "Yellow", "Pink/Magenta", "Colourless"],
            ans: 2,
            exp: "Pink/magenta in base, colourless in acid.",
          },
          {
            q: "Ethylene (C2H4) type of bond:",
            opts: ["Single bond", "Double bond", "Triple bond", "Ionic bond"],
            ans: 1,
            exp: "C=C double bond.",
          },
          {
            q: "Which compound has ionic bond?",
            opts: ["H2O", "CO2", "NaCl", "CH4"],
            ans: 2,
            exp: "NaCl — transfer of electron from Na to Cl.",
          },
          {
            q: "Which of these is a colloid?",
            opts: [
              "Salt solution",
              "Copper sulphate solution",
              "Milk",
              "Distilled water",
            ],
            ans: 2,
            exp: "Milk = colloid (fat droplets dispersed in water).",
          },
          {
            q: "Reduction = ",
            opts: [
              "Loss of electrons",
              "Gain of electrons",
              "Loss of H",
              "Gain of O",
            ],
            ans: 1,
            exp: "Reduction = gain of electrons.",
          },
        ],
      },
      {
        name: "English",
        icon: "📝",
        color: "#34495e",
        qs: [
          {
            q: 'PUSHA stands for (Polytechnic in Pushp Vihar — common name). "PUSHA" is best described as:',
            opts: ["A spice", "An institute in Delhi", "A river", "A festival"],
            ans: 1,
            exp: "Pusa Institute / PUSHA — educational institution in Delhi.",
          },
          {
            q: 'Identify the error: "He don\'t know the answer."',
            opts: ["He", "don't", "know", "answer"],
            ans: 1,
            exp: '"He doesn\'t know" — 3rd person singular.',
          },
          {
            q: 'Synonym of "precise":',
            opts: ["Vague", "Exact", "Rough", "Unclear"],
            ans: 1,
            exp: "Precise = exact.",
          },
          {
            q: 'Fill: "The diploma ___ awarded to all students."',
            opts: ["were", "was", "are", "is being"],
            ans: 1,
            exp: '"The diploma" = singular → was.',
          },
          {
            q: "Which is a homophone pair?",
            opts: ["Fair/Fare", "Talk/Walk", "Come/Some", "Here/Hear"],
            ans: 3,
            exp: "Here & Hear sound the same.",
          },
          {
            q: 'Identify the subject: "Running every morning keeps you fit."',
            opts: ["Running", "every", "morning", "fit"],
            ans: 0,
            exp: '"Running every morning" (gerund phrase) is the subject.',
          },
          {
            q: 'Choose: "If I ___ you, I would study harder."',
            opts: ["am", "was", "were", "be"],
            ans: 2,
            exp: "Hypothetical subjunctive → were.",
          },
          {
            q: 'Antonym of "optimistic":',
            opts: ["Happy", "Positive", "Pessimistic", "Hopeful"],
            ans: 2,
            exp: "Pessimistic.",
          },
          {
            q: 'Fill: "Congratulations ___ your success!"',
            opts: ["for", "on", "at", "with"],
            ans: 1,
            exp: '"Congratulations on" = correct.',
          },
          {
            q: '"The sun rose at dawn." Tense:',
            opts: ["Present", "Past", "Future", "Perfect"],
            ans: 1,
            exp: "Simple past.",
          },
          {
            q: 'Identify preposition: "She sat between her parents."',
            opts: ["sat", "between", "her", "parents"],
            ans: 1,
            exp: '"Between" = preposition.',
          },
          {
            q: 'Correct: "I and my friend ___ going."',
            opts: ["am", "is", "are", "be"],
            ans: 2,
            exp: '"I and my friend" = plural → are.',
          },
          {
            q: 'Antonym of "transparent":',
            opts: ["Clear", "Opaque", "Bright", "Shiny"],
            ans: 1,
            exp: "Opaque.",
          },
          {
            q: "Which is a modal verb?",
            opts: ["Run", "Beautiful", "Could", "Quickly"],
            ans: 2,
            exp: '"Could" is a modal verb.',
          },
          {
            q: '"She has been working since morning." Tense:',
            opts: [
              "Past continuous",
              "Present perfect continuous",
              "Future perfect",
              "Past perfect",
            ],
            ans: 1,
            exp: "Present perfect continuous.",
          },
          {
            q: 'One-word substitute for "one who can use both hands equally well":',
            opts: ["Ambiguous", "Ambidextrous", "Amphibian", "Ambivalent"],
            ans: 1,
            exp: "Ambidextrous.",
          },
          {
            q: 'Direct to indirect: He said, "I will help you."',
            opts: [
              "He said he will help me.",
              "He said he would help me.",
              "He tells he would help me.",
              "He said he would help you.",
            ],
            ans: 1,
            exp: "Will→would; you→me (if speaker addresses listener).",
          },
          {
            q: 'Identify the phrase: "The girl in the red dress is my sister."',
            opts: ["The girl", "in the red dress", "is my sister", "my sister"],
            ans: 1,
            exp: '"In the red dress" = prepositional phrase modifying "girl".',
          },
          {
            q: '"He is a chip off the old block." Meaning:',
            opts: [
              "He is poor",
              "He resembles his parents",
              "He is talented",
              "He is broken",
            ],
            ans: 1,
            exp: "Idiom: resembles parent in character.",
          },
          {
            q: "Choose the correctly spelled word:",
            opts: [
              "Accomodation",
              "Accommodation",
              "Acomodation",
              "Acommodation",
            ],
            ans: 1,
            exp: "Accommodation — double c, double m.",
          },
        ],
      },
    ],
  },

  diploma_amu: {
    title: "Diploma Entrance — AMU",
    subject: "Maths(40)·Physics(20)·Chemistry(20)·English(20)",
    marks: "+1 / 0",
    time: 120,
    sectioned: true,
    sections: [
      {
        name: "Mathematics",
        icon: "📐",
        color: "#e67e22",
        qs: [
          {
            q: "Solve: 9x - 5 = 31",
            opts: ["3", "4", "5", "6"],
            ans: 1,
            exp: "9x=36 → x=4.",
          },
          {
            q: "The value of sin²30°+cos²30°:",
            opts: ["0", "1/2", "1", "3/2"],
            ans: 2,
            exp: "Identity = 1.",
          },
          {
            q: "Which is divisible by 11? 121, 123, 127, 131?",
            opts: ["121", "123", "127", "131"],
            ans: 0,
            exp: "11×11=121.",
          },
          {
            q: "Area of rhombus d1=10, d2=8:",
            opts: ["18", "40", "80", "160"],
            ans: 1,
            exp: "½×10×8=40.",
          },
          {
            q: "Solve: 5x/3 = 25",
            opts: ["10", "12", "15", "20"],
            ans: 2,
            exp: "x=25×3/5=15.",
          },
          {
            q: "Which term of AP 2,5,8,… is 50?",
            opts: ["14th", "15th", "16th", "17th"],
            ans: 3,
            exp: "2+(n-1)3=50 → 3(n-1)=48 → n=17.",
          },
          {
            q: "If P(A)=2/5, P(B)=3/5, mutually exclusive. P(A∪B)=",
            opts: ["1", "6/25", "1/5", "5/25"],
            ans: 0,
            exp: "P(A∪B)=2/5+3/5=1.",
          },
          {
            q: "Volume of sphere r=3 (π=22/7):",
            opts: ["37.7 cm³", "113.1 cm³", "37.6 cm³", "113 cm³"],
            ans: 1,
            exp: "4/3×22/7×27=4/3×22/7×27≈113.1 cm³.",
          },
          {
            q: "In how many ways can 5 books be arranged?",
            opts: ["25", "60", "120", "240"],
            ans: 2,
            exp: "5!=120.",
          },
          {
            q: "If sinθ=5/13, cosθ=",
            opts: ["12/13", "5/12", "13/12", "12/5"],
            ans: 0,
            exp: "hyp=13,opp=5,adj=12 → cos=12/13.",
          },
          {
            q: "The number of diagonals in an octagon:",
            opts: ["16", "20", "24", "28"],
            ans: 1,
            exp: "n(n-3)/2=8×5/2=20.",
          },
          {
            q: "Which is NOT a quadratic equation?",
            opts: ["x²+3x+2=0", "2x²-x=0", "x³+x=0", "x²=4"],
            ans: 2,
            exp: "x³+x=0 has degree 3 — not quadratic.",
          },
          {
            q: "Rationalise: 1/√2 =",
            opts: ["√2", "√2/2", "2/√2", "1/2"],
            ans: 1,
            exp: "1/√2 × √2/√2 = √2/2.",
          },
          {
            q: "If matrix A=[2 3; 1 4], det(A)=",
            opts: ["5", "6", "7", "8"],
            ans: 0,
            exp: "2×4-3×1=8-3=5.",
          },
          {
            q: "Circle x²+y²=25, radius=",
            opts: ["5", "10", "25", "√25"],
            ans: 0,
            exp: "r=√25=5.",
          },
          {
            q: "cos(0°)=",
            opts: ["0", "1", "-1", "√2/2"],
            ans: 1,
            exp: "cos0°=1.",
          },
          {
            q: "Range of data 3,7,2,9,5,1,8:",
            opts: ["7", "8", "9", "10"],
            ans: 1,
            exp: "Max-min=9-1=8.",
          },
          {
            q: "Which is correct: logₐ(a)=",
            opts: ["0", "a", "1", "a²"],
            ans: 2,
            exp: "logₐ(a)=1.",
          },
          {
            q: "If 2^x = 32, x=",
            opts: ["4", "5", "6", "7"],
            ans: 1,
            exp: "2⁵=32.",
          },
          {
            q: "Area of sector r=14, θ=90° (π=22/7):",
            opts: ["77 cm²", "154 cm²", "308 cm²", "44 cm²"],
            ans: 0,
            exp: "(90/360)×22/7×196=77 cm².",
          },
          {
            q: "Solve: |2x-1|=5",
            opts: ["x=3 or x=-2", "x=3 only", "x=-2 only", "x=2 or x=-3"],
            ans: 0,
            exp: "2x-1=5→x=3; 2x-1=-5→x=-2.",
          },
          {
            q: "Exterior angle of triangle = sum of:",
            opts: [
              "Two adjacent angles",
              "Two non-adjacent interior angles",
              "All three angles",
              "The angle itself",
            ],
            ans: 1,
            exp: "Exterior angle = sum of two remote interior angles.",
          },
          {
            q: "Standard deviation is the ___ root of variance:",
            opts: ["Square", "Cube", "Fourth", "Fifth"],
            ans: 0,
            exp: "SD=√variance.",
          },
          {
            q: "If the mean is 10 and SD is 2, CV=",
            opts: ["5%", "10%", "20%", "25%"],
            ans: 2,
            exp: "CV=(SD/mean)×100=2/10×100=20%.",
          },
          {
            q: "In triangle, if all sides equal, each angle=",
            opts: ["45°", "60°", "90°", "120°"],
            ans: 1,
            exp: "Equilateral triangle: 180/3=60°.",
          },
          {
            q: "The value of C(7,0):",
            opts: ["0", "1", "7", "70"],
            ans: 1,
            exp: "C(n,0)=1 always.",
          },
          {
            q: "Which is an increasing function on (0,∞)?",
            opts: ["f(x)=-x", "f(x)=1/x", "f(x)=x²", "f(x)=-x²"],
            ans: 2,
            exp: "x²: as x increases so does x² (for x>0).",
          },
          {
            q: "Curved surface area of cone r=5, l=13:",
            opts: ["65π", "40π", "30π", "80π"],
            ans: 0,
            exp: "πrl=π×5×13=65π.",
          },
          {
            q: "Which property: a×(b+c) = a×b + a×c?",
            opts: ["Commutative", "Associative", "Distributive", "Closure"],
            ans: 2,
            exp: "Distributive property.",
          },
          {
            q: "The value of 0! is:",
            opts: ["0", "1", "Undefined", "∞"],
            ans: 1,
            exp: "0!=1 by definition.",
          },
          {
            q: "If cosθ = 0, θ =",
            opts: ["0°", "45°", "90°", "180°"],
            ans: 2,
            exp: "cos90°=0.",
          },
          {
            q: "Midpoint of segment joining (3,7) and (7,3):",
            opts: ["(5,5)", "(4,4)", "(10,10)", "(3,7)"],
            ans: 0,
            exp: "(3+7)/2=5, (7+3)/2=5 → (5,5).",
          },
          {
            q: "Which angle pair are supplementary?",
            opts: ["30° & 60°", "45° & 45°", "110° & 70°", "120° & 70°"],
            ans: 2,
            exp: "110+70=180°.",
          },
          {
            q: "Circumradius of equilateral triangle side a:",
            opts: ["a/√3", "a/2", "a/√3", "a√3/3"],
            ans: 3,
            exp: "R=a/√3=a√3/3.",
          },
          {
            q: "log(1)=",
            opts: ["0", "1", "-1", "Undefined"],
            ans: 0,
            exp: "log(1)=0 for any base.",
          },
          {
            q: "Number of integers from -5 to 5 inclusive:",
            opts: ["9", "10", "11", "12"],
            ans: 2,
            exp: "-5,-4,-3,-2,-1,0,1,2,3,4,5 = 11.",
          },
          {
            q: "The value of π (pi) approximately:",
            opts: ["3.14", "3.41", "3.17", "2.14"],
            ans: 0,
            exp: "π≈3.14159.",
          },
          {
            q: "Sum of 1+1/2+1/4+1/8+… (infinite GP):",
            opts: ["1", "1.5", "2", "2.5"],
            ans: 2,
            exp: "a/(1-r)=1/(1-½)=2.",
          },
          {
            q: "Which of the following is a function of its domain?",
            opts: ["y²=x", "x²+y²=1", "y=x²", "y=±√x"],
            ans: 2,
            exp: "y=x² passes vertical line test.",
          },
          {
            q: "cos(180°)=",
            opts: ["0", "1", "-1", "√3/2"],
            ans: 2,
            exp: "cos180°=-1.",
          },
        ],
      },
      {
        name: "Physics",
        icon: "⚛️",
        color: "#2980b9",
        qs: [
          {
            q: "AMU is located in which city?",
            opts: ["Delhi", "Agra", "Aligarh", "Lucknow"],
            ans: 2,
            exp: "Aligarh, Uttar Pradesh.",
          },
          {
            q: "SI unit of temperature:",
            opts: ["Celsius", "Fahrenheit", "Kelvin", "Rankine"],
            ans: 2,
            exp: "Kelvin (K) is SI unit.",
          },
          {
            q: "A stone is dropped from height 80m. Time to fall (g=10m/s²):",
            opts: ["2 s", "3 s", "4 s", "5 s"],
            ans: 2,
            exp: "h=½gt² → t=√(2×80/10)=4 s.",
          },
          {
            q: "Doppler effect is related to:",
            opts: ["Light only", "Sound only", "Both sound & light", "Neither"],
            ans: 2,
            exp: "Doppler effect applies to both sound and light.",
          },
          {
            q: "Transformer: primary 200V, 100 turns. Secondary 50 turns. Output V=",
            opts: ["50V", "100V", "200V", "400V"],
            ans: 1,
            exp: "V2/V1=N2/N1 → V2=200×50/100=100V.",
          },
          {
            q: "Which particle has no charge?",
            opts: ["Proton", "Electron", "Neutron", "Ion"],
            ans: 2,
            exp: "Neutron is electrically neutral.",
          },
          {
            q: "Magnetic force on a stationary charge:",
            opts: ["Maximum", "Zero", "Depends on field", "Depends on mass"],
            ans: 1,
            exp: "F=qvB; v=0 → F=0.",
          },
          {
            q: "Speed of EM waves in air ≈",
            opts: ["330 m/s", "3×10⁸ m/s", "3×10⁶ m/s", "300 m/s"],
            ans: 1,
            exp: "c≈3×10⁸ m/s.",
          },
          {
            q: "Which law gives: V₁/T₁=V₂/T₂?",
            opts: [
              "Boyle's law",
              "Charles's law",
              "Dalton's law",
              "Graham's law",
            ],
            ans: 1,
            exp: "Charles's law: volume proportional to temperature.",
          },
          {
            q: "Power factor of pure resistive circuit:",
            opts: ["0", "0.5", "1", "Depends"],
            ans: 2,
            exp: "Pure resistive: voltage & current in phase → pf=1.",
          },
          {
            q: "A body in circular motion has:",
            opts: [
              "Constant velocity",
              "Zero acceleration",
              "Centripetal acceleration",
              "Tangential acceleration only",
            ],
            ans: 2,
            exp: "Centripetal acceleration directed toward center.",
          },
          {
            q: "Which electromagnetic wave is used in ovens?",
            opts: ["X-ray", "Ultraviolet", "Microwave", "Infrared"],
            ans: 2,
            exp: "Microwave ovens use microwave radiation.",
          },
          {
            q: "Dimensional formula of work:",
            opts: ["MLT⁻¹", "ML²T⁻²", "MLT⁻²", "M²LT⁻²"],
            ans: 1,
            exp: "Work=Force×distance=ML²T⁻².",
          },
          {
            q: "If a body moves with uniform speed in a circle, it has:",
            opts: [
              "Zero acceleration",
              "Constant kinetic energy",
              "Changing direction",
              "Both B & C",
            ],
            ans: 3,
            exp: "Speed constant → KE constant; direction changes.",
          },
          {
            q: "The unit of magnetic flux:",
            opts: ["Tesla", "Weber", "Ampere", "Henry"],
            ans: 1,
            exp: "Weber (Wb) = unit of magnetic flux.",
          },
          {
            q: "Which mirror gives erect and magnified image?",
            opts: [
              "Convex",
              "Plane",
              "Concave (object inside f)",
              "Convex & Plane",
            ],
            ans: 2,
            exp: "Object inside focal length of concave mirror → virtual, erect, magnified.",
          },
          {
            q: "Capacitance is measured in:",
            opts: ["Henry", "Ohm", "Farad", "Coulomb"],
            ans: 2,
            exp: "Farad (F) = unit of capacitance.",
          },
          {
            q: "A charged particle moves parallel to a magnetic field. Force on it:",
            opts: ["Maximum", "Minimum", "Zero", "Depends on charge"],
            ans: 2,
            exp: "F=qvBsinθ; θ=0° → F=0.",
          },
          {
            q: "The pitch of a screw is related to:",
            opts: [
              "Radius",
              "Length of thread",
              "Distance moved per rotation",
              "Diameter",
            ],
            ans: 2,
            exp: "Pitch = distance moved per complete rotation.",
          },
          {
            q: "Radioactive decay follows ___ order kinetics:",
            opts: ["Zero order", "First order", "Second order", "Third order"],
            ans: 1,
            exp: "Radioactive decay is first order.",
          },
        ],
      },
      {
        name: "Chemistry",
        icon: "⚗️",
        color: "#8e44ad",
        qs: [
          {
            q: "AMU Chemistry — atomic number of Aluminium:",
            opts: ["12", "13", "14", "15"],
            ans: 1,
            exp: "Al has 13 protons.",
          },
          {
            q: "Which gas is stored in the Sun in huge quantity?",
            opts: ["Oxygen", "Nitrogen", "Hydrogen", "Helium"],
            ans: 2,
            exp: "Sun is mostly hydrogen (nuclear fusion).",
          },
          {
            q: "Formula of nitric acid:",
            opts: ["HNO2", "HNO3", "H2NO3", "HNO"],
            ans: 1,
            exp: "Nitric acid = HNO3.",
          },
          {
            q: "Electron affinity increases as we go:",
            opts: [
              "Down a group",
              "Across period (left to right)",
              "Down a period",
              "Right to left across period",
            ],
            ans: 1,
            exp: "Increases left to right in period (more nuclear charge).",
          },
          {
            q: "Which compound has triple bond?",
            opts: ["C2H4", "C2H6", "C2H2", "C2H8"],
            ans: 2,
            exp: "Acetylene C2H2 has C≡C triple bond.",
          },
          {
            q: "The process of purifying metals by electrolysis:",
            opts: ["Smelting", "Refining", "Calcination", "Roasting"],
            ans: 1,
            exp: "Electrolytic refining purifies metals.",
          },
          {
            q: "Molecular weight of H2SO4:",
            opts: ["94", "96", "98", "100"],
            ans: 2,
            exp: "2+32+64=98 g/mol.",
          },
          {
            q: "Which indicator is used for acid-base titration?",
            opts: [
              "Starch",
              "Methyl orange",
              "Potassium permanganate",
              "Benedict solution",
            ],
            ans: 1,
            exp: "Methyl orange changes from red (acid) to yellow (base).",
          },
          {
            q: "CNG stands for:",
            opts: [
              "Compressed Natural Gas",
              "Carbon Natural Gas",
              "Common Natural Gas",
              "Chemical Natural Gas",
            ],
            ans: 0,
            exp: "CNG = Compressed Natural Gas (mainly methane).",
          },
          {
            q: "Which of the following is a basic oxide?",
            opts: ["SO2", "NO2", "CaO", "CO2"],
            ans: 2,
            exp: "CaO (calcium oxide) is a basic oxide.",
          },
          {
            q: "IUPAC name of C3H7OH:",
            opts: ["Methanol", "Ethanol", "Propan-1-ol", "Butanol"],
            ans: 2,
            exp: "3 carbons + OH = Propan-1-ol.",
          },
          {
            q: "Avogadro's number ≈",
            opts: ["6.022×10²³", "6.022×10²²", "6.022×10²⁴", "1.67×10⁻²⁷"],
            ans: 0,
            exp: "6.022×10²³ mol⁻¹.",
          },
          {
            q: "Which type of isomerism is shown by C2H5OH and CH3OCH3?",
            opts: [
              "Chain isomerism",
              "Position isomerism",
              "Functional group isomerism",
              "Stereoisomerism",
            ],
            ans: 2,
            exp: "Same formula C2H6O, different functional groups (OH vs ether).",
          },
          {
            q: "Which is the best conductor of electricity?",
            opts: ["Iron", "Copper", "Silver", "Gold"],
            ans: 2,
            exp: "Silver has highest electrical conductivity.",
          },
          {
            q: "Hard water does NOT lather with soap because:",
            opts: [
              "Ca/Mg ions react with soap",
              "Water is too cold",
              "Soap dissolves too fast",
              "pH is too low",
            ],
            ans: 0,
            exp: "Ca²⁺/Mg²⁺ form scum with fatty acids in soap.",
          },
          {
            q: "DDT is an example of:",
            opts: ["Fertilizer", "Pesticide", "Medicine", "Polymer"],
            ans: 1,
            exp: "DDT = Dichloro Diphenyl Trichloroethane — an insecticide.",
          },
          {
            q: "Which is a reversible reaction?",
            opts: [
              "Burning of paper",
              "Rusting of iron",
              "N2+3H2 ⇌ 2NH3",
              "Explosion of dynamite",
            ],
            ans: 2,
            exp: "Haber process: N2+3H2⇌2NH3 is reversible.",
          },
          {
            q: "Hybridization of C in C2H2 (acetylene):",
            opts: ["sp", "sp²", "sp³", "sp³d"],
            ans: 0,
            exp: "sp hybridization — linear.",
          },
          {
            q: "Which vitamin is fat-soluble?",
            opts: ["Vitamin B", "Vitamin C", "Vitamin A", "Vitamin B12"],
            ans: 2,
            exp: "Vitamins A, D, E, K are fat-soluble.",
          },
          {
            q: "The process of dissolving iron in HCl:",
            opts: [
              "Fe + 2HCl → FeCl2 + H2",
              "Fe + HCl → FeOH + Cl2",
              "Fe + 3HCl → FeCl3 + H2",
              "2Fe + 6HCl → 2FeCl3 + 3H2",
            ],
            ans: 0,
            exp: "Fe + 2HCl → FeCl2 + H2↑.",
          },
        ],
      },
      {
        name: "English",
        icon: "📝",
        color: "#34495e",
        qs: [
          {
            q: '"The road was covered with snow." Identify subject:',
            opts: ["road", "was", "covered", "snow"],
            ans: 0,
            exp: '"The road" is the subject.',
          },
          {
            q: 'Antonym of "artificial":',
            opts: ["Fake", "Synthetic", "Natural", "Plastic"],
            ans: 2,
            exp: "Natural.",
          },
          {
            q: 'Fill: "She has been studying ___ 9 AM."',
            opts: ["for", "since", "from", "during"],
            ans: 1,
            exp: '"Since" = point in time.',
          },
          {
            q: 'Choose correct: "A lot of students ___ absent today."',
            opts: ["is", "was", "are", "has"],
            ans: 2,
            exp: '"A lot of" with countable plural → are.',
          },
          {
            q: 'Identify figure of speech: "He is as strong as a bull."',
            opts: ["Metaphor", "Simile", "Hyperbole", "Irony"],
            ans: 1,
            exp: 'Simile — uses "as".',
          },
          {
            q: '"He goes to AMU every day." — Tense:',
            opts: [
              "Past",
              "Present perfect",
              "Simple present",
              "Present continuous",
            ],
            ans: 2,
            exp: "Simple present.",
          },
          {
            q: 'One-word substitute: "One who does not believe in God":',
            opts: ["Agnostic", "Atheist", "Theist", "Deist"],
            ans: 1,
            exp: "Atheist.",
          },
          {
            q: 'Antonym of "verbose":',
            opts: ["Wordy", "Talkative", "Concise", "Elaborate"],
            ans: 2,
            exp: "Concise.",
          },
          {
            q: 'Fill blank: "He is proud ___ his achievements."',
            opts: ["of", "in", "at", "for"],
            ans: 0,
            exp: '"Proud of" = correct idiom.',
          },
          {
            q: 'Identify the infinitive: "She wants to become a doctor."',
            opts: ["She", "wants", "to become", "doctor"],
            ans: 2,
            exp: '"To become" = infinitive.',
          },
          {
            q: 'Choose correctly: "Neither ___ his friends ___ present."',
            opts: ["he nor were", "he nor are", "he nor is", "his nor was"],
            ans: 1,
            exp: "With neither...nor, verb agrees with nearer subject (his friends = plural → are).",
          },
          {
            q: 'Active to Passive: "AMU will conduct the exam."',
            opts: [
              "The exam will conduct by AMU.",
              "The exam will be conducted by AMU.",
              "The exam conducted by AMU.",
              "AMU conducted the exam.",
            ],
            ans: 1,
            exp: "Future passive: will be conducted.",
          },
          {
            q: 'Identify the clause: "When she arrived, everyone cheered."',
            opts: [
              "When she arrived",
              "everyone cheered",
              "she arrived",
              "When…cheered",
            ],
            ans: 0,
            exp: '"When she arrived" = adverbial clause.',
          },
          {
            q: "Correct spelling:",
            opts: ["Buisness", "Busines", "Business", "Bussiness"],
            ans: 2,
            exp: "B-U-S-I-N-E-S-S.",
          },
          {
            q: 'Synonym of "diligent":',
            opts: ["Lazy", "Inattentive", "Industrious", "Carefree"],
            ans: 2,
            exp: "Industrious/diligent = hardworking.",
          },
          {
            q: '"She hardly ever ___ late." (correct verb)',
            opts: ["come", "comes", "came", "coming"],
            ans: 1,
            exp: "3rd person singular present → comes.",
          },
          {
            q: 'Direct to indirect: He asked, "Are you ready?"',
            opts: [
              "He asked if I was ready.",
              "He asked if I am ready.",
              "He asked am I ready.",
              "He asked whether I will be ready.",
            ],
            ans: 0,
            exp: '"Whether/if I was ready" — yes/no question uses if/whether.',
          },
          {
            q: 'The word "autobiography" contains how many morphemes?',
            opts: ["2", "3", "4", "5"],
            ans: 1,
            exp: "auto + bio + graphy = 3 morphemes.",
          },
          {
            q: 'Choose: "The team ___ playing well."',
            opts: ["am", "is", "are", "were"],
            ans: 1,
            exp: '"Team" = collective noun → is (British: are also accepted; choose "is").',
          },
          {
            q: 'Antonym of "transparent":',
            opts: ["Clear", "Opaque", "Visible", "Bright"],
            ans: 1,
            exp: "Opaque.",
          },
        ],
      },
    ],
  },

  /* ══════════════════════════════════════
   DU / IPU  (25 flat)
══════════════════════════════════════ */
  du: {
    title: "DU / IPU Entrance Mock Test",
    subject: "GK · Reasoning · English · Maths",
    marks: "+5 / -1",
    time: 30,
    qs: [
      {
        q: "Delhi University established in:",
        opts: ["1920", "1922", "1918", "1925"],
        ans: 1,
        exp: "University of Delhi established 1922.",
      },
      {
        q: "Longest river in India:",
        opts: ["Yamuna", "Brahmaputra", "Ganga", "Godavari"],
        ans: 2,
        exp: "Ganga ~2,525 km.",
      },
      {
        q: "First Prime Minister of India:",
        opts: ["Gandhi", "Sardar Patel", "Jawaharlal Nehru", "Rajendra Prasad"],
        ans: 2,
        exp: "Jawaharlal Nehru (1947–1964).",
      },
      {
        q: "Boys:Girls=3:2 in class of 30. Girls:",
        opts: ["10", "12", "18", "15"],
        ans: 1,
        exp: "(2/5)×30=12.",
      },
      {
        q: "Formula of common salt:",
        opts: ["NaOH", "KCl", "NaCl", "Na2CO3"],
        ans: 2,
        exp: "NaCl.",
      },
      {
        q: "Primary colour of light:",
        opts: ["Green", "Orange", "Purple", "Brown"],
        ans: 0,
        exp: "Red, Green, Blue (RGB).",
      },
      {
        q: 'Antonym of "Transparent":',
        opts: ["Clear", "Opaque", "Bright", "Shiny"],
        ans: 1,
        exp: "Opaque.",
      },
      {
        q: "Buy Rs.800, sell Rs.1000. Profit%:",
        opts: ["20%", "25%", "30%", "15%"],
        ans: 1,
        exp: "200/800×100=25%.",
      },
      {
        q: "Speed of light:",
        opts: ["3×10⁸ m/s", "3×10⁶ m/s", "3×10¹⁰ m/s", "3×10⁴ m/s"],
        ans: 0,
        exp: "c=3×10⁸ m/s.",
      },
      {
        q: "HTML is a:",
        opts: ["Programming language", "Markup language", "Database", "OS"],
        ans: 1,
        exp: "HyperText Markup Language.",
      },
      {
        q: "Indus Valley Civilization on banks of:",
        opts: ["Ganga", "Yamuna", "Indus", "Brahmaputra"],
        ans: 2,
        exp: "Indus river.",
      },
      { q: "25% of 240:", opts: ["50", "55", "60", "65"], ans: 2, exp: "60." },
      {
        q: 'Synonym of "diligent":',
        opts: ["Lazy", "Hardworking", "Careless", "Slow"],
        ans: 1,
        exp: "Hardworking.",
      },
      {
        q: "How many bytes in 1 KB?",
        opts: ["100", "512", "1000", "1024"],
        ans: 3,
        exp: "1024 bytes.",
      },
      {
        q: "State with highest population:",
        opts: ["Maharashtra", "Uttar Pradesh", "Bihar", "West Bengal"],
        ans: 1,
        exp: "Uttar Pradesh.",
      },
      {
        q: "Triangle with all equal sides:",
        opts: ["Scalene", "Isosceles", "Equilateral", "Right-angled"],
        ans: 2,
        exp: "Equilateral.",
      },
      {
        q: "Indian National Anthem composed by:",
        opts: ["Bankim Chandra", "Mahatma Gandhi", "R.N. Tagore", "Iqbal"],
        ans: 2,
        exp: "Rabindranath Tagore.",
      },
      {
        q: "If x/4=5, x=",
        opts: ["10", "15", "20", "25"],
        ans: 2,
        exp: "x=20.",
      },
      {
        q: "IPU stands for:",
        opts: [
          "Indira Gandhi University",
          "Indraprastha University",
          "Indian Polytechnic Univ",
          "Integrated Programs Univ",
        ],
        ans: 1,
        exp: "Guru Gobind Singh Indraprastha University.",
      },
      {
        q: "CO2 stands for:",
        opts: [
          "Carbon monoxide",
          "Carbon dioxide",
          "Calcium carbonate",
          "Copper oxide",
        ],
        ans: 1,
        exp: "Carbon Dioxide.",
      },
      {
        q: "India became Republic on:",
        opts: ["15 Aug 1947", "26 Jan 1950", "26 Jan 1947", "15 Aug 1950"],
        ans: 1,
        exp: "26 January 1950.",
      },
      {
        q: "Area of triangle base=10, height=6:",
        opts: ["30", "60", "15", "45"],
        ans: 0,
        exp: "½×10×6=30.",
      },
      {
        q: "Which is not a search engine?",
        opts: ["Google", "Bing", "Yahoo", "Facebook"],
        ans: 3,
        exp: "Facebook is social media.",
      },
      {
        q: "Latitude of equator:",
        opts: ["0°", "30°", "45°", "90°"],
        ans: 0,
        exp: "0°.",
      },
      {
        q: "GDP stands for:",
        opts: [
          "Gross Domestic Product",
          "Gross Department Product",
          "General Domestic Product",
          "Gross Development Plan",
        ],
        ans: 0,
        exp: "Gross Domestic Product.",
      },
    ],
  },

  /* ══════════════════════════════════════
   GK  (25 flat)
══════════════════════════════════════ */
  gk: {
    title: "General Knowledge Mock Test",
    subject: "Current Affairs · Static GK",
    marks: "+1 / 0",
    time: 20,
    qs: [
      {
        q: "President of India (2025):",
        opts: [
          "Ram Nath Kovind",
          "Droupadi Murmu",
          "Pranab Mukherjee",
          "APJ Kalam",
        ],
        ans: 1,
        exp: "Droupadi Murmu — 15th President (July 2022).",
      },
      {
        q: "Pink City of India:",
        opts: ["Jaipur", "Jodhpur", "Udaipur", "Ajmer"],
        ans: 0,
        exp: "Jaipur — painted pink in 1876.",
      },
      {
        q: "2024 Olympics held in:",
        opts: ["Tokyo", "Los Angeles", "Paris", "London"],
        ans: 2,
        exp: "Paris 2024.",
      },
      {
        q: 'Symbol "Au" stands for:',
        opts: ["Silver", "Aluminium", "Gold", "Copper"],
        ans: 2,
        exp: "Au = Gold.",
      },
      {
        q: "ISRO stands for:",
        opts: [
          "Indian Science Research Org",
          "Indian Space Research Organisation",
          "International Space Research Org",
          "Indian Satellite Research Office",
        ],
        ans: 1,
        exp: "1969.",
      },
      {
        q: "States in India (2025):",
        opts: ["28", "29", "30", "27"],
        ans: 0,
        exp: "28 states + 8 UTs.",
      },
      {
        q: "National sport of India:",
        opts: ["Cricket", "Hockey", "Badminton", "Kabaddi"],
        ans: 1,
        exp: "Field Hockey.",
      },
      {
        q: "Mount Everest in:",
        opts: ["India", "China", "Nepal", "Bhutan"],
        ans: 2,
        exp: "Nepal.",
      },
      {
        q: "Gas absorbed by plants in photosynthesis:",
        opts: ["Oxygen", "Nitrogen", "CO2", "Hydrogen"],
        ans: 2,
        exp: "CO2.",
      },
      {
        q: "Full form of NASA:",
        opts: [
          "National Aeronautics and Space Administration",
          "National Air and Space Agency",
          "North American Space Agency",
          "National Aero Science Authority",
        ],
        ans: 0,
        exp: "USA space agency.",
      },
      {
        q: "Smallest country by area:",
        opts: ["Monaco", "San Marino", "Liechtenstein", "Vatican City"],
        ans: 3,
        exp: "Vatican City ~0.44 km².",
      },
      {
        q: "Who invented light bulb?",
        opts: ["Newton", "Einstein", "Edison", "Bell"],
        ans: 2,
        exp: "Thomas Edison (1879).",
      },
      {
        q: "Currency of Japan:",
        opts: ["Yuan", "Yen", "Won", "Ringgit"],
        ans: 1,
        exp: "Yen.",
      },
      {
        q: "Brain of a computer:",
        opts: ["RAM", "Hard Disk", "CPU", "Monitor"],
        ans: 2,
        exp: "CPU.",
      },
      {
        q: "Full form of AIDS:",
        opts: [
          "Acquired Immuno Deficiency Syndrome",
          "Acute Immune Disorder Syndrome",
          "Acquired Immune Deficiency Syndrome",
          "Auto Immune Disease Syndrome",
        ],
        ans: 2,
        exp: "Acquired Immune Deficiency Syndrome.",
      },
      {
        q: "First man on Moon:",
        opts: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"],
        ans: 1,
        exp: "Neil Armstrong (20 July 1969).",
      },
      {
        q: "Full form of PDF:",
        opts: [
          "Portable Document Format",
          "Personal Document File",
          "Printable Document Format",
          "Public Data File",
        ],
        ans: 0,
        exp: "Adobe PDF.",
      },
      {
        q: "Capital of France:",
        opts: ["Berlin", "London", "Paris", "Rome"],
        ans: 2,
        exp: "Paris.",
      },
      {
        q: "Mahatma Gandhi born in:",
        opts: ["1867", "1869", "1871", "1863"],
        ans: 1,
        exp: "2 October 1869.",
      },
      {
        q: "Human eye focusses image on:",
        opts: ["Cornea", "Iris", "Retina", "Lens"],
        ans: 2,
        exp: "Retina.",
      },
      {
        q: "Full form of INDIA:",
        opts: [
          "Not an acronym",
          "Independent Nation with Democratic Ideals",
          "Indian Neutral Democratic Independent Alliance",
          "Independent Non-Democratic Indian Authority",
        ],
        ans: 0,
        exp: "Not an acronym — from Indus river.",
      },
      {
        q: "Largest democracy:",
        opts: ["USA", "China", "India", "Russia"],
        ans: 2,
        exp: "India.",
      },
      {
        q: "Water boils at ___ °C:",
        opts: ["90", "95", "100", "105"],
        ans: 2,
        exp: "100°C.",
      },
      {
        q: "Winner of ICC Cricket World Cup 2023:",
        opts: ["Australia", "India", "England", "South Africa"],
        ans: 0,
        exp: "Australia.",
      },
      {
        q: "Full form of PIN:",
        opts: [
          "Postal Index Number",
          "Post Identification Number",
          "Personal Index Number",
          "Postal Identification Number",
        ],
        ans: 0,
        exp: "Postal Index Number.",
      },
    ],
  },

  /* ══════════════════════════════════════
   MATHEMATICS  (25 flat)
══════════════════════════════════════ */
  maths: {
    title: "Mathematics Mock Test",
    subject: "Algebra · Geometry · Arithmetic",
    marks: "+4 / -1",
    time: 30,
    qs: [
      { q: "If 2x+5=15, x=", opts: ["4", "5", "6", "10"], ans: 1, exp: "x=5." },
      {
        q: "HCF of 36 and 48:",
        opts: ["6", "12", "18", "24"],
        ans: 1,
        exp: "12.",
      },
      {
        q: "Area of circle r=7cm (π=22/7):",
        opts: ["154 cm²", "144 cm²", "176 cm²", "132 cm²"],
        ans: 0,
        exp: "154 cm².",
      },
      { q: "15% of 200:", opts: ["25", "30", "35", "20"], ans: 1, exp: "30." },
      {
        q: "Sum of angles of triangle:",
        opts: ["90°", "180°", "270°", "360°"],
        ans: 1,
        exp: "180°.",
      },
      {
        q: "(a+b)²=",
        opts: ["a²+b²", "a²+2ab+b²", "a²-2ab+b²", "2a+2b"],
        ans: 1,
        exp: "a²+2ab+b².",
      },
      {
        q: "LCM of 4 and 6:",
        opts: ["12", "18", "24", "6"],
        ans: 0,
        exp: "12.",
      },
      {
        q: "Train 240km in 4h. Speed:",
        opts: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
        ans: 1,
        exp: "60 km/h.",
      },
      { q: "√64+√36=", opts: ["14", "12", "16", "10"], ans: 0, exp: "8+6=14." },
      {
        q: "Perimeter of square side 10cm:",
        opts: ["100 cm", "40 cm", "20 cm", "80 cm"],
        ans: 1,
        exp: "40 cm.",
      },
      {
        q: "SI: P=1000,R=5%,T=2yr:",
        opts: ["100", "50", "200", "150"],
        ans: 0,
        exp: "100.",
      },
      { q: "3x=27, x=", opts: ["3", "6", "9", "27"], ans: 2, exp: "9." },
      {
        q: "Volume of cube side 4cm:",
        opts: ["16 cm³", "48 cm³", "64 cm³", "32 cm³"],
        ans: 2,
        exp: "64 cm³.",
      },
      {
        q: "20% of 500:",
        opts: ["80", "100", "120", "50"],
        ans: 1,
        exp: "100.",
      },
      {
        q: "Diagonal of square side a:",
        opts: ["a", "a√2", "a/2", "2a"],
        ans: 1,
        exp: "a√2.",
      },
      { q: "2³+3²=", opts: ["13", "15", "17", "19"], ans: 2, exp: "17." },
      {
        q: "Average of 10,20,30,40,50:",
        opts: ["25", "30", "35", "40"],
        ans: 1,
        exp: "30.",
      },
      {
        q: "Profit%: CP=400,SP=500:",
        opts: ["20%", "25%", "15%", "10%"],
        ans: 1,
        exp: "25%.",
      },
      {
        q: "Sum of first 5 odd numbers:",
        opts: ["20", "25", "30", "15"],
        ans: 1,
        exp: "25.",
      },
      { q: "x=7: x²=", opts: ["14", "28", "49", "56"], ans: 2, exp: "49." },
      {
        q: "Circumference r=7 (π=22/7):",
        opts: ["22", "44", "66", "88"],
        ans: 1,
        exp: "44.",
      },
      {
        q: "Speed=80km/h, time=3h. Distance:",
        opts: ["200 km", "240 km", "280 km", "320 km"],
        ans: 1,
        exp: "240 km.",
      },
      {
        q: "Smallest: 1/2,1/3,1/4,1/6",
        opts: ["1/2", "1/3", "1/4", "1/6"],
        ans: 3,
        exp: "1/6.",
      },
      {
        q: "BODMAS: 8÷2×(2+2)=",
        opts: ["1", "4", "8", "16"],
        ans: 3,
        exp: "16.",
      },
      {
        q: "a=3,b=4: a²+b²=",
        opts: ["7", "12", "25", "14"],
        ans: 2,
        exp: "25.",
      },
    ],
  },
}; /* END OF QB */
/* ══════════════════════════════════════════════════════════
   ENGINE UTILITIES
══════════════════════════════════════════════════════════ */
function flattenSections(exam) {
  var flat = [];
  exam.sections.forEach(function (sec) {
    sec.qs.forEach(function (q, i) {
      flat.push({
        q: q.q,
        opts: q.opts,
        ans: q.ans,
        exp: q.exp,
        secName: sec.name,
        secIcon: sec.icon,
        secColor: sec.color,
        isFirst: i === 0,
      });
    });
  });
  return flat;
}

function parseMarks(marksStr) {
  var parts = marksStr.split("/");
  var pos = parseFloat(parts[0]) || 1;
  var neg = parts[1] ? Math.abs(parseFloat(parts[1])) : 0;
  return { pos: pos, neg: neg };
}

/* ══════════════════════════════════════════════════════════
   STATE
══════════════════════════════════════════════════════════ */
var state = {
  exam: null,
  flatQs: [],
  qIdx: 0,
  answers: [],
  timerID: null,
  timeLeft: 0,
  locked: false,
  offlineExam: "",
};

/* ══════════════════════════════════════════════════════════
   DOM READY
══════════════════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", function () {
  wire("btnOnline", function () {
    openPanel("online");
  });
  wire("btnOffline", function () {
    openPanel("offline");
  });

  /* Online exam chips */
  document
    .querySelectorAll("#examSelector .exam-chip")
    .forEach(function (chip) {
      chip.addEventListener("click", function () {
        document
          .querySelectorAll("#examSelector .exam-chip")
          .forEach(function (c) {
            c.classList.remove("selected");
          });
        chip.classList.add("selected");
        var key = chip.getAttribute("data-exam");
        if (key === "jmi") {
          showClassModal("jmi");
        } else if (key === "amu") {
          showClassModal("amu");
        } else if (key === "diploma") {
          showDiplomaModal();
        } else {
          beginTest(key);
        }
      });
    });

  /* Offline exam cards */
  document
    .querySelectorAll("#offlineExamGrid .off-exam-card")
    .forEach(function (card) {
      card.addEventListener("click", function () {
        document
          .querySelectorAll("#offlineExamGrid .off-exam-card")
          .forEach(function (c) {
            c.classList.remove("selected");
          });
        card.classList.add("selected");
        showOffForm(card.getAttribute("data-exam"));
      });
    });

  wire("btnOffRegSubmit", submitOffline);
  wire("btnWaDirect", function () {
    wa(
      "I want to register for the Free Offline Mock Test at ABC Institute, Jamia Nagar. Please confirm my slot.",
    );
  });
  wire("btnNext", nextQ);
  wire("btnExplain", showExp);
  wire("btnRetry", retryTest);
  wire("btnShareWa", shareResult);

  document.querySelectorAll("[data-paper]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      wa("Please send me the paper: " + btn.getAttribute("data-paper"));
    });
  });
  wire("btnUpload", uploadPaper);

  injectModals();
});

function wire(id, fn) {
  var el = document.getElementById(id);
  if (el) el.addEventListener("click", fn);
}
function wa(text) {
  window.open(
    "https://wa.me/918092870350?text=" + encodeURIComponent(text),
    "_blank",
  );
}

/* ══════════════════════════════════════════════════════════
   MODAL FACTORY — builds class/institute selector modals
══════════════════════════════════════════════════════════ */
function injectModals() {
  if (!document.getElementById("classModal")) buildClassModal();
  if (!document.getElementById("diplomaModal")) buildDiplomaModal();
}

function buildClassModal() {
  var m = document.createElement("div");
  m.id = "classModal";
  m.style.cssText =
    "display:none;position:fixed;inset:0;background:rgba(0,0,0,0.75);z-index:9999;align-items:center;justify-content:center;";
  m.innerHTML =
    '<div id="classModalInner" style="background:#1a1a2e;border:2px solid #d4a843;border-radius:16px;padding:36px 40px;max-width:460px;width:92%;text-align:center;box-shadow:0 8px 40px rgba(0,0,0,0.6);">' +
    '<div id="classModalIcon" style="font-size:2.2rem;margin-bottom:6px;"></div>' +
    '<h2 id="classModalTitle" style="color:#d4a843;margin:0 0 6px;font-size:1.4rem;"></h2>' +
    '<p id="classModalDesc" style="color:#ccc;margin:0 0 24px;font-size:0.92rem;"></p>' +
    '<div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-bottom:24px;">' +
    '<button onclick="startClass(6)" style="background:linear-gradient(135deg,#e67e22,#d35400);color:#fff;border:none;border-radius:12px;padding:16px 28px;font-size:1.25rem;font-weight:700;cursor:pointer;box-shadow:0 4px 14px rgba(211,84,0,0.4);">📘 Class 6</button>' +
    '<button onclick="startClass(9)" style="background:linear-gradient(135deg,#27ae60,#1e8449);color:#fff;border:none;border-radius:12px;padding:16px 28px;font-size:1.25rem;font-weight:700;cursor:pointer;box-shadow:0 4px 14px rgba(30,132,73,0.4);">📗 Class 9</button>' +
    '<button onclick="startClass(11)" style="background:linear-gradient(135deg,#2980b9,#1a5276);color:#fff;border:none;border-radius:12px;padding:16px 28px;font-size:1.25rem;font-weight:700;cursor:pointer;box-shadow:0 4px 14px rgba(26,82,118,0.4);">📕 Class 11</button>' +
    "</div>" +
    '<button onclick="closeClassModal()" style="background:transparent;border:1px solid #555;color:#aaa;border-radius:8px;padding:8px 20px;cursor:pointer;font-size:0.9rem;">✕ Cancel</button>' +
    "</div>";
  document.body.appendChild(m);
}

function buildDiplomaModal() {
  var m = document.createElement("div");
  m.id = "diplomaModal";
  m.style.cssText =
    "display:none;position:fixed;inset:0;background:rgba(0,0,0,0.75);z-index:9999;align-items:center;justify-content:center;";
  m.innerHTML =
    '<div style="background:#1a1a2e;border:2px solid #d4a843;border-radius:16px;padding:36px 40px;max-width:500px;width:92%;text-align:center;box-shadow:0 8px 40px rgba(0,0,0,0.6);">' +
    '<div style="font-size:2.2rem;margin-bottom:6px;">🎓</div>' +
    '<h2 style="color:#d4a843;margin:0 0 6px;font-size:1.4rem;">Diploma Entrance Mock Test</h2>' +
    '<p style="color:#ccc;margin:0 0 24px;font-size:0.92rem;">Select your target institute.<br>' +
    '<span style="font-size:0.83rem;color:#aaa;">100 questions · Maths(40) · Physics(20) · Chemistry(20) · English(20)</span></p>' +
    '<div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-bottom:24px;">' +
    '<button onclick="startDiploma(\'jmi\')" style="background:linear-gradient(135deg,#e74c3c,#c0392b);color:#fff;border:none;border-radius:12px;padding:16px 26px;font-size:1.1rem;font-weight:700;cursor:pointer;box-shadow:0 4px 14px rgba(192,57,43,0.4);">🏛️ JMI Diploma</button>' +
    '<button onclick="startDiploma(\'pusha\')" style="background:linear-gradient(135deg,#8e44ad,#6c3483);color:#fff;border:none;border-radius:12px;padding:16px 26px;font-size:1.1rem;font-weight:700;cursor:pointer;box-shadow:0 4px 14px rgba(108,52,131,0.4);">🌿 PUSHA Diploma</button>' +
    '<button onclick="startDiploma(\'amu\')" style="background:linear-gradient(135deg,#16a085,#1abc9c);color:#fff;border:none;border-radius:12px;padding:16px 26px;font-size:1.1rem;font-weight:700;cursor:pointer;box-shadow:0 4px 14px rgba(22,160,133,0.4);">🎓 AMU Diploma</button>' +
    "</div>" +
    '<button onclick="closeDiplomaModal()" style="background:transparent;border:1px solid #555;color:#aaa;border-radius:8px;padding:8px 20px;cursor:pointer;font-size:0.9rem;">✕ Cancel</button>' +
    "</div>";
  document.body.appendChild(m);
}

/* ── current class-modal prefix (jmi or amu) ── */
var _classPrefix = "jmi";

function showClassModal(prefix) {
  _classPrefix = prefix;
  var isJmi = prefix === "jmi";
  document.getElementById("classModalIcon").textContent = isJmi ? "🏫" : "🎓";
  document.getElementById("classModalTitle").textContent =
    (isJmi ? "JMI" : "AMU") + " Entrance Mock Test";
  document.getElementById("classModalDesc").innerHTML =
    "Select your class to begin.<br>" +
    '<span style="font-size:0.83rem;color:#aaa;">100 questions · Maths(30)·Science(25)·Social Science(25)·English(20)</span>';
  var m = document.getElementById("classModal");
  m.style.display = "flex";
}

function closeClassModal() {
  document.getElementById("classModal").style.display = "none";
  document.querySelectorAll("#examSelector .exam-chip").forEach(function (c) {
    c.classList.remove("selected");
  });
}

function startClass(cls) {
  closeClassModal();
  beginTest(_classPrefix + "_" + cls);
}

function showDiplomaModal() {
  document.getElementById("diplomaModal").style.display = "flex";
}

function closeDiplomaModal() {
  document.getElementById("diplomaModal").style.display = "none";
  document.querySelectorAll("#examSelector .exam-chip").forEach(function (c) {
    c.classList.remove("selected");
  });
}

function startDiploma(inst) {
  closeDiplomaModal();
  beginTest("diploma_" + inst);
}

/* ══════════════════════════════════════════════════════════
   PANEL CONTROL
══════════════════════════════════════════════════════════ */
function openPanel(mode) {
  var online = document.getElementById("onlinePanel");
  var offline = document.getElementById("offlinePanel");
  var onCard = document.getElementById("onlineCard");
  var offCard = document.getElementById("offlineCard");
  if (!onCard || !offCard) return;
  onCard.classList.remove("selected");
  offCard.classList.remove("selected");
  if (mode === "online") {
    onCard.classList.add("selected");
    if (online) online.classList.add("active");
    if (offline) offline.classList.remove("active");
    scroll2("onlinePanel");
  } else {
    offCard.classList.add("selected");
    if (offline) offline.classList.add("active");
    if (online) online.classList.remove("active");
    scroll2("offlinePanel");
  }
}

function scroll2(id) {
  setTimeout(function () {
    var el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 80);
}

/* ══════════════════════════════════════════════════════════
   TEST ENGINE
══════════════════════════════════════════════════════════ */
function beginTest(examKey) {
  var exam = QB[examKey];
  if (!exam) {
    console.warn("Unknown exam key:", examKey);
    return;
  }
  state.exam = examKey;
  state.qIdx = 0;
  state.locked = false;
  state.flatQs = exam.sectioned
    ? flattenSections(exam)
    : exam.qs.map(function (q) {
        return {
          q: q.q,
          opts: q.opts,
          ans: q.ans,
          exp: q.exp,
          secName: null,
          secIcon: null,
          secColor: null,
          isFirst: false,
        };
      });
  state.answers = new Array(state.flatQs.length).fill(null);
  state.timeLeft = exam.time * 60;
  setText("testTitle", exam.title);
  setText("testQCount", state.flatQs.length);
  setText("testMarks", exam.marks);
  show("liveTestBox");
  showEl("questionArea");
  hideEl("resultBox");
  renderQ(0);
  startTimer();
  scroll2("liveTestBox");
}

function renderQ(idx) {
  var exam = QB[state.exam];
  var q = state.flatQs[idx];
  var total = state.flatQs.length;
  var pct = Math.round(((idx + 1) / total) * 100);
  var pf = document.getElementById("progressFill");
  if (pf) pf.style.width = pct + "%";

  /* Section banner */
  var banner = document.getElementById("sectionBanner");
  if (q.secName) {
    if (!banner) {
      banner = document.createElement("div");
      banner.id = "sectionBanner";
      banner.style.cssText =
        "padding:9px 16px;border-radius:9px;font-weight:700;font-size:0.97rem;margin-bottom:12px;display:flex;align-items:center;gap:8px;color:#fff;";
      var qt = document.getElementById("qText");
      if (qt && qt.parentNode) qt.parentNode.insertBefore(banner, qt);
    }
    banner.style.background = q.secColor || "#333";
    banner.style.display = "flex";
    banner.textContent = (q.secIcon || "") + "\u2002" + q.secName + " Section";
  } else if (banner) {
    banner.style.display = "none";
  }

  setText("qNumber", "Question " + (idx + 1) + " of " + total);
  setText("qMarksInfo", exam.marks);
  setText("qText", q.q);

  var labels = ["A", "B", "C", "D"];
  var optsEl = document.getElementById("qOptions");
  if (!optsEl) return;
  optsEl.innerHTML = "";
  q.opts.forEach(function (opt, i) {
    var div = document.createElement("div");
    div.className = "q-opt" + (state.answers[idx] === i ? " selected" : "");
    div.innerHTML =
      '<span class="opt-label">' +
      labels[i] +
      '</span><span class="opt-text">' +
      opt +
      "</span>";
    div.addEventListener("click", function () {
      pickAnswer(i);
    });
    optsEl.appendChild(div);
  });

  hide("qExplanation");
  var eb = document.getElementById("btnExplain");
  if (eb) eb.style.display = "none";
  setText("btnNext", idx === total - 1 ? "Submit Test ✓" : "Next →");
}

function pickAnswer(optIdx) {
  if (state.locked) return;
  state.answers[state.qIdx] = optIdx;
  document.querySelectorAll("#qOptions .q-opt").forEach(function (el, i) {
    el.classList.toggle("selected", i === optIdx);
  });
  var eb = document.getElementById("btnExplain");
  if (eb) eb.style.display = "inline-block";
}

function showExp() {
  var q = state.flatQs[state.qIdx];
  var labels = ["A", "B", "C", "D"];
  var el = document.getElementById("qExplText");
  if (el)
    el.innerHTML =
      "<strong>✓ Correct: " +
      labels[q.ans] +
      ". " +
      q.opts[q.ans] +
      "</strong><br><br>" +
      q.exp;
  show("qExplanation");
}

function nextQ() {
  if (state.qIdx < state.flatQs.length - 1) {
    state.qIdx++;
    renderQ(state.qIdx);
  } else finishTest();
}

function finishTest() {
  clearInterval(state.timerID);
  state.locked = true;
  var exam = QB[state.exam];
  var sc = parseMarks(exam.marks);
  var pos = sc.pos,
    neg = sc.neg;
  var correct = 0,
    wrong = 0,
    skipped = 0,
    score = 0;
  state.answers.forEach(function (ans, i) {
    if (ans === null) {
      skipped++;
    } else if (ans === state.flatQs[i].ans) {
      correct++;
      score += pos;
    } else {
      wrong++;
      score = Math.max(0, score - neg);
    }
  });
  /* Colour last question options */
  var lastQ = state.flatQs[state.qIdx];
  document.querySelectorAll("#qOptions .q-opt").forEach(function (el, i) {
    if (i === lastQ.ans) el.classList.add("correct");
    else if (state.answers[state.qIdx] === i) el.classList.add("wrong");
  });
  var maxScore = state.flatQs.length * pos;
  var pct = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
  var msg =
    pct >= 80
      ? "🏆 Excellent! You are exam-ready!"
      : pct >= 60
        ? "👍 Good! Regular practice will make you perfect."
        : pct >= 40
          ? "📚 Fair attempt. Revise weak topics."
          : "💪 Keep practising! Join ABC Institute for guidance.";
  setText("resultScore", score);
  setText("rsCorrect", correct);
  setText("rsWrong", wrong);
  setText("rsSkipped", skipped);
  setText("resultMsg", msg);
  var bdEl = document.getElementById("rsBreakdown");
  if (bdEl) {
    var bd = buildBreakdown(exam, pos, neg);
    bdEl.innerHTML = bd;
    bdEl.style.display = bd ? "block" : "none";
  }
  hideEl("questionArea");
  setTimeout(function () {
    showEl("resultBox");
    scroll2("resultBox");
  }, 300);
}

function buildBreakdown(exam, pos, neg) {
  if (!exam.sectioned || !exam.sections) return "";
  var html =
    '<hr style="border-color:#333;margin:12px 0"><strong style="color:#d4a843">Subject-wise Score:</strong><br>';
  var off = 0;
  exam.sections.forEach(function (sec) {
    var cor = 0,
      wr = 0,
      sk = 0;
    for (var i = 0; i < sec.qs.length; i++) {
      var ans = state.answers[off + i];
      if (ans === null) sk++;
      else if (ans === state.flatQs[off + i].ans) cor++;
      else wr++;
    }
    var ss = Math.max(0, cor * pos - wr * neg);
    html +=
      '<div style="margin:5px 0;padding:6px 12px;border-radius:8px;background:#1a1a2e;border-left:4px solid ' +
      sec.color +
      '">' +
      (sec.icon || "") +
      ' <strong style="color:' +
      sec.color +
      '">' +
      sec.name +
      "</strong> — " +
      "Score: <strong>" +
      ss +
      "</strong> | ✅ " +
      cor +
      " ❌ " +
      wr +
      " ⏭ " +
      sk +
      "</div>";
    off += sec.qs.length;
  });
  return html;
}

function retryTest() {
  hideEl("resultBox");
  beginTest(state.exam);
}

function shareResult() {
  var se = document.getElementById("resultScore");
  var ce = document.getElementById("rsCorrect");
  var we = document.getElementById("rsWrong");
  if (!se) return;
  var exam = QB[state.exam] ? QB[state.exam].title : "Mock Test";
  wa(
    "ABC Institute Mock Test Result\n\nExam: " +
      exam +
      "\nScore: " +
      se.textContent +
      " marks\nCorrect: " +
      (ce ? ce.textContent : "0") +
      "  Wrong: " +
      (we ? we.textContent : "0") +
      "\n\nABC Institute, Jogabai, Jamia Nagar, New Delhi\nPh: 8076302065 | WA: 8092870350\n\nPlease guide me to improve!",
  );
}

/* Timer */
function startTimer() {
  clearInterval(state.timerID);
  var el = document.getElementById("testTimer");
  if (el) el.style.color = "var(--gold,#d4a843)";
  state.timerID = setInterval(function () {
    state.timeLeft--;
    var m = String(Math.floor(state.timeLeft / 60)).padStart(2, "0");
    var s = String(state.timeLeft % 60).padStart(2, "0");
    if (el) el.textContent = m + ":" + s;
    if (state.timeLeft <= 60 && el) el.style.color = "#ff6b6b";
    if (state.timeLeft <= 0) {
      clearInterval(state.timerID);
      finishTest();
    }
  }, 1000);
}

/* ══════════════════════════════════════════════════════════
   OFFLINE FORM
══════════════════════════════════════════════════════════ */
function showOffForm(examName) {
  state.offlineExam = examName;
  setText("selectedExamLabel", examName);
  show("offRegSection");
  scroll2("offRegSection");
}

function submitOffline() {
  var name = val("off_name"),
    phone = val("off_phone"),
    cls = val("off_class"),
    date = val("off_date"),
    parent = val("off_parent");
  if (!name || !phone) {
    alert("Please enter your Name and Mobile Number.");
    return;
  }
  var text =
    "OFFLINE MOCK TEST REGISTRATION\nABC Institute of Science & Commerce\n\n" +
    "Student: " +
    name +
    "\nMobile: " +
    phone +
    "\nExam: " +
    (state.offlineExam || "Not selected") +
    "\nClass: " +
    (cls || "Not mentioned") +
    "\nDate Preferred: " +
    (date || "Any weekend") +
    "\nParent/Guardian: " +
    (parent || "Not provided") +
    "\n\nAddress: ABC Institute, 161/25 Jogabai,\nNear Abidin Medical Centre,\nJamia Nagar, New Delhi - 110025\n\nRegistered via website offline test form.";
  show("regSuccess");
  setTimeout(function () {
    wa(text);
  }, 700);
}

/* ══════════════════════════════════════════════════════════
   UPLOAD PAPER
══════════════════════════════════════════════════════════ */
function uploadPaper() {
  var exam = val("up_exam"),
    title = val("up_title"),
    qcount = val("up_qcount"),
    date = val("up_date");
  var qfile = document.getElementById("up_qpaper"),
    sfile = document.getElementById("up_sol");
  if (!exam || !title) {
    alert("Please select exam and enter title.");
    return;
  }
  var text =
    "NEW PAPER UPLOAD - ABC INSTITUTE\n\nExam: " +
    exam +
    "\nTitle: " +
    title +
    "\nQuestions: " +
    (qcount || "N/A") +
    "\nTest Date: " +
    (date || "N/A") +
    "\nQ-Paper: " +
    (qfile && qfile.files[0] ? qfile.files[0].name : "Not attached") +
    "\nSolution: " +
    (sfile && sfile.files[0] ? sfile.files[0].name : "Not attached") +
    "\n\nPlease upload PDFs to website download section.";
  show("uploadSuccess");
  setTimeout(function () {
    wa(text);
  }, 600);
}

/* ══════════════════════════════════════════════════════════
   DOM HELPERS
══════════════════════════════════════════════════════════ */
function setText(id, v) {
  var el = document.getElementById(id);
  if (el) el.textContent = v;
}
function val(id) {
  var el = document.getElementById(id);
  return el ? el.value.trim() : "";
}
function showEl(id) {
  var el = document.getElementById(id);
  if (el) el.style.display = "block";
}
function hideEl(id) {
  var el = document.getElementById(id);
  if (el) el.style.display = "none";
}
function show(id) {
  var el = document.getElementById(id);
  if (!el) return;
  if (
    el.classList.contains("test-panel") ||
    el.classList.contains("live-test-box") ||
    el.classList.contains("q-explanation")
  )
    el.classList.add("active");
  else if (el.classList.contains("off-reg-section")) el.classList.add("show");
  else el.style.display = "block";
}
function hide(id) {
  var el = document.getElementById(id);
  if (!el) return;
  if (
    el.classList.contains("test-panel") ||
    el.classList.contains("live-test-box") ||
    el.classList.contains("q-explanation")
  )
    el.classList.remove("active");
  else if (el.classList.contains("off-reg-section"))
    el.classList.remove("show");
  else el.style.display = "none";
}
