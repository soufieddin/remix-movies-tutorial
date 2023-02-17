import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { Film} from "~/api/films";
import { getSearchMedia} from "~/api/films";
import ListMedia from "~/components/ListMedia";


//SERVER
export const loader: LoaderFunction = async ({request}) => {
  return await getSearchMedia(request);
}

export const meta: MetaFunction = () => ({
    title: "Now Movies | Movielix",
    description: "A list of films"
});

//CLIENT
export default function SearchIndex() {
    const query = useLoaderData().query;
    const films: Film[] = useLoaderData().films.results;
    return (
        <ListMedia media={films} text={query}/>
    )
};