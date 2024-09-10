import { Button as UiButton } from "@headlessui/react";
import propTypes from "prop-types";

function DialogButton({
  closeBtnTitle,
  confirmBtnTitle,
  handleClose,
  handleCallback,
}) {
  const Button = ({ handle, title }) => (
    <UiButton
      className="
  inline-flex items-center gap-2 
  rounded-md bg-currentWeather
  py-1.5 px-3 text-sm 
  font-semibold text-textWeather 
  focus:outline-none hover:brightness-105"
      onClick={handle}
    >
      {title}
    </UiButton>
  );

  Button.propTypes = {
    handle: propTypes.func,
    title: propTypes.string,
  };

  return (
    <div className="mt-4 flex justify-end gap-2">
      <Button handle={handleClose} title={closeBtnTitle} />
      <Button handle={handleCallback} title={confirmBtnTitle} />
    </div>
  );
}

DialogButton.propTypes = {
  closeBtnTitle: propTypes.string,
  confirmBtnTitle: propTypes.string,
  handleClose: propTypes.func,
  handleCallback: propTypes.func,
};

export default DialogButton;
