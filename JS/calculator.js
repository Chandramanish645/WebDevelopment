
var concatenateVal="";
function getValue(id){
	var val = document.getElementById(id);
	concatenateVal = concatenateVal + parseInt(val.value);
	document.getElementById("display").value=concatenateVal;
}

function getOperator(id){
	var op = document.getElementById(id);
	switch(op.value){
		case "Sum":concatenateVal = concatenateVal+ "+";
					break;
		case "Subtract":concatenateVal = concatenateVal+ "-";
						break;
		case "Multiply":concatenateVal = concatenateVal+ "x";
						break;
		case "Division":concatenateVal = concatenateVal+ "/";
						break;
	}	
	document.getElementById("display").value=concatenateVal;
}

function evaluate1(){
	 var finalString = document.getElementById('display');
	 var arr = separateOperandAndOperator(finalString.value);
	
	var op1 = parseInt(arr[0]);
	var op2 = parseInt(arr[2]);
	var operator = arr[1];
	var res=calculate(op1 , operator , op2);
	document.getElementById("display").value=res ; 
}
  function separateOperandAndOperator(finalString){
	 return finalString.match(/[^\d()]+|[\d.]+/g);
 }
 
 function calculate(op1 , operator , op2){
	 var res=0;
	 switch(operator){
		 case "+": res= op1+op2;
					break;
		case "-": res= op1-op2;
					break;
		case "x": res= op1*op2;
					break;
		case "/": res= op1/op2;
					break;					
	 }
	 return res;
 }
 
 function reset1(){
	 document.getElementById("display").value="";
	 concatenateVal="";
 }