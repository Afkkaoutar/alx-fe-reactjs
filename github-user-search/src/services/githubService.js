import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";

/**
 * Fetch GitHub users based on query, location, and minimum repos
 * @param {string} username - GitHub username to search
 * @param {string} location - Optional location filter
 * @param {number} minRepos - Optional minimum repository count
 * @returns {Promise<Object>} - Search results
 */
export const fetchUsersAdvanced = async (username, location = "", minRepos = 0) => {
  if (!username) throw new Error("Username is required");

  let query = `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos > 0) query += ` repos:>=${minRepos}`;

  const response = await axios.get(BASE_URL, {
    params: { q: query },
  });

  return response.data.items; // returns del array dyal users
};
