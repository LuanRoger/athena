import CategoriesGrid from "./categories-grid";
import { ChartNoAxesCombined, ShieldAlert, Spline } from "lucide-react";

export function Categories() {
  const categoriesData = [
    { id: 1, title: "Algoritmos em grafos", icon: <Spline size={30} /> },
    { id: 2, title: "Estatística", icon: <ChartNoAxesCombined size={30} /> },
    {
      id: 3,
      title: "Segurança da informação",
      icon: <ShieldAlert size={30} />,
    },
    { id: 4, title: "Estatística", icon: <ChartNoAxesCombined size={30} /> },
    { id: 5, title: "Algoritmos em grafos", icon: <Spline size={30} /> },
    { id: 6, title: "Algoritmos em grafos", icon: <Spline size={30} /> },
    { id: 7, title: "Estatística", icon: <ChartNoAxesCombined size={30} /> },
    {
      id: 8,
      title: "Segurança da informação",
      icon: <ShieldAlert size={30} />,
    },
    { id: 9, title: "Estatística", icon: <ChartNoAxesCombined size={30} /> },
    { id: 10, title: "Algoritmos em grafos", icon: <Spline size={30} /> },
    { id: 11, title: "Algoritmos em grafos", icon: <Spline size={30} /> },
    { id: 12, title: "Estatística", icon: <ChartNoAxesCombined size={30} /> },
    {
      id: 13,
      title: "Segurança da informação",
      icon: <ShieldAlert size={30} />,
    },
    { id: 14, title: "Estatística", icon: <ChartNoAxesCombined size={30} /> },
    { id: 15, title: "Algoritmos em grafos", icon: <Spline size={30} /> },
  ];
  return <CategoriesGrid categories={categoriesData} />;
}
