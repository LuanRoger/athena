import { AthenaIconLight } from "@/components/icons";
import LinkGroup from "./link-group";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center lg:h-[28rem] lg:px-15 lg:pt-10 lg:pb-15">
      <div className="bg-primary text-primary-content size-full rounded-2xl lg:px-20 lg:py-10">
        <div className="flex flex-row gap-x-40">
          <AthenaIconLight className="size-40" />
          <LinkGroup />
        </div>
        <span className="inline-block w-full border-t-2 border-t-white lg:my-5"></span>
        <div>
          <p className="text-center text-xs lg:mt-5">
            © 2023 Athena. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
