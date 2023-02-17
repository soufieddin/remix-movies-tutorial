import { Link} from "@remix-run/react";
import type { Film } from "~/api/films";
export default function ListMedia({media}:{media:Film[]}) {
  const base_img_url = 'https://image.tmdb.org/t/p/original';

  return (
      <ul className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-10">
        {media?.filter(item => item.poster_path || item.backdrop_path || item.profile_path ).map((item) => (
          <li
          key={item.id}
          className="hover:shadow-2xl hover:scale-105 hover:font-bold  transform transition duration-500 cursor-pointer border border-blue-200 rounded"
          >
        <Link to ={`/films/${item.id}?type=${item.media_type || "movie"}`} prefetch="intent">
            <img className="rounded" src={`${base_img_url}${item.poster_path || item.backdrop_path || item.profile_path}`} alt={item.title || item.name} />
            <div className="flex justify-between items-center p-2">
                <h6>
                    {item.title || item.name}
                </h6>
                <p className="bg-blue-200 p-2 h-10 rounded">
                    {item.vote_average ? item.vote_average.toFixed(1) : 0}
                </p>
            </div>
          </Link>
          </li>
        ))}
      </ul>
  )
};