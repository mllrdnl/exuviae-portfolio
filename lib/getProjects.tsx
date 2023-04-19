export default async function getProjects() {
  const res = await fetch("../data.json");

  if (!res.ok) throw new Error("Failed to fetch projects");
  return res.json();
}
