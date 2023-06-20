"use client";

import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const UploadModal = () => {
  const uploadModal = useUploadModal();

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    // default value for the form
    defaultValues: {
      author: "",
      title: "",
      song: null,
      image: null,
    },
  });

  // to handle the close button
  const onChange = (open: boolean) => {
    if (!open) {
      // Reset the form
      reset();
      // close the uploadModal
      uploadModal.onClose();
    }
  };

  // onSubmit will return a SubmitHandler with FieldValues
  const onSubmit: SubmitHandler<FieldValues> = () => {
    // upload to supabase
  };
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
