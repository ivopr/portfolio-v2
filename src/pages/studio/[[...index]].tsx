import { NextStudio } from "next-sanity/studio";
export { metadata } from "next-sanity/studio/metadata";

import config from "../../../sanity.config";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
