import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  function handleNavClick(hash) {
    navigate("/");
    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  return (
    <nav className="sticky top-0 z-20 bg-[#fffaf2] border-b-2 border-[#f3a23c] px-8 py-4 flex items-center justify-between">
      <Link
        to="/"
        className="font-playfair font-bold text-[20px] text-[#d9542d]"
      >
        Sweet Crumb 🧁
      </Link>
      <ul className="flex items-center gap-8 list-none">
        <li>
          <Link
            to="/menu"
            className="font-inter text-[13px] font-medium text-[#6b5a45] hover:text-[#d9542d] transition-colors duration-150"
          >
            Menu
          </Link>
        </li>
        <li>
          <Link
            to="/gallery"
            className="font-inter text-[13px] font-medium text-[#6b5a45] hover:text-[#d9542d] transition-colors duration-150"
          >
            Gallery
          </Link>
        </li>
        <li>
          <button
            onClick={() => handleNavClick("#faq")}
            className="font-inter text-[13px] font-medium text-[#6b5a45] hover:text-[#d9542d] transition-colors duration-150"
          >
            FAQ
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavClick("#contact")}
            className="font-inter text-[13px] font-medium text-[#6b5a45] hover:text-[#d9542d] transition-colors duration-150"
          >
            Contact
          </button>
        </li>
      </ul>
      <button
        onClick={() => handleNavClick("#contact")}
        className="font-inter text-[13px] font-bold bg-[#d9542d] text-[#fffaf2] px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity duration-150"
      >
        Order now
      </button>
    </nav>
  );
}

export default Navbar;
