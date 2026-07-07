import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  function handleNavClick(hash) {
    setOpen(false);
    navigate("/");
    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  const links = [
    { label: "Menu", path: "/menu" },
    { label: "Gallery", path: "/gallery" },
    { label: "FAQ", hash: "#faq" },
    { label: "Contact", hash: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-20 bg-[#fffaf2] border-b-2 border-[#f3a23c] px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-playfair font-bold text-[20px] text-[#d9542d]"
        >
          Sweet Crumb 🧁
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {links.map(({ label, path, hash }) => (
            <li key={label}>
              {path ? (
                <Link
                  to={path}
                  className="font-inter text-[13px] font-medium text-[#6b5a45] hover:text-[#d9542d] transition-colors duration-150"
                >
                  {label}
                </Link>
              ) : (
                <button
                  onClick={() => handleNavClick(hash)}
                  className="font-inter text-[13px] font-medium text-[#6b5a45] hover:text-[#d9542d] transition-colors duration-150"
                >
                  {label}
                </button>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button
          onClick={() => handleNavClick("#contact")}
          className="hidden md:block font-inter text-[13px] font-bold bg-[#d9542d] text-[#fffaf2] px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity duration-150"
        >
          Order now
        </button>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-[1.5px] bg-[#d9542d] transition-all duration-200 ${
              open ? "rotate-45 translate-y-[6.5px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-[#d9542d] transition-all duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-[#d9542d] transition-all duration-200 ${
              open ? "-rotate-45 -translate-y-[6.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#f3a23c] mt-4 pt-5 flex flex-col gap-5">
          {links.map(({ label, path, hash }) => (
            <div key={label}>
              {path ? (
                <Link
                  to={path}
                  onClick={() => setOpen(false)}
                  className="font-inter text-[13px] font-medium text-[#6b5a45] hover:text-[#d9542d] transition-colors"
                >
                  {label}
                </Link>
              ) : (
                <button
                  onClick={() => handleNavClick(hash)}
                  className="font-inter text-[13px] font-medium text-[#6b5a45] hover:text-[#d9542d] transition-colors"
                >
                  {label}
                </button>
              )}
            </div>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            className="mt-1 self-start font-inter text-[13px] font-bold bg-[#d9542d] text-[#fffaf2] px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity duration-150"
          >
            Order now
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
