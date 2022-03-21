import React, {
  Dispatch,
  SetStateAction,
  useRef,
} from 'react';
import { BiX } from 'react-icons/bi';

type ModalProps = {
  isShowing: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
};

const Modal = ({
  children,
  setShowModal,
  isShowing,
}: ModalProps) => {
  const modalRef = useRef(null);

  return (
    <div className='flex justify-center items-center'>
      {isShowing ? (
        <div
          className='w-full h-full top-0 fixed flex justify-center items-center z-10'
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
          ref={modalRef}
        >
          <div
            className='w-80 h-80 bg-white rounded-lg'
            style={{
              boxShadow:
                '0 5px 15px rgba(0, 0, 0, 0.5)',
            }}
          >
            <div className='block'>
              <BiX
                size={32}
                onClick={() =>
                  setShowModal((prev) => !prev)
                }
                className='cursor-pointer mt-2 ml-2 text-black'
              />
            </div>
            <div className='h-4/5 flex items-center justify-center'>
              {children}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
