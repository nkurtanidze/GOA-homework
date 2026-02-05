const passage = `The archaeological expedition unearthed artifacts that complicated prevailing theories about Bronze Age trade networks. Obsidian from Anatolia and amber from the Baltic revealed massive ancient trade routes.`;

const textBox=document.getElementById("text");
const input=document.getElementById("input");

let time=60, started=false, timer;

function loadText(){
textBox.innerHTML=passage.split("").map(c=>`<span>${c}</span>`).join("");
}
loadText();

input.addEventListener("input",()=>{

if(!started){
started=true;
timer=setInterval(()=>{
time--;
document.getElementById("time").innerText=time;
if(time<=0){
clearInterval(timer);
input.disabled=true;
}
},1000);
}

const spans=textBox.querySelectorAll("span");
const typed=input.value.split("");

let correct=0;

spans.forEach((s,i)=>{
s.classList.remove("active");

if(typed[i]==null){
s.className="";
}
else if(typed[i]===s.innerText){
s.className="correct";
correct++;
}
else{
s.className="wrong";
}
});

if(spans[typed.length]) spans[typed.length].classList.add("active");

const acc=typed.length?Math.round(correct/typed.length*100):100;
document.getElementById("acc").innerText=acc;

const words=typed.join("").trim().split(/\s+/).length;
document.getElementById("wpm").innerText=
time<60?Math.round(words*(60/(60-time))):0;
});

function restart(){
location.reload();
}