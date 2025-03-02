import Header from "../components/Header";
import Footer from "../components/Footer";
import Search from "./Search";
function Container() {
  return (
    <div className="container">
      <Header />
      <br />
      <Search />
      <br />
      <Footer />
    </div>
  );
}

export default Container;
