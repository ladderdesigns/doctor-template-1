/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';

const faqs = [
  {
    service: "What's the best thing about Switzerland?",
    definition:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    service: "What's the worst thing about a pineapple?",
    definition:
      "I also don't know the answer to this. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <div className="bg-white max-w-7xl mx-auto my-10 rounded-xl">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="divide-gray-200 divide-y-2 max-w-3xl mx-auto">
          <h2 className="font-semibold text-3xl text-center tracking-tight sm:text-4xl">
            What we provide
          </h2>
          <dl className="divide-gray-200 divide-y mt-6 space-y-6">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.service} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex items-start justify-between text-gray-400 text-left w-full">
                        <span className="font-medium text-gray-900">
                          {faq.service}
                        </span>
                        <span className="flex h-7 items-center ml-6">
                          <ChevronDownIcon
                            className={classNames(
                              open ? '-rotate-180' : 'rotate-0',
                              'h-6 transform w-6',
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">
                        {faq.definition}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
