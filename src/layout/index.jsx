import CustomAnimate from "../components/common/CustomAnimate";
import { customHooks_ } from "../hooks";
import Footer from "./footer";
import Header from "./Header";
import { AnimatePresence } from "framer-motion";
function Layout({ children }) {
  const { key, fadeVariant } = customHooks_.useTransition();
  return (
    <main>
      <Header />
      <AnimatePresence key={key}>
        <CustomAnimate variant={fadeVariant}>{children}</CustomAnimate>
      </AnimatePresence>
      <Footer />
    </main>
  );
}

export default Layout;
