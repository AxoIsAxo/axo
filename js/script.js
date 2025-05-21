async function myFunction() { // Make the function async
  const textToCopy = "This is the text I want to copy!"; // Renamed for clarity

  // You don't need .select() or .setSelectionRange() for a string variable.
  // And a string variable doesn't have a .value property in this context.
  // The variable 'textToCopy' IS the value.

  if (!navigator.clipboard) {
    // Clipboard API not available
    console.error("Clipboard API not available.");
    var tooltip = document.getElementById("myTooltip");
    if (tooltip) { // Check if tooltip exists
      tooltip.innerHTML = "Copy not supported!";
    }
    alert("Sorry, copying to clipboard is not supported by your browser.");
    return;
  }

  try {
    // Directly use the string variable with navigator.clipboard.writeText
    await navigator.clipboard.writeText(textToCopy); // Use await

    var tooltip = document.getElementById("myTooltip");
    if (tooltip) { // Check if tooltip exists
      tooltip.innerHTML = "Copied ID"; // Use the string itself
    }
    console.log("Text copied to clipboard: " + textToCopy); // Optional: for debugging
  } catch (err) {
    console.error("Failed to copy text: ", err);
    var tooltip = document.getElementById("myTooltip");
    if (tooltip) { // Check if tooltip exists
      tooltip.innerHTML = "Copy failed!";
    }
    alert("Failed to copy text. See console for details.");
  }
}
