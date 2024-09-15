import Collections from "@/components/Collections";
import Details from "@/components/Details";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <>
      <Collections />
      <ProductList />
      <Details />
    </>
  );
}

export const dynamic = "force-dynamic";
