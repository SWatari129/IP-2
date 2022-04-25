function getResults(){
  let choice1=0;
  let choice2=0;
  let choice3=0;

  let choicesArray=document.getElementsByTagName('input');

  for(let i=0; i<choicesArray.length;i++) {
    if(choicesArray[i].checked) {
      if(choicesArray[i].value === 'c1') {
        choice1=choice1+1;
      }
      if(choicesArray[i].value === 'c2') {
        choice2=choice2+1;
      }
      if(choicesArray[i].value === 'c3') {
        choice3=choice3+1;
      }
    }  
  }


  let totalScore=Math.max(choice1,choice2,choice3);

  let surveyResponse;
  if(choice1==totalScore) {
    surveyResponse="Ruby";
  }
  if(choice2==totalScore) {
    surveyResponse="JavaScript";
  }
  if(choice3==totalScore) {
    surveyResponse="C#";
  
  }
  document.getElementById('output').innerHTML = "Your Programing Language is " + surveyResponse;
  //alert("Your Programing Language is " + surveyResponse);
}
function resetForm() {
  location.reload;
}