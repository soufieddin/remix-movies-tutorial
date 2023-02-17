import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import points from "../../../requests";
import type { Film} from "~/api/films";
import { getMedia} from "~/api/films";
import ListMedia from "~/components/ListMedia";


//SERVER
export const loader: LoaderFunction = async () => {
  return await getMedia(points.fetch_upComming_movies);
}

export const meta: MetaFunction = () => ({
    title: "Now Playing Movies | Movielix",
    description: "A list of films"
});

//CLIENT
export default function DefaultIndex() {
  const films: Film[] = useLoaderData().results;
  return (
    <>
        <h2 className="bg-blue-200 text-xl md:text-2xl lg:text-3xl p-4 text-center rounded">Upcoming Movies</h2>
        <ListMedia media={films} />
    </>
  )
};