import { Fragment } from "react";
import { Helmet } from "react-helmet";
function HomePage() {
  return (
    <Fragment>
      <Helmet>
        <title>Weather App</title>
        <link rel="canonical" href="http://localhost:5173/" />
      </Helmet>
      <div>dd</div>
    </Fragment>
  );
}

export default HomePage;
