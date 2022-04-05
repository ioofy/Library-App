import { BookResponse } from 'types/declare';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import bookService from 'api/booksApi';
import { getDate } from 'utils/getDate';

type ListBooksProps = {
  filteredName: string;
};

const ListBooks = (props: ListBooksProps) => {
  // result data is not data.data
  const { data, isLoading, error } = useQuery<any, Error>(
    ['listBooks'],
    async () => await bookService.getBooksData(10)
  );

  if (isLoading) return <p>Fetching Data...</p>;

  const result: BookResponse = data;

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
        {result
          /* eslint-disable array-callback-return */
          .filter((val) => {
            if (props.filteredName === '') {
              return val;
            } else if (
              val.title.toLowerCase().includes(props.filteredName.toLowerCase())
            ) {
              return val;
            }
          })
          .map((book) => {
            return (
              <li className='p-4 cursor-pointer' key={book.id}>
                <Link key={book.id} to={`/edit/book/${book.id}`}>
                  <p className='font-semibold opacity-80'>{book.title}</p>
                </Link>
                <p className='font-bold text-[13px]'>
                  On {getDate(book.createdAt)}
                </p>
                <hr className='mt-6' />
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default ListBooks;
