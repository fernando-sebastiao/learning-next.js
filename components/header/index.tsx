import Link from "next/link";

export function Header() {
  return (
    <header className="flex px-4 bg-zinc-900 text-white">
      <div className="flex items-center  w-full  justify-between max-w-7xl mx-auto">
        <div>NestJs</div>

        <div>
          <ul className="flex items-center justify-center gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
