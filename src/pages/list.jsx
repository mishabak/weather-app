import { Fragment } from "react";
import { Helmet } from "react-helmet";
import Table from "../components/Table";
import { customHooks_ } from "../hooks";
import { motion } from "framer-motion";
import SearchForm from "../components/forms/searchForm";
import tableColumn from "../components/Table/column";

function List() {
  const { variant_ } = customHooks_.useTransition();
  const commonProps = customHooks_.UseList();

  return (
    <Fragment>
      <Helmet>
        <title>Weather App - list page</title>
        <meta
          name="description"
          content="Welcome to the list page of Weather app."
        />
        <meta name="keywords" content="home, weather, temperature, list" />
      </Helmet>

      <motion.section
        variants={variant_.TB}
        className="px-4 md:px-8 lg:px-12 pt-16 md:pt-28 w-full xs:h-screen"
      >
        <SearchForm {...commonProps} />
        <Table columns={tableColumn.weather} {...commonProps} />
      </motion.section>
    </Fragment>
  );
}

export default List;
