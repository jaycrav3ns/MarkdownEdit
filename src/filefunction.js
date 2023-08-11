	function importMarkdownFile() {
    var input = document.getElementById('mdimport');
    input.click(); // Simulate a click on the hidden input file chooser
    input.onchange = function() {
      var file = input.files[0];
      var reader = new FileReader();

      reader.onload = function (event) {
        var importedText = event.target.result;
        var textarea = document.getElementById('textInput');
        textarea.value = importedText;
      };

      reader.readAsText(file);
    };
  }

  function exportMarkdownFile() {
    var content = document.getElementById('textInput').value;
    var blob = new Blob([content], { type: 'text/markdown' });
    var url = URL.createObjectURL(blob);

    var a = document.createElement('a');
    a.href = url;
    a.download = 'markdown-export.md';
    a.click();

    // Clean up the object URL
    URL.revokeObjectURL(url);
  }

  function copyToClipboard() {
    const currentTextareaContents = document.getElementById('textInput');
    currentTextareaContents.select();
    document.execCommand('copy');

    const copiedText = document.getElementById('copiedText');
    copiedText.textContent = 'Copied!';

    // Set a timer to hide the "Copied!" message after 2 seconds (2000 milliseconds)
    setTimeout(() => {
      copiedText.textContent = '';
    }, 3000);
  }

  function clearTextarea() {
    var textarea = document.getElementById('textInput');
    textarea.value = '';
  }
