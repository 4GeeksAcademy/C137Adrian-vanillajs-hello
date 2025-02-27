import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  
  function numeraleat(array){
    let nume = Math.floor(Math.random()*array.length);
    return nume;
  }
  function excualeat(){
    let numexcu = who[numeraleat(who)]+" "+action[numeraleat(action)]+" "+what[numeraleat(what)]+" "+when[numeraleat(when)];
    return numexcu;
  }
  document.getElementById("excuse").innerText = excualeat();
};
