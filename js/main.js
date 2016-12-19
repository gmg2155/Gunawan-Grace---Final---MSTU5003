// Flash Cards Flip Feature
$("#card-1").flip();
$("#card-2").flip();
$("#card-3").flip();
$("#card-4").flip();
$("#card-5").flip();
$("#card-6").flip();

//tooltip character pop up
$(document).ready(function() {
         $("#tooltip").tooltip({ content: '<img src="./images/boy1.png" />' }); });
$(document).ready(function() {
        $("#tooltip").tooltip({ content: '<img src="./images/girl1.png" />' }); });
$(document).ready(function() {
        $("#tooltip").tooltip({ content: '<img src="./images/girl2.png" />' }); });
$(document).ready(function() {
        $("#tooltip").tooltip({ content: '<img src="./images/boy2.png" />' }); });

//Law Reading Quiz
var lrqtotalScore = 0;

var lrqbuttonClickCount = 0;

document.querySelector('#lrevalQuiz').addEventListener('click', function(event){

  lrqbuttonClickCount++;

	var lrq1Val = document.querySelector('[name="one"]:checked').value;
	var lrq2Val = document.querySelector('[name="two"]:checked').value;
  var lrq3Val = document.querySelector('[name="three"]:checked').value;

	if (lrq1Val === "a") {
		lrqtotalScore++;
	}

	if (lrq2Val === "c") {
		lrqtotalScore++;
	}

  if (lrq3Val === "b") {
    lrqtotalScore++;
  }

	var lrqfeedbackEl = document.getElementById('lrquizFeedback');

  lrqfeedbackEl.innerHTML = "Your score was: " + lrqtotalScore + "/3 questions.";

  lrqbuttonClickCount = 0;
  lrqtotalScore = 0;


  if (lrqbuttonClickCount === 1) {
    document.getElementById('lrevalQuiz').innerText = "CLEAR";
  } else {
    reset();
    document.getElementById('lrevalQuiz').innerText = "Evaluate";
    lrqbuttonClickCount = 0;
  }

});

function reset() {
  var lrqcheckedItems = document.querySelectorAll(':checked');
  lrqcheckedItems.forEach(function(el){
    el.checked = false;
  });
  console.log(lrqcheckedItems);
}

//Mixed Reading Quiz
var mrqtotalScore = 0;

var mrqbuttonClickCount = 0;

document.querySelector('#mrevalQuiz').addEventListener('click', function(event){

  lrqbuttonClickCount++;

	var mrq1Val = document.querySelector('[name="one"]:checked').value;
	var mrq2Val = document.querySelector('[name="two"]:checked').value;
  var mrq3Val = document.querySelector('[name="three"]:checked').value;

	if (mrq1Val === "c") {
		mrqtotalScore++;
	}

	if (mrq2Val === "b") {
		mrqtotalScore++;
	}

  if (mrq3Val === "b") {
    mrqtotalScore++;
  }

	var mrqfeedbackEl = document.getElementById('mrquizFeedback');

  mrqfeedbackEl.innerHTML = "Your score was: " + mrqtotalScore + "/3 questions.";

  mrqbuttonClickCount = 0;
  mrqtotalScore = 0;

  if (mrqbuttonClickCount === 1) {
    document.getElementById('mrevalQuiz').innerText = "CLEAR";
  } else {
    reset();
    document.getElementById('mrevalQuiz').innerText = "Evaluate";
    mrqbuttonClickCount = 0;
  }

});

function reset() {
  var mrqcheckedItems = document.querySelectorAll(':checked');
  mrqcheckedItems.forEach(function(el){
    el.checked = false;
  });
  console.log(mrqcheckedItems);
}

//Vocab Quiz Assessment
var vqtotalScore = 0;

var vqbuttonClickCount = 0;

document.querySelector('#vevalQuiz').addEventListener('click', function(event){

  vqbuttonClickCount++;

	var vq1Val = document.querySelector('[name="one"]:checked').value;
	var vq2Val = document.querySelector('[name="two"]:checked').value;
  var vq3Val = document.querySelector('[name="three"]:checked').value;
  var vq4Val = document.querySelector('[name="four"]:checked').value;
  var vq5Val = document.querySelector('[name="five"]:checked').value;
  var vq6Val = document.querySelector('[name="six"]:checked').value;

	if (vq1Val === "c") {
		vqtotalScore++;
	}

	if (vq2Val === "c") {
		vqtotalScore++;
	}

  if (vq3Val === "d") {
    vqtotalScore++;
  }

  if (vq4Val === "b") {
    vqtotalScore++;
  }

  if (vq5Val === "a") {
    vqtotalScore++;
  }

  if (vq6Val === "b") {
    vqtotalScore++;
  }

	var vqfeedbackEl = document.getElementById('vquizFeedback');

vqfeedbackEl.innerHTML = "Your score was: " + vqtotalScore + "/6 questions.";

vqbuttonClickCount = 0;
vqtotalScore = 0;

  if (vqbuttonClickCount === 1) {
    document.getElementById('vevalQuiz').innerText = "CLEAR";
  } else {
    reset();
    document.getElementById('vevalQuiz').innerText = "Evaluate";
    vqbuttonClickCount = 0;
  }

});


function reset() {
  var vqcheckedItems = document.querySelectorAll(':checked');
  vqcheckedItems.forEach(function(el){
    el.checked = false;
  });
  console.log(vqcheckedItems);
}
