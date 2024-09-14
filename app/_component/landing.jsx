import React from 'react'

function Landing() {
  return (
    <section
      className="relative bg-gray-400 bg-[url('/sjpg.jpg')] bg-cover bg-no-repeat"
    >
      <div
        className="absolute inset-0 "
      ></div>

      <div
        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
      >
        <div className="ltr:sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
            Discover Your Next Great Read

            <strong className="block font-extrabold text-white pb-14 border-b-2 border-gray-200"> At Our Bookstore </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed ">
            Explore a world of literature with our wide selection of books. Whether you are looking for
            bestsellers or hidden gems, we have something for every book lover!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Landing
