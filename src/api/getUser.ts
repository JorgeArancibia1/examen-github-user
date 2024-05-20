import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
});