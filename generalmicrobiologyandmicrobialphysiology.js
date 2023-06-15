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
