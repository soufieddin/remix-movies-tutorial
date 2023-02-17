import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import points from "requests";
import type { Film} from "~/api/films";
import { getMedia } from "~/api/films";
import ListMedia from "~/components/ListMedia";


//SERVER
export const loader: LoaderFunction = async () => {
  return await getMedia(points.fetch_popular_movies)
}

export const meta: MetaFunction = () => ({
    title: "Popular Movies | Movielix",
    description: "A list of films"
});

//CLIENT
export default function PopularIndex() {
  const films: Film[] = useLoaderData().results;
  return (
   <ListMedia media={films} text="Popular Movies"/>
  )
};