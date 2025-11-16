import Header from "./components/Header";
import MainContent from "./components/MainContent";
import UserProfile from "./components/UserProfile";
import Footer from "./components/Footer";
import Counter from "./components/Counter";
import ProfilePage from "./ProfilePage";
import UserContext from "./UserContext";

function App() {
  const userData = {
    name: "John Doe",
    age: 25,
    bio: "A traveler who loves exploring new cities.",
    email: "jane.doe@example.com"
  };

  return (
    <UserContext.Provider value={userData}>
      <Header />
      <MainContent />
      <UserProfile />
      <Counter />
      <ProfilePage />
      <Footer />
    </UserContext.Provider>
  );
}

export default App;
