import type { MetaFunction } from "@remix-run/node";
import {  NavLink } from "@remix-run/react";


export const meta: MetaFunction = () => ({
    title: "HOME | Movielix"
});

//CLIENT
export default function TrendingIndex() {
  return (
   <div className="grid h-screen place-items-center bg-blue-200">
     <h1 className="text-5xl">MOVIELIX</h1>
     <ul className="flex flex-col justify-center items-center lg:flex-row lg:justify-start lg:items-start ">
     <li className="lg:ml-5 ">
      <NavLink to="films" prefetch="intent" className="text-lg">
        Upcoming Movies
      </NavLink>
    </li>
     <li className="lg:ml-5 ">
      <NavLink to="films/trendings" prefetch="intent" className="text-lg">
        Trending Movies
      </NavLink>
    </li>
    <li className="m-4 lg:m-0 lg:ml-5">
      <NavLink to="films/popular" prefetch="intent" className="text-lg">
        Popular Movies
      </NavLink>
    </li>
    <li className="lg:ml-5">
      <NavLink to="films/best" prefetch="intent" className="text-lg">
        Best Rated Movies
      </NavLink>
    </li>
    <li className="lg:ml-5">
      <NavLink to="films/best" prefetch="intent" className="text-lg">
        Now Playing Movies
      </NavLink>
    </li>
    <li className="lg:ml-5">
      <NavLink to="random" prefetch="intent" className="text-lg">
       Random Movie
      </NavLink>
    </li>
     </ul>
   </div>
  )
};