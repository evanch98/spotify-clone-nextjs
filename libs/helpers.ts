import { Price } from "@/types";

export const getURL = () => {
  let url =
    process.env.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
    process.env.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
    "http://localhost:3000/";

  // if the url does not include http (http is for localhost), add https
  url = url.includes("http") ? url : `https://${url}`;
  // if for some reason, the url does not include the trailing slash, add the trailing slash
  url = url.charAt(url.length - 1) === "/" ? url : `${url}/`;

  return url;
};
