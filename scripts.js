
const questions = [
  {
    question: "Cik planētas ir saules sistēmā?",
    option1: "9",
    option2: "7",
    option3: "4",
    option4: "8",
    correct: 4,
  },
  {
    question: "Cik gramu proteīna ir dzērienā <Piena Spēks>",
    option1: "39",
    option2: "42",
    option3: "41",
    option4: "43",
    correct: 3,
  },
  {
    question: "Kura valsts ir vislabākā?",
    option1: "Latvija",
    option2: "Vācija",
    option3: "Šveice",
    option4: "Lielbritānija",
    correct: 1,
  },
  {
    question: "25%",
    option1: "1",
    option2: "2",
    option3: "3",
    option4: "4",
    correct: 2,
  },
  {
    question: "Cik kājas ir astoņkājim",
    option1: "7",
    option2: "8",
    option3: "2",
    option4: "9",
    correct: 2,
  },
  {
    question: "Rizz?",
    option1: "Gooner",
    option2: "Sigma",
    option3: "Skibidi",
    option4: "Edging",
    correct: 3,
  },
  {
    question: "Vai taivāna ir valsts?",
    option1: "Jā",
    option2: "Nē",
    option3: "Iespējams",
    option4: "Nezinu",
    correct: 4,
  },
  {
    question: "Vai katram pilsonim ir tiesības būt bruņotam?",
    option1: "Jā",
    option2: "Nē",
    option3: "Iespējams",
    option4: "Nezinu",
    correct: 1,
  },
  {
    question: "The DbD perk <Deja Vu> gives how much generator repair speed?",
    option1: "10%",
    option2: "20s",
    option3: "100%",
    option4: "6%",
    correct: 4,
  },
  {
    question: "PVN?",
    option1: "10%",
    option2: "21%",
    option3: "100%",
    option4: "40%",
    correct: 2,
  },
  {
    question: "Cik stundas ir diennaktī?",
    option1: "24",
    option2: "8",
    option3: "48",
    option4: "12",
    correct: 1,
  },
  {
    question: "No kurienes nāk okupanti?",
    option1: "Ķekava",
    option2: "Rīga",
    option3: "Daugavpils",
    option4: "Bauska",
    correct: 3,
  },


]

function confirm() {
  if (document.getElementById("option_" + questions[question].correct).checked) {
    document.getElementById("question_paragraph").innerHTML = "Pareizi!";
    score += 1;
  }
  
  else {
    document.getElementById("question_paragraph").innerHTML = "Nepareizi!";
  }

  document.getElementById("option" + questions[question].correct).style.color= "#11AA11";

}

function reset() {
  document.getElementById("option" + questions[9].correct).style.color= "#FFFFFF";
  question = -1;
  score = 0;
  next_question();
}

function next() {
  if (question >= 9) {
    document.getElementById("question_paragraph").innerHTML = "Beigas rezultāts - " + score + "/10";
  }
  document.getElementById("option" + questions[question].correct).style.color= "#FFFFFF";
  next_question();
}

let score = 0;
let question = -1;

function next_question() {
  question += 1;

  document.getElementById("option1").innerHTML = questions[question].option1;
  document.getElementById("option2").innerHTML = questions[question].option2;
  document.getElementById("option3").innerHTML = questions[question].option3;
  document.getElementById("option4").innerHTML = questions[question].option4;
  document.getElementById("question_paragraph").innerText = questions[question].question;
}

next_question();

