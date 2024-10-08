import React from 'react'

const Navbar = () => {
  return (
    <header className="bg-transparent z-20">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between gap-10">
      

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-start gap-10 text-sm ml-10">
            <li>
              <a className="text-gray-100 transition hover:text-gray-200/75" href="#"> About </a>
            </li>

            <li>
              <a className="text-gray-100 transition hover:text-gray-200/75" href="#"> Services </a>
            </li>

            <li>
              <a className="text-gray-100 transition hover:text-gray-200/75" href="#"> Projects </a>
            </li>

            <li>
              <a className="text-gray-100 transition hover:text-gray-200/75" href="#"> Blog </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4 mr-24">
        <div className="sm:flex sm:gap-4">
         

          <div className="hidden sm:flex">
            <a
              className="rounded-md bg-gray-200 px-5 py-2.5 text-sm font-medium text-slate-600"
              href="#"
            >
              Register
            </a>
          </div>
        </div>

        <div className="block md:hidden">
          <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75" title="Toggle Navigation">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
  )
}

export default Navbar