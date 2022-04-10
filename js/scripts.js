

function getResults(){
  let choice1=0;
  let choice2=0;
  let choice3=0;

  let choicesArray=document.getElementsByTagName('input');
  console.log(choicesArray);

  for(let i=0; i<choicesArray.length;i++) {
    if(choicesArray[i].checked) {
      if(choicesArray[i] == 'c1') {
        choice1=choice1+1;
      }
      if(choicesArray[i] == 'c2') {
        choice2=choice2+1;
      }
      if(choicesArray[i] == 'c3') {
        choice3=choice3+1;
      }
    }
  }
  console.log(choice1);
  console.log(choice2);
  console.log(choice3);

  let totalScore=Math.max(choice1,choice2,choice3);
  console.log(totalScore);

  let surveyResponse;
  if(choice1==totalScore) {
    surveyResponse="Ruby";
  }
  if(choice2==totalScore) {
    surveyResponse="Javescript";
  }
  if(choice3==totalScore) {
    surveyResponse="C#";
  }
  alert("Your Programing Language is " + surveyResponse);
}
function resetForm() {
  location.reload;
}