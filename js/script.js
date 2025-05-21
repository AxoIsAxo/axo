async function myFunction() {
  const predefinedText = "This is the text I want to copy!";

 if (!navigator.clipboard) {
    // Clipboard API not available
    alert("Sorry, your browser does not support copying to clipboard this way. Please copy manually.");
    console.error("Clipboard API not available.");
    return;
  }

  try {
    await navigator.clipboard.writeText(predefinedText);

    alert("Copied the text: " + predefinedText);
    console.log("Text copied to clipboard: " + predefinedText);
  } catch (err) {
    console.error("Failed to copy text: ", err);
    alert("Failed to copy text. See console for details.");
  }
}
