export async function fetchFolders() {
  const response = await fetch("http://localhost:3000/folders");
  if (!response.ok) {
    throw new Error("Failed to fetch folders");
  }
  return await response.json();
}
