import {
  AspectRatio,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { IProduct } from "../../../types/pages/products.types";
import { useAppDispatch } from "../../../globalRedux/store";
import { addProduct } from "../../../globalRedux/slices/ProductSlice/ProductSlice";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ProductCard({
  id,
  title,
  image,
  category,
  description,
  price,
}: IProduct) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleAddCart = (event) => {
    event.stopPropagation();
    dispatch(addProduct({ id, description, category, image, price, title }));
  };

  return (
    <Card onClick={() => router.push(`/product/${id}`)}>
      <CardBody p={{ base: 2, sm: 3, md: 4 }}>
        <AspectRatio ratio={1.7 / 2} w="100%">
          <Image
            src={image}
            w="100%"
            h="100%"
            alt="product image"
            objectFit="contain"
          />
        </AspectRatio>
        <VStack alignItems="flex-start" pt={2} gap={1}>
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
          <Text variant="description" noOfLines={2} fontStyle="italic">
            {description}
          </Text>
          <Text variant="description" fontWeight={600}>
            ${price}
          </Text>
        </VStack>
      </CardBody>
      <CardFooter p={{ base: 2, sm: 3, md: 4 }} pt={0}>
        <Button
          variant="solid"
          colorScheme="green"
          ml="auto"
          size={{ base: "xs", sm: "sm", md: "md" }}
          onClick={handleAddCart}
        >
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}
