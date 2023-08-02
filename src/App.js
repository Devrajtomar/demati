import { useSnapshot } from "valtio";
import {
  Home,
  MoreProducts,
  Cart,
  Wishlist,
  Account,
  SearchResults,
} from "./pages";
import { data, navbar, functions } from "./states/states";
import { AiOutlineArrowLeft } from "react-icons/ai";
import FetchData from "./states/FetchData";
import { Navbar } from "./components";
const App = () => {
  useSnapshot(navbar);

  FetchData();
  console.log(data);

  if (data.products.length === 0 || data.categories.length === 0) {
    return (
      <div className="loading_">
        <div className="loading-spinner"></div>
      </div>
    );
  }
  return (
    <div className="App">
      {navbar.selectedTab !== "Home" &&
      navbar.selectedTab !== "SearchResults" ? (
        <div className="flex justify-between items-center fixed top-0 left-0 py-1 w-full pr-2">
          <div onClick={() => functions.setHome()} className="back_btn">
            <AiOutlineArrowLeft />
            &nbsp; {navbar.selectedTab}
          </div>
          <div
            className="bg-black bg-opacity-75 text-white text-lg font-serif font-semibold hover:bg-opacity-100 px-2 py-1 rounded-md cursor-pointer"
            onClick={() => functions.setHome()}
          >
            GO BACK
          </div>
        </div>
      ) : (
        <Navbar />
      )}

      {navbar.selectedTab === "Home" && <Home />}
      {navbar.selectedTab === "SearchResults" && <SearchResults />}
      {navbar.selectedTab === "Products" && <MoreProducts />}
      {navbar.selectedTab === "Cart" && <Cart />}
      {navbar.selectedTab === "Wishlist" && <Wishlist />}
      {navbar.selectedTab === "Account" && <Account isLog={false} />}
    </div>
  );
};

export default App;
