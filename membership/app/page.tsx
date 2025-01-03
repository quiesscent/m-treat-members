"use client";
import { Link, Button } from "@nextui-org/react";
export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <h1 className="font-bold mt-10 text-[100px]">Welcome to M-Treat</h1>
        <h1 className="font-bold mt-5 text-[50px]">
          Your Health, Our Priority
        </h1>
        <p className="mt-3 text-[30px]">
          Discover a new way to manage your health with our simplified
          healthcare platform.
        </p>
        <Button as={Link} color="success" href="/login" variant="solid">
          Continue
        </Button>
        <Button as={Link} color="primary" href="/register" variant="solid">
          Get Started
        </Button>
      </section>
    </>
  );
}
