const JournalPricing = () => {
  return (
    <div>
      <div className="text-center bg-[#f3f3f3] rounded-3xl py-12 mb-6">
        <h3 className="font-bold text-[28px]">Research/Thesis Paper Publish</h3>
      </div>
      <div>
        <section className="py-20 px-6 bg-base-200 rounded-3xl">
          <div className="container px-4 mx-auto">
            <div className="max-w-2xl mx-auto mb-16 text-center">
              <span className="font-bold tracking-wider uppercase text-red-400">
                Pricing
              </span>
              <h2 className="text-3xl font-bold lg:text-3xl">
                Choose your best plan for publish in our Books vibe journal
              </h2>
            </div>
            <div className="flex flex-wrap items-stretch -mx-4">
              <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0 mt-10">
                <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-white">
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold">Basic</h4>
                    <span className="text-6xl font-bold">Free</span>
                  </div>
                  <ul className="flex-1 mb-6 text-gray-400 dark:text-gray-600">
                    <li className="flex mb-2 space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 text-red-400 "
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>Publish locally</span>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-red-400  text-gray-900"
                  >
                    Get Started
                  </button>
                </div>
              </div>
              <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0 mt-5">
                <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-red-400 text-gray-900 ">
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold">General</h4>
                    <span className="text-6xl font-bold">
                      $24
                      <span className="text-sm tracking-wide">/year</span>
                    </span>
                  </div>
                  <ul className="flex-1 space-y-2">
                    <li className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>Everything in Free</span>
                    </li>
                  </ul>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded bg-gray-800 dark:bg-gray-100 text-red-400"
                  >
                    Get Started
                  </a>
                </div>
              </div>
              <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-white">
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold">Premium</h4>
                    <span className="text-6xl font-bold">
                      $72
                      <span className="text-sm tracking-wide">/year</span>
                    </span>
                  </div>
                  <ul className="space-y-2 text-gray-400 dark:text-gray-600">
                    <li className="flex items-start space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 text-red-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>Everything in Premium</span>
                    </li>
                  </ul>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="inline-block w-full px-5 py-3 font-semibold tracking-wider text-center rounded bg-red-400  text-gray-900 "
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default JournalPricing;
