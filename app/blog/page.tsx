import type { Metadata } from "next";
import { BlogAsk } from "@/components/blog/blog-ask";
import { BlogIndex } from "@/components/blog/blog-index";

export const metadata: Metadata = {
  title: "Insights | TEKCE Exclusive",
  description:
    "Guides and arguments on buying and selling new homes in Spain, Türkiye, North Cyprus and the UAE — every figure sourced.",
};

export default function BlogPage() {
  return (
    <main>
      <BlogIndex />
      <BlogAsk />
    </main>
  );
}
