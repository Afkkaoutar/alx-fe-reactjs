import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError(true);
    }

    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="border p-2 rounded"
          type="text"
          value={username}
          placeholder="Enter GitHub username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className="p-2 bg-black text-white ml-2 rounded" type="submit">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Looks like we cant find the user</p>}

      {user && (
        <div className="mt-4">
          <img src={user.avatar_url} width={100} alt="avatar" />
          <h2>{user.name || "No name available"}</h2>
          <a
            className="text-blue-500 underline"
            href={user.html_url}
            target="_blank"
          >
            Visit GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
