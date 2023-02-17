import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { Film} from "~/api/films";
import { getSearchMedia} from "~/api/films";
import ListMedia from "~/components/ListMedia";


//SERVER
export const loader: LoaderFunction = async ({request}) => {
    const url = new URL(request.url);
    let query = url.searchParams.get("title");
    const result =  await getSearchMedia(request);
    return {result, query}
}

export const meta: MetaFunction = () => ({
    title: "Now Movies | Movielix",
    description: "A list of films"
});

//CLIENT
export default function SearchIndex() {
    console.log(useLoaderData())
    const query = useLoaderData().query;
    const films: Film[] = useLoaderData().result.films.results;
    return (
        <ListMedia media={films} text={`Search Result "${query ? query : ""}"`}/>
    )
};