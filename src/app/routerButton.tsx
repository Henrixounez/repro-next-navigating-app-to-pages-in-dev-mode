"use client";

import { useRouter } from "next/navigation";

export default function RouterButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push("/about");
      }}
    >
      Go to About - Pages Router (router.push)
    </button>
  );
}