import { Box, GridItem, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import ProductCard from "../../cards/ProductCard/ProductCard";
import { IProduct } from "../../../types/pages/products.types";
import { useAppSelector } from "../../../globalRedux/store";

export default function ProductsCardGrid({
  products,
}: {
  products: IProduct[];
}) {
  const [filteredProducts, setFilteredProduct] = useState<IProduct[]>(products);

  const { searchQuery } = useAppSelector((state) => state.products);

  useMemo(() => {
    if (searchQuery !== "") {
      const filter = products?.filter(
        (product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProduct(filter);
    } else {
      setFilteredProduct(products);
    }
  }, [searchQuery, products]);

  return (
    <>
      {filteredProducts?.length > 0 ? (
        <SimpleGrid
          columns={{ base: 2, sm: 3, md: 5 }}
          gap={{ base: 2, md: 4 }}
        >
          {filteredProducts?.map((product, index) => (
            <ProductCard {...product} key={index} />
          ))}
        </SimpleGrid>
      ) : (
        <VStack>
          <Heading variant="cardTitle">No result found</Heading>
        </VStack>
      )}
    </>
  );
}
