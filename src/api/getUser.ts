import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    "Content-Type": "application/json",
    // "User-Agent": "examen-github-user",
    // Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
    Authorization: `Bearer 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`,
  },
});