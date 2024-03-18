"use client";
import { useRouter } from "next/navigation";

export function HomeRedirect() {
  const router = useRouter();
  return router.push("/home");
}
