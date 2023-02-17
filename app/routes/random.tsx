import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import points from "requests";
import type { Film } from "~/api/films";
import { getMedia } from "~/api/films";

export const loader: LoaderFunction = async () => {
    const url = Object.values(points)[Math.floor(Math.random()*Object.keys(points).length)]
    return await getMedia(url)
}


export const meta: MetaFunction = () => ({
    title: "Random | Movielix"
});

//CLIENT
export default function RandomIndex() {
    const base_img_url = 'https://image.tmdb.org/t/p/original';
    const item: Film = useLoaderData().results[Math.floor(Math.random() * useLoaderData().results.length)];
    return (
        <div className="grid h-screen place-items-center bg-blue-200 px-4 sm:px-4 md:px-4 lg:px-0">

            <Link to ={`/films/${item.id}?type=${item.media_type || "movie"}`} prefetch="intent"  className="hover:shadow-2xl hover:scale-105 hover:font-bold  transform transition duration-500 cursor-pointer border border-white rounded w-100 sm:w-1/2 md:w-1/3 lg:w-1/4">
            <img className="rounded" src={`${base_img_url}${item.poster_path || item.backdrop_path || item.profile_path}`} alt={item.title || item.name} />
            <div className="flex justify-between items-center p-2 bg-white">
                <h6>
                    {item.title || item.name}
                </h6>
                <p className="bg-blue-200 p-2 h-10 rounded">
                    {item.vote_average ? item.vote_average.toFixed(1) : 0}
                </p>
            </div>
          </Link>
          <div className="w-90 sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-between items-center">
            <Link to="/random" className="bg-white p-4 text-blue-600 rounded"> Regenerate </Link>
            <Link to="/films" className="bg-white p-4 text-blue-600 rounded"> Lists </Link>
          </div>
        </div>
    )
};