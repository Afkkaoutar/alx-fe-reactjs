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
      const data = await fetchUserData(username.trim());
      setUser(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded flex-1"
        />
        <button type="submit" className="p-2 bg-black text-white rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Looks like we cant find the user</p>}

      {user && (
        <div className="mt-4 border p-4 rounded shadow-md">
          <img
            src={user.avatar_url}
            width={100}
            alt="avatar"
            className="rounded-full"
          />
          <h2 className="text-xl font-bold">{user.name || "No name available"}</h2>
          <p data-testid="login" className="text-gray-600">@{user.login}</p>
          <a
            href={user.html_url}
            target="_blank"
            className="text-blue-500 underline"
          >
            Visit GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
