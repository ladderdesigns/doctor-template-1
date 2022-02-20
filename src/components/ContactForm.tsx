import { MailIcon, PhoneIcon } from '@heroicons/react/outline';

export default function Example() {
  return (
    <div className="bg-white max-w-7xl mx-auto my-10 relative">
      <div className="absolute inset-0">
        <div className="absolute bg-gray-50 inset-y-0 left-0 w-1/2" />
      </div>
      <div className="mx-auto relative lg:grid lg:grid-cols-5">
        <div className="bg-white px-4 py-16 rounded-xl shadow-xl sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="font-semibold text-3xl text-gray-900 tracking-tight sm:text-4xl">
              Get in touch
            </h2>
            <p className="leading-6 mt-3 text-gray-500 text-lg">
              Leave us a message and we will get back to you as soon as
              possible.
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div>
                <dt className="sr-only">Postal address</dt>
                <dd>
                  <p>1555 East St STE 100</p>
                  <p>Redding, California 96001</p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Postal address</dt>
                <dd>
                  <p>Sunday - Thursday: 9 AM - 5 PM</p>
                  <p>Friday: 9 AM - 12 PM</p>
                  <p>Saturday: Closed</p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon
                    className="flex-shrink-0 h-6 text-gray-400 w-6"
                    aria-hidden="true"
                  />
                  <span className="ml-3">
                    <a
                      href="tel:530-123-4567"
                      className="hover:text-gray-900 text-base text-gray-500 underline"
                    >
                      +1 (530) 244-4471
                    </a>
                  </span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <MailIcon
                    className="flex-shrink-0 h-6 text-gray-400 w-6"
                    aria-hidden="true"
                  />
                  <span className="ml-3">
                    <a
                      href="mailto:info@drchandramouli.com"
                      className="hover:text-gray-900 text-base text-gray-500 underline"
                    >
                      info@drchandramouli.com
                    </a>
                  </span>
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-base text-gray-500">
              Looking for more information?{' '}
              <a href="#" className="font-medium text-gray-700 underline">
                Check out our <a href="#FAQ">FAQ </a>
              </a>
              .
            </p>
          </div>
        </div>
        <div className="bg-white px-4 py-16 rounded-xl shadow-xl sm:px-6 lg:col-span-3 lg:px-8 lg:py-24 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form action="#" method="POST" className="gap-y-6 grid grid-cols-1">
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Full name
                </label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="name"
                  className="block border-gray-300 focus:border-blue-800 focus:ring-indigo-500 placeholder-gray-500 px-4 py-3 rounded-md shadow-sm w-full"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block border-gray-300 focus:border-blue-800 focus:ring-indigo-500 placeholder-gray-500 px-4 py-3 rounded-md shadow-sm w-full"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block border-gray-300 focus:border-blue-800 focus:ring-indigo-500 placeholder-gray-500 px-4 py-3 rounded-md shadow-sm w-full"
                  placeholder="Phone"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block border border-gray-300 focus:border-blue-800 focus:ring-indigo-500 placeholder-gray-500 px-4 py-3 rounded-md shadow-sm w-full"
                  placeholder="Message"
                  defaultValue={''}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-blue-800 border border-transparent focus:blue-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 font-medium hover:bg-blue-900 inline-flex justify-center px-6 py-3 rounded-md shadow-sm text-base text-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
