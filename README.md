# Markdown-Edit

A modern, responsive, and user-friendly Markdown editor designed for rapid conversion of plain text into Markdown—just highlight and click!

> **Highlight, click, and watch your plain text become Markdown!**

---
![Screenshot_2025-07-03_12-59-46](https://github.com/user-attachments/assets/e5fa5140-4a46-483f-9293-96d5fc2ff1fd)
---
## ✨ Features

- **Highlight-to-Markdown:**  
  Select plain text and instantly convert it to Markdown formatting—no memorization needed.
- **CSV to Table:**  
  Highlight CSV-style rows (e.g. `,Name,Age,City,`) and convert to a Markdown table with one click.
- **Toolbar Actions:**  
  - **Bold, Italic, Strikethrough**: Format selected text with standard Markdown.
  - **Code Block**: Highlight multiple lines and wrap them in triple backticks (\`\`\`).
  - **One-liner/Inline Code**: Use terminal or code icons for indented code or inline backticks.
  - **Blockquote**: Indent selected lines for Markdown quotes.
  - **Lists**: Quickly insert ordered and unordered list items.
  - **Table**: Insert a Markdown table template or convert CSV.
  - **Hyperlink**:  
    - If selection contains `http`, wraps as `[Link Text](http...)` and places cursor for anchor text.  
    - Otherwise, wraps as `[selected]( )` and places cursor in parentheses for the URL.
  - **Horizontal Rule (HR):** Inserts `---` on a new line.
- **Import/Export**:  
  Import `.md` files or export your Markdown with a single click.
- **Copy to Clipboard**:  
  Copy your Markdown to the clipboard with visual feedback.
- **Clear Workspace**:  
  Instantly clear your editor.
- **Modern, dark-themed UI**:  
  Responsive, mobile-friendly design with neumorphism effects and beautiful icons.

---

## 🚀 Getting Started

1. **Download or clone** this repository.
2. **Open `index.html` in your browser**—no build step or dependencies required!

---

## 🖥️ Usage

- **Write** your Markdown or plain text in the editor area.
- **Highlight** text and use the toolbar for:
  - Formatting (bold, italic, strike, code, quote, etc.)
  - Creating tables from CSV
  - Inserting hyperlinks and lists
  - Adding horizontal rules or inline code
- **Import**: Load a `.md` file into the editor.
- **Export**: Download your Markdown as a file.
- **Copy**: Copy the editor content to your clipboard with one click.
- **Clear**: Start fresh by clearing the editor.

---

## 🛠️ Customization

- Style and font can be customized via the `<style>` block in `index.html` or by replacing the Tailwind CDN link.
- The editor is easily extensible for new Markdown features or integrations.

---

## 📦 Project Structure

```
index.html    # Main app file (all logic, UI, and styles here)
```

---

## 📲 Mobile Support

- The layout adapts to phones and tablets.
- Toolbar and icons remain usable on small screens.

---

Enjoy Markdown-Edit!  
Feel free to submit suggestions or improvements via pull requests.
