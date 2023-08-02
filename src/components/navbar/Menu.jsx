import menuItems from "../../constants/menuItems";
import { navbar } from "../../states/states";
import { useSnapshot } from "valtio";

const Menu = ({ perentStyle }) => {
  useSnapshot(navbar);

  const setTab = (name) => {
    navbar.selectedTab = name;
    navbar.isOpen = false;
  };

  return (
    <div className={`menu ${perentStyle}`}>
      {menuItems.map((item) => (
        <div
          key={item.name}
          onClick={() => setTab(item.name)}
          className={`menu_item ${
            navbar.selectedTab === item.name && "bg-white text-black"
          }`}
        >
          {item.icon}
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Menu;
