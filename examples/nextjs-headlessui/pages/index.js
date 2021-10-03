import 'tailwindcss/tailwind.css'

import { Transition, Menu } from "@headlessui/react";

export default function HomePage() {
  return (
    <>
      <div className="flex w-full min-h-screen items-center justify-center bg-base-300 text-base-content" data-theme="dark">
        <Menu as="div" className="relative inline-block">
          {({ open }) => (
            <>
              <div>
                <Menu.Button className="btn btn-primary">
                  Menu
                </Menu.Button>
              </div>
              <Transition
                show={open}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  static
                  className="focus:outline-none menu p-3 shadow-lg bg-base-100 rounded-box rounded-box absolute w-56 mt-2"
                >
                  <Menu.Item>
                    <li><a>Item 1</a></li>
                  </Menu.Item>
                  <Menu.Item>
                    <li><a>Item 2</a></li>
                  </Menu.Item>
                  <Menu.Item>
                    <li><a>Item 3</a></li>
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </>
  );
}
