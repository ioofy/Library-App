import { MESSAGES } from "constant/messages";
import { useUpdateBooks } from "hooks/useBook";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormDataUpdateProps } from "types/models";
import { notifyError, notifySuccess } from "utils/notify";

type EditBooksProps = {
  id: string;
  name: string;
};

const EditBooks = ({ id }: EditBooksProps) => {
  const navigate = useNavigate();
  const [updatedName, setUpdatedName] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataUpdateProps>();

  const {
    mutate: MutateUpdate,
    isLoading: LoadingUpdate,
    data,
    isError,
  } = useUpdateBooks(id, updatedName);

  useEffect(() => {
    if (updatedName) {
      try {
        MutateUpdate();
      } catch (error) {
        console.log(error);
      }
    }
  }, [MutateUpdate, updatedName]);

  useEffect(() => {
    if (data) {
      notifySuccess(MESSAGES.bookUpdated);

      setTimeout(() => {
        navigate("/books");
      }, 1000);
    }

    if (isError) {
      notifyError(MESSAGES.error);
    }
  }, [data, isError, navigate]);

  const onSubmitForm = (values: FormDataUpdateProps) => {
    const { updateTitle } = values;

    setUpdatedName(updateTitle);
  };

  return (
    <div>
      <div>
        <div className="pt-2 mx-auto text-gray-600">
          <p>Edit a new title</p>
          <form onSubmit={handleSubmit(onSubmitForm)}>
            <input
              className="border-2 border-gray-300 bg-white mt-4 
              h-10 px-5 rounded-lg text-sm focus:outline-none"
              type="text"
              placeholder="New title Books"
              {...register("updateTitle", {
                required: true,
              })}
            />
            {errors.updateTitle && (
              <p className="text-red-400 text-sm mt-2">
                *Name must be fullfiled
              </p>
            )}
            <div className="mt-6">
              <button
                className="bg-blue-500 hover:bg-blue-700 
              text-white font-bold py-2 px-4 rounded"
              >
                {LoadingUpdate ? "Loading..." : "Save now"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBooks;
