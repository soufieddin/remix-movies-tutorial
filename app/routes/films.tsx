import { Form, Link, NavLink, Outlet, useLocation } from '@remix-run/react'
import React from 'react'

export default function Films() {
    const location = useLocation()
    console.log(location)
  return (
    <div className="pt-5 pb-10 px-16 font-sans">
    <div className="flex flex-col lg:flex-row justify-between items-center ">
        <Link className="text-4xl font-bold text-center mb-8 lg:mb-0" to="/">MOVIELIX</Link>
        <Form action="search" method="get" className="flex lg:justify-end sm:justify-center">
        <label className="font-bold">
            <input 
            type="text" 
            name="title" 
            placeholder="Search..."
            className="border-2 rounded-l py-2 px-3"
            />
        </label>
        <button 
            type="submit" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
        >
            Seatrch
        </button>
        </Form>
    </div>
    <div className='flex justify-center lg:justify-end'>
      <ul className="flex flex-col lg:flex-row lg:justify-between items-center my-10">
      <li className="lg:ml-5">
          <Link to="." className={location.pathname==="/films" ? "active" : ""}>
            Upcoming
          </Link>
        </li>
        <li className="lg:ml-5">
          <NavLink to="trendings">
            Trending
          </NavLink>
        </li>
        <li className="lg:ml-5">
          <NavLink to="popular">
            Popular
          </NavLink>
        </li>
        <li className="lg:ml-5">
          <NavLink to="best">
            Best Rated
          </NavLink>
        </li>
        <li className="lg:ml-5">
          <NavLink to="now">
            Now Playing
          </NavLink>
        </li>
        <li className="lg:ml-5">
          <NavLink to="/random">
            Random
          </NavLink>
        </li>
      </ul>
    </div>
    <Outlet />
    </div>
  )
}
