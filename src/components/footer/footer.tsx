import { AthenaIconLight } from "@/components/icons";
import LinkGroup from "./link-group";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex h-fit items-center justify-center lg:px-15 lg:pt-10 lg:pb-15">
      <div className="bg-primary text-primary-content size-full px-3 py-5 lg:rounded-2xl lg:px-20 lg:py-10">
        <div className="flex flex-col gap-x-40 lg:flex-row">
          <AthenaIconLight className="size-40 self-center" />
          <LinkGroup />
        </div>
        <span className="my-5 inline-block w-full border-t-2 border-t-white"></span>
        <div className="flex h-fit flex-col items-center justify-between lg:flex-row">
          <Image
            src="/images/ufc-emblem.png"
            alt="Emblema da UFC Campus Russas"
            width={300}
            height={200}
            className="lg:w-[19rem]"
          />
          <p className="mt-5 text-center">
            © 2025 Athena. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
