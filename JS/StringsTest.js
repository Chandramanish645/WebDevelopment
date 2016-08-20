//var str = "Is the earth on earth heaven";

function LetterCapitalize(str) { 
var str = '=' + str + '=';
 for(var i =0 ; i < str.length ; i++){
     if(str[i].match(/[a-z]/i)!==null){
         if(str[i+1]==='+' && str[i-1]==='+'){
             return true;
         }
     }
 }
  return false; 
         
         
}
   
// keep this function call here 
LetterCapitalize("f++d+");




