const quizData = [
  {
    question: "Which of the following is a distinguishing feature of eukaryotic cells compared to prokaryotic cells?",
    options: ["a) Presence of a cell wall", "b) Absence of a nucleus", "c) Presence of membrane-bound organelles", "d) Lack of genetic material"],
    answer: "c) Presence of membrane-bound organelles"
  },
  {
    question: "Archaebacteria are known to thrive in:",
    options: ["a) Acidic environments", "b) Oxygen-rich environments", "c) Extreme heat conditions", "d) Freshwater habitats"],
    answer: "c) Extreme heat conditions"
  },
  {
    question: "Which bacterial cell shape is characterized by a spiral or helical structure?",
    options: ["a) Coccus", "b) Bacillus", "c) Spirillum", "d) Pleomorphic"],
    answer: "c) Spirillum"
  },
  {
    question: "Actinomycetes are unique among bacteria because they:",
    options: ["a) Can photosynthesize", "b) Form filamentous structures", "c) Reproduce by binary fission", "d) Lack a cell wall"],
    answer: "b) Form filamentous structures"
  },
  {
    question: "Which of the following is a common form of viral replication?",
    options: ["a) Conjugation", "b) Binary fission", "c) Lysogeny", "d) Plasmid transfer"],
    answer: "c) Lysogeny"
  },
  {
    question: "Which microscopy technique uses laser beams to illuminate a specific plane within the sample?",
    options: ["a) Light microscopy", "b) Electron microscopy", "c) Fluorescence microscopy", "d) Confocal microscopy"],
    answer: "d) Confocal microscopy"
  },
  {
    question: "Which of the following is a characteristic feature of eukaryotic cells?",
    options: ["a) Lack of a nucleus", "b) Presence of membrane-bound organelles", "c) Single circular chromosome", "d) Absence of ribosomes"],
    answer: "b) Presence of membrane-bound organelles"
  },
  {
    question: "Which of the following is a characteristic feature of prokaryotic cells?",
    options: ["a) Presence of a nucleus", "b) Membrane-bound organelles", "c) Linear chromosomes", "d) Small ribosomes"],
    answer: "d) Small ribosomes"
  },
  {
    question: "Which domain includes the archaebacteria and eubacteria?",
    options: ["a) Bacteria", "b) Archaea", "c) Eukarya", "d) Protista"],
    answer: "a) Bacteria"
  },
  {
    question: "Archaebacteria are known to survive in extreme environments such as:",
    options: ["a) Acidic hot springs", "b) Oxygen-rich environments", "c) Neutral pH environments", "d) Freshwater lakes"],
    answer: "a) Acidic hot springs"
  },
  {
    question: "Eubacteria are commonly found in which of the following habitats?",
    options: ["a) Deep-sea hydrothermal vents", "b) Saline lakes", "c) Arctic tundra", "d) Acidic bogs"],
    answer: "b) Saline lakes"
  },
  {
    question: "The arrangement of bacteria in pairs is called:",
    options: ["a) Staphylococci", "b) Diplococci", "c) Streptococci", "d) Bacilli"],
    answer: "b) Diplococci"
  },
  {
    question: "Bacilli-shaped bacteria arranged in chains are referred to as:",
    options: ["a) Staphylococci", "b) Diplococci", "c) Streptococci", "d) Bacilli"],
    answer: "c) Streptococci"
  },
  {
    question: "Actinomycetes are known for their filamentous growth pattern and production of:",
    options: ["a) Antibiotics", "b) Toxins", "c) Biofilms", "d) Endospores"],
    answer: "a) Antibiotics"
  },
  {
    question: "Which of the following organisms belongs to the group of molds?",
    options: ["a) Penicillium", "b) Saccharomyces cerevisiae", "c) Escherichia coli", "d) Bacillus subtilis"],
    answer: "a) Penicillium"
  },
  {
    question: "Yeasts are unicellular fungi that reproduce by:",
    options: ["a) Binary fission", "b) Budding", "c) Conjugation", "d) Fragmentation"],
    answer: "b) Budding"
  },
  {
    question: "Viruses are considered as non-living because they:",
    options: ["a) Lack genetic material", "b) Cannot replicate", "c) Lack metabolic machinery", "d) Are smaller than cells"],
    answer: "c) Lack metabolic machinery"
  },
  {
    question: "Bacteriophages are viruses that infect:",
    options: ["a) Plants", "b) Animals", "c) Bacteria", "d) Fungi"],
    answer: "c) Bacteria"
  },
  {
    question: "The protein coat surrounding a virus is called:",
    options: ["a) Capsid", "b) Lipid bilayer", "c) Flagellum", "d) Plasmid"],
    answer: "a) Capsid"
  },
  {
    question: "What is the main function of the cell wall in bacteria?",
    options: ["a) Facilitate cell division", "b) Regulate gene expression", "c) Provide shape and support", "d) Store genetic material"],
    answer: "c) Provide shape and support"
  },
  {
    question: "Which of the following is NOT a target of antibiotics?",
    options: ["a) Cell wall synthesis", "b) Protein synthesis", "c) DNA replication", "d) Endospore formation"],
    answer: "d) Endospore formation"
  },
  {
    question: "Which component of the cell envelope is the primary target of penicillin?",
    options: ["a) Cell membrane", "b) Capsule", "c) Peptidoglycan", "d) Lipopolysaccharide"],
    answer: "c) Peptidoglycan"
  },
  {
    question: "The phospholipid bilayer of the cell membrane consists of:",
    options: ["a) Two layers of proteins", "b) Two layers of lipids", "c) One layer of proteins and one layer of lipids", "d) One layer of carbohydrates and one layer of lipids"],
    answer: "b) Two layers of lipids"
  },
  {
    question: "Which stage of sporulation involves DNA replication and segregation?",
    options: ["a) Forespore engulfment", "b) Cortex and coat synthesis", "c) Maturation", "d) DNA replication and segregation"],
    answer: "d) DNA replication and segregation"
  },
  {
    question: "Gram-positive bacteria have a thick layer of:",
    options: ["a) Lipopolysaccharides", "b) Peptidoglycan", "c) Outer membrane", "d) Lipid bilayer"],
    answer: "b) Peptidoglycan"
  },
  {
    question: "Which of the following is a characteristic feature of endospores?",
    options: ["a) Fragile and easily destructible", "b) Formed during favorable environmental conditions", "c) Highly resistant to adverse conditions", "d) Reproduce through binary fission"],
    answer: "c) Highly resistant to adverse conditions"
  },
  {
    question: "The phospholipids in the cell membrane have hydrophilic heads and hydrophobic tails. The heads are composed of:",
    options: ["a) Proteins", "b) Carbohydrates", "c) Lipids", "d) Nucleic acids"],
    answer: "b) Carbohydrates"
  },
  {
    question: "Which of the following is NOT a function of the cell membrane?",
    options: ["a) Control movement of substances", "b) Signal transduction", "c) Cell adhesion", "d) DNA replication"],
    answer: "d) DNA replication"
  },
  {
    question: "Endospores are formed by which group of bacteria?",
    options: ["a) Gram-negative bacteria", "b) Cocci-shaped bacteria", "c) Actinomycetes", "d) Bacillus and Clostridium"],
    answer: "d) Bacillus and Clostridium"
  },
  {
    question: "Which of the following structures is NOT part of the bacterial cell envelope?",
    options: ["a) Cell membrane", "b) Cell wall", "c) Capsule", "d) Nucleoid"],
    answer: "d) Nucleoid"
  },
  {
    question: "The primary function of antibiotics is to:",
    options: ["a) Kill viruses", "b) Inhibit bacterial growth", "c) Stimulate immune responses", "d) Repair damaged cells"],
    answer: "b) Inhibit bacterial growth"
  },
  {
    question: "Which component of the cell wall provides rigidity and structural support to bacteria?",
    options: ["a) Peptidoglycan", "b) Lipopolysaccharide", "c) Capsule", "d) Cholesterol"],
    answer: "a) Peptidoglycan"
  },
  {
    question: "Which of the following is a role of the cell membrane?",
    options: ["a) Synthesis of DNA", "b) Energy production through photosynthesis", "c) Protection against antibiotics", "d) Regulation of cellular processes"],
    answer: "d) Regulation of cellular processes"
  },
  {
    question: "The process of sporulation in bacteria occurs under:",
    options: ["a) Optimal growth conditions", "b) Nutrient-rich environments", "c) Adverse environmental conditions", "d) Oxygen-rich environments"],
    answer: "c) Adverse environmental conditions"
  },
  {
    question: "Which stage of sporulation involves the synthesis of a protective cortex layer around the endospore?",
    options: ["a) DNA replication and segregation", "b) Forespore engulfment", "c) Cortex and coat synthesis", "d) Maturation"],
    answer: "c) Cortex and coat synthesis"
  },
  {
    question: "Which type of bacteria is characterized by a thick peptidoglycan layer and a lack of an outer membrane?",
    options: ["a) Gram-positive bacteria", "b) Gram-negative bacteria", "c) Acid-fast bacteria", "d) Cyanobacteria"],
    answer: "a) Gram-positive bacteria"
  },
  {
    question: "The outermost layer of the endospore, composed of proteins, is known as the:",
    options: ["a) Cortex", "b) Coat", "c) Core", "d) Nucleoid"],
    answer: "b) Coat"
  },
  {
    question: "The major component of the bacterial cell membrane is:",
    options: ["a) Phospholipids", "b) Cholesterol", "c) Glycoproteins", "d) Nucleic acids"],
    answer: "a) Phospholipids"
  },
  {
    question: "Which of the following is a characteristic feature of endospores?",
    options: ["a) High metabolic activity", "b) Sensitivity to heat and radiation", "c) Rapid replication and growth", "d) Resistance to harsh chemicals"],
    answer: "d) Resistance to harsh chemicals"
  },
  {
    question: "Which of the following temperature ranges is most suitable for the growth of psychrophiles?",
    options: ["a) 20-45°C", "b) 45-80°C", "c) Below 6°C", "d) Above 80°C"],
    answer: "c) Below 6°C"
  },
  {
    question: "Bacteria that grow optimally at moderate temperatures, between 20°C and 45°C, are known as:",
    options: ["a) Psychrophiles", "b) Mesophiles", "c) Thermophiles", "d) Extreme thermophiles"],
    answer: "b) Mesophiles"
  },
  {
    question: "Acidophiles are bacteria that thrive in environments with a pH:",
    options: ["a) Below 6", "b) Around 7", "c) Above 8", "d) Varied pH ranges"],
    answer: "a) Below 6"
  },
  {
    question: "Which of the following bacteria prefers alkaline conditions with pH values above 8?",
    options: ["a) Acidophiles", "b) Neutrophiles", "c) Alkaliphiles", "d) Halophiles"],
    answer: "c) Alkaliphiles"
  },
  {
    question: "Bacteria that require oxygen for growth and metabolism are called:",
    options: ["a) Obligate aerobes", "b) Obligate anaerobes", "c) Facultative anaerobes", "d) Microaerophiles"],
    answer: "a) Obligate aerobes"
  },
  {
    question: "Bacteria that cannot tolerate oxygen and grow only in its absence are known as:",
    options: ["a) Obligate aerobes", "b) Obligate anaerobes", "c) Facultative anaerobes", "d) Microaerophiles"],
    answer: "b) Obligate anaerobes"
  },
  {
    question: "Which group of bacteria is capable of growing in the presence or absence of oxygen?",
    options: ["a) Obligate aerobes", "b) Obligate anaerobes", "c) Facultative anaerobes", "d) Microaerophiles"],
    answer: "c) Facultative anaerobes"
  },
  {
    question: "Bacteria adapted to high salt concentrations are called:",
    options: ["a) Psychrophiles", "b) Halophiles", "c) Alkaliphiles", "d) Osmotolerant bacteria"],
    answer: "b) Halophiles"
  },
  {
    question: "Bacteria that can tolerate a wide range of solute concentrations are known as:",
    options: ["a) Psychrophiles", "b) Halophiles", "c) Alkaliphiles", "d) Osmotolerant bacteria"],
    answer: "d) Osmotolerant bacteria"
  },
  {
    question: "Bacteria that require low oxygen levels for growth are called:",
    options: ["a) Obligate aerobes", "b) Obligate anaerobes", "c) Facultative anaerobes", "d) Microaerophiles"],
    answer: "d) Microaerophiles"
  },
    {
    question: "Which of the following is NOT an essential nutrient required by bacteria?",
    options: [
      "a) Carbon",
      "b) Nitrogen",
      "c) Oxygen",
      "d) Phosphorus"
    ],
    answer: "c) Oxygen"
  },
  {
    question: "Bacteria that can synthesize their own organic compounds from inorganic sources are known as:",
    options: [
      "a) Autotrophs",
      "b) Heterotrophs",
      "c) Phototrophs",
      "d) Chemotrophs"
    ],
    answer: "a) Autotrophs"
  },
  {
    question: "Bacteria that require preformed organic compounds as carbon sources are called:",
    options: [
      "a) Autotrophs",
      "b) Heterotrophs",
      "c) Phototrophs",
      "d) Chemotrophs"
    ],
    answer: "b) Heterotrophs"
  },
  {
    question: "The mode of nutrition in which bacteria use light energy to convert inorganic compounds into organic compounds is called:",
    options: [
      "a) Phototrophy",
      "b) Chemotrophy",
      "c) Autotrophy",
      "d) Heterotrophy"
    ],
    answer: "a) Phototrophy"
  },
  {
    question: "Which type of transport mechanism requires energy in the form of ATP to move nutrients across the bacterial cell membrane?",
    options: [
      "a) Passive diffusion",
      "b) Facilitated diffusion",
      "c) Active transport",
      "d) Group translocation"
    ],
    answer: "c) Active transport"
  },
  {
    question: "Agar is commonly used in the preparation of solid media because it:",
    options: [
      "a) Enhances bacterial growth",
      "b) Provides essential nutrients",
      "c) Allows for easy sterilization",
      "d) Provides a liquid environment for bacteria"
    ],
    answer: "c) Allows for easy sterilization"
  },
  {
    question: "Culture media that contain specific components to selectively promote the growth of certain microorganisms while inhibiting others are called:",
    options: [
      "a) Defined media",
      "b) Complex media",
      "c) Selective media",
      "d) Differential media"
    ],
    answer: "c) Selective media"
  },
  {
    question: "Differential media are designed to differentiate between different types of microorganisms based on their:",
    options: [
      "a) Carbon source",
      "b) Oxygen requirements",
      "c) Metabolic activities or appearance",
      "d) Energy source"
    ],
    answer: "c) Metabolic activities or appearance"
  },
  {
    question: "Which type of culture media is used to increase the numbers of a specific group of bacteria present in a mixed population?",
    options: [
      "a) Defined media",
      "b) Complex media",
      "c) Selective media",
      "d) Enrichment media"
    ],
    answer: "d) Enrichment media"
  },
  {
    question: "Culture media with a known and precise composition, where all components are specified, are called:",
    options: [
      "a) Defined media",
      "b) Complex media",
      "c) Selective media",
      "d) Enrichment media"
    ],
    answer: "a) Defined media"
  },
    {
    question: "Culture media designed to increase the numbers of a specific group of bacteria present in a mixed population are called:",
    options: [
      "a) Defined media",
      "b) Complex media",
      "c) Selective media",
      "d) Enrichment media"
    ],
    answer: "d) Enrichment media"
  },
  {
    question: "Which of the following is NOT a type of bacterial nutritional type?",
    options: [
      "a) Photoheterotroph",
      "b) Chemoautotroph",
      "c) Photoautotroph",
      "d) Osmotroph"
    ],
    answer: "d) Osmotroph"
  },
    {
  question: "Which of the following is NOT a method of bacterial reproduction?",
  options: [
    "a) Binary fission",
    "b) Conjugation",
    "c) Meiosis",
    "d) Budding"
  ],
  answer: "c) Meiosis"
},
{
  question: "Bacterial flagella are used primarily for:",
  options: [
    "a) Sensing the environment",
    "b) Exchanging genetic material",
    "c) Facilitating cell division",
    "d) Bacterial locomotion"
  ],
  answer: "d) Bacterial locomotion"
},
{
  question: "Which of the following is an example of a gram-positive bacterium?",
  options: [
    "a) Escherichia coli",
    "b) Staphylococcus aureus",
    "c) Salmonella enterica",
    "d) Pseudomonas aeruginosa"
  ],
  answer: "b) Staphylococcus aureus"
},
{
  question: "Bacterial endospores are highly resistant structures that can withstand extreme conditions. Which of the following genera is known for producing endospores?",
  options: [
    "a) Streptococcus",
    "b) Lactobacillus",
    "c) Clostridium",
    "d) Bacillus"
  ],
  answer: "d) Bacillus"
},
{
  question: "Antibiotics are substances that can inhibit the growth or kill bacteria. Which of the following is NOT an example of an antibiotic?",
  options: [
    "a) Penicillin",
    "b) Streptomycin",
    "c) Tetracycline",
    "d) Insulin"
  ],
  answer: "d) Insulin"
},
{
  question: "Bacterial transformation is a process in which bacteria take up and incorporate foreign DNA into their genome. Which scientist is credited with discovering bacterial transformation?",
  options: [
    "a) Louis Pasteur",
    "b) Robert Koch",
    "c) Frederick Griffith",
    "d) Alexander Fleming"
  ],
  answer: "c) Frederick Griffith"
},
    {
    question: "Which of the following air pollutants is primarily responsible for the formation of acid rain?",
    options: [
      "a) Carbon dioxide (CO2)",
      "b) Nitrogen oxides (NOx)",
      "c) Sulfur dioxide (SO2)",
      "d) Methane (CH4)"
    ],
    answer: "c) Sulfur dioxide (SO2)"
  },
  {
    question: "Which of the following is a secondary air pollutant?",
    options: [
      "a) Carbon monoxide (CO)",
      "b) Particulate matter (PM)",
      "c) Ozone (O3)",
      "d) Lead (Pb)"
    ],
    answer: "c) Ozone (O3)"
  },
  {
    question: "What is the primary source of anthropogenic greenhouse gases?",
    options: [
      "a) Volcanic eruptions",
      "b) Forest fires",
      "c) Industrial activities",
      "d) Natural wetlands"
    ],
    answer: "c) Industrial activities"
  },
  {
    question: "Which of the following is not a method for controlling water pollution?",
    options: [
      "a) Coagulation and flocculation",
      "b) Reverse osmosis",
      "c) Activated sludge process",
      "d) Crop rotation"
    ],
    answer: "d) Crop rotation"
  },
  {
    question: "Which of the following pollutants is associated with eutrophication in water bodies?",
    options: [
      "a) Phosphates",
      "b) Mercury",
      "c) Radon",
      "d) Asbestos"
    ],
    answer: "a) Phosphates"
  },
  {
    question: "The process of removing salt from seawater to obtain freshwater is called:",
    options: [
      "a) Desalination",
      "b) Distillation",
      "c) Filtration",
      "d) Chlorination"
    ],
    answer: "a) Desalination"
  },
  {
    question: "Which of the following is not a common method for solid waste management?",
    options: [
      "a) Incineration",
      "b) Landfilling",
      "c) Composting",
      "d) Leaching"
    ],
    answer: "d) Leaching"
  },
  {
    question: "The primary cause of soil erosion is:",
    options: [
      "a) Deforestation",
      "b) Acid rain",
      "c) Industrial pollution",
      "d) Overgrazing"
    ],
    answer: "a) Deforestation"
  },
  {
    question: "Which of the following is a non-point source of water pollution?",
    options: [
      "a) Sewage treatment plant",
      "b) Industrial discharge pipe",
      "c) Oil spill from a tanker",
      "d) Agricultural runoff"
    ],
    answer: "d) Agricultural runoff"
  },
  {
    question: "The Clean Air Act is a federal law enacted in which country?",
    options: [
      "a) United States",
      "b) United Kingdom",
      "c) Canada",
      "d) Australia"
    ],
    answer: "a) United States"
  },
  {
    question: "Which of the following pollutants is responsible for the depletion of the ozone layer?",
    options: [
      "a) Carbon dioxide (CO2)",
      "b) Methane (CH4)",
      "c) Chlorofluorocarbons (CFCs)",
      "d) Nitrous oxide (N2O)"
    ],
    answer: "c) Chlorofluorocarbons (CFCs)"
  },
  {
    question: "Which of the following is a primary source of indoor air pollution?",
    options: [
      "a) Vehicle emissions",
      "b) Industrial smokestacks",
      "c) Pesticides",
      "d) Combustion of solid fuels"
    ],
    answer: "d) Combustion of solid fuels"
  },
  {
    question: "The pH scale is used to measure the acidity or alkalinity of a substance. What pH value represents neutral conditions?",
    options: [
      "a) 0",
      "b) 7",
      "c) 14",
      "d) None of the above"
    ],
    answer: "b) 7"
  },
  {
    question: "Which of the following is a renewable source of energy?",
    options: [
      "a) Natural gas",
      "b) Coal",
      "c) Nuclear power",
      "d) Solar power"
    ],
    answer: "d) Solar power"
  },
  {
    question: "Which of the following pollutants is responsible for causing respiratory problems such as asthma and bronchitis?",
    options: [
      "a) Lead",
      "b) Carbon monoxide (CO)",
      "c) Particulate matter (PM)",
      "d) Sulfur dioxide (SO2)"
    ],
    answer: "c) Particulate matter (PM)"
  },
    {
    question: "Which stage of viral growth involves integration of viral genetic material into the host cell's genome?",
    options: [
      "a) Attachment",
      "b) Penetration",
      "c) Lytic stage",
      "d) Lysogenic stage"
    ],
    answer: "d) Lysogenic stage"
  },
  {
    question: "Which of the following methods is commonly used for the cultivation of animal viruses?",
    options: [
      "a) Embryonated eggs",
      "b) Tissue culture",
      "c) Plaque assay",
      "d) Real-time PCR"
    ],
    answer: "b) Tissue culture"
  },
  {
    question: "Which viral quantitation method involves counting the number of plaques formed on a cell monolayer?",
    options: [
      "a) Hemagglutination assay",
      "b) Endpoint dilution assay",
      "c) Plaque assay",
      "d) Real-time PCR"
    ],
    answer: "c) Plaque assay"
  },
  {
    question: "The process of determining the concentration of infectious viral particles in a sample is called:",
    options: [
      "a) Viral attachment",
      "b) Viral penetration",
      "c) Viral quantitation",
      "d) Viral replication"
    ],
    answer: "c) Viral quantitation"
  },
  {
    question: "Which of the following methods is NOT suitable for the cultivation of viruses?",
    options: [
      "a) Cell culture",
      "b) Embryonated eggs",
      "c) PCR amplification",
      "d) Animal models"
    ],
    answer: "c) PCR amplification"
  },
  {
    question: "Which viral quantitation method utilizes the formation of visible clumps of red blood cells?",
    options: [
      "a) Hemagglutination assay",
      "b) Plaque assay",
      "c) Endpoint dilution assay",
      "d) Real-time PCR"
    ],
    answer: "a) Hemagglutination assay"
  },
  {
    question: "The lytic stage of viral growth is characterized by:",
    options: [
      "a) Integration of viral genetic material into the host genome",
      "b) Replication of viral genetic material",
      "c) Release of viral particles through cell lysis",
      "d) Dormancy of viral genetic material within the host cell"
    ],
    answer: "c) Release of viral particles through cell lysis"
  },
  {
    question: "Which of the following viral cultivation methods involves growing isolated tissue or organ fragments?",
    options: [
      "a) Cell culture",
      "b) Embryonated eggs",
      "c) Tissue culture",
      "d) Animal models"
    ],
    answer: "c) Tissue culture"
  },
  {
    question: "The endpoint dilution assay determines the viral titer based on:",
    options: [
      "a) The number of plaques formed on a cell monolayer",
      "b) The last dilution that shows evidence of viral growth",
      "c) The degree of hemagglutination observed",
      "d) Real-time amplification of viral genetic material"
    ],
    answer: "b) The last dilution that shows evidence of viral growth"
  },
  {
    question: "Which method is commonly used to quantify bacteriophages?",
    options: [
      "a) Plaque assay",
      "b) Hemagglutination assay",
      "c) Endpoint dilution assay",
      "d) Real-time PCR"
    ],
    answer: "a) Plaque assay"
  },
    {
    question: "Which metabolic process involves the controlled breakdown of organic molecules to generate energy in bacteria?",
    options: [
      "a) Photosynthesis",
      "b) Fermentation",
      "c) Respiration",
      "d) Glycolysis"
    ],
    answer: "c) Respiration"
  },
  {
    question: "In aerobic respiration, what serves as the final electron acceptor?",
    options: [
      "a) Oxygen",
      "b) Nitrate",
      "c) Carbon dioxide",
      "d) Sulfate"
    ],
    answer: "a) Oxygen"
  },
  {
    question: "Which metabolic pathway generates a proton gradient across the membrane to drive ATP synthesis in bacteria?",
    options: [
      "a) Glycolysis",
      "b) Fermentation",
      "c) TCA cycle",
      "d) Electron transport chain"
    ],
    answer: "d) Electron transport chain"
  },
  {
    question: "Which of the following is a common fermentation product in bacteria?",
    options: [
      "a) Carbon dioxide",
      "b) Oxygen",
      "c) Nitrate",
      "d) Acetyl-CoA"
    ],
    answer: "a) Carbon dioxide"
  },
  {
    question: "Which metabolic process occurs in the absence of external electron acceptors?",
    options: [
      "a) Anaerobic respiration",
      "b) Aerobic respiration",
      "c) Glycolysis",
      "d) Citric acid cycle"
    ],
    answer: "a) Anaerobic respiration"
  },
  {
    question: "During fermentation, which molecule is not regenerated?",
    options: [
      "a) NADH",
      "b) ATP",
      "c) NAD+",
      "d) Pyruvate"
    ],
    answer: "a) NADH"
  },
  {
    question: "Which regulatory mechanism involves the inhibition or activation of enzymes through the binding of specific molecules?",
    options: [
      "a) Gene expression control",
      "b) Allosteric regulation",
      "c) Feedback inhibition",
      "d) Oxidative phosphorylation"
    ],
    answer: "b) Allosteric regulation"
  },
  {
    question: "Which metabolic process is less efficient in terms of energy yield compared to respiration?",
    options: [
      "a) Glycolysis",
      "b) Fermentation",
      "c) TCA cycle",
      "d) Oxidative phosphorylation"
    ],
    answer: "b) Fermentation"
  },
  {
    question: "What is the primary purpose of the electron transport chain in bacteria?",
    options: [
      "a) ATP synthesis",
      "b) Substrate-level phosphorylation",
      "c) Oxidation of organic molecules",
      "d) Regeneration of NAD+"
    ],
    answer: "a) ATP synthesis"
  },
  {
    question: "Which of the following is a common energy-generating pathway in both bacteria and eukaryotes?",
    options: [
      "a) Photosynthesis",
      "b) Glycolysis",
      "c) Fermentation",
      "d) Citric acid cycle"
    ],
    answer: "b) Glycolysis"
  },
    {
    question: "Which enzyme is responsible for unwinding the DNA double helix during replication?",
    options: [
      "a) DNA polymerase",
      "b) DNA helicase",
      "c) RNA polymerase",
      "d) DNA ligase"
    ],
    answer: "b) DNA helicase"
  },
  {
    question: "In which direction is DNA synthesized during replication?",
    options: [
      "a) 5' to 3'",
      "b) 3' to 5'",
      "c) Bidirectionally",
      "d) Randomly"
    ],
    answer: "a) 5' to 3'"
  },
  {
    question: "Which process involves the synthesis of RNA from a DNA template?",
    options: [
      "a) DNA replication",
      "b) Transcription",
      "c) Translation",
      "d) DNA repair"
    ],
    answer: "b) Transcription"
  },
  {
    question: "Which RNA molecule serves as the template for protein synthesis?",
    options: [
      "a) mRNA",
      "b) tRNA",
      "c) rRNA",
      "d) siRNA"
    ],
    answer: "a) mRNA"
  },
  {
    question: "The genetic code is a triplet code, where each triplet of nucleotides is called a:",
    options: [
      "a) Codon",
      "b) Anticodon",
      "c) Exon",
      "d) Intron"
    ],
    answer: "a) Codon"
  },
  {
    question: "Plasmids are:",
    options: [
      "a) Circular RNA molecules",
      "b) Extrachromosomal DNA molecules",
      "c) Bacterial ribosomal components",
      "d) Coding regions within the chromosome"
    ],
    answer: "b) Extrachromosomal DNA molecules"
  },
  {
    question: "Which process involves the transfer of genetic material between bacteria through direct cell-to-cell contact?",
    options: [
      "a) Conjugation",
      "b) Transformation",
      "c) Transduction",
      "d) Replication"
    ],
    answer: "a) Conjugation"
  },
  {
    question: "Genetic recombination can occur through all of the following mechanisms EXCEPT:",
    options: [
      "a) Conjugation",
      "b) Transformation",
      "c) Replication",
      "d) Transduction"
    ],
    answer: "c) Replication"
  },
  {
    question: "Which type of plasmid carries genes for antibiotic resistance?",
    options: [
      "a) F plasmid",
      "b) R plasmid",
      "c) Virulence plasmid",
      "d) Transposon"
    ],
    answer: "b) R plasmid"
  },
  {
    question: "In bacterial genetics, the transfer of genetic material through bacterial viruses is known as:",
    options: [
      "a) Conjugation",
      "b) Transformation",
      "c) Transduction",
      "d) Replication"
    ],
    answer: "c) Transduction"
  }


  // Add more quiz questions following the same format
];


