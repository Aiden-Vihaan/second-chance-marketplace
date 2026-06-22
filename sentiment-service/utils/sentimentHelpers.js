export const classifySentiment = (
  score
) => {
  if (score > 0) {
    return "positive";
  }

  if (score < 0) {
    return "negative";
  }

  return "neutral";
};

export const buildSentimentResponse = (
  text,
  score,
  sentiment
) => {
  return {
    success: true,
    text,
    score,
    sentiment,
    analyzedAt:
      new Date().toISOString()
  };
};

export const sanitizeText = (
  text
) => {
  return text
    ?.trim()
    .replace(/\s+/g, " ");
};
