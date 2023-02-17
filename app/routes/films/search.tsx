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
    title: "Search | Movielix",
    description: "A list of films"
});

//CLIENT
export default function SearchIndex() {
    console.log(useLoaderData())
    const query = useLoaderData().query;
    const films: Film[] = useLoaderData().result.films.results;
    return (
        <>
            <h2 className="bg-blue-200 text-xl md:text-2xl lg:text-3xl p-4 text-center rounded">{`Search Result "${query ? query : ""}"`}</h2>
            <ListMedia media={films} />
        </>
    )
};