import {
  Flex,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { ICartItem } from "../../../types/redux/productSlice.types";
import { useAppDispatch } from "../../../globalRedux/store";
import { deleteCartItem } from "../../../globalRedux/slices/ProductSlice/ProductSlice";
import QuantityChanger from "../../QuantityChanger/QuantityChanger";

export default function CartItemCard({
  id,
  title,
  image,
  category,
  price,
  count,
}: ICartItem) {
  const dispatch = useAppDispatch();
  return (
    <Flex
      padding={2}
      boxShadow="0px 0px 10px rgba(0,0,0,0.1)"
      gap={4}
      justifyContent="flex-start"
    >
      <Image src={image} alt="cart item" w="5rem" objectFit="cover" />
      <Stack flex={1}>
        <VStack alignItems="flex-start">
          <Heading variant="cardTitle" noOfLines={2}>
            {title}
          </Heading>
          <Text
            variant="description"
            fontWeight={600}
            textTransform="capitalize"
          >
            {category}
          </Text>
          <Text variant="description" fontWeight={600}>
            ${price}
          </Text>
        </VStack>

        <Flex w="100%" justifyContent="space-between">
          <QuantityChanger
            count={count}
            data={{ id, title, image, category, price }}
          />
          <IconButton
            aria-label="Cart Item delete button"
            as={RiDeleteBin2Fill}
            colorScheme="red"
            variant="ghost"
            size="xs"
            cursor="pointer"
            onClick={() => dispatch(deleteCartItem(id))}
          />
        </Flex>
      </Stack>
    </Flex>
  );
}
