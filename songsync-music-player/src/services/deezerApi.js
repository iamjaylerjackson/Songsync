export const searchSongs = async (query = "pop") => {
  try {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`,
    );

    const data = await response.json();

    return data.data.slice(0, 12);
  } catch (error) {
    console.error("Error fetching songs:", error);
    return [];
  }
};
