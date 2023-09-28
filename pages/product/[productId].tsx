import { Center, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import { IProduct } from "../../types/pages/products.types";
import QuantityChanger from "../../components/QuantityChanger/QuantityChanger";
import { useAppSelector } from "../../globalRedux/store";
import { dataFetcher } from "../../utils/dataFetcher/dataFetcher";

export default function ProductDetail({ product }: { product: IProduct }) {

  const [totalCount, setTotalCount] = useState<number>(0);

  const { cart } = useAppSelector((state) => state?.products);

  useMemo(() => {
    if (cart) {
      const selected = cart?.filter((item) => item.id === product?.id);
      setTotalCount(selected?.[0]?.count || 0);
    }
  }, [cart, product?.id]);

  return (
    <Center w="100%" p={4}>
      <Grid
        maxW="1400px"
        templateColumns={{ base: "1fr", sm: "10rem auto" }}
        gap={8}
      >
        <Image src={product?.image} w="100%" h="auto" alt={product?.title} />
        <VStack alignItems="flex-start">
          <Heading variant="cardTitle">{product?.title}</Heading>
          <Text
            variant="description"
            fontWeight={600}
            textTransform="capitalize"
          >
            {product?.category}
          </Text>
          <Text variant="description" noOfLines={2} fontStyle="italic">
            {product?.description}
          </Text>
          <Text variant="description" fontWeight={600}>
            ${product?.price}
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
