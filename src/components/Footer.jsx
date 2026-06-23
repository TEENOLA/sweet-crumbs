function Footer() {
  return (
    <footer className="bg-[#2b2118] px-8 md:px-16 lg:px-24 py-8 flex items-center justify-between">
      <span className="font-playfair font-bold text-[16px] text-[#fcecd6]">
        Sweet Crumb 🧁
      </span>
      <span className="font-inter text-[12px] text-[#a08c74]">
        © {new Date().getFullYear()} Sweet Crumb Bakery. All rights reserved.
      </span>
    </footer>
  );
}

export default Footer;
