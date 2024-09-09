import CustomAnimate from "../components/common/CustomAnimate";
import { weatherSelector } from "../features/weather/slice";
import { Icon_cloud } from "../components/icons";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { customHooks_ } from "../hooks";
import { Climate } from "../components";
import propTypes from "prop-types";
import Footer from "./footer";
import Header from "./header";
function Layout({ children }) {
  const { fadeVariant } = customHooks_.useTransition();
  const theme = useSelector(weatherSelector.theme);
  return (
    <main className={`theme-${theme} relative top-0`}>
      <Icon_cloud themeId={theme} />
      <Climate />
      <Header />
      <AnimatePresence>
        <CustomAnimate className="relative z-[2]" variant={fadeVariant}>
          {children}
        </CustomAnimate>
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
