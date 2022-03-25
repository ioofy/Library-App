import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import {
  FormDataCreateProps,
  ResponseMessage,
} from 'types/declare';
import toast from 'react-hot-toast';
import shippingCompsService from 'api/shippingCompsApi';

const AddShippingComps = () => {
  const navigate = useNavigate();
  const [createdName, setCreatedName] =
    useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataCreateProps>();

  const {
    mutate: MutateCreate,
    isLoading: LoadingCreate,
    data,
    isError,
  } = useMutation<any, Error>(async () => {
    return await shippingCompsService.addShippingCompsData(
      { name: createdName } as any
    );
  });

  useEffect(() => {
    if (createdName) {
      try {
        MutateCreate();
      } catch (error) {
        console.log(error);
      }
    }
  }, [MutateCreate, createdName]);

  useEffect(() => {
    const responseDataCreate =
      data as ResponseMessage;

    if (responseDataCreate) {
      toast.success(responseDataCreate.message);

      setTimeout(function () {
        navigate('/shipping-comps');
      }, 1000);
    }
    if (isError) {
      toast.error(
        'Theres an error, please try again later'
      );
    }
  }, [data, isError, navigate]);

  const onSubmitForm = (
    values: FormDataCreateProps
  ) => {
    const { createName } = values;

    setCreatedName(createName);
  };

  // console.log(data);

  return (
    <div>
      <div>
        <div className='pt-2 mx-auto text-gray-600'>
          <p>Nama</p>
          <form
            onSubmit={handleSubmit(onSubmitForm)}
          >
            <input
              className='border-2 border-gray-300 bg-white mt-4 
              h-10 px-5 rounded-lg text-sm focus:outline-none'
              type='text'
              placeholder='Tambah Shipping Comps'
              {...register('createName', {
                required: true,
                pattern: /[A-Za-z]{3}/,
              })}
            />
            {errors.createName && (
              <p className='text-red-400 text-sm mt-2'>
                *Nama harus diisi
              </p>
            )}
            <div className='mt-6'>
              <button
                className='bg-blue-500 hover:bg-blue-700 
              text-white font-bold py-2 px-4 rounded'
              >
                {LoadingCreate
                  ? 'Loading...'
                  : 'Simpan'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddShippingComps;
