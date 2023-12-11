import axios from "axios";

export const getArt = async () => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await axios.get(
      `https://api.artic.edu/api/v1/artworks/129884`,
      {
        headers,
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
