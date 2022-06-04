import loadable from "@loadable/component";

const HelmetEntity = loadable(() => import("components/Helmet/Helmet"));
const AddBooks = loadable(() => import("components/AddBooks/AddBooks"));

const AddBooksPages = () => {
  return (
    <div className="w-full">
      <HelmetEntity title="Add Books" description="Add a new book" />
      <h1 className="text-2xl font-semibold">📘 Add New Books</h1>
      <div className="mt-14">
        <AddBooks />
      </div>
    </div>
  );
};

export default AddBooksPages;
