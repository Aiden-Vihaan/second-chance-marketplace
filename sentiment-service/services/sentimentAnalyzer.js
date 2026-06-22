import Sentiment from "sentiment";

import {
  classifySentiment,
  buildSentimentResponse,
  sanitizeText
} from "../utils/sentimentHelpers.js";

const sentiment = new Sentiment();

export const analyzeSentiment = (
  text
) => {
  const cleanedText =
    sanitizeText(text);

  const result =
    sentiment.analyze(
      cleanedText
    );

  const sentimentLabel =
    classifySentiment(
      result.score
    );

  return buildSentimentResponse(
    cleanedText,
    result.score,
    sentimentLabel
  );
};

export default analyzeSentiment;
