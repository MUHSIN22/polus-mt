import { Button, Center, Grid, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import CartCardsGrid from "../../components/Grids/CartCardsGrid/CartCardsGrid";
import CartPriceCard from "../../components/cards/CartPriceCard/CartPriceCard";
import { useAppSelector } from "../../globalRedux/store";
import Link from "next/link";

export default function index() {
  const { cart } = useAppSelector((state) => state?.products);
  return (
    <Center w="100%" p={4}>
      {cart?.length > 0 ? (
        <Grid
          templateColumns={{ base: "1fr", sm: "3fr 2fr", md: "3fr 1fr" }}
          gap={{ base: 2, sm: 4 }}
          maxW="1400px"
          w="100%"
        >
          <CartCardsGrid />
          <CartPriceCard />
        </Grid>
      ) : (
        <VStack>
          <Heading fontSize="lg">Ugh! No items found in cart</Heading>
          <Button as={Link} href="/">
            Continue Shopping
          </Button>
        </VStack>
      )}
    </Center>
  );
}
