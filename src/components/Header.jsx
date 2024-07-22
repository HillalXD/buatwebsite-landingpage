import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";

const Header = () => {
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 bg-n-8/90  text-center`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 mb-5 mt-5 sm:mt-2 sm:mb-2 lg:mt-5 lg:mb-5 align-middle">
        <a className="xl:mr-8 text-center h5" href="#hero">
          Create website
        </a>
      </div>
    </div>
  );
};

export default Header;
