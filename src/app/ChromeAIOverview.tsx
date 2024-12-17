"use client";

import React from "react";

export default function ChromeAIOverview() {
  return (
    <section className="p-6 dark:bg-gray-600 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg leading-relaxed text-gray-800 dark:text-gray-200 flex-row w-full">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-orange-500 text-center animate-breath">
        Chrome Built-in AI APIs Overview
      </h1>

      {/* Provided APIs */}
      <details className="mb-4">
        <summary className="cursor-pointer text-xl font-semibold text-orange-500 hover:underline">
          📦 Provided APIs
        </summary>
        <div className="mt-2 pl-4">
          <div>
            {" "}
            <a
              href="https://developer.chrome.com/docs/ai/built-in-apis"
              className="text-blue-500 hover:underline"
            >
              Four
            </a>{" "}
            APIs are provided.
          </div>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Translator API:</strong> Detects the text's language and
              translates it to a target language.
            </li>
            <li>
              <strong>Language detection API:</strong> <br />
              Detect the language of a given text, usually use this before
              translation.
            </li>
            <li>
              <strong>Summarize API:</strong> <br />
              Turn lengthy articles, complex documents, or even lively chat
              conversations into concise and insightful summaries.
            </li>
            <li>
              <strong>The Prompt API:</strong> Build Chrome Extensions that use
              Gemini Nano
            </li>
          </ul>
        </div>
      </details>

      {/* Pros and Cons */}
      <details className="mb-4">
        <summary className="cursor-pointer text-xl font-semibold text-orange-500 hover:underline">
          ✅ Pros & ⚠️ Cons
        </summary>
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pros */}
          <div>
            <h3 className="text-lg font-bold text-green-600">✅ Pros</h3>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>
                Runs locally in the browser, ensuring privacy and low latency.
              </li>
              <li>Faster real-time responses with no backend required.</li>
              <li>Improves accessibility for global users.</li>
            </ul>
          </div>
          {/* Cons */}
          <div>
            <h3 className="text-lg font-bold text-red-600">⚠️ Cons</h3>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Requires Origin Trial registration.</li>
              <li>Currently works only in Chrome Canary.</li>
              <li>Limited functionality compared to server-side AI models.</li>
            </ul>
          </div>
        </div>
      </details>

      {/* Use Cases */}
      <details className="mb-4">
        <summary className="cursor-pointer text-xl font-semibold text-orange-500 hover:underline">
          🚀 Use Cases
        </summary>
        <div className="mt-2 pl-4">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Text Translation:</strong> Real-time translation of user
              selected content.
            </li>
            <li>
              <strong>Text Summarization:</strong> Condense long documents into
              summaries for quick reading.
            </li>
            <li>
              <strong>Content Editing Tools:</strong> Integrate translations and
              summaries directly into a text editor.
            </li>
            <li>
              <strong>Educational Tools:</strong> Help learners access
              simplified or translated versions of content.
            </li>
          </ul>
        </div>
      </details>
      {/* How to Set Up */}
      <details className="mb-4">
        <summary className="cursor-pointer text-xl font-semibold text-orange-500 hover:underline">
          🔧 How to Set Up
        </summary>
        <div className="mt-2 pl-4">
          <ol className="list-decimal list-inside space-y-2">
            <li>
              <strong>Get the Trial Token:</strong> Register for an{" "}
              <a
                href="https://developer.chrome.com/origintrials/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Origin Trial
              </a>
              to receive your token.
            </li>
            <li>
              <strong>Append the Token:</strong> Add the token to your app via:
              <ul className="list-disc list-inside pl-4 mt-1">
                <li>
                  **HTML**: Use a meta tag:
                  <code className="block bg-gray-200 dark:bg-gray-700 rounded p-1 my-1">
                    {'<meta http-equiv="origin-trial" content="YOUR_TOKEN" />'}
                  </code>
                </li>
                <li>
                  **HTTP Header**: Include in the response headers:
                  <code className="block bg-gray-200 dark:bg-gray-700 rounded p-1 my-1">
                    {"Origin-Trial: YOUR_TOKEN"}
                  </code>
                </li>
              </ul>
            </li>
            <li>
              <strong>Use the APIs:</strong> Access APIs like `createDetector`
              and `createTranslator` to implement AI features.
            </li>
          </ol>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Note: This is currently supported only in **Canary Chrome**.
          </p>
        </div>
      </details>

      {/* Summary */}
      <details className="mb-4">
        <summary className="cursor-pointer text-xl font-semibold text-orange-500 hover:underline">
          💡 Summary
        </summary>
        <div className="mt-2 pl-4">
          <p>
            Combining these APIs allows developers to build tools that cater to
            global audiences and diverse needs. With no backend server needed,
            it’s easier to deploy prototypes and deliver a seamless user
            experience.
          </p>
        </div>
      </details>

      {/* Further Reading */}
      <details>
        <summary className="cursor-pointer text-xl font-semibold text-orange-500 hover:underline">
          📚 Further Reading
        </summary>
        <div className="mt-2 pl-4">
          <p>
            Check the official Chrome Built-in AI documentation here:{" "}
            <a
              href="https://developer.chrome.com/docs/ai/built-in-apis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Chrome Built-in AI APIs
            </a>
          </p>
        </div>
      </details>
    </section>
  );
}
