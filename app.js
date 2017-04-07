
//Opening a New Window
function open1(){
window.open("index1.html");
}

//10 Questions
var questions=[
{
	question: "Inside which HTML element do we put the JavaScript?",
	option1:"javascript tag",
	option2:"js tag",
	option3:"script tag",
	option4:"scripting tag",
	correct_value:"3"
},
{
	question:"Where is the correct place to insert a JavaScript?",
	option1:"head tag",
	option2:"body tag",
	option3:"after body tag",
	option4:"Both a & b",
	correct_value:"4"
},
{
	question:" How do you write 'Hello World' in an alert box?",
	option1:"msg('Hello World') ",
	option2:"msgbox('Hello World') ",
	option3:"alert('Hello World') ",
	option4:"alertbox('Hello World') ",
	correct_value:"3"
},
{
	question:"How to write an IF statement in JavaScript?",
	option1:"if i ==5 then",
	option2: "if i= 5",
	option3:"if i=5 then",
	option4:"if(i=5)",
	correct_value:"4"
},
{
	question:"How does a FOR loop start?",
	option1:"for(i=3; i=0; i++)",
	option2:"for(i=3; i=0)",
	option3:"for(i=3)",
	option4:"for(i=3; i=++)",
	correct_value:"1"
},
{
	question:"What is the purpose of Javascript?",
	option1:"Design Web pages",
	option2:"Program the behavior of Web pages",
	option3:"Define the content of Web pages",
	option4:"Specify the layout of Web pages",
	correct_value:"2"
},
{
	question:"Which code is used to write into HTML elements?",
	option1:"innerHTML",
	option2:"document.write()",
	option3:"window.alert()",
	option4:"console.log()",
	correct_value:"1"
},
{
	question:"What is the another word for fixed values?",
	option1:"Expressions",
	option2:"Keywords",
	option3:"Literals",
	option4:"Both b & c",
	correct_value:"3"
},
{
	question:"Which of the following is not a rule for naming a variable?",
	option1:"Names cannot begin with $ and _",
	option2:"Reserved words cannot be used",
	option3:"Names must begin with a letter",
	option4:"Names can also begin with $ and _",
	correct_value:"1"
},
{
	question:"What is the symbol for 'equal to'?",
	option1:"!=",
	option2:"=",
	option3:"==",
	option4:"===",
	correct_value:"3"
}
]


//Declaration of Variables

var recent_ques=0;
var result=0;
var numberof_question=questions.length;

//console.log(numberof_question);
//document.getElementById("result").innerHTML="hello";
function cl(){
	
   document.getElementById('main').style.display="none";
   document.getElementById('result').style.display="none";
   document.getElementById('footer').style.display="none";
}
//Timer Function

var counter=50;
function timer(){
document.getElementById("time").innerHTML="Time Remaining: "+" "+counter +" "+" Seconds";
counter--;
setTimeout("timer();",1000);
if(counter<=-1){
	var stop1=clearTimeout(setTimeout("timer();",1000));
	counter++;
	load1();
			  }
}

//Function When Timer is 0

function load1(){
	document.getElementById('contain').style.display ="none";
	document.getElementById('footer').style.display ="none";
	if(result>=14 && counter <=0){
	document.getElementById("result").innerHTML="Time's UP !"+"<br>"+"<h2>CONGRATULATIONS!</h2>"+"Your Score Is:"+"<br>"+result+"<br>"+(result/20)*100 +" %";
	document.getElementById("close").innerHTML="<button onclick='close1()'>CLOSE</button>";
	document.getElementById("restart").innerHTML="<form action='index.html' method='post'>"+"<button>RESTART QUIZ</button>"+"<form>";
	}
	else{
		document.getElementById("result").innerHTML="SORRY ! Time's UP !"+"<br>"+"<h2>BETTER LUCK NEXT TIME</h2>"+"Your Score Is:"+"<br>"+result+"<br>"+(result/20)*100 +" %";
		document.getElementById("close").innerHTML="<button onclick='close1()'>CLOSE</button>";
		document.getElementById("restart").innerHTML="<form action='index.html' method='post'>"+"<button>RESTART QUIZ</button>"+"<form>";
	}
}

//Close the opened Window
function close1(){
	close("index.html");
}

//Function for displaying questions 

function display(rand){
	document.getElementById("question").innerHTML=questions[rand].question;
	document.getElementById("option1").innerHTML=questions[rand].option1;
	document.getElementById("option2").innerHTML=questions[rand].option2;
	document.getElementById("option3").innerHTML=questions[rand].option3;
	document.getElementById("option4").innerHTML=questions[rand].option4;	
 	document.getElementById("footer").innerHTML=(recent_ques+1)+" out of "+ numberof_question;
}



//Function to load questions

function load(){
	document.getElementById("result").innerHTML="";	
	var checked=document.querySelector('input[type=radio]:checked');
	if(!checked){
		document.getElementById("result").innerHTML="Select a value First !";
		return;
	}
	var correct_value=checked.value;
	if(questions[recent_ques].correct_value==correct_value){	
	result= result+2;	
	}
	 else{
		 checked.checked=false;
	}
 recent_ques=recent_ques+1;
  
 if(recent_ques==numberof_question-1){
	 document.getElementById("nextquestion").innerHTML="Submit Quiz";	
 }
 
if(recent_ques==numberof_question){
	clearTimeout(setTimeout("timer();",1000));
	var correct_value=checked.value;
	document.getElementById('contain').style.display ="none";
	document.getElementById('footer').style.display ="none";
	if(result>=14){
	document.getElementById("result").innerHTML="<h2>CONGRATULATIONS !</h2>"+"Your Score Is:"+"<br>"+result+"<br>"+(result/20)*100 +" %";
	document.getElementById("close").innerHTML="<button onclick='close1()'>CLOSE</button>";
	document.getElementById("restart").innerHTML="<form action='index.html' method='post'>"+"<button>RESTART QUIZ</button>"+"<form>";
	counter="none";
	}
	else{
		document.getElementById("result").innerHTML="<h2>SORRY ! BETTER LUCK NEXT TIME</h2>"+"Your Score Is:"+"<br>"+result+"<br>"+(result/20)*100 +" %";
		document.getElementById("close").innerHTML="<button onclick='close1()'>CLOSE</button>";
		document.getElementById("restart").innerHTML="<form action='index.html' method='post'>"+"<button>RESTART QUIZ</button>"+"<form>";
		counter="none";
	}
	
}
display(recent_ques);	
}

// Callingg functions

display(recent_ques);
timer();

