import { Fragment } from "react"
import { Helmet } from "react-helmet"

function NotFound() {
  return (
    <Fragment>
       <Helmet>
        <title>Weather App - 404</title>
      </Helmet>
      <section className="bg-white">
        <img className="w-full h-screen object-contain" src="/src/assets/animated-3D-404-not-found-page-error.gif" alt="" />
      </section>
    </Fragment>
  )
}

export default NotFound