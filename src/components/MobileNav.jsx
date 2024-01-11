import { AnimatePresence, motion } from "framer-motion";

const MobileNav = ({ mobileNav }) => {
  return (
    <AnimatePresence>
      {mobileNav && (
        <motion.ul
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 1, 1] }}
          exit={{ scaleY: 0, opacity: 0 }}
          className="absolute top-0 origin-top right-0 flex flex-col items-center justify-center w-full h-full z-10 bg-white dark:bg-gray-900 text-gray-400 text-4xl font-bold gap-10 sm:gap-12"
        >
          <li>
            <a href="#home" className="hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-white">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </li>
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
