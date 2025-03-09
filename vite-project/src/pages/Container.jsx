import Header from "../components/Header";
import Footer from "../components/Footer";
import Search from "./Search";
import RecipeBox from "./RecipeBox";
function Container() {
  return (
    <div className="container">
      <Header />
      <br />
      <RecipeBox></RecipeBox>
      <br />
      <Footer />
    </div>
  );
}

export default Container;
