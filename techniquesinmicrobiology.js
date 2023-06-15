




const quizData = [
  {
    question: "Which microscopy technique uses visible light to illuminate the sample?",
    options: ["a) Light microscopy", "b) Electron microscopy", "c) Fluorescence microscopy", "d) Confocal microscopy"],
    answer: "a) Light microscopy"
  },
  {
    question: "What is the maximum magnification range typically offered by light microscopes?",
    options: ["a) Up to 100x", "b) Up to 1000x", "c) Up to 10,000x", "d) Up to 1,000,000x"],
    answer: "b) Up to 1000x"
  },
  {
    question: "Which type of microscopy enhances contrast in transparent specimens, such as live microorganisms?",
    options: ["a) Bright-field microscopy", "b) Phase-contrast microscopy", "c) Dark-field microscopy", "d) Differential interference contrast (DIC) microscopy"],
    answer: "b) Phase-contrast microscopy"
  },
  {
    question: "Electron microscopy uses a beam of _____ instead of light to visualize the sample.",
    options: ["a) Protons", "b) Neutrons", "c) Electrons", "d) Photons"],
    answer: "c) Electrons"
  },
  {
    question: "What is the maximum magnification range typically offered by electron microscopes?",
    options: ["a) Up to 100x", "b) Up to 1000x", "c) Up to 10,000x", "d) Up to 1,000,000x"],
    answer: "d) Up to 1,000,000x"
  },
  {
    question: "Which type of electron microscopy involves passing electrons through thin sections of specimens to create detailed internal images?",
    options: ["a) Transmission electron microscopy (TEM)", "b) Scanning electron microscopy (SEM)", "c) Bright-field electron microscopy", "d) Dark-field electron microscopy"],
    answer: "a) Transmission electron microscopy (TEM)"
  },
  {
    question: "Fluorescence microscopy uses _____ to label specific structures or molecules in a sample.",
    options: ["a) Antibodies", "b) Fluorescent dyes or proteins", "c) Enzymes", "d) Radioactive isotopes"],
    answer: "b) Fluorescent dyes or proteins"
  },
  {
    question: "What is the maximum magnification range typically offered by fluorescence microscopes?",
    options: ["a) Up to 100x", "b) Up to 1000x", "c) Up to 10,000x", "d) Up to 1,000,000x"],
    answer: "b) Up to 1000x"
  },
  {
    question: "In fluorescence microscopy, fluorophores absorb light at one wavelength and emit light at a _____ wavelength.",
    options: ["a) Higher", "b) Lower", "c) Same", "d) Variable"],
    answer: "a) Higher"
  },
  {
    question: "Which microscopy technique uses laser beams to illuminate a specific plane within the sample?",
    options: ["a) Light microscopy", "b) Electron microscopy", "c) Fluorescence microscopy", "d) Confocal microscopy"],
    answer: "d) Confocal microscopy"
  },
  {
    "question": "What is the maximum magnification range typically offered by confocal microscopes?",
    "options": ["Up to 100x", "Up to 1000x", "Up to 10,000x", "Up to 1,000,000x"],
    "answer": "Up to 1000x"
  },
  {
    "question": "Confocal microscopy can create _____ of labeled structures by capturing images at different focal planes.",
    "options": ["2D reconstructions", "3D reconstructions", "4D reconstructions", "5D reconstructions"],
    "answer": "3D reconstructions"
  },
  {
    "question": "Which microscopy technique is especially useful for studying thick specimens, live cells, and dynamic processes?",
    "options": ["Light microscopy", "Electron microscopy", "Fluorescence microscopy", "Confocal microscopy"],
    "answer": "Confocal microscopy"
  },
  {
    "question": "Which microscopy technique is commonly used for observation and identification of microorganisms?",
    "options": ["Light microscopy", "Electron microscopy", "Fluorescence microscopy", "Confocal microscopy"],
    "answer": "Light microscopy"
  },
  {
    "question": "Which microscopy technique is used to visualize cellular ultrastructure and study subcellular components?",
    "options": ["Light microscopy", "Electron microscopy", "Fluorescence microscopy", "Confocal microscopy"],
    "answer": "Electron microscopy"
  },
  {
    "question": "What is the purpose of the Gram stain in microbiology?",
    "options": ["To identify bacterial species based on their metabolic activities", "To differentiate bacteria into Gram-positive and Gram-negative groups", "To visualize and study bacterial growth patterns", "To detect the presence of specific genes in bacterial DNA"],
    "answer": "To differentiate bacteria into Gram-positive and Gram-negative groups"
  },
  {
    "question": "Which staining technique is used to detect acid-fast bacteria, such as Mycobacterium tuberculosis?",
    "options": ["Gram stain", "Acid-fast stain", "Endospore stain", "Fluorescence stain"],
    "answer": "Acid-fast stain"
  },
  {
    "question": "Which staining technique is used to visualize bacterial endospores?",
    "options": ["Gram stain", "Acid-fast stain", "Endospore stain", "Fluorescence stain"],
    "answer": "Endospore stain"
  },
  {
    "question": "Which principle is based on the selective adsorption of molecules onto a solid stationary phase?",
    "options": ["Adsorption chromatography", "Partition chromatography", "Ion exchange chromatography", "Gel filtration chromatography"],
    "answer": "Adsorption chromatography"
  },
  {
    "question": "Which chromatography technique separates molecules based on their differential partitioning between two immiscible phases?",
    "options": ["Adsorption chromatography", "Partition chromatography", "Ion exchange chromatography", "Gel filtration chromatography"],
    "answer": "Partition chromatography"
  },
  {
    "question": "Which chromatography technique separates molecules based on their charge interactions with charged stationary phases?",
    "options": ["Adsorption chromatography", "Partition chromatography", "Ion exchange chromatography", "Gel filtration chromatography"],
    "answer": "Ion exchange chromatography"
  },
  {
    "question": "Which chromatography technique separates molecules based on their size?",
    "options": ["Adsorption chromatography", "Partition chromatography", "Ion exchange chromatography", "Gel filtration chromatography"],
    "answer": "Gel filtration chromatography"
  },
  {
    "question": "HPLC stands for:",
    "options": ["High-Performance Liquid Chromatography", "High-Pressure Liquid Chromatography", "High-Precision Liquid Chromatography", "High-Power Liquid Chromatography"],
    "answer": "High-Performance Liquid Chromatography"
  },
  {
    "question": "Which chromatography technique is known for its high resolution and efficiency?",
    "options": ["Adsorption chromatography", "Partition chromatography", "Ion exchange chromatography", "High-Performance Liquid Chromatography (HPLC)"],
    "answer": "High-Performance Liquid Chromatography (HPLC)"
  },
  {
    "question": "FPLC stands for:",
    "options": ["Fast Performance Liquid Chromatography", "Fractional Performance Liquid Chromatography", "Flow Performance Liquid Chromatography", "Fused Performance Liquid Chromatography"],
    "answer": "Fast Performance Liquid Chromatography"
  },
  {
    "question": "Which chromatography technique is a modified form of HPLC and is commonly used for protein purification?",
    "options": ["Adsorption chromatography", "Partition chromatography", "Ion exchange chromatography", "Fast Performance Liquid Chromatography (FPLC)"],
    "answer": "Fast Performance Liquid Chromatography (FPLC)"
  },
  {
    "question": "Which electrophoretic technique is commonly used for separating proteins based on their size and charge?",
    "options": ["SDS-PAGE", "Native PAGE", "Agarose gel electrophoresis", "Capillary electrophoresis"],
    "answer": "SDS-PAGE"
  },
  {
    "question": "Which electrophoretic technique is commonly used for separating nucleic acids based on their size?",
    "options": ["SDS-PAGE", "Native PAGE", "Agarose gel electrophoresis", "Capillary electrophoresis"],
    "answer": "Agarose gel electrophoresis"
  },
  {
    "question": "PCR stands for:",
    "options": ["Protein Chain Reaction", "Polymerase Chain Reaction", "Primer Chain Reaction", "Polymeric Chain Reaction"],
    "answer": "Polymerase Chain Reaction"
  },
  {
    "question": "PCR is a technique used for:",
    "options": ["Separating proteins", "Amplifying DNA", "Purifying RNA", "Detecting antibodies"],
    "answer": "Amplifying DNA"
  },
  {
    "question": "Which technique is used for identifying microorganisms based on their biochemical characteristics?",
    "options": ["Biotyping", "Serotyping", "PCR", "DNA sequencing"],
    "answer": "Biotyping"
  },
  {
    "question": "Serotyping is a technique used for identifying microorganisms based on their:",
    "options": ["Antibiotic resistance patterns", "Protein expression profiles", "Cell morphology", "Surface antigens"],
    "answer": "Surface antigens"
  },
  {
    "question": "DNA sequencing is a technique used for:",
    "options": ["Amplifying DNA", "Identifying microorganisms based on their genetic makeup", "Analyzing protein expression patterns", "Separating proteins based on their size"],
    "answer": "Identifying microorganisms based on their genetic makeup"
  },
  {
    "question": "Which technique is used for studying gene expression patterns in microorganisms?",
    "options": ["Biotyping", "Serotyping", "PCR", "Gene expression analysis"],
    "answer": "Gene expression analysis"
  },
  {
    "question": "What is the purpose of spectrophotometry in microbiology?",
    "options": ["To visualize cellular structures", "To measure the concentration of biomolecules in a sample", "To detect the presence of specific genes in microbial DNA", "To analyze protein expression patterns"],
    "answer": "To measure the concentration of biomolecules in a sample"
  },
  {
    "question": "Calorimetry is a technique used for:",
    "options": ["Measuring the temperature of microbial cultures", "Measuring the energy released or absorbed during biochemical reactions", "Visualizing cellular structures", "Analyzing protein expression patterns"],
    "answer": "Measuring the energy released or absorbed during biochemical reactions"
  },
  {
    "question": "Which chromatography technique separates molecules based on their charge interactions with a stationary phase?",
    "options": ["Adsorption chromatography", "Partition chromatography", "Ion exchange chromatography", "Gel filtration chromatography"],
    "answer": "Ion exchange chromatography"
  },
  {
    "question": "Gel filtration chromatography separates molecules based on their:",
    "options": ["Charge", "Size", "Hydrophobicity", "Solubility"],
    "answer": "Size"
  },
  {
    "question": "Which microscopy technique allows the visualization of fluorescently labeled structures or molecules within cells?",
    "options": ["Light microscopy", "Electron microscopy", "Fluorescence microscopy", "Confocal microscopy"],
    "answer": "Fluorescence microscopy"
  },
  {
    "question": "Which microscopy technique provides the highest resolution and is used for detailed examination of cellular structures?",
    "options": ["Light microscopy", "Electron microscopy", "Fluorescence microscopy", "Confocal microscopy"],
    "answer": "Electron microscopy"
  },
  {
    "question": "What is the main advantage of confocal microscopy over conventional fluorescence microscopy?",
    "options": ["Higher magnification", "Higher resolution", "Elimination of out-of-focus blur", "Ability to visualize live cells"],
    "answer": "Elimination of out-of-focus blur"
  },
  {
    "question": "Which staining technique is commonly used in light microscopy to visualize microbial cells?",
    "options": ["Gram stain", "Acid-fast stain", "Endospore stain", "Fluorescence stain"],
    "answer": "Gram stain"
  },
  {
    "question": "What information can be obtained by performing the Gram stain?",
    "options": ["Microbial species identification", "Detection of acid-fast bacteria", "Visualization of bacterial endospores", "Differentiation of bacteria into Gram-positive and Gram-negative groups"],
    "answer": "Differentiation of bacteria into Gram-positive and Gram-negative groups"
  },
  {
    "question": "What staining technique is used to identify acid-fast bacteria, such as Mycobacterium tuberculosis?",
    "options": ["Gram stain", "Acid-fast stain", "Endospore stain", "Fluorescence stain"],
    "answer": "Acid-fast stain"
  },
  {
    "question": "How does fluorescence microscopy differ from conventional light microscopy?",
    "options": ["It uses a higher magnification range.", "It provides higher resolution.", "It uses fluorescence labeling to visualize specific structures or molecules.", "It uses electron beams instead of visible light."],
    "answer": "It uses fluorescence labeling to visualize specific structures or molecules."
  },
  {
    "question": "Which microscopy technique is most suitable for studying the internal structure of cells?",
    "options": ["Light microscopy", "Electron microscopy", "Fluorescence microscopy", "Confocal microscopy"],
    "answer": "Electron microscopy"
  },
  {
    question: "The Gram stain is a differential staining technique used to categorize bacteria into two groups based on differences in their cell wall composition. Which of the following statements is true regarding the Gram stain?",
    options: [
      "a) Gram-positive bacteria retain the crystal violet dye and appear purple, while Gram-negative bacteria do not and appear pink.",
      "b) Gram-negative bacteria retain the crystal violet dye and appear purple, while Gram-positive bacteria do not and appear pink.",
      "c) Both Gram-positive and Gram-negative bacteria retain the crystal violet dye and appear purple.",
      "d) Both Gram-positive and Gram-negative bacteria do not retain the crystal violet dye and appear pink."
    ],
    answer: "a) Gram-positive bacteria retain the crystal violet dye and appear purple, while Gram-negative bacteria do not and appear pink."
  },
  {
    question: "Acid-fast staining is used to identify bacteria that have a waxy outer layer, such as Mycobacterium tuberculosis. Which of the following statements about acid-fast staining is correct?",
    options: [
      "a) Acid-fast bacteria retain the primary stain, carbol fuchsin, even after being exposed to acid-alcohol, while non-acid-fast bacteria do not.",
      "b) Acid-fast bacteria do not retain the primary stain, carbol fuchsin, after being exposed to acid-alcohol, while non-acid-fast bacteria retain the stain.",
      "c) Acid-fast bacteria retain the counterstain, methylene blue, while non-acid-fast bacteria do not.",
      "d) Acid-fast bacteria do not retain the counterstain, methylene blue, while non-acid-fast bacteria retain the stain."
    ],
    answer: "a) Acid-fast bacteria retain the primary stain, carbol fuchsin, even after being exposed to acid-alcohol, while non-acid-fast bacteria do not."
  },
  {
    question: "Endospore staining is a technique used to visualize bacterial endospores, which are dormant structures resistant to harsh conditions. What is the primary stain used in endospore staining?",
    options: [
      "a) Safranin",
      "b) Methylene blue",
      "c) Malachite green",
      "d) Crystal violet"
    ],
    answer: "c) Malachite green"
  },
  {
    question: "Which of the following statements about endospores is correct?",
    options: [
      "a) Endospores are reproductive structures formed during bacterial cell division.",
      "b) Endospores are sensitive to environmental conditions and easily destroyed.",
      "c) Endospores are metabolically active and involved in bacterial growth.",
      "d) Endospores can survive in harsh conditions such as heat, radiation, and chemicals."
    ],
    answer: "d) Endospores can survive in harsh conditions such as heat, radiation, and chemicals."
  },
  {
    question: "Which staining technique is most commonly used to differentiate bacterial species based on their cell wall characteristics?",
    options: [
      "a) Acid-fast stain",
      "b) Endospore stain",
      "c) Gram stain",
      "d) Simple stain"
    ],
    answer: "c) Gram stain"
  },
  {
    question: "The Gram stain is based on the differences in the structure of the bacterial cell wall. Which of the following components is responsible for retaining the crystal violet dye in Gram-positive bacteria?",
    options: [
      "a) Peptidoglycan layer",
      "b) Lipopolysaccharide layer",
      "c) Lipoteichoic acid",
      "d) Mycolic acid"
    ],
    answer: "c) Lipoteichoic acid"
  },
  {
    question: "Acid-fast staining is particularly useful in the diagnosis of which of the following diseases?",
    options: [
      "a) Tuberculosis",
      "b) Malaria",
      "c) Cholera",
      "d) Pneumonia"
    ],
    answer: "a) Tuberculosis"
  },
  {
    question: "In acid-fast staining, what is the role of heat during the staining process?",
    options: [
      "a) Heat helps to penetrate the bacterial cell wall.",
      "b) Heat helps to fix the stain onto the bacterial cells.",
      "c) Heat helps to differentiate acid-fast and non-acid-fast bacteria.",
      "d) Heat helps to visualize the presence of endospores."
    ],
    answer: "a) Heat helps to penetrate the bacterial cell wall."
  },
  {
    question: "Endospore staining involves the use of malachite green and heat. What is the purpose of heat in endospore staining?",
    options: [
      "a) Heat helps to differentiate endospores from vegetative cells.",
      "b) Heat helps to fix the stain onto the endospores.",
      "c) Heat helps to visualize the presence of acid-fast bacteria.",
      "d) Heat helps to visualize the presence of Gram-negative bacteria."
    ],
    answer: "b) Heat helps to fix the stain onto the endospores."
  },
  {
    question: "Which of the following staining techniques is most suitable for identifying acid-fast bacteria in a sputum sample?",
    options: [
      "a) Gram stain",
      "b) Acid-fast stain",
      "c) Endospore stain",
      "d) Simple stain"
    ],
    answer: "b) Acid-fast stain"
  },
  {
    question: "Acid-fast staining is based on the presence of a waxy substance in the cell wall of certain bacteria. What is the name of this waxy substance?",
    options: [
      "a) Lipopolysaccharide",
      "b) Peptidoglycan",
      "c) Mycolic acid",
      "d) Teichoic acid"
    ],
    answer: "c) Mycolic acid"
  },
  {
    question: "The primary stain used in Gram staining is:",
    options: [
      "a) Safranin",
      "b) Methylene blue",
      "c) Malachite green",
      "d) Crystal violet"
    ],
    answer: "d) Crystal violet"
  },
  {
    question: "Acid-fast staining is commonly used for the identification of:",
    options: [
      "a) Fungi",
      "b) Viruses",
      "c) Gram-positive bacteria",
      "d) Acid-fast bacteria"
    ],
    answer: "d) Acid-fast bacteria"
  },
  {
    question: "Which staining technique is used to visualize bacterial endospores?",
    options: [
      "a) Acid-fast stain",
      "b) Endospore stain",
      "c) Gram stain",
      "d) Simple stain"
    ],
    answer: "b) Endospore stain"
  },
  {
    question: "What is the purpose of the counterstain in the Gram stain procedure?",
    options: [
      "a) To stain the cell wall of Gram-positive bacteria",
      "b) To visualize the presence of acid-fast bacteria",
      "c) To differentiate acid-fast bacteria from non-acid-fast bacteria",
      "d) To stain the cell wall of Gram-negative bacteria"
    ],
    answer: "d) To stain the cell wall of Gram-negative bacteria"
  }

  // Add more questions here...
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
