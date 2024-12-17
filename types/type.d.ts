export {};

declare global {
  interface Window {
    translation?: TranslationAPI;
    ai?: {
      summarizer?: SummarizationAPI;
    };
  }
}

interface TranslationAPI {
  createDetector: () => Promise<LanguageDetector>;
  createTranslator: (options: TranslatorOptions) => Promise<Translator>;
}

interface LanguageDetector {
  detect: (text: string) => Promise<LanguageDetectionResult[]>;
}

interface LanguageDetectionResult {
  detectedLanguage: string;
  confidence: number;
}

interface TranslatorOptions {
  sourceLanguage: string;
  targetLanguage: string;
}

interface Translator {
  translate: (text: string) => Promise<string>;
}

interface SummarizationAPI {
  create: (options: SummarizerOptions) => Promise<Summarizer>;
}

interface SummarizerOptions {
  sharedContext: string;
  type: string;
  format: string;
  length: string;
}

interface Summarizer {
  summarize: (text: string) => Promise<string>;
  destroy: () => void;
}
