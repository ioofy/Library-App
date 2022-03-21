import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { FormDataUpdateProps } from 'types/shippingComps';
import shippingCompsService from 'api/shippingCompsApi';

type EditShippingCompsProps = {
  id: string | undefined;
  name: string | undefined;
};

type ResponseDataUpdated = {
  message: string;
};

const EditShippingComps = ({
  id,
}: EditShippingCompsProps) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataUpdateProps>();

  const [updatedName, setUpdatedName] =
    useState<string>('');

  const {
    mutate: MutateUpdate,
    isLoading: LoadingUpdate,
    isError,
    data,
  } = useMutation<any, Error>(async () => {
    return await shippingCompsService.editShippingCompsData(
      id as any,
      { name: updatedName } as any
    );
  });

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
    const responseDataUpdate =
      data as ResponseDataUpdated;

    if (responseDataUpdate) {
      toast.success(responseDataUpdate.message);

      setTimeout(function () {
        navigate('/shipping-comps');
      }, 1000);
    }

    if (isError) {
      toast.error(`There's an error`);
    }
  }, [data, isError, navigate]);

  const onSubmitForm = (
    values: FormDataUpdateProps
  ) => {
    const { updateName } = values;

    setUpdatedName(updateName);
  };

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
              placeholder='Edit Shipping Comps'
              {...register('updateName', {
                required: true,
                pattern: /[A-Za-z]{3}/,
              })}
            />
            {errors.updateName && (
              <p className='text-red-400 text-sm mt-2'>
                *Nama harus diisi
              </p>
            )}
            <div className='mt-6'>
              <button
                className='bg-blue-500 hover:bg-blue-700 
              text-white font-bold py-2 px-4 rounded'
              >
                {LoadingUpdate
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

export default EditShippingComps;
