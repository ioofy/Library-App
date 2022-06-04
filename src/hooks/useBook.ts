import { useMutation, useQuery } from "react-query";
import { BookResponse, BooksProps } from "types/models";
import bookService from "api/booksApi";

export const useGetListBooks = () => {
  return useQuery<BookResponse, Error>(
    ["listBooks"],
    async () => await bookService.getBooksData(10)
  );
};

export const useGetBooksById = (id: any) => {
  return useQuery<BooksProps, Error>(
    ["detailBooks"],
    async () => await bookService.getBooksById(id)
  );
};

export const useDeleteBooks = (id: any) => {
  return useMutation<any, Error>(async () => {
    return await bookService.deleteBooksData(id);
  });
};

export const useCreateBooks = (title: string) => {
  return useMutation<any, Error>(async () => {
    return await bookService.addBooksData(title);
  });
};

export const useUpdateBooks = (id: any, name: string) => {
  return useMutation<any, Error>(async () => {
    return await bookService.editBooksData(id, name);
  });
};

