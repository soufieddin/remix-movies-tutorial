import type { LoaderArgs, LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react';
import React from 'react'
import { getMediaById } from '~/api/films';

export const loader:LoaderFunction = async ({params, request}: LoaderArgs) => {
    return await getMediaById(params, request);
}

export default function $mediaId() {
    const media = useLoaderData();
    console.log(media)
  return (
    <div>{media.original_title || media.title || media.name}</div>
  )
}
