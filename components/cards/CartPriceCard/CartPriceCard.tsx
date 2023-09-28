import {
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import { useAppSelector } from "../../../globalRedux/store";

export default function CartPriceCard() {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const { cart } = useAppSelector((state) => state?.products);

  useMemo(() => {
    if (cart) {
      const price = cart?.reduce((acc, curr) => {
        acc += curr.count * parseFloat(curr.price);
        return acc;
      }, 0);

      setTotalPrice(price);
    }
  }, [cart]);
  return (
    <Card h="max-content">
      <CardHeader>
        <Heading variant="cardTitle">Price Details</Heading>
      </CardHeader>
      <CardBody>
        <HStack w="100%" justifyContent="space-between" fontWeight={600}>
          <Text variant="description">Total Price</Text>
          <Text>${totalPrice}</Text>
        </HStack>
      </CardBody>
    </Card>
  );
}
