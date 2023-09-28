import { VStack } from "@chakra-ui/react";
import TopNavigation from "../TopNavigation/TopNavigation";
import React from "react";

export default function MainLayout({ children }) {
  return (
    <VStack>
      <TopNavigation />
      {children}
    </VStack>
  );
}
