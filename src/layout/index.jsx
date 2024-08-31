import propTypes from "prop-types";
import CustomAnimate from "../components/common/CustomAnimate";
import { customHooks_ } from "../hooks";
import Footer from "./footer";
import Header from "./header";
import { AnimatePresence } from "framer-motion";
function Layout({ children }) {
  const { fadeVariant } = customHooks_.useTransition();
  return (
    <main>
      <Header />
      <AnimatePresence>
        <CustomAnimate variant={fadeVariant}>{children}</CustomAnimate>
      </AnimatePresence>
      <Footer />
    </main>
  );
}

Layout.propTypes = {
  children: propTypes.node,
};

export default Layout;
