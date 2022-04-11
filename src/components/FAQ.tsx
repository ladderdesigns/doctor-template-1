/* This example requires Tailwind CSS v2.0+ */
const faqs = [
  {
    id: 1,
    question: 'Where is the office located?',
    answer:
      'We are located in East Street Physician Center in Suite 100. We share a parking lot with Shasta Regional Medical Center.',
  },
  {
    id: 2,
    question: 'How long is an office visit?',
    answer: 'Please allow for up to an hour and a half for any office visits.',
  },
  {
    id: 3,
    question: 'Can I make an appointment on this website?',
    answer:
      'At this time, booking appointments on the web is not possible. Please call our office to book your next appointment. ',
  },
  {
    id: 4,
    question: 'Does your office take my insurance?',
    answer:
      "We are not currently taking any new parternships, HMO's, or medicare advantage plans.",
  },
  {
    id: 5,
    question: 'What should I wear before a nuclear stress test?',
    answer:
      'Please wear comfortable clothes and comfortable shoes for walking the treadmill.',
  },
  {
    id: 6,
    question: 'Do I need to fast before a nuclear stress test?',
    answer:
      'Yes, please fast for four hours before your appointment. This includes no caffeine and no chocolate for 24 hours. Additionally, please do not take any beta blockers. ',
  },
  {
    id: 7,
    question: 'Do I need to fast before a cholestral screening?',
    answer: 'Yes, please avoid food and caffeine for 12 hours beforehand.',
  },
  {
    id: 8,
    question: 'How should I prepare for an echocardiogram?',
    answer: 'No pereparation is required for an echocardiogram.',
  },
  {
    id: 9,
    question: 'What should be my diet when I am on Coumadin?',
    answer:
      "Coumadin is a blood-thinning medication that helps treat and prevent blood clots from occurring. There are specific foods and beverages that can weaken Coumadin's ability to prevent blood clots. When taking Coumadin avoid or consume small amounts of alcohol and cranberry juice. Additionally, avoid consuming foods that contain large amounts of Vitamin K such as kale, spinach, and broccoli. Consume these green leafy vegetables with a relatively fixed frequency, such as once or twice a week.",
  },

  // More questions...
];

export default function FAQ() {
  return (
    <div
      className="max-w-md mx-auto px-4 py-8 relative rounded-xl sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
      id="faq"
    >
      <div className="bg-white divide-gray-200 divide-y-2 max-w-7xl mx-auto px-4 py-16 rounded-xl shadow-sm sm:px-6 sm:py-24 lg:px-8">
        <h2 className="font-semibold text--gray-900 text-3xl tracking-tight sm:text-4xl">
          Frequently asked questions
        </h2>
        <div className="mt-6 pt-10">
          <dl className="space-y-10 md:gap-x-8 md:gap-y-12 md:grid md:grid-cols-2 md:space-y-0">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="font-medium leading-6 text-gray-900 text-lg">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
