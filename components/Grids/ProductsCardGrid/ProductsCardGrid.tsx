import { Box, GridItem, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import ProductCard from "../../cards/ProductCard/ProductCard";
import { IProduct } from "../../../types/pages/products.types";

export default function ProductsCardGrid({
  products,
}: {
  products: IProduct[];
}) {
  return (
    <SimpleGrid columns={{ base: 2, sm: 3, md: 5 }} gap={{ base: 2, md: 4 }}>
      {products?.map((product, index) => (
        <ProductCard {...product} key={index} />
      ))}
    </SimpleGrid>
  );
}
