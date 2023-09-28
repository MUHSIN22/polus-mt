import {
  Center,
  Flex,
  HStack,
  Image,
  Link as ChakraLink,
  Badge,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { useAppSelector } from "../../globalRedux/store";
import { useRouter } from "next/router";

export default function TopNavigation() {
  const router = useRouter();

  const [cartItems, setCartItems] = useState<number>(0);

  const { cart } = useAppSelector((state) => state?.products);

  useMemo(() => {
    if (cart) {
      const totalCount = cart.reduce((acc, curr) => {
        acc += curr.count;
        return acc;
      }, 0);
      setCartItems(totalCount);
    }
  }, [cart]);

  return (
    <Center
      w="100%"
      pos="sticky"
      top={0}
      left={0}
      bg="white"
      h="4rem"
      px={4}
      zIndex="sticky"
    >
      <Flex
        w="100%"
        maxW="1400px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Image
          src="/images/logo.png"
          alt="logo"
          w="auto"
          h="2.5rem"
          onClick={() => router.push("/")}
        />
        <HStack>
          <ChakraLink as={Link} fontWeight={600} href="/">
            Home
          </ChakraLink>
          <ChakraLink as={Link} fontWeight={600} href="/cart">
            Cart <Badge colorScheme="green">{cartItems}</Badge>
          </ChakraLink>
        </HStack>
      </Flex>
    </Center>
  );
}
