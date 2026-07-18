import { getStoryblokApi } from "@storyblok/react";

export async function getHomeStory() {
  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.get("cdn/stories/home", {
    version: "draft",
  });

  return data.story;
}

/**
 * Fetch all "project" entries from Storyblok for the Portfolio page.
 *
 * EXPECTED STORYBLOK SETUP (create this once in the Storyblok space):
 *   1. A content type (component) named "project" with fields:
 *        - title        (Text)
 *        - description  (Textarea)
 *        - image        (Asset)
 *        - alt          (Text)          — image alt text
 *        - category     (Text or Single-Option, e.g. Advertising/Branding/Content)
 *        - offset       (Boolean)       — optional, matches the staggered grid layout
 *   2. Create one Story per project, saved inside a folder, e.g. "projects/".
 *   3. Publish the stories (or leave as draft while VITE_STORYBLOK_TOKEN is a
 *      preview/draft token during development).
 *
 * Returns [] (never throws) if Storyblok isn't reachable/configured so the
 * Portfolio page can gracefully fall back to the local static project list.
 */
export async function getPortfolioStories() {
  try {
    const storyblokApi = getStoryblokApi();

    const { data } = await storyblokApi.get("cdn/stories", {
      starts_with: "projects/",
      content_type: "project",
      version: import.meta.env.PROD ? "published" : "draft",
    });

    return (data?.stories || []).map((story) => {
      const content = story.content || {};
      return {
        id: story.uuid || story.slug,
        image: content.image?.filename || "",
        alt: content.alt || content.title || "",
        title: content.title || "",
        description: content.description || "",
        category: content.category || "",
        offset: Boolean(content.offset),
      };
    });
  } catch (error) {
    console.warn("Storyblok: failed to load portfolio stories, falling back to static data.", error);
    return [];
  }
}