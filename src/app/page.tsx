import Link from "next/link";
import RouterButton from "./routerButton";

export default function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "16px",
      }}
    >
      <h1>Home Page (App Router)</h1>
      <Link href="/about">
        Go to About - Pages Router
      </Link>
      <RouterButton />
    </div>
  );
}
