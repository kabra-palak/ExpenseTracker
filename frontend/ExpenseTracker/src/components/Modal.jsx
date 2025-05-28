import React from 'react';

const Modal = ({ children, isOpen, onClose, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/10 backdrop-blur-sm overflow-y-auto pt-20 ">
      <div className="relative w-full max-w-lg mx-auto p-4">
        <div className="bg-white rounded-xl shadow-md border border-gray-200">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">
              {title}
            </h3>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-lg w-8 h-8 flex items-center justify-center"
            >
              <svg
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1l12 12M13 1L1 13"
                />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="p-5 text-gray-800">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
