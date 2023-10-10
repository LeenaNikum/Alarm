
addButton.addEventListener("click",function() {
  alarmDesign.style.display = "block";
})



function setAlarm() {


  const timeInput = document.getElementById('timeInput').value;
  const now = new Date();
  const alarm = new Date(now.toDateString() + " " + timeInput);

  const timeAlarm = alarm - now;

  setTimeout(() => {
    document.getElementById('alarmSound').play();
   
  },timeAlarm);
}