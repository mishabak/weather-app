import { Dialog as Ui_Dialog } from "@headlessui/react";
import useDialog from "./useDialog";
import DialogButton from "./button";
import DialogTitle from "./title";
import DialogDesc from "./desc";
import DialogPanel from "./panel";

function Dialog() {
  const { dialog, theme, handleClose, handleCallback } = useDialog();

  return (
    <Ui_Dialog
      open={dialog.isOpen}
      as="div"
      onClose={handleClose}
      className={`
        relative z-10 
        focus:outline-none theme-${theme}`}
    >
      <DialogPanel>
        <DialogTitle title={dialog?.title} />
        <DialogDesc desc={dialog?.desc} />
        <DialogButton
          handleCallback={handleCallback}
          handleClose={handleClose}
          {...dialog}
        />
      </DialogPanel>
    </Ui_Dialog>
  );
}

export default Dialog;
