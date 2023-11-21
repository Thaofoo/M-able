function updateQuantity(change) {
  // Get the current value of the input
  var input = document.getElementById('quantity');
  var currentValue = parseInt(input.value);

  // Update the input value based on the change parameter
  var newValue = currentValue + change;

  // Ensure the new value is not less than 1
  newValue = Math.max(1, newValue);

  // Update the input value
  input.value = newValue;
}
