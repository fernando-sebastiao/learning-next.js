export const revalidate = 60;
export async function GET() {
  const response = await fetch("https://dummyjson.com/posts", {
    // next: { revalidate: 60 },
  });
  const data: any = await response.json();

  return Response.json({ data });
}
