// Author: Chad Wilson
function Q1_validation()
{
  var answer = document.getElementById("Q1input").value;

  if(answer == -2 && answer.includes(" ")) {
    document.getElementById("Q1input").style.backgroundColor = "rgb(254, 65, 65)";
    document.getElementById("Q1AnswerError").style.display = "inline-block";
    document.getElementById("Q1AnswerCorrect").style.display = "none";
    document.getElementById("Q1AnswerError").innerHTML = "Your answer cannot contain a space";
  }
  else if(answer == -2 && answer.includes(".")) {
    document.getElementById("Q1input").style.backgroundColor = "rgb(254, 65, 65)";
    document.getElementById("Q1AnswerError").style.display = "inline-block";
    document.getElementById("Q1AnswerCorrect").style.display = "none";
    document.getElementById("Q1AnswerError").innerHTML = "Your answer cannot contain a period";
  }
  else if(answer == -2) {
    document.getElementById("Q1input").style.backgroundColor = "lightgreen";
    document.getElementById("Q1AnswerCorrect").style.display = "inline-block";
    document.getElementById("Q1AnswerError").style.display = "none";
  }
  else if(answer == "") {
    document.getElementById("Q1input").style.backgroundColor = "rgb(254, 65, 65)";
    document.getElementById("Q1AnswerError").style.display = "inline-block";
    document.getElementById("Q1AnswerCorrect").style.display = "none";
    document.getElementById("Q1AnswerError").innerHTML = "You must type an answer";
  }
  else if(answer.includes(" ")) {
    document.getElementById("Q1input").style.backgroundColor = "rgb(254, 65, 65)";
    document.getElementById("Q1AnswerError").style.display = "inline-block";
    document.getElementById("Q1AnswerCorrect").style.display = "none";
    document.getElementById("Q1AnswerError").innerHTML = "Your answer cannot contain a space";
  }
  else if(isNaN(answer)) {
    document.getElementById("Q1input").style.backgroundColor = "rgb(254, 65, 65)";
    document.getElementById("Q1AnswerError").style.display = "inline-block";
    document.getElementById("Q1AnswerCorrect").style.display = "none";
    document.getElementById("Q1AnswerError").innerHTML = "Your answer must be a number";
  }
  else if(answer.includes(".")) {
    document.getElementById("Q1input").style.backgroundColor = "rgb(254, 65, 65)";
    document.getElementById("Q1AnswerError").style.display = "inline-block";
    document.getElementById("Q1AnswerCorrect").style.display = "none";
    document.getElementById("Q1AnswerError").innerHTML = "Your answer cannot contain a period";
  }
  else {
    document.getElementById("Q1input").style.backgroundColor = "rgb(254, 65, 65)";
    document.getElementById("Q1AnswerError").style.display = "inline-block";
    document.getElementById("Q1AnswerCorrect").style.display = "none";
    document.getElementById("Q1AnswerError").innerHTML = "Incorrect";
  }
}

function Q1_button_clicked()
{
  var answer = document.getElementById("Q1input").value;

  if (answer != "" && !isNaN(answer) && !answer.includes(" ") && !answer.includes(".")) {
    setCookie("answer_1", answer, 1);
    window.location.href = "question2.html";
  }
}

function Q2_validation()
{
  var answer = document.getElementById("Q2input").value;

  if(answer == 84 && answer.includes(" ")) {
    document.getElementById("Q2input").style.backgroundColor = "rgb(254, 65, 65)";
    document.getElementById("Q2AnswerError").style.display = "inline-block";
    document.getElementById("Q2AnswerCorrect").style.display = "none";
    document.getElementById("Q2AnswerError").innerHTML = "Your answer cannot contain a space";
  }
  else if(answer == 84 && answer.includes(".")) {
    document.getElementById("Q2input").style.backgroundColor = "rgb(254, 65, 65)";
    document.getElementById("Q2AnswerError").style.display = "inline-block";
    document.getElementById("Q2AnswerCorrect").style.display = "none";
    document.getElementById("Q2AnswerError").innerHTML = "Your answer cannot contain a period";
  }
  else if(answer == 84) {
    document.getElementById("Q2input").style.backgroundColor = "lightgreen";
    document.getElementById("Q2AnswerCorrect").style.display = "inline-block";
    document.getElementById("Q2AnswerError").style.display = "none";
  }
  else if(answer == "") {
    document.getElementById("Q2input").style.backgroundColor = "rgb(254, 65, 65)";
    document.getElementById("Q2AnswerError").style.display = "inline-block";
    document.getElementById("Q2AnswerCorrect").style.display = "none";
    document.getElementById("Q2AnswerError").innerHTML = "You must type an answer";
  }
  else if(answer.includes(" ")) {
    document.getElementById("Q2input").style.backgroundColor = "rgb(254, 65, 65)";
    document.getElementById("Q2AnswerError").style.display = "inline-block";
    document.getElementById("Q2AnswerCorrect").style.display = "none";
    document.getElementById("Q2AnswerError").innerHTML = "Your answer cannot contain a space";
  }
  else if(isNaN(answer)) {
    document.getElementById("Q2input").style.backgroundColor = "rgb(254, 65, 65)";
    document.getElementById("Q2AnswerError").style.display = "inline-block";
    document.getElementById("Q2AnswerCorrect").style.display = "none";
    document.getElementById("Q2AnswerError").innerHTML = "Your answer must be a number";
  }
  else if(answer.includes(".")) {
    document.getElementById("Q2input").style.backgroundColor = "rgb(254, 65, 65)";
    document.getElementById("Q2AnswerError").style.display = "inline-block";
    document.getElementById("Q2AnswerCorrect").style.display = "none";
    document.getElementById("Q2AnswerError").innerHTML = "Your answer cannot contain a period";
  }
  else {
    document.getElementById("Q2input").style.backgroundColor = "rgb(254, 65, 65)";
    document.getElementById("Q2AnswerError").style.display = "inline-block";
    document.getElementById("Q2AnswerCorrect").style.display = "none";
    document.getElementById("Q2AnswerError").innerHTML = "Incorrect";
  }
}

