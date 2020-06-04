const container = document.getElementById("container");
const text = document.getElementById("text");
const totalTime = 7500;
const breathIntime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;
const breathOutTime = (totalTime / 5) * 2;

breathAnimation();
function breathAnimation() {
  text.innerText = 'Breathe In!'
  container.classList.remove('shrink')
  container.className = "container grow"
  setTimeout(() => {
    text.innerText = 'Hold!'
    setTimeout(() => {
        text.innerText = 'Breathe Out!'
        container.className= "container shrink"
    }, holdTime);
  }, breathIntime);
}
setInterval(breathAnimation,totalTime)
