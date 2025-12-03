import axios from "axios";

const BASE_URL = "https://api.github.com/users";

/**
 * Fetch GitHub user data bel username
 * @param {string} username - GitHub username to search
 * @returns {Promise<Object>} - GitHub user data
 */
export const fetchUserData = async (username) => {
  const response = await axios.get(`${BASE_URL}/${username}`);
  return response.data;
};
