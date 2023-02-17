import { Form, Link, NavLink } from "@remix-run/react";
import type { Film } from "~/api/films";
export default function ListMedia({media, text}:{media:Film[], text:string}) {
  const base_img_url = 'https://image.tmdb.org/t/p/original';

  return (
    <div className="pt-5 pb-10 px-16 font-sans">
      <Form action="/search" method="get" className="flex lg:justify-end sm:justify-center">
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
      <div className="flex flex-col lg:flex-row justify-between items-center ">
        <h1 className="text-5xl font-bold text-center">{text}</h1>
        <ul className="flex flex-col lg:flex-row lg:justify-between items-center my-10">
          <li className="lg:ml-5">
            <NavLink to="/">
              Trending Movies
            </NavLink>
          </li>
          <li className="lg:ml-5">
            <NavLink to="/popular">
              Popular Movies
            </NavLink>
          </li>
          <li className="lg:ml-5">
            <NavLink to="/now">
              Now Playing Movies
            </NavLink>
          </li>
        </ul>
      </div>

      <ul className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-10">
        {media.filter(item => item.poster_path || item.backdrop_path || item.profile_path ).map((item) => (
          <li
          key={item.id}
          className="hover:shadow-2xl hover:scale-105 hover:font-bold  transform transition duration-500 cursor-pointer"
          >
        <Link to ={`/${item.id}?type=${item.media_type}`}>
            <div>{item.title || item.name}</div>
            <img className="rounded" src={`${base_img_url}${item.poster_path || item.backdrop_path || item.profile_path}`} alt={item.title || item.name} />
          </Link>
          </li>
        ))}
      </ul>
    </div>
  )
};