const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const questionNumberElement = document.getElementById("question-number");
const previousButton = document.getElementById("previous-btn");
const nextButton = document.getElementById("next-btn");
const submitButton = document.getElementById("submit-btn");
const resultElement = document.getElementById("result");
const progressBar = document.getElementById("progress-bar");

let shuffledQuizData = [];
let currentQuestionIndex = 0;
let score = 0;

// Shuffle the quiz data
function shuffleQuizData() {
  shuffledQuizData = quizData.sort(() => Math.random() - 0.5);
}

// Load the first question
function loadQuestion() {
  const currentQuestion = shuffledQuizData[currentQuestionIndex];
  questionNumberElement.textContent = `Question ${currentQuestionIndex + 1}`;
  questionElement.textContent = currentQuestion.question;

  optionsElement.innerHTML = "";
  currentQuestion.options.forEach((option) => {
    const optionElement = document.createElement("div");
    optionElement.textContent = option;
    optionsElement.appendChild(optionElement);
    optionElement.addEventListener("click", checkAnswer);
  });

  updateButtons();
  updateProgressBar();
}

// Check the selected answer
function checkAnswer(event) {
  const selectedOption = event.target.textContent;
  const currentQuestion = shuffledQuizData[currentQuestionIndex];

  if (selectedOption === currentQuestion.answer) {
    score++;
    event.target.classList.add("correct");
    showPopup("Correct!");
  } else {
    score += 1 / 3; // Score penalty for wrong answer
    event.target.classList.add("wrong");
    showPopup("Wrong! The correct answer is: " + currentQuestion.answer);
  }

  optionsElement.querySelectorAll("div").forEach((optionElement) => {
    optionElement.removeEventListener("click", checkAnswer);
  });

  updateButtons();
}

