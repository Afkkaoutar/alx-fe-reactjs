import Header from "./components/Header";
import MainContent from "./components/MainContent";
import UserProfile from "./components/UserProfile";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <MainContent />

      <UserProfile
        name="John Doe"
        age={25}
        bio="A traveler who loves exploring new cities."
      />

      <Footer />
    </>
  );
}

export default App;
