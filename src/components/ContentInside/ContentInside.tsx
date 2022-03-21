type ContentProps = {
  children: React.ReactNode;
};

const Content: React.FC<ContentProps> = (
  props
) => {
  return (
    <div className='w-full h-full bg-gray-50 rounded-2xl mt-5 p-10'>
      {props.children}
    </div>
  );
};

export default Content;
