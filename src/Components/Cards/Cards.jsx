import { Text, Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Card from "../Card/Card";
import "../../index.css";
import { useSelector } from "react-redux";

function Cards() {
	const { city } = useSelector((state) => state);
	console.log(city);

	return (
		<Box w={"90%"} m="auto" mb={"100px"}>
			<Text fontWeight={"extrabold"} ml={5} fontSize="24px" textAlign={"left"}>
				Stays in Finland
			</Text>
			{city.length > 0 ? (
				<SimpleGrid columns={[1,1,1,2,3]} alignItems="center" justifyItems={"center"}>
					{city?.map((elem, i) => {
						return <Card key={i} {...elem} />;
					})}
				</SimpleGrid>
			) : (
				<Text mt="100px">
					There are no apartments with the number of guests indicated
				</Text>
			)}
		</Box>
	);
}

export default Cards;
