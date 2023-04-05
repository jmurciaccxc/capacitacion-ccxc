import BasicLayout from "../layouts/BasicLayout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <BasicLayout>
      <h1>estamos en la home</h1>
    </BasicLayout>
  );
}
