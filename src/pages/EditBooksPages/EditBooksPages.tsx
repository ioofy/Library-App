import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BiTrash } from "react-icons/bi";
import loadable from "@loadable/component";
import { notifyError, notifySuccess } from "utils/notify";
import { MESSAGES } from "constant/messages";
import { useDeleteBooks, useGetBooksById } from "hooks/useBook";

const Modal = loadable(() => import("components/Modal/Modal"));
const EditBooks = loadable(() => import("components/EditBooks/EditBooks"));
const HelmetEntity = loadable(() => import("components/Helmet/Helmet"));

type QueryPageParams = {
  id: string;
  name: string;
};

const EditBooksPages = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const { id, name } = useParams<QueryPageParams>();
  const { data: detailBook, isLoading, error } = useGetBooksById(id);

  const {
    mutate: MutateDelete,
    isLoading: LoadingDelete,
    isError,
    data,
  } = useDeleteBooks(id);

  useEffect(() => {
    if (data) {
      notifySuccess(MESSAGES.bookDeleted);

      setTimeout(function () {
        navigate("/books");
      }, 1000);
    }

    if (isError) {
      notifyError(MESSAGES.error);
    }
  }, [data, isError, navigate]);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const deleteBooks = () => {
    if (id) {
      try {
        MutateDelete();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <HelmetEntity title="Edit Books" description="Edit a book" />
      {error && (
        <h2 className="text-center text-[30px] mt-20">
          😳Sorry something went wrong
        </h2>
      )}
      {isLoading ? (
        "Fetching Data..."
      ) : (
        <>
          <div className="w-full">
            <div className="flex">
              <h1 className="text-2xl font-semibold">
                📗Edit Book `{detailBook?.title}`
              </h1>

              <button
                className="bg-red-500 hover:bg-red-700 text-white 
          font-bold rounded-full w-8 ml-4 flex items-center justify-center"
              >
                <BiTrash size={19} onClick={openModal} />
              </button>
            </div>
            <div className="mt-2 flex">
              <p>Created by: {detailBook?.author?.firstName}</p>
              <div className="w-[20px] mt-[2px]">
                {detailBook?.author?.role === "admin" && (
                  <img
                    src="/img/verif.png"
                    alt="verifed"
                    className="ml-[4px]"
                  />
                )}
              </div>
            </div>
          </div>

          <div className="mt-14">
            <EditBooks id={id as string} name={name as string} />
          </div>

          <Modal isShowing={showModal} setShowModal={setShowModal}>
            <div className="flex flex-col">
              <h1 className="text-xl">Delete Item?</h1>

              <button
                className="mt-6 mb-4 bg-red-500 hover:bg-red-700 
               text-white font-bold py-2 px-4 rounded"
                onClick={deleteBooks}
              >
                {LoadingDelete ? "Loading..." : "Delete"}
              </button>
              <button
                onClick={closeModal}
                className="bg-blue-500 hover:bg-blue-700 text-white 
            font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </Modal>
        </>
      )}
    </div>
  );
};

export default EditBooksPages;
