import Image from "next/image";
import Link from "next/link";
import NavBar from "./componants/NavBar";
import { client } from "@/sanity/lib/client";
import { groupCategory } from "@/sanity/groupCategory";
import { Image as IImage } from "sanity";
import { urlForImage } from "@/sanity/lib/image";

export default function Home() {
  return (
    <>
      <NavBar />
    </>
  );
}
