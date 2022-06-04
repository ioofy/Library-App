import toast from "react-hot-toast";

const notifySuccess = async (message: string) => {
  return toast.success(message);
};

const notifyError = async (message: string) => {
  return toast.error(message);
};

export { notifyError, notifySuccess };
