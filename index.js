const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


console.log(tutorials)
const titleCased = () => { 
   return tutorials.map((titleCasing));
}


//let newString = "what does the this keyword mean?"

function titleCasing(string){
  let words = string.split(" ");
    //console.log(words);
      for(let i=0;i<words.length;i++){
         words[i]= words[i][0].toUpperCase() + words[i].slice(1);
      }
  return words.join(" ");
}


//console.log(words);
//console.log(sentence);




//for(let i =0;i< words.length;i++){
  
  //let newWords = words[0].toUpperCase(); //+ words[i]
//}

//console.log(newString.toUpperCase());

