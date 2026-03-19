import ArtworkIdPage from "@/features/artwork/pages/artwork-id-page";

const categories = [
  "959F1D7C-D9E4-403B-A25C-A9DE9F5B66E6",
  "2858D697-B5CA-475C-9F8C-7D33C8297E11",
  "EA6C7F08-4716-41EF-9104-25E5D8E8452A",
  "AC91467F-5AEF-4F79-8932-288BA819CAED",
  "F31D6516-B007-45ED-A8D9-3BC3D9B6861D",
];

export async function generateStaticParams() {
  return categories.map((f) => ({
    id: f,
  }));
}
export const dynamicParams = false;

export default ArtworkIdPage;
