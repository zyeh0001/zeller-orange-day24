"use client";

import React from "react";
import Image from "next/image";

export default function ChromeDevToolsAIAssistance() {
  return (
    <section className="p-6 dark:bg-gray-600 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg leading-relaxed text-gray-800 dark:text-gray-200 flex-row w-full">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-orange-500 text-center animate-breath">
        DevTools AI Assistance
      </h1>

      {/* What's New */}
      <details className="mb-4">
        <summary className="cursor-pointer text-xl font-semibold text-orange-500 hover:underline">
          ✨ What's New?
        </summary>
        <div className="mt-2 pl-4 space-y-2">
          <p>Google Chrome DevTools now includes AI-driven assistance.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Offers <strong>console insights</strong> to help understand and
              resolve errors.
            </li>
            <li>
              Provides <strong>AI assistance</strong> to interpret CSS styles,
              network requests, and performance data in real-time.
            </li>
          </ul>
          <p>
            By leveraging generative AI, Chrome DevTools aims to streamline
            debugging and performance optimization with minimal manual overhead.
          </p>
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
              <li>Speeds up styling and debugging.</li>
              <li>Helps understand complex issues without switching tools.</li>
              <li>Provides quick suggestions and code samples.</li>
            </ul>
          </div>
          {/* Cons */}
          <div>
            <h3 className="text-lg font-bold text-red-600">⚠️ Cons</h3>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>May provide inaccurate or offensive info.</li>
              <li>
                Data is sent to Google for improvement; avoid sensitive info.
              </li>
              <li>
                Retention policies and human review may concern privacy-minded
                users.
              </li>
            </ul>
          </div>
        </div>
      </details>

      {/* How to Use */}
      <details className="mb-4">
        <summary className="cursor-pointer text-xl font-semibold text-orange-500 hover:underline">
          🔧 How to Use
        </summary>
        <div className="mt-2 mb-2 pl-4 space-y-2">
          <Image
            src="/aiAssistantHow.png"
            alt="AI Assistant in Chrome DevTools"
            width={680}
            height={150}
          />
        </div>
      </details>
    </section>
  );
}
