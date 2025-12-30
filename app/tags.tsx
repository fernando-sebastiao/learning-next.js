// export const revalidate = 60;
export default async function Tags() {
  //Um dalay de 3 segundos
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = fetch("http://localhost:3333/tags", {
    next: {
      tags: ["get-tags"],
    },
  });
  const data = await (await response).json();
  console.log(data);
  return (
    <ul>
      {data.map((item: any) => (
        <li className="font-bold text-xl" key={item.id}>
          {item.slug}
        </li>
      ))}
    </ul>
  );
}
