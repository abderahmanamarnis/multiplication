
  var yourchoice = document.getElementById('yourchoice');
      var selectedOption = document.getElementById('numberlist');
      history = document.getElementById("history")

      selectedOption.addEventListener('change', function(ev) {
         console.log(ev.target.value);
         result();
      });
data = {}
if(localStorage.length > 0){
   data = {...JSON.parse(localStorage.getItem("key"))}
}
      function result() {
         calculationResult = parseInt(yourchoice.value) * parseInt(selectedOption.value)
         console.log(parseInt(yourchoice.value) * parseInt(selectedOption.value));
         data[`${selectedOption.value} * ${yourchoice.value}`] = calculationResult;
         localStorage.setItem("key" , JSON.stringify(data));
        
         updateHistory()
      };
      
      function updateHistory() {
         let txt = "";
         for (let x in data) {
             txt += `${x} = ${data[x]}<br>`;
         }
         document.getElementById("history").innerHTML = txt;
     }
     
     // Don't need this line, it doesn't do anything useful
     // localStorage.getItem("key");
     
     updateHistory();