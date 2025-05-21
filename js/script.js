function myFunction() {
  // Get the text field
  const predefinedText = "This is the text I want to copy!";

  // Select the text field
  predefinedText.select();
  predefinedText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(predefinedText.value);

  // Alert the copied text
  alert("Copied the text: " + predefinedText.value);
}
