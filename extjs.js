<script>
document.getElementById("birthday").addEventListener("input", function(e) {
  let input = e.target.value;
  let newInput = "";
  
  // only allow digits and limit to 8 characters
  for (let i = 0; i < input.length && newInput.length < 8; i++) {
    if (input[i].match(/\d/)) {
      newInput += input[i];
    }
  }
  
  // add dots after dd and mm
  if (newInput.length > 4) {
    newInput = newInput.slice(0, 2) + "." + newInput.slice(2, 4) + "." + newInput.slice(4);
  } else if (newInput.length > 2) {
    newInput = newInput.slice(0, 2) + "." + newInput.slice(2);
  }
  
  e.target.value = newInput;
  
  // calculate x, y, and z
  let x = newInput.slice(0, 2);
  let y = newInput.slice(3, 5);
  let z = parseInt(x) + parseInt(y);
  
  // display result in text element
  document.getElementById("result").textContent = z;
});
</script>
