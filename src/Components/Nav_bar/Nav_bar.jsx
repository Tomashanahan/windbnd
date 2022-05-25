import { Flex } from "@chakra-ui/react";
import React from "react";
import logo_2 from "../../windbnb-master/logo.svg";
import SearchBar from "../Search_bar/Search_bar";

function NavBar() {
	return (
		<Flex w={"86%"} m="auto" my={12} justify={"space-between"} align="center">
			<img src={logo_2} alt="Logo" width={"110px"} />
			<SearchBar/>
		</Flex>
	);
}

export default NavBar;
