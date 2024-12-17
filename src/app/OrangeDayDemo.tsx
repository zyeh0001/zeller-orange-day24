"use client";

import Image from "next/image";
import { useState } from "react";
import useTextSelectionToolbar from "./hooks/useTextSelectionToolbar";
import { normalizeText, replaceSelectedTextInDOM } from "./utils/utils";
import ChromeAIOverview from "./ChromeAIOverview";

export default function OrangeDayDemo() {
  const [articleText, setArticleText] = useState(
    "Orange Day is the Engineering team’s full day dedicated to learning, growth and experimentation. One where we take time out from our normal allocated duties and choose something to learn about or dive deeply into. It is a day about you, as an Engineer, learning and growing. \nThis year - our fourth annual Zeller Orange Day - we’d love you to zone in on one of three particular areas for your day. What you do and how you approach it within these subjects is totally up to you, and there will be some ideas shared that might help trigger the thought process. As always the goal of the day is to learn something! It’s time to get in and learn more about something in these particular areas, looking further into the specifics, or experimenting with tech or tools that might help in these areas. As always, we want to keep the type of activity focussed on learning, growth and experimenting!"
  );

  const {
    showToolbar,
    toolbarPosition,
    translateText,
    summarizeText,
    clearResults,
    selectedText,
  } = useTextSelectionToolbar();

  const handleReplaceText = (newText: string) => {
    console.log("handleReplaceText");
    if (!selectedText) return;

    setArticleText((prev) => {
      const normalizedArticleText = normalizeText(prev);
      const normalizedSelectedText = normalizeText(selectedText);

      const startIndex = normalizedArticleText.indexOf(normalizedSelectedText);

      // If the selected text isn't found, do nothing
      if (startIndex === -1) {
        console.warn("Selected text not found after normalization.");
        return prev;
      }

      // Replace the exact text
      const beforeText = prev.substring(0, startIndex);
      const afterText = prev.substring(startIndex + selectedText.length);

      const updatedText = beforeText + newText + afterText;

      console.log("Updated Text:", updatedText);
      return updatedText;
    });

    clearResults();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold  text-[#F15E31]">What is Orange day</h1>
      <p className="text-base leading-relaxed">{articleText}</p>

      {showToolbar && (
        <div
          className="absolute z-50 bg-[#F15E31] text-white p-2 rounded-md flex gap-2 items-center shadow-md transform -translate-y-full translate-x-full"
          style={{
            left: `${toolbarPosition.x}px`,
            top: `${toolbarPosition.y}px`,
          }}
        >
          <button
            onClick={async () => {
              clearResults();
              const result = await translateText();
              if (!result) {
                alert("Failed to translate text. Please try again.");
                return;
              }
              replaceSelectedTextInDOM(result);
              //   handleReplaceText(result);
            }}
            className="bg-transparent border-none cursor-pointer"
            title="Translate"
          >
            <img
              color="black"
              src="/translate-icon.svg"
              alt="Translate"
              width="20"
              height="20"
            />
          </button>

          <button
            onClick={async () => {
              clearResults();
              const result = await summarizeText();
              if (!result) {
                alert("Failed to summarize text. Please try again.");
                return;
              }
              replaceSelectedTextInDOM(result);
              //   handleReplaceText(result);
            }}
            className="bg-transparent border-none cursor-pointer"
            title="Summarize"
          >
            <img
              src="/summary-icon.svg"
              alt="Summarize"
              width="20"
              height="20"
            />
          </button>
        </div>
      )}
    </div>
  );
}
