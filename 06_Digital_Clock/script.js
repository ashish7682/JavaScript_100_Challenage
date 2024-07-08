setInterval(function(){
    let currentDateTime=new Date();

    // =============DATE=============== //
  let currentDate = currentDateTime.getDate();
  let currentMonth = currentDateTime.getMonth();
  let currentYear= currentDateTime.getFullYear();

  //...........conditions for Date............
  if(currentDate<10)
  {
    currentDate="0"+currentDate;
  }
  if(currentMonth<10)
  {
    currentMonth="0"+currentMonth;
  }

  document.getElementById("date").innerHTML= currentDate + "/" + currentMonth + "/" +currentYear;

  // ===============DATE================ //
  // ===============TIME================ //
  let hours = currentDateTime.getHours();
  let minutes = currentDateTime.getMinutes();
  let seconds = currentDateTime.getSeconds();
  let periods = "AM";

  //.........conditions for AM / PM...........

  if(hours>=12)
  {
    periods="PM";
  }

  //..........conditions for 12 Hours time...........
  if(hours > 12)
  {
    hours=hours - 12;
  }
  if(minutes < 10)
  {
    minutes="0"+minutes;
  }
  if(seconds < 10)
  {
    seconds="0"+seconds;
  }
  let clock = hours+ ":" + minutes + ":" + seconds + periods;
  let time  = document.getElementById('time').innerHTML= clock;


})