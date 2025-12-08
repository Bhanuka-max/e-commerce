'use client'

import { Fragment, useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = {
  categories: [
    {
      id: 'flowers',
      name: 'Flowers',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'fresh_flowers',
          name: 'Fresh Flowers',
          items: [
            { name: 'Rose Arrangements', href: '#' },
            { name: 'Birthday', href: '#' },
            { name: 'Love & Romance', href: '#' },
            { name: 'Anniversary', href: '#' },
            { name: 'Vase Arrangements', href: '#' },
            { name: 'Award Ceremony', href: '#' },
            { name: 'Opening Ceremony', href: '#' },
            { name: 'For Him/Her', href: '#' },
            { name: 'Thanks', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'HandBags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Men Accessories', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        /*{
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Significant Other', href: '#' },
          ],
        },*/
      ],
    },
    {
      id: 'ifts ',
      name: 'Gifts ',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'All_perfumes',
          name: 'Perfumes',
          items: [
            { name: 'For Men', href: '#' },
            { name: 'For Women', href: '#' },
            { name: 'Calvin Klein', href: '#' },
            { name: 'Hugo Boss', href: '#' },
            { name: 'Burberry', href: '#' },
            { name: 'Perfume Gift Sets', href: '#' },
            { name: 'More Categories', href: '#' },
          ],
        },
        {
          id: 'gifts',
          name: 'Gift Sets',
          items: [
            { name: 'Express your Love', href: '#' },
            { name: 'For Him/Her', href: '#' },
            { name: 'Gourmet Food', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Chocolate & Sweets', href: '#' },
            { name: 'Jewellery', href: '#' },
          ],
        },
        /*{
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
          ],
        },*/
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}

export default function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
          >
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-gray-900 data-selected:border-indigo-600 data-selected:text-indigo-600"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel key={category.name} className="space-y-10 px-4 pt-10 pb-8">
                    <div className="grid grid-cols-2 gap-x-4">
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative text-sm">
                          <img
                            alt={item.imageAlt}
                            src={item.imageSrc}
                            className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                          />
                          <a href={item.href} className="mt-6 block font-medium text-gray-900">
                            <span aria-hidden="true" className="absolute inset-0 z-10" />
                            {item.name}
                          </a>
                          <p aria-hidden="true" className="mt-1">
                            Shop now
                          </p>
                        </div>
                      ))}
                    </div>
                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                          {section.name}
                        </p>
                        <ul
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className="mt-6 flex flex-col space-y-6"
                        >
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <a href={item.href} className="-m-2 block p-2 text-gray-500">
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                    {page.name}
                  </a>
                </div>
              ))}
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <button type="button" className="-m-2 block p-2 font-medium text-gray-900">
                  Sign in
                </button>
              </div>
              <div className="flow-root">
                <button type="button" className="-m-2 block p-2 font-medium text-gray-900">
                  Create account
                </button>
              </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-6">
              <button type="button" className="-m-2 flex items-center p-2 bg-transparent border-none cursor-pointer">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/flags/flag-canadata:image/png;base64,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da.svg"
                  className="block h-auto w-5 shrink-0"
                />
                <span className="ml-3 block text-base font-medium text-gray-900">LKR</span>
                <span className="sr-only">, change currency</span>
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-pink-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on Your flower boutique orders over $100
        </p>
        
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <button type="button" className="bg-transparent border-none p-0 m-0 cursor-pointer">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=pink&shade=600"
                    className="h-8 w-auto"
                  />
                </button>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      <div className="relative flex">
                        <PopoverButton className="group relative flex items-center justify-center text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-open:text-indigo-600">
                          {category.name}
                          <span
                            aria-hidden="true"
                            className="absolute inset-x-0 -bottom-px z-30 h-0.5 transition duration-200 ease-out group-data-open:bg-indigo-600"
                          />
                        </PopoverButton>
                      </div>
                      <PopoverPanel
                        transition
                        className="absolute inset-x-0 top-full z-20 w-full bg-white text-sm text-gray-500 transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                      >
                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                        <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow-sm" />
                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                {category.featured.map((item) => (
                                  <div key={item.name} className="group relative text-base sm:text-sm">
                                    <img
                                      alt={item.imageAlt}
                                      src={item.imageSrc}
                                      className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                                    />
                                    <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                      <span aria-hidden="true" className="absolute inset-0 z-10" />
                                      {item.name}
                                    </a>
                                    <p aria-hidden="true" className="mt-1">
                                      Shop now
                                    </p>
                                  </div>
                                ))}
                              </div>
                              <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                {category.sections.map((section) => (
                                  <div key={section.name}>
                                    <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                      {section.name}
                                    </p>
                                     <ul
                                      role="list"
                                      aria-labelledby={`${section.name}-heading`}
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >*/
                                      {section.items.map((item) => (
                                        <li key={item.name} className="flex">
                                          <a href={item.href} className="hover:text-gray-800">
                                            {item.name}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </PopoverPanel>
                    </Popover>
                  ))}
                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </PopoverGroup>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <button type="button" className="text-sm font-medium text-gray-700 hover:text-gray-800 bg-transparent border-none cursor-pointer">
                    Sign in
                  </button>
                  <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                  <button type="button" className="text-sm font-medium text-gray-700 hover:text-gray-800 bg-transparent border-none cursor-pointer">
                    Create account
                  </button>
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <button type="button" className="flex items-center text-gray-700 hover:text-gray-800 bg-transparent border-none cursor-pointer">
                    <img
                      alt=""
                      src="data:image/png;base64,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"
                      className="block h-auto w-5 shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">LKR</span>
                    <span className="sr-only">, change currency</span>
                  </button>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  
                  <a href="www.google.com" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="www.google.com" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
