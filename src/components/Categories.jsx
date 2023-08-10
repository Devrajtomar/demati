import { useSnapshot } from "valtio";
import { Category } from ".";
import { data, navbar } from "../states/states";

const Categories = ({ containerStyle }) => {
  useSnapshot(navbar);
  const setCategory = (name) => (navbar.selectedCategory = name);
  const setSidebar = () => (navbar.isOpen = false);
  const categories = data.categories;
  if (categories.length === 0) {
    return (
      <div className={`${containerStyle} gap-2`}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <div
            key={i}
            className="loading min-w-[200px] rounded-md max-w-full  h-8"
          />
        ))}
      </div>
    );
  }
  return (
    <div className={`${containerStyle}`}>
      <div
        className={`menu_item justify-between ${
          navbar.selectedCategory === "All" && "selectedCategory"
        }`}
        onClick={() => {
          setCategory("All");
          setSidebar();
        }}
      >
        <pre>All</pre>
      </div>
      {categories.map((category) => (
        <Category
          key={category}
          //ID={category.categoryId}
          defaultvalue={category}
          //options={category.children}
        />
      ))}
    </div>
  );
};

export default Categories;
