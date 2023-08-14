import { proxy } from "valtio";
export const navbar = proxy({
  isOpen: false,
  selectedTab: "Home",
  searchQuery: "",
  selectedCategory: "All",
  selectedCategoryID: 4209,
  subCategory: "New",
});

export const data = proxy({
  products: [],
  brands: [],
  categories: [],
  cartItems: [],
  wishlistItems: [],
  footerLinks: [],
});

export const pages = proxy({
  page: 1,
  NextPage: () => {
    if (pages.page >= 10) {
      pages.page = 1;
    } else {
      pages.page += 1;
    }
    return pages.page;
  },
  PrevPage: () => {
    if (pages.page === 1) {
      pages.page = 10;
    } else {
      pages.page -= 1;
    }
    return pages.page;
  },
});

export const productInfo = proxy({
  img: 1,
  setImg: (num) => {
    return (productInfo.img = num);
  },
  NextImg: (last) => {
    if (productInfo.img === last - 1) {
      productInfo.img = 1;
    } else {
      productInfo.img += 1;
    }
    return productInfo.img;
  },
  PrevImg: (last) => {
    if (productInfo.img === 1) {
      productInfo.img = last - 1;
    } else {
      productInfo.img -= 1;
    }
    return productInfo.img;
  },
});

export const functions = proxy({
  setHome: () => {
    navbar.selectedTab = "Home";
  },
  setTab: (name) => {
    navbar.selectedTab = name;
  },
});