// Show a popup message
function showPopup(message) {
  const popupElement = document.getElementById("popup");
  const popupMessageElement = document.getElementById("popup-message");
  popupMessageElement.textContent = message;
  popupElement.style.display = "block";

  // Hide the popup after 2 seconds
  setTimeout(function () {
    popupElement.style.display = "none";
  }, 2000);
}

// Update the state of the previous and next buttons
function updateButtons() {
  previousButton.disabled = currentQuestionIndex === 0;
  nextButton.disabled = currentQuestionIndex === shuffledQuizData.length - 1;
  submitButton.disabled = false;
}

// Show the previous question
previousButton.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
    optionsElement.querySelectorAll("div").forEach((optionElement) => {
      optionElement.classList.remove("correct", "wrong");
    });
  }
});

// Show the next question or submit the quiz
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < shuffledQuizData.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
    optionsElement.querySelectorAll("div").forEach((optionElement) => {
      optionElement.classList.remove("correct", "wrong");
    });
  } else {
    submitQuiz();
  }
});

// Submit the quiz
submitButton.addEventListener("click", () => {
  submitQuiz();
});

// Submit the quiz and show the final result
function submitQuiz() {
  const percentageScore = Math.round((score / shuffledQuizData.length) * 100);
  hideQuizElements();
  resultElement.style.display = "block";
  resultElement.textContent = `Your score: ${percentageScore}%`;
}

// Hide quiz elements
function hideQuizElements() {
  questionElement.style.display = "none";
  optionsElement.style.display = "none";
  previousButton.style.display = "none";
  nextButton.style.display = "none";
  submitButton.style.display = "none";
  progressBar.style.display = "none";
}

// Update the progress bar
function updateProgressBar() {
  const progress = ((currentQuestionIndex + 1) / shuffledQuizData.length) * 100;
  progressBar.style.width = `${progress}%`;
}

// Initialize the quiz
function initializeQuiz() {
  shuffleQuizData();
  loadQuestion();
}

// Initial setup
initializeQuiz();
