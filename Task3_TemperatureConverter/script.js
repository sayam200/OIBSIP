const valEl = document.getElementById("value");
const fromEl = document.getElementById("from");
const toEl   = document.getElementById("to");
const outEl  = document.getElementById("result");

function round(n){ return Math.round(n * 100) / 100; }

function toC(v, from){
  v = Number(v);
  if(from === "C") return v;
  if(from === "F") return (v - 32) * 5/9;
  if(from === "K") return v - 273.15;
}
function fromC(v, to){
  if(to === "C") return v;
  if(to === "F") return v * 9/5 + 32;
  if(to === "K") return v + 273.15;
}

function convert(){
  const raw = valEl.value.trim();
  if(raw === ""){ outEl.textContent = "Enter a value."; return; }
  const v = Number(raw);
  if(Number.isNaN(v)){ outEl.textContent = "Invalid number."; return; }
  if(fromEl.value === toEl.value){ outEl.textContent = `${round(v)} ${toEl.value}`; return; }
  const c = toC(v, fromEl.value);
  const res = round(fromC(c, toEl.value));
  outEl.textContent = `${res} ${toEl.value}`;
}

document.getElementById("convert").addEventListener("click", convert);
document.getElementById("reset").addEventListener("click", ()=>{
  valEl.value = ""; outEl.textContent = "—";
});
document.getElementById("swap").addEventListener("click", ()=>{
  const f = fromEl.value; fromEl.value = toEl.value; toEl.value = f;
  if(valEl.value.trim()!=="") convert();
});

// quick keyboard enter
valEl.addEventListener("keydown", e=>{ if(e.key==="Enter") convert(); });
