import analyzeSentiment from "../services/sentimentAnalyzer.js";

export const analyzeText = async (
  req,
  res,
  next
) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({
        success: false,
        message: "Text is required"
      });
    }

    const result =
      analyzeSentiment(text);

    return res.status(200).json(
      result
    );
  } catch (error) {
    next(error);
  }
};

export default {
  analyzeText
};
