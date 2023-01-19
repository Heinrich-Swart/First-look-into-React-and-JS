import React from "react";

const name = 'heinrich swart';

//Merge of the 2 functions
function reverseVowelString(str){
  let result = "";

  for (let i = str.length - 1; i >= 0; i -= 1){
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      result += (str[i].toUpperCase());
    } else {
      result += (str[i]);
    }
  }

  return result;
}

//function to reverse the given name

// function reverse (str){
//   let result = "";

//   for (let i = str.length - 1; i >= 0; i -=1){
//     result += str[i];
//   }
//   return result;
// }

//function to make the vocals an uppercase and the rest lowercase

// function vocals(str){
//   let result = "";
//   for(let i = 0;i < str.length; i++){
//     if (
//       str[i] === "a" ||
//       str[i] === "e" ||
//       str[i] === "i" ||
//       str[i] === "o" ||
//       str[i] === "u"
//     ){
//       result += (str[i].toUpperCase());
//     }else{
//       result += (str[i]);
//     }
//   }
//   return result;
// }

function click(){
  alert(reverseVowelString(name));
  //alert(reverse(name));
  //alert(vocals(name));
}
function App() {
  return (
    <div> 
      <h1> Heinrich Swart </h1>
    <button onClick ={click}>
      Button 
    </button>
    </div>
  );
}

export default App;
