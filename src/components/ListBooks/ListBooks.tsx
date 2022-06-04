import { useGetListBooks } from "hooks/useBook";
import { Link } from "react-router-dom";
import { getDate } from "utils/getDate";

type ListBooksProps = {
  filteredName: string;
};

const ListBooks = (props: ListBooksProps) => {
  const { data, isLoading, error } = useGetListBooks();

  if (isLoading) return <p>Fetching Data...</p>;

  return (
    <>
      <ul>
        <div className="bg-gray-200 p-4 rounded-md mb-4">
          <span className="text-xl font-bold">Name</span>
        </div>
        {error && (
          <h2 className="text-center text-[30px] mt-20">
            😳Sorry something went wrong
          </h2>
        )}
        {data &&
          data
            /* eslint-disable array-callback-return */
            .filter((val) => {
              if (props.filteredName === "") {
                return val;
              } else if (
                val.title
                  .toLowerCase()
                  .includes(props.filteredName.toLowerCase())
              ) {
                return val;
              }
            })
            .map((book) => {
              return (
                <li className="p-4 cursor-pointer" key={book.id}>
                  <Link key={book.id} to={`/edit/book/${book.id}`}>
                    <p className="font-semibold opacity-80">{book.title}</p>
                  </Link>
                  <p className="font-bold text-[13px]">
                    On {getDate(book.createdAt)}
                  </p>
                  <hr className="mt-6" />
                </li>
              );
            })}
      </ul>
    </>
  );
};

export default ListBooks;
