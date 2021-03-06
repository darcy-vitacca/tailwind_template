import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

import { ChevronDownIcon } from '@heroicons/react/solid';
import classNames from 'classnames';
import { headerConstants } from '../../../constants/header';
import { Link } from 'react-router-dom';

const { solutions, callsToAction, resources, recentPosts } = headerConstants;

export const Header = () => {
  return (
    <Popover className="relative bg-white">
      {({ open }) => (
        <>
          <div className="px-4 mx-auto max-w-7xl sm:px-6">
            <div className="flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link to="/test1">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="w-auto h-8 sm:h-10"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt=""
                  />
                </Link>
              </div>
              <div className="-my-2 -mr-2 md:hidden">
                <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="w-6 h-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-900' : 'text-gray-500',
                          'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        )}
                      >
                        <span>Solutions</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-gray-600' : 'text-gray-400',
                            'ml-2 h-5 w-5 group-hover:text-gray-500'
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          static
                          className="absolute z-10 w-screen max-w-md px-2 mt-3 -ml-4 transform sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                        >
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                              {solutions.map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.href}
                                  className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                                >
                                  <item.icon
                                    className="flex-shrink-0 w-6 h-6 text-indigo-600"
                                    aria-hidden="true"
                                  />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {item.description}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            <div className="px-5 py-5 space-y-6 bg-gray-50 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                              {callsToAction.map((item) => (
                                <div key={item.name} className="flow-root">
                                  <Link
                                    to={item.href}
                                    className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
                                  >
                                    <item.icon
                                      className="flex-shrink-0 w-6 h-6 text-gray-400"
                                      aria-hidden="true"
                                    />
                                    <span className="ml-3">{item.name}</span>
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                <Link
                  to="/test1"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Pricing
                </Link>
                <Link
                  to="/test1"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Docs
                </Link>

                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-900' : 'text-gray-500',
                          'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        )}
                      >
                        <span>More</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-gray-600' : 'text-gray-400',
                            'ml-2 h-5 w-5 group-hover:text-gray-500'
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          static
                          className="absolute z-10 w-screen max-w-md px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0"
                        >
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                              {resources.map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.href}
                                  className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                                >
                                  <item.icon
                                    className="flex-shrink-0 w-6 h-6 text-indigo-600"
                                    aria-hidden="true"
                                  />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {item.description}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                              <div>
                                <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                                  Recent Posts
                                </h3>
                                <ul className="mt-4 space-y-4">
                                  {recentPosts.map((post) => (
                                    <li
                                      key={post.id}
                                      className="text-base truncate"
                                    >
                                      <Link
                                        to={post.href}
                                        className="font-medium text-gray-900 hover:text-gray-700"
                                      >
                                        {post.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="mt-5 text-sm">
                                <Link
                                  to="/test1"
                                  className="font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                  {' '}
                                  View all posts{' '}
                                  <span aria-hidden="true">&rarr;</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </Popover.Group>
              <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
                <Link
                  to="/test1"
                  className="text-base font-medium text-gray-500 whitespace-nowrap hover:text-gray-900"
                >
                  Sign in
                </Link>
                <Link
                  to="/test1"
                  className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm whitespace-nowrap hover:bg-indigo-700"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
            >
              <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="w-auto h-8"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt="Workflow"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="w-6 h-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {solutions.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                        >
                          <item.icon
                            className="flex-shrink-0 w-6 h-6 text-indigo-600"
                            aria-hidden="true"
                          />
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="px-5 py-6 space-y-6">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <Link
                      to="/test1"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Pricing
                    </Link>

                    <Link
                      to="/test1"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Docs
                    </Link>
                    {resources.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div>
                    <Link
                      to="/test1"
                      className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
                    >
                      Sign up
                    </Link>
                    <p className="mt-6 text-base font-medium text-center text-gray-500">
                      Existing customer?{' '}
                      <Link
                        to="/test1"
                        className="text-indigo-600 hover:text-indigo-500"
                      >
                        Sign in
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
