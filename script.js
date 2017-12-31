
function getSleepHours(day){
  if (day ==='monday') {
    return 4;
  } else if(day=== 'tuesday'){
    return 8;
  }else if(day=== 'wednesday'){
    return 4;
  }else if(day=== 'thursday'){
    return 8;
  }else if(day=== 'friday'){
    return 4;
  }else if(day=== 'saturday'){
    return 8;
  }else if(day=== 'sunday'){
    return 8;
  }
}

function getActualSleepHours(){
  return getSleepHours('monday') +getSleepHours('tuesday') + getSleepHours('wednesday') +getSleepHours('thursday') +getSleepHours('friday') +getSleepHours('saturday') + getSleepHours('sunday');
}


function getIdealSleepHours(){
  var idealHours = 8;
  return idealHours * 7;
}

function calculateSleepDebt(){
  var actualSleepHours= getActualSleepHours();
  var idealSleepHours = getIdealSleepHours();


if (actualSleepHours == idealSleepHours){
  console.log('Ideal amout of sleep');
}else if(actualSleepHours>idealSleepHours){
	console.log('Too much sleep');
}else if(actualSleepHours<idealSleepHours){
  console.log('You got '+ (idealSleepHours-actualSleepHours) +' hours less sleep than you needed this week. You need more sleep.');
}
  
}  

calculateSleepDebt();
