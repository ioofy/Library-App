import { useEffect, useState } from 'react';
import EditShippingComps from 'components/EditBooks/EditBooks';
import { useNavigate, useParams } from 'react-router-dom';
import { BiTrash } from 'react-icons/bi';
import { useMutation, useQuery } from 'react-query';
import { BooksProps, ResponseMessage } from 'types/declare';
import bookService from 'api/shippingCompsApi';
import Modal from 'components/Modal/Modal';
import toast from 'react-hot-toast';
import HelmetEntity from 'components/Helmet/Helmet';

type QueryPageParams = {
  id: string;
  name: string;
};

const EditBooksPages = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const { id, name } = useParams<QueryPageParams>();

  const {
    mutate: MutateDelete,
    isLoading: LoadingDelete,
    isError,
    data,
  } = useMutation<any, Error>(async () => {
    return await bookService.deleteBooksData(id as any);
  });

  const {
    data: detailBook,
    isLoading,
    error,
  } = useQuery(
    ['detailBooks'],
    async () => await bookService.getBooksById(id as any)
  );

  useEffect(() => {
    if (isError) {
      toast.error('Theres an error, please try again later');
    }
  }, [isError]);

  useEffect(() => {
    // const responseDataCreate = data as ResponseMessage;

    if (data) {
      toast.success('Successfully deleted a book');

      setTimeout(function () {
        navigate('/books');
      }, 1000);
    }
  }, [data, navigate]);

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

  const detailOfBooks: BooksProps = detailBook;

  return (
    <div>
      <HelmetEntity title='Edit Books' description='Edit a book' />
      {error && (
        <h2 className='text-center text-[30px] mt-20'>
          😳Sorry something went wrong
        </h2>
      )}
      {isLoading ? (
        'Fetching Data...'
      ) : (
        <>
          <div className='w-full'>
            <div className='flex'>
              <h1 className='text-2xl font-semibold'>
                📗Edit Book `{detailOfBooks.title}`
              </h1>

              <button
                className='bg-red-500 hover:bg-red-700 text-white 
          font-bold rounded-full w-8 ml-4 flex items-center justify-center'
              >
                <BiTrash size={19} onClick={openModal} />
              </button>
            </div>
            <div className='mt-2 flex'>
              <p>Created by: {detailOfBooks.author.firstName}</p>
              <div className='w-[20px] mt-[2px]'>
                {detailOfBooks.author.role === 'admin' && (
                  <img
                    src='/img/verif.png'
                    alt='verifed'
                    className='ml-[4px]'
                  />
                )}
              </div>
            </div>
          </div>

          <div className='mt-14'>
            <EditShippingComps id={id} name={name} />
          </div>

          <Modal isShowing={showModal} setShowModal={setShowModal}>
            <div className='flex flex-col'>
              <h1 className='text-xl'>Delete Item?</h1>

              <button
                className='mt-6 mb-4 bg-red-500 hover:bg-red-700 
               text-white font-bold py-2 px-4 rounded'
                onClick={deleteBooks}
              >
                {LoadingDelete ? 'Loading...' : 'Delete'}
              </button>
              <button
                onClick={closeModal}
                className='bg-blue-500 hover:bg-blue-700 text-white 
            font-bold py-2 px-4 rounded'
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
