export type Film = {
    adult?: boolean;
    backdrop_path?: string;
    profile_path?: string;
    id: number;
    title?: string;
    name?: string;
    original_language?: string;
    original_title?: string;
    overview?: string;
    poster_path?: string;
    media_type?: string;
    genre_ids: number[];
    popularity?: number;
    release_date?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
}

export async function getMedia(path:string) {
    const response = await fetch(path)
    const films: Film[] = await response.json();
    return films;
}

export async function getSearchMedia(request: Request) {
    const url = new URL(request.url);
    let query = url.searchParams.get("title");
    const response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
    const films: Film[] = await response.json();
    query = "";
    return {films, query};
}

export async function getMediaById (params: any, request:Request) {
    const mediaId = params.mediaId;
    const url = new URL(request.url);
    let type = url.searchParams.get("type");
    const response = await fetch(`https://api.themoviedb.org/3/${type}/${mediaId}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`)
    const film = response.json();
    return film;

}

// export async function getCombi(request: Request, path: string) {
//     const url = new URL(request.url);
//   const query = url.searchParams.get("title");
//   if(!query || query.length ===0){
//     return await getMedia(path)
//   }
//   return await getSearchMedia(query);
// }

//https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false