import { useState } from "react";
import { fetchUsersAdvanced } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUsers([]);

    try {
      const data = await fetchUsersAdvanced(username.trim(), location.trim(), Number(minRepos));
      setUsers(data);
      if (data.length === 0) setError(true);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 md:flex-row md:items-end">
        <div className="flex-1 flex flex-col">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="GitHub username"
            className="border p-2 rounded w-full"
          />
        </div>

        <div className="flex-1 flex flex-col">
          <label>Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location (optional)"
            className="border p-2 rounded w-full"
          />
        </div>

        <div className="flex-1 flex flex-col">
          <label>Min Repos</label>
          <input
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            placeholder="Minimum repos"
            className="border p-2 rounded w-full"
          />
        </div>

        <button type="submit" className="p-2 bg-black text-white rounded mt-2 md:mt-0">
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}
      {error && !loading && <p className="mt-4 text-red-500">No users found</p>}

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="border p-4 rounded shadow-md">
            <img src={user.avatar_url} alt="avatar" className="rounded-full w-24 h-24 mb-2" />
            <h2 className="text-xl font-bold">{user.login}</h2>
            <a href={user.html_url} target="_blank" className="text-blue-500 underline">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
