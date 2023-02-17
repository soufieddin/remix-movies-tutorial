import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { ReactNode } from "react";
import styles from "~/tailwind.css"
import globalStylesUrl from "~/global.css";
export const links: LinksFunction = () => {
  return [{
    rel: "stylesheet",
    href: globalStylesUrl,
  },
  {
    rel: "stylesheet", 
    href: styles
  }
]
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "MovieLix",
  viewport: "width=device-width,initial-scale=1",
});

function Document({children}:{children:ReactNode}) {
  return (
    <html lang="en">
    <head>
      <Meta />
      <Links />
    </head>
    <body>
      {children}
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </body>
  </html>
  )
}
export default function App() {
  return (
   <Document>
     <Outlet />
   </Document>
  );
}

