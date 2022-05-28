import { Box, Text, Image, Flex } from "@chakra-ui/react";
import React from "react";
import { AiFillStar } from "react-icons/ai";

function Card({ superHost, title, rating, type, photo }) {
	return (
		<Box my={5} height="350px">
			<Image
				src={photo}
				alt={title}
				width={["395px", "395px", "395px", "345px", "395px", "395px", "395px"]}
				mx={["0", "0", "0", "12px", "0", "0", "0"]}
				height="269px"
				borderRadius={"24px"}
			/>
			<Box w="95%" /* columns={[1,1,1,1,2,2,3]} */ m="auto">
				<Flex justify={"space-between"} mt={3}>
					<Flex align={"center"}>
						{superHost && (
							<Text
								mr={4}
								fontSize="12px"
								color="#4F4F4F"
								border={"1px solid #4F4F4F"}
								p={2}
								borderRadius="12px"
							>
								SUPER HOST
							</Text>
						)}
						<Text color="#828282" fontSize={"14px"}>
							{type}
						</Text>
					</Flex>
					<Flex justify={"right"} align="center">
						<Box color={"#EB5757"}>
							<AiFillStar />
						</Box>
						<Text ml={2} color="#4F4F4F">
							{rating}
						</Text>
					</Flex>
				</Flex>
				<Text textAlign={"left"} mt={4} fontSize="16px">
					{title}
				</Text>
			</Box>
		</Box>
	);
}

export default Card;
