import CategoriesGrid from "./categories-grid";
import {
  Atom,
  BarChart,
  Binary,
  Brain,
  Briefcase,
  FunctionSquare,
  GitFork,
  Globe,
  Lightbulb,
  ListChecks,
  ShieldAlert,
  Sigma,
  SquareStack,
  TrendingUp,
  Workflow,
} from "lucide-react";

export function Categories() {
  const categoriesData = [
    { id: 1, title: "Algoritmos em Grafos", icon: <GitFork size={30} /> },
    {
      id: 2,
      title: "Probabilidade e Estatística",
      icon: <BarChart size={30} />,
    },
    {
      id: 3,
      title: "Segurança da Informação",
      icon: <ShieldAlert size={30} />,
    },
    {
      id: 4,
      title: "Matemática Discreta",
      icon: <Binary size={30} />,
    },
    { id: 5, title: "POO", icon: <SquareStack size={30} /> },
    { id: 6, title: "Inteligência Artificial", icon: <Brain size={30} /> },
    {
      id: 7,
      title: "Engenharia de Software",
      icon: <Workflow size={30} />,
    },
    {
      id: 8,
      title: "Cálculo",
      icon: <Sigma size={30} />,
    },
    { id: 9, title: "Física", icon: <Atom size={30} /> },
    { id: 10, title: "Economia", icon: <TrendingUp size={30} /> },
    { id: 11, title: "Administração", icon: <Briefcase size={30} /> },
    {
      id: 12,
      title: "Projeto e Análise de Algoritmos",
      icon: <ListChecks size={30} />,
    },
    {
      id: 13,
      title: "Desenvolvimento Web",
      icon: <Globe size={30} />,
    },
    {
      id: 14,
      title: "Empreendedorismo",
      icon: <Lightbulb size={30} />,
    },
    {
      id: 15,
      title: "Lógica para computação",
      icon: <FunctionSquare size={30} />,
    },
  ];
  return <CategoriesGrid categories={categoriesData} />;
}
