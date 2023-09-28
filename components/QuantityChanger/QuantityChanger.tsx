import { HStack, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { RiAddFill, RiSubtractFill } from "react-icons/ri";
import { useAppDispatch } from "../../globalRedux/store";
import { changeQuantity } from "../../globalRedux/slices/ProductSlice/ProductSlice";
import { IProduct } from "../../types/pages/products.types";

export default function QuantityChanger({
  count,
  data,
}: {
  count: number;
  data: IProduct;
}) {
  const dispatch = useAppDispatch();

  return (
    <HStack>
      <IconButton
        aria-label="cart quantity decreament"
        as={RiSubtractFill}
        size="xs"
        onClick={() => dispatch(changeQuantity({ dir: "dec", data }))}
      />
      <Text fontWeight={600}>{count}</Text>
      <IconButton
        aria-label="cart quantity decreament"
        as={RiAddFill}
        size="xs"
        onClick={() => dispatch(changeQuantity({ dir: "add", data }))}
      />
    </HStack>
  );
}
