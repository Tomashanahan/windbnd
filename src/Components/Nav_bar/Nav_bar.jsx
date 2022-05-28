import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import logo_2 from "../../windbnb-master/logo.svg";
import SearchBar from "../Search_bar/Search_bar";

function NavBar() {
	return (
		<Flex
			w={"86%"}
			direction={["column", "column", "row", "row"]}
			m="auto"
			my={12}
			justify={"space-between"}
			align={["left", "left", "center"]}
		>
			<Image src={logo_2} mb={["30px", "30px", 0]} alt="Logo" width={"110px"}/>
			<SearchBar />
		</Flex>
	);
}

export default NavBar;
