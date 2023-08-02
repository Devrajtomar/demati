import { Brands, Footer, Hero, Navbar, Products } from "../components";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="App">
        <Hero />
        <Brands />
        <h1 className="heading_1">Top Products For You</h1>
        <Products num={9} />
        <h1 className="heading_1">Top Brands</h1>
        <Footer />
      </div>
    </div>
  );
};
export default Home;
