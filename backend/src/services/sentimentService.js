import axios from "axios";

export const analyzeSentiment =
  async (text) => {
    try {
      const response =
        await axios.post(
          process.env
            .SENTIMENT_API_URL,
          {
            text
          }
        );

      return response.data;
    } catch (error) {
      return {
        sentiment: "neutral"
      };
    }
  };
