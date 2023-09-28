import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useAppSelector } from "../../../globalRedux/store";
import CartItemCard from "../../cards/CartItemCard/CartItemCard";

export default function CartCardsGrid() {
  const { cart } = useAppSelector((state) => state?.products);
  return (
    <SimpleGrid
      columns={1}
      p={4}
      gap={4}
      boxShadow="0px 0px 10px rgba(0,0,0,0.1)"
    >
      {cart?.map((item) => (
        <CartItemCard {...item} key={item.id} />
      ))}
    </SimpleGrid>
  );
}
