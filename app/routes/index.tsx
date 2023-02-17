import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import {  useLoaderData } from "@remix-run/react";
import points from "requests";
import type { Film} from "~/api/films";
import { getMedia} from "~/api/films";
import ListMedia from "~/components/ListMedia";


//SERVER
export const loader: LoaderFunction = async () => {
  return await getMedia(points.fetch_trending);
}

export const meta: MetaFunction = () => ({
    title: "Trending Movies | Movielix",
    description: "A list of films"
});

//CLIENT
export default function TrendingIndex() {
  const films: Film[] = useLoaderData().results;
  return (
   <ListMedia media={films} text="Trending Movies"/>
  )
};