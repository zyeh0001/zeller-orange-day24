"use client";

import { useState, useEffect } from "react";

type Position = {
  x: number;
  y: number;
};

export default function useTextSelectionToolbar() {
  const [selectedText, setSelectedText] = useState<string>("");
  const [showToolbar, setShowToolbar] = useState<boolean>(false);
  const [toolbarPosition, setToolbarPosition] = useState<Position>({
    x: 0,
    y: 0,
  });
  const [translatedText, setTranslatedText] = useState<string>("");
  const [summarizedText, setSummarizedText] = useState<string>("");

  useEffect(() => {
    const handleMouseUp = () => {
      const selection = window.getSelection();
      if (selection && selection.toString().trim() !== "") {
        const text = selection.toString().trim();
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();

        setSelectedText(text);
        setToolbarPosition({
          x: rect.x + window.scrollX + rect.width / 2,
          y: rect.y + window.scrollY - 40,
        });
        setShowToolbar(true);
      } else {
        setShowToolbar(false);
      }
    };

    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const translateText = async () => {
    //Calling translation API
    const translationAPI = window.translation;
    if (!translationAPI || !("createDetector" in translationAPI)) {
      alert("Translation API not supported.");
      return;
    }

    try {
      // Detector to detect language type of selected text, to get the source language
      const detector = await translationAPI.createDetector();
      const detectionResult = await detector.detect(selectedText);
      const sourceLanguage = detectionResult[0].detectedLanguage;

      // Translate to Japanese (ja)
      const targetLanguage = "ja";
      const translator = await translationAPI.createTranslator({
        sourceLanguage,
        targetLanguage,
      });
      const result = await translator.translate(selectedText);
      console.log({ translationResult: result });
      setTranslatedText(result);
      return result;
    } catch (err) {
      console.error("Translation error:", err);
      setTranslatedText("Error translating text.");
      return "Error translating text.";
    }
  };

  const summarizeText = async (): Promise<string> => {
    try {
      const aiAPI = window.ai;
      // check if API is available
      if (!aiAPI?.summarizer) {
        alert("This device does not support AI Summarization.");
        return "Summarization not supported";
      }
      // set up summary text format
      const sharedContext = "This is a paragraph";
      const type = "tl;dr";
      const format = "plain-text";
      const length = "short";
      const summarizer = await aiAPI.summarizer.create({
        sharedContext,
        type,
        format,
        length,
      });

      const summary = await summarizer.summarize(selectedText);

      setSummarizedText(summary);
      console.log({ summaryResult: summary });
      return summary;
    } catch (err) {
      console.error("Summarization error:", err);
      setSummarizedText("Error summarizing text.");
      return "Error summarizing text.";
    }
  };
  const clearResults = () => {
    setShowToolbar(false);
    setTranslatedText("");
    setSummarizedText("");
  };

  return {
    selectedText,
    showToolbar,
    toolbarPosition,
    translatedText,
    summarizedText,
    translateText,
    summarizeText,
    clearResults,
  };
}
