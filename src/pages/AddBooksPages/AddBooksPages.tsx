import AddShippingComps from 'components/AddBooks/AddBooks';
import HelmetEntity from 'components/Helmet/Helmet';

const AddBooksPages = () => {
  return (
    <div className='w-full'>
      <HelmetEntity title='Add Books' description='Add a new book' />
      <h1 className='text-2xl font-semibold'>📘 Add New Books</h1>
      <div className='mt-14'>
        <AddShippingComps />
      </div>
    </div>
  );
};

export default AddBooksPages;
