// this data is same with response api
export interface ShippingComps {
  data: {
    id: number;
    name: string;
  }[];
}

export interface ApiCompsProps {
  id: string | undefined;
  name: string | undefined;
}

export interface FormDataUpdateProps {
  updateName: string;
}

export interface FormDataCreateProps {
  createName: string;
}

export interface FormLoginProps {
  email: string;
  password: string;
}

export interface ResponseMessage {
  message: string;
}

export interface DataFromResponse {
  success: boolean;
  data: {
    data: {
      access_token: string;
    };
    user: {
      id: number;
      name: string;
      email: string;
      phone_number: number | string;
    };
  };
}
