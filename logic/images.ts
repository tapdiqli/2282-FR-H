const BLOB_PREFIX =
  "https://qokbynptuwcxxogg.public.blob.vercel-storage.com/partners/";

export function imageMarque(filename: string | null | undefined): string {
  if (!filename) return "/placeholder.svg";
  if (filename.startsWith("http")) return filename;
  if (filename.startsWith("/")) return filename;
  if (filename.startsWith(BLOB_PREFIX)) {
    return `/marques/${filename.replace(BLOB_PREFIX, "")}`;
  }
  return `/${filename}`;
}
