var factList = [
  "She/Her",/*0*/
  "He/Him",/*1*/
  "They/Them",/*2*/
  "He/They",/*3*/
  "She/They",/*4*/
  "He/She/They"];/*5*/



var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
