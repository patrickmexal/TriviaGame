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

  if(!checked) {
    alert("please select choice answer");
    return;
  } 
  // Correct answer
  if(userAnswer === "1822") {
     alert("Answer is correct!");
     correct++;
     console.log(correct);
  } else if (userAnswer === "Abacus") {
    alert("Answer is correct!");
    correct++;
    console.log(correct);
  } else if (userAnswer === "4004") {
    alert("Answer is correct!");
    correct++;
    console.log(correct)
  } else if (userAnswer ==="5MB") {
    alert("Answer is correct!");
    correct++;
    console.log(correct);
    console.log(incorrect);
  } else if (userAnswer === "Lovelace") {
    alert("Answer is correct!");
    correct++;
    console.log(correct);
  } else if (userAnswer === "9%") {
    alert("Answer is correct!");
    correct++;
    console.log(correct);
  }
  // Incorrect answer
  else {
     alert("Answer is wrong!");
     correct--;
     console.log(incorrect);
  }
  
}


function countDown (count) {
      if (count > -1) {
       var d = document.getElementById("clock");
       d.innerHTML = count;
       setTimeout (function() { countDown(count-1); }, 1000);
       }
      //else
       //document.location = "someotherpage.html";
    }
    $("#start").click(countDown(60));

    if (countDown === 0) {
      console.log(correct);
      alert("Time is up!")
      $("#scoreboard1").html(correct);
      $("#scoreboard2").html(incorrect);
    }

    
/*
//Function to keep score.
function gameOver() {
  $("#scoreboard1").html(correct);
  $("#scoreboard2").html(incorrect);
}
gameOver();

//setTimeout for game clock
function setTimeout(gameOver, 60000;) {
  $(#start).click()
}

setTimeout();


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



