"use client";
import Link from "next/link";
import Image from "next/image";
import Bn from "../../../public/images/banner.png";
import { MoveRight } from "lucide-react";
export default function Banner() {
  return (
    <div className="text-primary-content flex h-[600px] flex-col items-center justify-between gap-8 rounded-2xl bg-[#6782fb] p-14 md:flex-row md:gap-12">
      <div className="flex-1 text-center md:text-left">
        <h2 className="mb-2 text-4xl font-bold text-[#0a0047] sm:text-6xl">
          Explore os materiais Acadêmicos
        </h2>
        <p className="mb-4 text-2xl text-[#0a0047] opacity-90 sm:text-4xl">
          Encontre documentos, artigos, livros e muito mais em um só lugar.
        </p>
        <Link
          href="/about"
          className="link link-secondary text-2xl font-semibold text-[#0a0047]"
        >
          <div className="flex items-center gap-5">
            Conheça projeto Athena
            <MoveRight size={50} />
          </div>
        </Link>
      </div>

      <div className="w-full flex-shrink-0 md:w-auto">
        <div className="relative h-[250px] w-full rounded-4xl bg-[#acbaff] sm:h-[400px] md:h-[450px] md:w-[533px]">
          <Image
            src={Bn}
            alt="Duas pessoas explorando materiais acadêmicos"
            fill
            style={{ objectFit: "contain" }}
            className="absolute rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
