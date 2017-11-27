var correct = 0;
var incorrect = 0;

function submitAnswer() {
  var radios = document.getElementsByName("choice");
  var i = 0, len = radios.length;
  var checked = false;
  var userAnswer;
  
  for( ; i < len; i++ ) {
     if(radios[i].checked) {
       checked = true;
       userAnswer = radios[i].value;
     }
  } 
  /* If user clicks the submit button without selecting any option, alert box should be say "please select choice answer".*/

  /*if(!checked) {
    alert("please select choice answer");
    return;
  }*/
  // Correct answer
  if(userAnswer === "1822") {
     alert("Answer is correct!");
  }
  // Incorrect answer
  else {
     alert("Answer is wrong!");
  }
  
}

console.log(correct);
/*
function time() {
 	for (time = 60; time > -1; time--) {
 		setTimeout(time, 1000);
 		console.log(time);
 	}
}
if (time === 0){
	alert("Times up!");
}
function runTime() {
	$("#start").click
	time--;
	console.log(time);
}
setTimeout(runTime, 60000);

time();
/*var time = 60;
runTime = time;

setTimeout(function() {
	for (var time = 60; time > 0; time--) {
	}
		
}, 1000);



console.log(time);
/*var time = 60;

function runTime() {
	setInterval(countDown() {document.getElementById("clock").innerHTML = time}, 1000);
	time--;
	for (var i = 60; i > 0; i--) {
		$("#clock").html(time);
	}
	console.log(time);
}
runTime()
/*function timesUp () {
	alert("Time's Up!");
	$("#clock").append(countDown);

}
var timer = 60;

function countDown(){
	
for (var i = 60; i > 0; i--) {
	console.log(i);
}}
countDown(); 

$("#timer").click(countDown);*/ 



