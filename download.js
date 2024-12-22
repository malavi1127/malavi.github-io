// Get query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);
const fileName = urlParams.get('file');
const securityKey = urlParams.get('key');

// Display the file name
const fileNameElement = document.getElementById('fileName');
if (fileName) {
    fileNameElement.textContent = `File: ${fileName}`;
} else {
    fileNameElement.textContent = 'No file specified.';
}

// Elements for download and user feedback
const downloadButton = document.getElementById('downloadButton');
const downloadMessage = document.getElementById('downloadMessage');

// Add click event listener to the download button
downloadButton.addEventListener('click', () => {
    const enteredKey = document.getElementById('securityKeyInput').value.trim(); // Trim input to avoid accidental spaces

    if (enteredKey === securityKey) {
        if (fileName) {
            // Security key matches and file name is specified
            const fileURL = `https://github.com/malavi1127/malavi.github-io/raw/main/${encodeURIComponent(fileName)}`;

            // Create a temporary anchor element for downloading the file
            const a = document.createElement('a');
            a.href = fileURL;
            a.download = fileName; // Suggests a filename for download
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

            // Provide user feedback
            downloadMessage.textContent = 'File download initiated!';
            downloadMessage.style.color = 'green';
        } else {
            // File name is missing
            downloadMessage.textContent = 'File name is missing!';
            downloadMessage.style.color = 'red';
        }
    } else {
        // Security key does not match
        downloadMessage.textContent = 'Invalid security key!';
        downloadMessage.style.color = 'red';
    }
});
