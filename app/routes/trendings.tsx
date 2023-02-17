import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import {  useLoaderData } from "@remix-run/react";
import points from "requests";
import type { Film} from "~/api/films";
import { getMedia} from "~/api/films";
import ListMedia from "~/components/ListMedia";


//SERVER
export const loader: LoaderFunction = async ({request}) => {
  const url = new URL(request.url);
    let page = url.searchParams.get("page");
  const result = await getMedia(points.fetch_trending);
  return { result, page };
}

export const meta: MetaFunction = () => ({
    title: "Trending Movies | Movielix",
    description: "A list of films"
});

//CLIENT
export default function TrendingIndex() {
  const films: Film[] = useLoaderData().result.results;
  return (
   <ListMedia media={films} text="Trending Movies"/>
  )
};