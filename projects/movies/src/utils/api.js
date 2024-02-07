import axios from "axios";

export const fetchDataFromApi = async (url, params) => {
  try {
    const response = await axios.get("https://api.themoviedb.org/3" + url, {
      params,
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmYwNTQ0Y2FhYTI0ZjM4NmMzNzJmYWJkZjQxYTc1OSIsInN1YiI6IjY1YWZkNDhjZDEwMGI2MDBlYjJiYmQyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0_Sihmqo40o8EyGt5xq1CvVf6b6v8SEmkvxin3YSYzw",
      },
    });
    return response.data;
  } catch (err) {
    // console.error(err);
    return err;
  }
};
