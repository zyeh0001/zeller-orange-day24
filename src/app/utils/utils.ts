export const normalizeText = (text: string) => {
  return text
    .replace(/\s+/g, " ") // Normalize spaces and newlines
    .replace(/[’]/g, "'") // Replace curly quotes
    .trim();
};

export const replaceSelectedTextInDOM = (newText: string) => {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return;

  const range = selection.getRangeAt(0);
  const selectedContainer = range.commonAncestorContainer;
  const parentElement =
    selectedContainer.nodeType === Node.TEXT_NODE
      ? selectedContainer.parentNode
      : selectedContainer;
  const styledElement = (parentElement as HTMLElement).cloneNode(
    false
  ) as HTMLElement;
  styledElement.textContent = newText;
  // Remove the currently selected text
  range.deleteContents();
  range.insertNode(styledElement);
  selection.removeAllRanges();
};
