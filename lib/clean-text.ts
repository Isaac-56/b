export function cleanText(value: string) {
  return value
    .replaceAll("Â·", "/")
    .replaceAll("â€”", "-")
    .replaceAll("â€“", "-")
    .replaceAll("â€™", "'")
    .replaceAll("â€œ", '"')
    .replaceAll("â€", '"')
    .replaceAll("â€¦", "...")
    .replaceAll("Â", "")
    .trim();
}