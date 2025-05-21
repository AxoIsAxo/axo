async function myFunction() {
    const textToCopy = "05a63c2bb6ae08897ee38b4d451a3665d0589cf2925c77db7c6682f05f74914d36";
    const tooltip = document.getElementById("myTooltip");

    if (!tooltip) {
        console.error("Tooltip element with ID 'myTooltip' not found.");
        alert("Tooltip functionality error. Check console.");
        return;
    }

    // --- Tooltip Management ---
    // 1. Clear any existing timeout to prevent premature hiding if clicked rapidly
    if (tooltip.hideTimeout) {
        clearTimeout(tooltip.hideTimeout);
    }
    // 2. Ensure tooltip is initially hidden or reset if shown from a previous action
    tooltip.classList.remove("show");
    // --------------------------

    if (!navigator.clipboard) {
        console.error("Clipboard API not available.");
        tooltip.innerHTML = "Copy not supported!";
        tooltip.classList.add("show");
        tooltip.hideTimeout = setTimeout(() => { tooltip.classList.remove("show"); }, 2000); // Hide after 2s
        alert("Sorry, copying to clipboard is not supported by your browser.");
        return;
    }

    try {
        await navigator.clipboard.writeText(textToCopy);
        tooltip.innerHTML = "Session ID Copied!"; // Updated message
        console.log("Text copied to clipboard: " + textToCopy);
    } catch (err) {
        console.error("Failed to copy text: ", err);
        tooltip.innerHTML = "Copy failed!";
    } finally {
        // Show the tooltip regardless of success or failure (message is already set)
        tooltip.classList.add("show");
        // Set a timeout to hide the tooltip after a few seconds
        tooltip.hideTimeout = setTimeout(() => {
            tooltip.classList.remove("show");
            // Optional: Reset tooltip text for next time
            // tooltip.innerHTML = "Click to copy";
        }, 2000); // Hide after 2 seconds
    }
}

// --- Event Listener ---
// Get the button and add a click event listener
const copyButton = document.getElementById("copyButton");
if (copyButton) {
    copyButton.addEventListener("click", myFunction);
} else {
    console.error("Button with ID 'copyButton' not found.");
}

// Optional: If you want the tooltip to also show some default text on hover
// (but the "Copied!" message only on click), you can add separate hover listeners.
// For this request, we are only showing it on click.
