import Header from "../shared/components/header/Header";
import Hero from "../components/heroSection/Hero";

const Homepage = () => {
  return (
    <main className="min-h-screen bg-mine-shaft-950 text-white font-['Poppins',sans-serif]">
      <Header />
      <Hero />
    </main>
  );
};

export default Homepage;
