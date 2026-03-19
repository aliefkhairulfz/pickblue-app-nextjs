import ExplorePage from "@/features/explore/pages/explore-page";

const categories = [
  "All",
  "Illustration",
  "Photography",
  "3D Art",
  "Pixel Art",
  "Concept Art",
  "Abstract",
  "1",
  "2",
  "3",
];

export async function generateStaticParams() {
  return categories.map((f) => ({
    category: f.split(" ").join("-").toLowerCase(),
  }));
}
export const dynamicParams = false;

export default ExplorePage;
