"use client";
import Link from "next/link";
import Image from "next/image";
import Bn from "../../../public/images/banner.png";
import { MoveRight } from "lucide-react";
export default function Banner() {
  return (
    <div className="text-primary-content flex h-auto flex-col items-center justify-between rounded-2xl bg-[#6782fb] p-6 sm:gap-8 sm:p-14 lg:flex-row lg:gap-12">
      <div className="flex-1 text-center md:text-left">
        <h2 className="mb-2 text-2xl font-bold text-[#0a0047] sm:text-4xl lg:text-6xl">
          Explore os materiais Acadêmicos
        </h2>
        <p className="sm:text-md mb-4 text-xl text-[#0a0047] opacity-90 lg:text-4xl">
          Encontre documentos, artigos, livros e muito mais em um só lugar.
        </p>
        <Link
          href="/dashboard"
          className="link link-secondary text-xl font-semibold text-[#0a0047]"
        >
          <div className="flex items-center gap-5 text-sm lg:text-xl">
            Conheça projeto Athena
            <MoveRight size={50} />
          </div>
        </Link>
      </div>

      <div className="w-full flex-shrink-0 md:w-auto">
        <div className="relative h-[250px] w-full rounded-4xl bg-[#acbaff] sm:h-[400px] md:h-[350px] md:w-[433px] lg:h-[350px] lg:w-[433px] xl:h-[450px] xl:w-[533px]">
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
