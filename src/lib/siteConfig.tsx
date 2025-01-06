import dynamic from "next/dynamic";
import { Loading } from "@/components/loader";

import { ComponentType } from "react";

const Lab1CSR = dynamic(() => import("../app/(core)/labs/_labs/lab1"), {
  ssr: false,
  loading: Loading, // Add the loading component here
});

export type Lab = {
  slug: string;
  title: string;
  description: string;
  codeUrl: string;
  component?: ComponentType;
};

export const labs = [
  {
    slug: "lab-1",
    title: "Advanced Color Picker (Lifecycle)",
    description: "Description of Lab 1",
    codeUrl: "https://github.com/yourusername/lab-1",
    component: Lab1CSR,
  },
  {
    slug: "lab-2",
    title: "Lab 2",
    description: "Description of Lab 1",
    codeUrl: "https://github.com/yourusername/lab-1",
  },
  {
    slug: "lab-3",
    title: "Lab 3",
    description: "Description of Lab 1",
    codeUrl: "https://github.com/yourusername/lab-1",
  },
  // Add more labs...
] satisfies Lab[];
