import { storyblokInit, apiPlugin } from "@storyblok/react";

storyblokInit({
  accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
  use: [apiPlugin],
});