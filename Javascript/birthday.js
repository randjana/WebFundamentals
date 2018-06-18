# Print countdown to birthday

function countdownBirthday(days){
  if (days === 0){
    displayBday();
  }
  for (var i=days;i>=0;i--){
      if (i >= 30){
          console.log((i+1)+" days until my birthday. Such a long time... :(");
      }
      else if (i < 5){
          console.log((i+1)+" DAYS UNTIL MY BIRTHDAY!!!");
      }
      else if (i < 30){
          console.log((i+1)+" days until my birthday. My birthday nearing... :)");
      }
  }
  displayBday();
}

function displayBday(){
    console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*");
    console.log("♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪");
    console.log("*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«");
}
countdownBirthday(60);
