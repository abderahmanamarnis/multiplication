let yourchoice = document.getElementById('yourchoice');
let selectedOption = document.getElementById('numberlist');
let history = document.getElementById("history")
data = {}
if (localStorage.length > 0) {
   data = { ...JSON.parse(localStorage.getItem("key")) }
}
function result() {
   if(yourchoice.value!== ""&& selectedOption.value!== ""){
   calculationResult = parseInt(yourchoice.value) * parseInt(selectedOption.value)
   console.log(parseInt(yourchoice.value) * parseInt(selectedOption.value));
   data[`${selectedOption.value} * ${yourchoice.value}`] = calculationResult;
   localStorage.setItem("key", JSON.stringify(data));}
   else{
      alert("choose a number")
   }
   updateHistory()
};
function updateHistory() {
   let txt = "";
   for (let x in data) {
      txt += `${x} = ${data[x]}<br>`;
   }
   document.getElementById("history").innerHTML = txt;
}
updateHistory();
