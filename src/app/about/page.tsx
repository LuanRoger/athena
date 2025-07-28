import Link from "next/link";
import { BookOpen, Users, Target, Heart } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen">
      <section id="missao" className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-4xl font-bold text-gray-800">
              Nossa Missão
            </h2>
            <p className="mb-12 text-xl leading-relaxed text-gray-600">
              O projeto Athena nasceu da necessidade de centralizar e
              democratizar o acesso a materiais acadêmicos de qualidade.
              Acreditamos que o conhecimento deve ser acessível a todos,
              independentemente de barreiras geográficas ou econômicas.
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg bg-slate-100 p-5 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-800">
                  Conhecimento
                </h3>
                <p className="text-gray-600">
                  Reunimos documentos, artigos, livros e materiais acadêmicos em
                  uma única plataforma.
                </p>
              </div>

              <div className="rounded-lg bg-slate-100 p-5 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-800">
                  Colaboração
                </h3>
                <p className="text-gray-600">
                  Facilitamos a colaboração entre estudantes e pesquisadores de
                  todo o mundo.
                </p>
              </div>

              <div className="rounded-lg bg-slate-100 p-5 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-800">
                  Acessibilidade
                </h3>
                <p className="text-gray-600">
                  Tornamos o conhecimento acadêmico acessível e fácil de
                  encontrar para todos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
              Nossos Valores
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-xl bg-slate-100 p-8 shadow-sm">
                <div className="mb-4 flex items-center">
                  <Heart className="mr-3 h-6 w-6 text-red-500" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    Paixão pelo Conhecimento
                  </h3>
                </div>
                <p className="text-gray-600">
                  Acreditamos que a educação e o conhecimento são as ferramentas
                  mais poderosas para transformar vidas e sociedades.
                </p>
              </div>

              <div className="rounded-xl bg-slate-100 p-8 shadow-sm">
                <div className="mb-4 flex items-center">
                  <Users className="mr-3 h-6 w-6 text-blue-500" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    Comunidade
                  </h3>
                </div>
                <p className="text-gray-600">
                  Valorizamos a construção de uma comunidade acadêmica forte,
                  onde todos podem contribuir e se beneficiar mutuamente.
                </p>
              </div>

              <div className="rounded-xl bg-slate-100 p-8 shadow-sm">
                <div className="mb-4 flex items-center">
                  <Target className="mr-3 h-6 w-6 text-green-500" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    Excelência
                  </h3>
                </div>
                <p className="text-gray-600">
                  Buscamos constantemente a excelência em nossa plataforma,
                  garantindo qualidade e confiabilidade em todos os materiais.
                </p>
              </div>

              <div className="rounded-xl bg-slate-100 p-8 shadow-sm">
                <div className="mb-4 flex items-center">
                  <BookOpen className="mr-3 h-6 w-6 text-purple-500" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    Inovação
                  </h3>
                </div>
                <p className="text-gray-600">
                  Utilizamos tecnologia de ponta para criar soluções inovadoras
                  que facilitam o acesso e compartilhamento do conhecimento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-6 text-4xl font-bold text-gray-800">
              Faça Parte da Comunidade Athena
            </h2>
            <p className="mb-8 text-xl text-gray-600">
              Junte-se a milhares de estudantes e pesquisadores que já
              descobriram uma nova forma de acessar conhecimento acadêmico.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/register"
                className="rounded-lg bg-purple-600 px-8 py-3 font-medium text-white transition-colors hover:bg-purple-700"
              >
                Criar Conta Gratuita
              </Link>
              <Link
                href="/dashboard/all"
                className="rounded-lg border border-purple-600 px-8 py-3 font-medium text-purple-600 transition-colors hover:bg-purple-50"
              >
                Explorar Materiais
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
