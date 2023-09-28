import { Center, VStack } from "@chakra-ui/react";
import ProductsCardGrid from "../components/Grids/ProductsCardGrid/ProductsCardGrid";
import { dataFetcher } from "../utils/dataFetcher/dataFetcher";
import { IProduct } from "../types/pages/products.types";
import SearchBar from "../components/SearchBar/SearchBar";

export default function Home({ products }: { products: IProduct[] }) {
  return (
    <Center p={4}>
      <VStack maxW="1400px" gap={4}>
        <SearchBar />
        <ProductsCardGrid products={products} />
      </VStack>
    </Center>
  );
}

export const getStaticProps = async () => {
  const products: IProduct[] = await dataFetcher(
    `https://fakestoreapi.com/products?limit=5`
  );

  return {
    props: {
      products,
    },
    revalidate: 10,
  };
};
