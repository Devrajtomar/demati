import { Categories, Logo, Menu, Searchbar, Sidebar } from "..";
import "../../styles/navbar.css";
import { navbar } from "../../states/states";
const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <Logo />
        <Searchbar />
        <Sidebar />
        <Menu perentStyle="max-w-[800px] hidden lg:flex " />
      </div>
      <div className="Categories">
        {navbar.selectedTab === "Home" && (
          <Categories containerStyle="flex justify-start items-center text-lg overflow-x-scroll gap-2" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
