import Link from "next/link";
import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();

  return (
    <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "16px",
    }}

    >
      <h1>About Page (Pages Router)</h1>
      <Link href="/">
        Go to Home - App Router (Link)
      </Link>
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        Go to Home - App Router (router.push)
      </button>
    </div>
  );
}
