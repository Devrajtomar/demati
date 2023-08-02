import "../styles/footer.css";
import { Logo, Searchbar } from ".";
import { data } from "../states/states";
const Footer = () => {
  return (
    <div className="footer">
      <Searchbar />
      <form className="footer_contactForm">
        <div className="heading_1 text-zinc-700">Contact Us</div>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <input type="number" placeholder="Your Contact No" />
        <input type="text" placeholder="Your Query" className="h-[300px]" />
        <button>Submit</button>
      </form>
      <div className="footer_Links">
        {data.footerLinks.map((link) => {
          const title = link.content.title;
          const links = link.children;
          if (data.footerLinks.length === 0) {
            return "loading...";
          }
          return (
            <div key={link.id}>
              <div className="font-normal text-gray-300 ">{title}</div>
              {links.map((link) => {
                const name = link.content.title;
                return (
                  <div
                    key={link.id}
                    className="hover:text-blue-300 cursor-pointer"
                  >
                    {name}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="footer_bottom">
        <div className="footer_copyright self-start">
          ©2023 All rights reserved <br className="md:hidden" />| Designed by
          Dev
        </div>
        <div className="self-center flex gap-3 flex-wrap">
          <div className="hover:text-blue-300 cursor-pointer">
            Shipping Policy
          </div>
          |<div className="hover:text-blue-300 cursor-pointer">Contact Us</div>|
          <div className="hover:text-blue-300 cursor-pointer">Wishlist</div>
        </div>
        <div className="self-end pb-4 px-2 invert">
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default Footer;
