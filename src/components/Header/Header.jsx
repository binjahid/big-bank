import logo from "../../assets/images/logoAndBanner.png";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  MenuIcon,
  XIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";
import { PlusSmIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  return (
    <header className="customContainer py-10">
      <Disclosure as="nav" className="bg-transparent">
        {({ open }) => (
          <>
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="-ml-2 mr-2 flex items-center md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="block lg:hidden w-20 h-auto"
                      src={logo}
                      alt="Workflow"
                    />
                    <img
                      className="hidden lg:block w-32 h-auto"
                      src={logo}
                      alt="Workflow"
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="hidden md:ml-6 md:flex md:space-x-8">
                    {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                    <HashLink
                      to="#home"
                      smooth
                      className=" text-gray-300 inline-flex items-center px-6 pt-1 text-2xl font-semibold hover:text-white duration-500"
                    >
                      Home
                    </HashLink>
                    <HashLink
                      to="#app"
                      smooth
                      className=" text-gray-300 inline-flex items-center px-6 pt-1 text-2xl font-semibold hover:text-white duration-500"
                    >
                      App
                    </HashLink>
                    <HashLink
                      to="#nft"
                      smooth
                      className=" text-gray-300 inline-flex items-center px-6 pt-1 text-2xl font-semibold hover:text-white duration-500"
                    >
                      NFT
                    </HashLink>
                    <HashLink
                      to="#marchandise"
                      smooth
                      className=" text-gray-300 inline-flex items-center px-6 pt-1 text-2xl font-semibold hover:text-white duration-500"
                    >
                      Marchandise
                    </HashLink>
                  </div>

                  <div className=" md:ml-4 md:flex-shrink-0 md:flex md:items-center mx-6">
                    <button type="button" className="text-white">
                      <ShoppingBagIcon className="h-8 w-8" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="hidden md:block flex-shrink-0">
                    <button className="text-white px-12 py-2 bg-tertiary text-2xl rounded-lg border-[.5rem] border-secondary">
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="pt-10 pb-3 space-y-1">
                {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                <Disclosure.Button
                  as={HashLink}
                  to="#home"
                  smooth
                  className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                >
                  Home
                </Disclosure.Button>
                <Disclosure.Button
                  as={HashLink}
                  to="#app"
                  smooth
                  className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                >
                  App
                </Disclosure.Button>
                <Disclosure.Button
                  as={HashLink}
                  to="#nft"
                  smooth
                  className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                >
                  NFT
                </Disclosure.Button>
                <Disclosure.Button
                  as={HashLink}
                  to="#marchandise"
                  smooth
                  className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                >
                  Marchandise
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
};

export default Header;
