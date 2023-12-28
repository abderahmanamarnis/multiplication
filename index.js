// console.log(document.getElementById('numberlist').value)

// document.getElementById('numberlist')
  var yourchoice = document.getElementById('yourchoice');
      var selectedOption = document.getElementById('numberlist');

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
       
   
      };
      localStorage.getItem("key");
      // localStorage.clear()
   // var jsonData = {
   //          yourChoiceValue: parseInt(yourchoice.value),
   //          selectedOptionValue: parseInt(selectedOption.value),
   //          result: calculationResult
   //       };

   //       // Convert the object to a JSON-formatted string
   //       var jsonString = JSON.stringify(jsonData);

   //       // Log the JSON string
   //       console.log(jsonString);