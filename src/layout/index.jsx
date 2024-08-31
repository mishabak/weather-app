import propTypes from "prop-types";
import CustomAnimate from "../components/common/CustomAnimate";
import { customHooks_ } from "../hooks";
import Footer from "./footer";
import Header from "./header";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { weatherSelector } from "../features/weather/slice";
function Layout({ children }) {
  const { fadeVariant } = customHooks_.useTransition();
  const theme = useSelector(weatherSelector.theme);
  return (
    <main className={`theme-${theme}`}>
      <Header />
      <AnimatePresence>
        <CustomAnimate variant={fadeVariant}>{children}</CustomAnimate>
      </AnimatePresence>
      <Footer />
      <style>{`
        body{
          background:var(--theme-${theme});
        }
        `}</style>
    </main>
  );
}

Layout.propTypes = {
  children: propTypes.node,
};

export default Layout;
