import loadable from "@loadable/component";

const HelmetEntity = loadable(() => import("components/Helmet/Helmet"));

const DashboardPages = () => {
  return (
    <>
      <HelmetEntity
        title="Welcome to dashboard"
        description="Welcome to dashboard"
      />
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      <div className="w-1/2 bg-gray-200 rounded-lg p-10 mt-20 mx-auto">
        <div className="block mt-24 mb-24">
          <h1 className="text-center text-4xl font-bold text-gray-500">
            Selamat Datang
          </h1>
          {/* <h2 className='text-center mt-5 text-2xl font-semibold text-gray-400'>
            {name}
          </h2> */}
        </div>
      </div>
    </>
  );
};

export default DashboardPages;
