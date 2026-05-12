import Benefits from "./components/benefits";
import Hero from "./components/hero";
import Stats from "./components/stats";

function App() {
  return (
    <>
      <Hero />
      <section className="bg-[#F8F8F8]">
        <Stats />
      </section>
      <Benefits />
    </>
  );
}

export default App;
