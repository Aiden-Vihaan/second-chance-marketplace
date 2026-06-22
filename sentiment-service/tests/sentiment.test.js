import {
  analyzeSentiment
} from "../services/sentimentAnalyzer.js";

describe(
  "Sentiment Analyzer",
  () => {
    test(
      "should detect positive sentiment",
      () => {
        const result =
          analyzeSentiment(
            "This product is amazing"
          );

        expect(
          result.sentiment
        ).toBe("positive");
      }
    );

    test(
      "should detect negative sentiment",
      () => {
        const result =
          analyzeSentiment(
            "This product is terrible"
          );

        expect(
          result.sentiment
        ).toBe("negative");
      }
    );

    test(
      "should return a valid score",
      () => {
        const result =
          analyzeSentiment(
            "Good quality item"
          );

        expect(
          typeof result.score
        ).toBe("number");
      }
    );

    test(
      "should sanitize input text",
      () => {
        const result =
          analyzeSentiment(
            "   Great    product   "
          );

        expect(
          result.text
        ).toBe(
          "Great product"
        );
      }
    );
  }
);
