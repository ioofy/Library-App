// this data is same with response api
export interface BooksProps {
  id: number;
  title: string;
  createdAt: Date;
  author: {
    email: string;
    firstName: string;
    lastName: string;
    role: string;
  };
}

export type BookResponse = {
  id: number;
  title: string;
  createdAt: Date;
}[];

export interface UserProps {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

export interface FormDataUpdateProps {
  updateTitle: string;
}

export interface FormDataCreateProps {
  createTitle: string;
}

export interface FormLoginProps {
  email: string;
  password: string;
}

export interface ResponseMessage {
  message: string;
}

export interface DataFromResponse {
  data: {
    status: string | number;
    access_token: string;
  };
}
