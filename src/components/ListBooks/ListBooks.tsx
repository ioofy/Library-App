import { BooksProps } from 'types/declare';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import bookService from 'api/shippingCompsApi';
import { useEffect, useState } from 'react';
import { getDate } from 'utils/getDate';

type ListBooksProps = {
  filteredName: string;
};

const ListBooks = (props: ListBooksProps) => {
  const [bookData, setBookData] = useState([]);

  // result data is not data.data
  const { data, isLoading, error } = useQuery(
    ['shippingComps'],
    async () => await bookService.getBooksData(10)
  );

  useEffect(() => {
    if (data) {
      setBookData(data);
    }
  }, [data]);

  if (isLoading) return <p>Fetching Data...</p>;

  return (
    <>
      <ul>
        <div className='bg-gray-200 p-4 rounded-md mb-4'>
          <span className='text-xl font-bold'>Name</span>
        </div>
        {error && (
          <h2 className='text-center text-[30px] mt-20'>
            😳Sorry something went wrong
          </h2>
        )}
        {bookData
          /* eslint-disable array-callback-return */
          .filter((val: BooksProps) => {
            if (props.filteredName === '') {
              return val;
            } else if (
              val.title.toLowerCase().includes(props.filteredName.toLowerCase())
            ) {
              return val;
            }
          })
          .map((book: BooksProps) => {
            return (
              <Link key={book.id} to={`/edit/book/${book.id}`}>
                <li className='p-4 cursor-pointer'>
                  <p className='font-semibold opacity-80'>{book.title}</p>
                  <p className='font-bold text-[13px]'>
                    On {getDate(book.createdAt)}
                  </p>
                  <hr className='mt-6' />
                </li>
              </Link>
            );
          })}
      </ul>
    </>
  );
};

export default ListBooks;
