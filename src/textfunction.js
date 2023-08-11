  function insertText(startEnclosure, endEnclosure) {
    var textarea = document.getElementById('textInput');
    var startPos = textarea.selectionStart;
    var endPos = textarea.selectionEnd;
    var content = textarea.value;
    var selectedText = content.substring(startPos, endPos);

    var newText = startEnclosure + selectedText + endEnclosure;
    textarea.value = content.substring(0, startPos) + newText + content.substring(endPos);

    // Set the cursor position after the inserted text
    var newCursorPosition = startPos + startEnclosure.length + selectedText.length + endEnclosure.length;
    textarea.setSelectionRange(newCursorPosition, newCursorPosition);
  }

  function toggleTextMarkup(startEnclosure, endEnclosure) {
    var textarea = document.getElementById('textInput');
    var startPos = textarea.selectionStart;
    var endPos = textarea.selectionEnd;
    var content = textarea.value;
    var selectedText = content.substring(startPos, endPos);

    if (selectedText !== '') {
      // Check if the selected text is already formatted, and remove the formatting if it matches the provided enclosure
      if (selectedText.startsWith(startEnclosure) && selectedText.endsWith(endEnclosure)) {
        textarea.value =
          content.substring(0, startPos) +
          selectedText.substring(startEnclosure.length, selectedText.length - endEnclosure.length) +
          content.substring(endPos);
        // Update the cursor position to be at the start of the removed formatting
        textarea.setSelectionRange(startPos, startPos + selectedText.length - startEnclosure.length - endEnclosure.length);
      } else {
        // Format the selected text with the provided enclosure
        textarea.value =
          content.substring(0, startPos) +
          startEnclosure + selectedText + endEnclosure +
          content.substring(endPos);
        // Update the cursor position to be after the inserted formatting
        var newCursorPosition = startPos + startEnclosure.length + selectedText.length + endEnclosure.length;
        textarea.setSelectionRange(newCursorPosition, newCursorPosition);
      }
    } else {
      // Insert the combined enclosure at the current cursor position
      textarea.value = content.substring(0, startPos) + startEnclosure + endEnclosure + content.substring(endPos);
      // Update the cursor position to be after the inserted text
      var newCursorPosition = startPos + startEnclosure.length;
      textarea.setSelectionRange(newCursorPosition, newCursorPosition);
    }
  }
