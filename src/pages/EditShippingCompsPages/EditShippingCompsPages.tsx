import { useEffect, useState } from 'react';
import EditShippingComps from 'components/EditComps/EditShippingComps';
import {
  useNavigate,
  useParams,
} from 'react-router-dom';
import { BiTrash } from 'react-icons/bi';
import { useMutation } from 'react-query';
import { ResponseMessage } from 'types/declare';
import shippingCompsService from 'api/shippingCompsApi';
import Modal from 'components/Modal/Modal';
import toast from 'react-hot-toast';

type QueryPageParams = {
  id: string;
  name: string;
};

const EditShippingsComps = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] =
    useState(false);
  const { id, name } =
    useParams<QueryPageParams>();

  const {
    mutate: MutateDelete,
    isLoading: LoadingDelete,
    isError,
    data,
  } = useMutation<any, Error>(async () => {
    return await shippingCompsService.deleteShippingCompsData(
      id as any
    );
  });

  useEffect(() => {
    if (isError) {
      toast.error(
        'Theres an error, please try again later'
      );
    }
  }, [isError]);

  useEffect(() => {
    const responseDataCreate =
      data as ResponseMessage;

    if (responseDataCreate) {
      toast.success(responseDataCreate.message);

      setTimeout(function () {
        navigate('/shipping-comps');
      }, 1000);
    }
  }, [data, navigate]);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const deleteShippingComps = () => {
    // ini gabisa didelete dari api nya saya sudah test dipostman

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
      <div className='w-full'>
        <div className='flex'>
          <h1 className='text-2xl font-semibold'>
            Edit Shipping Comps `{name}`
          </h1>

          <button
            className='bg-red-500 hover:bg-red-700 text-white 
          font-bold rounded-full w-8 ml-4 flex items-center justify-center'
          >
            <BiTrash
              size={19}
              onClick={openModal}
            />
          </button>
        </div>
      </div>

      <div className='mt-14'>
        <EditShippingComps id={id} name={name} />
      </div>

      <Modal
        isShowing={showModal}
        setShowModal={setShowModal}
      >
        <div className='flex flex-col'>
          <h1 className='text-xl'>
            Delete Item?
          </h1>

          <button
            className='mt-6 mb-4 bg-red-500 hover:bg-red-700 
          text-white font-bold py-2 px-4 rounded'
            onClick={deleteShippingComps}
          >
            {LoadingDelete
              ? 'Loading...'
              : 'Delete'}
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
    </div>
  );
};

export default EditShippingsComps;
