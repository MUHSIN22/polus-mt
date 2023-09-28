import { Center, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import { IProduct } from "../../types/pages/products.types";
import QuantityChanger from "../../components/QuantityChanger/QuantityChanger";
import { useAppSelector } from "../../globalRedux/store";
import { dataFetcher } from "../../utils/dataFetcher/dataFetcher";

export default function ProductDetail({ product }: { product: IProduct }) {
  const { id, title, image, category, description, price } = product;

  const [totalCount, setTotalCount] = useState<number>(0);

  const { cart } = useAppSelector((state) => state?.products);

  useMemo(() => {
    if (cart) {
      const selected = cart?.filter((item) => item.id === id);
      setTotalCount(selected?.[0]?.count || 0);
    }
  }, [cart, id]);

  return (
    <Center w="100%" p={4}>
      <Grid
        maxW="1400px"
        templateColumns={{ base: "1fr", sm: "10rem auto" }}
        gap={8}
      >
        <Image src={image} w="100%" h="auto" alt={title} />
        <VStack alignItems="flex-start">
          <Heading variant="cardTitle">{title}</Heading>
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
          <QuantityChanger count={totalCount} data={product} />
        </VStack>
      </Grid>
    </Center>
  );
}

export const getStaticPaths = async () => {
  const data = await dataFetcher(`https://fakestoreapi.com/products?limit=5`);
  const paths = data?.map((item) => ({
    params: {
      productId: item?.id.toString(),
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const product = await dataFetcher(
    `https://fakestoreapi.com/products/${params?.productId}`
  );

  return {
    props: {
      product,
    },
  };
};
