import { Categories } from "@/components/categories/categories";
import Banner from "@/components/banner/banner";
import GeneralFilesGrid from "@/components/general-files-grid";
import Link from "next/link";

export default async function Page() {
  return (
    <main className="flex flex-col gap-8 py-4">
      <section className="flex flex-col gap-4">
        <Banner />
      </section>
      <section id="categories" className="flex flex-col gap-10">
        <h2 className="text-center text-2xl font-bold"> Categorias</h2>
        <Categories />
      </section>
      <section className="flex flex-col justify-center gap-10">
        <h2 className="self-center text-2xl font-bold">Últimos adicionados</h2>
        <div className="flex flex-col gap-4">
          <GeneralFilesGrid
            limit={5}
            orderBy="createdAt"
            className="justify-between"
          />
          <Link href="/dashboard/all" className="self-end">
            <button className="btn btn-link">Ver todos</button>
          </Link>
        </div>
      </section>
    </main>
  );
}
