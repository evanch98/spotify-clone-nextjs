"use client";

import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";

const UploadModal = () => {
  const uploadModal = useUploadModal();

  // to handle the close button
  const onChange = (open: boolean) => {
    if (!open) {
      // Reset the form
      // close the uploadModal
      uploadModal.onClose();
    }
  }
  return (
    <Modal
      title="Add a song"
      description="Upload an mp3 file"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      Upload Modal
    </Modal>
  );
};

export default UploadModal;
