import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
function TodoModal({ isOpen, color, closeModal, activeState, todoInput }) {
  
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title
                as="h3"
                className="text-xl font-medium leading-6 text-gray-900"
              >
                Todo
              </Dialog.Title>
              <div className="mt-2">
                <input
                  id="todo-input"
                  placeholder={todoInput}
                  className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </div>
              <div className="flex flex-col ">
                <Dialog.Title
                  as="h3"
                  className="text-xl mt-3 font-medium leading-6 text-gray-900"
                >
                  Todo Color
                </Dialog.Title>
                <div className="flex flex-wrap md:flex-row justify-between  ">
                  <button
                    onClick={activeState}
                    id="bg-white "
                    className="hover:border-2 hover:border-black w-16 h-6 mt-2 bg-white border-2 border-gray-200 rounded"
                  ></button>
                  <button
                    onClick={activeState}
                    id="bg-purple-500"
                    className="hover:border-2 hover:border-black w-16 h-6 mt-2 bg-purple-500 border-2 border-gray-200 rounded "
                  ></button>
                  <button
                    onClick={activeState}
                    id="bg-green-400"
                    className=" hover:border-2 hover:border-black w-16 h-6 mt-2 bg-green-400 border-2 border-gray-200 rounded"
                  ></button>
                  <button
                    onClick={activeState}
                    id="bg-yellow-400"
                    className="hover:border-2 hover:border-black w-16 h-6 mt-2 bg-yellow-400 border-2 border-gray-200 rounded"
                  ></button>
                  <button
                    onClick={activeState }
                    id="bg-red-400"
                    className="hover:border-2 hover:border-black w-16 h-6 mt-2 bg-red-400 border-2 border-gray-200 rounded"
                  ></button>
                </div>
                {color}
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex float-right justify-center px-4 py-2 text-sm font-medium text-green-900 bg-green-100 border border-transparent rounded-md hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                  onClick={closeModal}
                >
                  Save
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

export default TodoModal;
