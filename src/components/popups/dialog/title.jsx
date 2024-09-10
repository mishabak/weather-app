import { DialogTitle as Title } from "@headlessui/react";
import propTypes from "prop-types";

function DialogTitle({ title }) {
  return (
    <Title as="h3" className="text-base/7 font-medium text-white">
      {title}
    </Title>
  );
}

DialogTitle.propTypes = {
  title: propTypes.string,
};

export default DialogTitle;
