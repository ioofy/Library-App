import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { FormDataCreateProps, ResponseMessage } from 'types/declare';
import toast from 'react-hot-toast';
import bookService from 'api/booksApi';

const AddBooks = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');

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
    return await bookService.addBooksData(title);
  });

  useEffect(() => {
    // const responseDataCreate = data as ResponseMessage;

    if (data) {
      toast.success('Successfully created new book');

      setTimeout(function () {
        navigate('/books');
      }, 1000);
    }
    if (isError) {
      toast.error('Theres an error, please try again later');
    }
  }, [data, isError, navigate]);

  useEffect(() => {
    if (title) {
      try {
        MutateCreate();
      } catch (error) {
        console.log(error);
      }
    }
  }, [MutateCreate, title]);

  const onSubmitForm = (values: FormDataCreateProps) => {
    const { createTitle } = values;

    setTitle(createTitle);
  };

  return (
    <div>
      <div>
        <div className='pt-2 mx-auto text-gray-600'>
          <p>Name</p>
          <form onSubmit={handleSubmit(onSubmitForm)}>
            <input
              className='border-2 border-gray-300 bg-white mt-4 
              h-10 px-5 rounded-lg text-sm focus:outline-none'
              type='text'
              placeholder='Add New Books'
              {...register('createTitle', {
                required: true,
              })}
            />
            {errors.createTitle && (
              <p className='text-red-400 text-sm mt-2'>
                *Name must be fullfiled
              </p>
            )}
            <div className='mt-6'>
              <button
                className='bg-blue-500 hover:bg-blue-700 
              text-white font-bold py-2 px-4 rounded'
              >
                {LoadingCreate ? 'Loading...' : 'Save now'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBooks;
