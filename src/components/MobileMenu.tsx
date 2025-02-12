import { INavbarProps } from "../types";

const MobileMenu = (props: INavbarProps) => {
  const { menuOpen, setMenuOpen } = props;
  function handleMenuClose() {
    setMenuOpen((prev: boolean) => !prev);
  }

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
        menuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      <button
        className="absolute top-4 right-7 text-white focus:outline-none text-3xl cursor-pointer"
        onClick={handleMenuClose}
      >
        &times;
      </button>

      <a
        href="#home"
        className={`mobile-nav-link ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
        onClick={handleMenuClose}
      >
        Home
      </a>
      <a
        href="#about"
        className={`mobile-nav-link ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
        onClick={handleMenuClose}
      >
        About
      </a>
      <a
        href="#projects"
        className={`mobile-nav-link ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
        onClick={handleMenuClose}
      >
        Projects
      </a>
      <a
        href="#contact"
        className={`mobile-nav-link ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
        onClick={handleMenuClose}
      >
        Contact
      </a>
    </div>
  );
};

export default MobileMenu;
