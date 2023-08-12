"use client";
import Image from "next/image";
import Link from "next/link";
import {useState,useEffect} from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { BellIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/solid";
interface NavType {
  name: string;
  href: string;
  dropdownB: boolean;
  items?: string[];
}
const navigation: NavType[] = [
  { name: "Home", href: "/", dropdownB: false },
  {
    name: "Explore",
    href: "/",
    dropdownB: true,
    items: ["Shows", "Edit Profile", "Setting", "Stats"],
  },
  { name: "Personal Collection", href: "/", dropdownB: false },
  { name: "Drops", href: "/", dropdownB: false },
  {
    name: "More",
    href: "/",
    dropdownB: true,
    items: [
      "Stats",
      "Shows",
      "About Us",
      "Community",
      "Creator Studio",
      "Edit Profile",
      "Setting",
    ],
  },
];
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <Disclosure as="nav" className={`fixed top-0 w-full z-50 ${
        isScrolled ? 'myNav' : 'bg-transparent'
      } `}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="inset-y-0 left-0 flex items-center lg:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                          >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center">
                <Link href="/" className="flex items-center gap-2 mr-10">
                  <p className="font-bold text-blue-700 text-3xl hover:text-blue-500">
                    Logo
                  </p>
                </Link>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 pl-10 text-sm bg-transparent rounded-full border outline-none px-4 py-2 border-white"
                    placeholder="Search Mockups, Logos..."
                    required
                  />
                </div>
              </div>
              <div className="hidden lg:ml-6 lg:flex space-x-4 items-center gap-4">
                {navigation.map((item) => {
                  return item.dropdownB ? (
                    <Menu key={item.name} as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="relative flex rounded-full  text-sm hover:opacity-80">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">{item.name}</span>
                          <div className="flex items-center gap-2">
                            <p className="">{item.name}</p>
                            <svg
                              className="w-2.5 h-2.5"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 10 6"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 4 4 4-4"
                              />
                            </svg>
                          </div>
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                          style={{ backgroundColor: "#212749" }}
                        >
                          {item.items?.map((c) => (
                            <Menu.Item key={c}>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    "block px-4 py-2 text-sm text-white hover:opacity-80"
                                  )}
                                >
                                  {c}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="mr-5 hover:text-yellow-50 hover:opacity-80"
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
              <div className="hidden absolute inset-y-0 right-0 lg:flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
                <div className="flex gap-3">
                  <button
                    type="button"
                    className="relative rounded-full p-1text-white focus:outline-none hover:opacity-80"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className="relative rounded-full  p-1text-white hover:opacity-80"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <ChatBubbleLeftIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </button>
                  <button className="bg-transparent px-6 py-2 border rounded-md hover:opacity-80">
                    Wallet
                  </button>
                </div>

                {/* Profile dropdown */}

                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full  text-sm hover:opacity-80">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-2.5 h-2.5 ml-2.5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                        <img
                          className="h-8 w-8 rounded-full hover:opacity-80"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </div>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                          style={{ backgroundColor: "#212749" }}>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                                "block px-4 py-2 text-sm text-white hover:opacity-80"
                              )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                                "block px-4 py-2 text-sm text-white hover:opacity-80"
                              )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                                "block px-4 py-2 text-sm text-white hover:opacity-80"
                              )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden py-5"
          style={{ backgroundColor: "#212749" }}>
            <div className="flex flex-col align-center justify-center gap-3">
            {navigation.map((item) => {
                  return item.dropdownB ? (
                    <Menu key={item.name} as="div" className="relative ml-3 mb-2">
                      <div>
                        <Menu.Button className="relative flex rounded-full  text-sm hover:opacity-80">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">{item.name}</span>
                          <div className="flex items-center gap-2">
                            <p className="">{item.name}</p>
                            <svg
                              className="w-2.5 h-2.5"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 10 6"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 4 4 4-4"
                              />
                            </svg>
                          </div>
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                          style={{ backgroundColor: "#212749" }}
                        >
                          {item.items?.map((c) => (
                            <Menu.Item key={c}>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    "block px-4 py-2 text-sm text-white hover:opacity-80 mb-2"
                                  )}
                                >
                                  {c}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="ml-3 hover:text-yellow-50 hover:opacity-80 mb-2"
                    >
                      {item.name}
                    </Link>
                  );
                })}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full  text-sm hover:opacity-80">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-2.5 h-2.5 ml-2.5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                        <img
                          className="h-8 w-8 rounded-full hover:opacity-80"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </div>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                          style={{ backgroundColor: "#212749" }}>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                                "block px-4 py-2 text-sm text-white hover:opacity-80"
                              )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                                "block px-4 py-2 text-sm text-white hover:opacity-80"
                              )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                                "block px-4 py-2 text-sm text-white hover:opacity-80"
                              )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
