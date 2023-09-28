import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import { RiSearch2Fill } from "react-icons/ri";
import { useDebounce } from "../../hooks/useDebounce";
import { useDispatch } from "react-redux";
import { updateSearchQuery } from "../../globalRedux/slices/ProductSlice/ProductSlice";

export default function SearchBar() {
  const dispatch = useDispatch();

  const [search, setSearch] = useState<string>("");
  const searchQuery = useDebounce(search, 500);

  useMemo(() => {
    dispatch(updateSearchQuery(searchQuery));
  }, [searchQuery, dispatch]);
  return (
    <InputGroup maxW="25rem" w="100%">
      <InputLeftAddon as={RiSearch2Fill} />
      <Input
        placeholder="Search products"
        onChange={(e) => setSearch(e.target.value)}
      />
    </InputGroup>
  );
}