function Q2_button_clicked()
{
  var answer = document.getElementById("Q2input").value;

  if(answer != "" && !isNaN(answer) && !answer.includes(" ") && !answer.includes(".")) {
    setCookie("answer_2", answer, 1);
    window.location.href = "question3.html";
  }
}

function Q3_validation()
{
  var answer = document.getElementById("Q3input").value;

  if(answer == 50 && answer.includes(" ")) {
    document.getElementById("Q3input").style.backgroundColor = "rgb(254, 65, 65)";
    document.getElementById("Q3AnswerError").style.display = "inline-block";
    document.getElementById("Q3AnswerCorrect").style.display = "none";
    document.getElementById("Q3AnswerError").innerHTML = "Your answer cannot contain a space";
  }
  else if(answer == 50 && answer.includes(".")) {
    document.getElementById("Q3input").style.backgroundColor = "rgb(254, 65, 65)";
    document.getElementById("Q3AnswerError").style.display = "inline-block";
    document.getElementById("Q3AnswerCorrect").style.display = "none";
    document.getElementById("Q3AnswerError").innerHTML = "Your answer cannot contain a period";
  }
  else if(answer == 50) {
    document.getElementById("Q3input").style.backgroundColor = "lightgreen";
    document.getElementById("Q3AnswerCorrect").style.display = "inline-block";
    document.getElementById("Q3AnswerError").style.display = "none";
  }
  else if(answer == "") {
    document.getElementById("Q3input").style.backgroundColor = "rgb(254, 65, 65)";
    document.getElementById("Q3AnswerError").style.display = "inline-block";
    document.getElementById("Q3AnswerCorrect").style.display = "none";
    document.getElementById("Q3AnswerError").innerHTML = "You must type an answer";
  }
  else if(answer.includes(" ")) {
    document.getElementById("Q3input").style.backgroundColor = "rgb(254, 65, 65)";
    document.getElementById("Q3AnswerError").style.display = "inline-block";
    document.getElementById("Q3AnswerCorrect").style.display = "none";
    document.getElementById("Q3AnswerError").innerHTML = "Your answer cannot contain a space";
  }
  else if(isNaN(answer)) {
    document.getElementById("Q3input").style.backgroundColor = "rgb(254, 65, 65)";
    document.getElementById("Q3AnswerError").style.display = "inline-block";
    document.getElementById("Q3AnswerCorrect").style.display = "none";
    document.getElementById("Q3AnswerError").innerHTML = "Your answer must be a number";
  }
  else if(answer.includes(".")) {
    document.getElementById("Q3input").style.backgroundColor = "rgb(254, 65, 65)";
    document.getElementById("Q3AnswerError").style.display = "inline-block";
    document.getElementById("Q3AnswerCorrect").style.display = "none";
    document.getElementById("Q3AnswerError").innerHTML = "Your answer cannot contain a period";
  }
  else {
    document.getElementById("Q3input").style.backgroundColor = "rgb(254, 65, 65)";
    document.getElementById("Q3AnswerError").style.display = "inline-block";
    document.getElementById("Q3AnswerCorrect").style.display = "none";
    document.getElementById("Q3AnswerError").innerHTML = "Incorrect";
  }
}

function Q3_button_clicked()
{
  var answer = document.getElementById("Q3input").value;

  if(answer != "" && !isNaN(answer) && !answer.includes(" ") && !answer.includes(".")) {
    setCookie("answer_3", answer, 1);
    location.href = "results.html";
  }
}

function user_results()
{
  var results = document.getElementById("results");
  var answers_correct = 0;
  var answer_1 = getCookie("answer_1");
  var answer_2 = getCookie("answer_2");
  var answer_3 = getCookie("answer_3");

  if(answer_1 == "-2") {
    answers_correct += 1;
  }
  if(answer_2 == "84") {
    answers_correct += 1;
  }
  if(answer_3 == "50") {
    answers_correct += 1;
  }
  results.innerHTML = "You got " + answers_correct + "/3 answers correct"
}

//setCookie and getCookie are courtesy of w3schools
//https://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
