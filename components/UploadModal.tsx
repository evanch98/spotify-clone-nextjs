"use client";

import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";
import Input from "./Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

const UploadModal = () => {
  const [isLoading, setIsLoading] = useState();
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
  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    // upload to supabase
  };
  return (
    <Modal
      title="Add a song"
      description="Upload an mp3 file"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="title"
          disabled={isLoading}
          {...register("title", { required: true })}
          placeholder="Song title"
        />
      </form>
    </Modal>
  );
};

export default UploadModal;
