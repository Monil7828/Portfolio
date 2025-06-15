import { useState } from "react";
import { motion } from "framer-motion";

function Navigation({ isMobile = false }) {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <ul className={`flex ${isMobile ? "flex-col gap-6" : "flex-row gap-8"}`}>
      {links.map((link) => (
        <motion.li 
          key={link.name}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          <a 
            className={`font-medium transition-colors text-neutral-300 hover:text-white ${
              isMobile ? "text-lg" : "text-sm"
            }`}
            href={link.href}
          >
            {link.name}
            {!isMobile && (
              <motion.span 
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-pink-500"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            )}
          </a>
        </motion.li>
      ))}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header 
      className="fixed inset-x-0 top-0 z-50 w-full backdrop-blur-lg bg-gray-900/70 border-b border-gray-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-6 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="/"
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-purple-700 hover:from-purple-700 hover:to-amber-600"
            whileHover={{ scale: 1.05 }}
          >
            Monil
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md sm:hidden focus:outline-none"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="px-6 pt-2 pb-6 space-y-6 sm:hidden bg-gradient-to-b from-gray-900 to-gray-800"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Navigation isMobile />
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;