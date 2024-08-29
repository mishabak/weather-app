import { Fragment } from "react";
import { Helmet } from "react-helmet";
import Weather from "../features/weather";
import { customHooks_ } from "../hooks";
function HomePage() {
  customHooks_.useHomePage();
  return (
    <Fragment>
      <Helmet>
        <title>Weather App - home page</title>
        <meta
          name="description"
          content="Welcome to the home page of Weather app."
        />
        <meta name="keywords" content="home, weather, temperature" />
      </Helmet>
      <section className="xs:flex xs:items-center xs:justify-center xs:h-screen mt-10 xs:mt-0">
        <img
          className="fixed xs:hidden w-full h-full object-cover z-[-1]"
          src="src/assets/icons/mobileBg.svg"
        />
        <Weather />
      </section>
    </Fragment>
  );
}

export default HomePage;
