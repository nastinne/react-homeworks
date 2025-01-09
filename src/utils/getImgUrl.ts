export function getImgUrl(image: string): string {
  return new URL(`/src/assets/images/${image}`, import.meta.url).href;
}
