import Benefits from "./components/benefits";
import Hero from "./components/hero";
import Stats from "./components/stats";

function App() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <section className="bg-[#F8F8F8]">
        <Stats />
      </section>
      <Benefits />
    </main>
  );
}

export default App;
