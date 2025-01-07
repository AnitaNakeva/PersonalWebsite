function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      alert("Email copied to clipboard: " + text);
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  }