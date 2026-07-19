import { useStoryblok } from "@storyblok/react";

export default function Portfolio() {
  const story = useStoryblok("portfolio", {
    version: "published",
  });

  if (!story) return <p>Loading...</p>;

  return (
    <div>
      <h1>{story.content.headline}</h1>
      <p>{story.content.description}</p>
    </div>
  );
}