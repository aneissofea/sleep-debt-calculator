let sleepHours; //it works without declaring? hmm??

/*const getSleepHours = day =>{
  switch (day){
    case 'monday': sleepHours= 6;
    break;
    case 'tuesday': sleepHours= 5;
    break;
    case 'wednesday': sleepHours= 3;
    break;
    case 'thursday': sleepHours= 5;
    break;
    case 'friday': sleepHours= 6;
    break;
    case 'saturday': sleepHours= 6;
    break;
    case 'sunday': sleepHours= 6;
    break;
    default: sleepHours='undefined';
    break;
  }
}
*/ //hidden for the reason of trying different functions

function getSleepHours(day){
  day = day.toLowerCase();
  switch (day){
    case 'monday': sleepHours= 6;
    break;
    case 'tuesday': sleepHours= 5;
    break;
    case 'wednesday': sleepHours= 3;
    break;
    case 'thursday': sleepHours= 5;
    break;
    case 'friday': sleepHours= 6;
    break;
    case 'saturday': sleepHours= 7;
    break;
    case 'sunday': sleepHours= 7.5;
    break;
    default: sleepHours='undefined';
    break;
  }
  return sleepHours;
}

/*
console.log('You had ' + getSleepHours('sUndAy') + ' hours of sleep.');

function getActualSleepHours(){
  return getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday')+getSleepHours('sunday');
} 
*/ //hidden for the reason of trying different functions

const getActualSleepHours= () => getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday')+getSleepHours('sunday');

function getIdealSleepHours(){
  idealHours= 8;
  return idealHours*7;
}

/*
console.log(getActualSleepHours());
console.log(getIdealSleepHours());
*/


function calculateSleepDebt(){
  actualSleepHours=getActualSleepHours();
  idealSleepHours= getIdealSleepHours();

  //actual calc of sleepdebt
  sleepDebt= idealSleepHours - actualSleepHours; 

  //logic for what you have to say over the sleepDebt, it is in this function bc you're using actualSleepHours and idealSleepHours variables bc you need re-use said variables in other functions and you'll need you to use different variable names for it too.

  if(actualSleepHours === idealSleepHours){
    console.log('You have the ideal amount of sleep hours that you require this week. Good job, keep it up!');
  }
  if(actualSleepHours > idealSleepHours){
    console.log('You slept ' + sleepDebt + ' hours more than needed the past week. That\'s enough..');
  }
  if(actualSleepHours < idealSleepHours){
    console.log('You\'re in debt of '+ sleepDebt + ' hours worth of sleep this week. Go to bed early tonight yea?');
  }

}

calculateSleepDebt();
