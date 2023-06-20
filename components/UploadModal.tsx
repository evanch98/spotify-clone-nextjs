"use client";

import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";

const UploadModal = () => {
  const uploadModal = useUploadModal();
  return (
    <Modal
      title="Upload modal title"
      description="Upload modal description"
      isOpen
      onChange={() => {}}
    >
      Upload Modal
    </Modal>
  );
};

export default UploadModal;
