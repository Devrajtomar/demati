import {
  AiOutlineArrowRight,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";
import { Categories, Menu } from "..";
import { navbar } from "../../states/states";
import { useSnapshot } from "valtio";

const Sidebar = () => {
  const state = useSnapshot(navbar);
  const handleClick = () => {
    if (navbar.isOpen === false) {
      return (navbar.isOpen = true);
    }
    return (navbar.isOpen = false);
  };
  return (
    <div className="block lg:hidden">
      {state.isOpen ? (
        <div>
          <div className="icon" onClick={handleClick}>
            <AiOutlineMenu />
          </div>
          <div className="sidebar">
            <div className="icon self-end " onClick={handleClick}>
              <AiOutlineClose />
            </div>
            <div>
              <Menu perentStyle="flex-col" />
              <hr />
              <h3 className="heading_2">
                <AiOutlineArrowRight />
                Categories
              </h3>
              <Categories containerStyle="flex flex-col " />
              <hr />
            </div>
          </div>
        </div>
      ) : (
        <div className="icon" onClick={handleClick}>
          <AiOutlineMenu />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
