import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { toFilter } from "../../../../store/pageSlice";
import { filterIsTrue } from "../../../../store/pageSlice";

import {
  setProductsOrder,
  firstSmaller,
  setFirst,
} from "../../../../store/productsSlice";
import { OrderProductsOption } from "../../../../store/types";
import {
  OrderProducts,
  OrderProductsDesc,
} from "../../../../utils/filterScripts";
import { useDispatch, useSelector } from "react-redux";

export function SlideOver() {
  const dispatch = useDispatch();
  const firstSmallerState = useSelector(firstSmaller);

  const [orderType, setOrderType] = useState<OrderProductsOption>("byName");

  const [firstSmallerSet, setFirstSmaller] = useState(firstSmallerState);

  const setFiltering = () => {
    dispatch(toFilter());
  };

  function handleOrder(order: OrderProductsOption) {
    const selectedOrder = OrderProducts[order];
    const selectedOrderDesc = OrderProductsDesc[order];
    setOrderType(order);

    if (firstSmallerSet) {
      dispatch(setProductsOrder(selectedOrder));
    } else {
      dispatch(setProductsOrder(selectedOrderDesc));
    }
    if (firstSmallerSet !== firstSmallerState) {
      dispatch(setFirst());
    }
    setFiltering();
  }

  const open = useSelector(filterIsTrue);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setFiltering}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={setFiltering}
                      >
                        <span className="sr-only">Close panel</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-lg font-medium text-gray-900">
                        Ordenar Por
                      </Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <div className="absolute inset-0 px-4 sm:px-6 slideover flex flex-col">
                        <select
                          onChange={(e) =>
                            setOrderType(e.target.value as OrderProductsOption)
                          }
                          className="mx-auto border-0 bg-no-repeat bg-1 bg-right-midz rounded-md px-2 pr-4 w-48 py-0 drop-shadow-md appearance-none h-8 focus:ring-1 focus:ring-[#D13429] focus:border-[#D13429] focus:outline-none"
                        >
                          <option> --- </option>
                          <option value="byName">Nome</option>
                          <option value="byPrice">Preço</option>
                          <option value="byDateFabric">
                            Data de Fabricação
                          </option>
                          <option value="byDateValidity">
                            Data de Validade
                          </option>
                        </select>
                        <div
                          onChange={(e) => setFirstSmaller(!firstSmallerSet)}
                        >
                          <label className="mx-auto w-48 flex justify-between mt-8">
                            Maior Primeiro
                            <input
                              defaultChecked={!firstSmallerState}
                              className="appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-[#D13429] checked:border-[#D13429] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center  float-left mr-2 cursor-pointer focus:ring-2 focus:ring-offset-2 outline-none focus:ring-[#F13429]"
                              type="radio"
                              value="GREATER"
                              name="first"
                            />
                          </label>
                          <label className="mx-auto w-48 my-2 flex justify-between">
                            Menor Primeiro
                            <input
                              className="appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-[#D13429] checked:border-[#D13429] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center float-left mr-2 cursor-pointer focus:ring-2 focus:ring-offset-2 outline-none focus:ring-[#F13429]"
                              type="radio"
                              value="SMALLER"
                              defaultChecked={firstSmallerState}
                              name="first"
                            />
                          </label>
                        </div>
                        <button
                          onClick={() => handleOrder(orderType)}
                          className=" bg-[#F96C62]  bg-no-repeat bg-center focus:ring-2 focus:ring-offset-2 outline-none focus:ring-[#F13429] rounded-md block mx-auto p-3 text-white mt-16"
                        >
                          SALVAR
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
