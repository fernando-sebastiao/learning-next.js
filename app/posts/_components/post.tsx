export async function PostInfo({ id }: { id: string }) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const data = await response.json();

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}
