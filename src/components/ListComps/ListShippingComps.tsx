import { ShippingComps } from 'types/shippingComps';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import shippingCompsService from 'api/shippingCompsApi';

type ListShippingCompsProps = {
  filteredName: string;
};

const ListShippingComps = (
  props: ListShippingCompsProps
) => {
  const { data, isLoading } = useQuery(
    ['shippingComps'],
    async () =>
      await shippingCompsService.getShippingCompsData()
  );

  if (isLoading) return <p>Fetching Data...</p>;

  // assign it
  const shippingCompsData = data as ShippingComps;

  return (
    <>
      <ul>
        <div className='bg-gray-200 p-4 rounded-md mb-4'>
          <span className='text-xl font-bold'>
            Nama
          </span>
        </div>
        {shippingCompsData.data
          /* eslint-disable array-callback-return */
          .filter((val) => {
            if (props.filteredName === '') {
              return val;
            } else if (
              val.name
                .toLowerCase()
                .includes(
                  props.filteredName.toLowerCase()
                )
            ) {
              return val;
            }
          })
          .map((shippingItem) => {
            return (
              <Link
                key={shippingItem.id}
                to={`/edit/shipping-comps/${shippingItem.id}&name=${shippingItem.name}`}
              >
                <li className='p-4 cursor-pointer'>
                  <p className='font-semibold opacity-80'>
                    {shippingItem.name}
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

export default ListShippingComps;
