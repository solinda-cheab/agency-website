import { getStoryblokApi } from "@storyblok/react";

export async function getHomeStory() {
  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.get("cdn/stories/home", {
    version: "draft",
  });

  return data.story;
}