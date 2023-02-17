import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import {  NavLink, useLoaderData } from "@remix-run/react";
import points from "requests";
import type { Film} from "~/api/films";
import { getMedia} from "~/api/films";
import ListMedia from "~/components/ListMedia";

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
            <NavLink to="/trendings" prefetch="intent" className="text-lg">
              Trending Movies
            </NavLink>
          </li>
          <li className="m-4 lg:m-0 lg:ml-5">
            <NavLink to="/popular" prefetch="intent" className="text-lg">
              Popular Movies
            </NavLink>
          </li>
          <li className="lg:ml-5">
            <NavLink to="/now" prefetch="intent" className="text-lg">
              Now Playing Movies
            </NavLink>
          </li>
     </ul>
   </div>
  )
};