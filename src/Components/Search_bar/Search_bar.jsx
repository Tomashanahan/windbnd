/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import data from "../../stays.json";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import {
	Box,
	Flex,
	Text,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Button,
	Stack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { all_cities, set_countri } from "../../Redux/Actions";

function SearchBar() {
	const { cities } = useSelector((state) => state);
	const [mayors_guests, setmayors_guests] = useState(0);
	const [minors_guests, setminors_guests] = useState(0);
	const [_city, set_city] = useState(`${data[0]?.city}, ${data[0]?.country}`);
	const dispatch = useDispatch();

	useEffect(() => {
		if (minors_guests + mayors_guests >= 1) {
			dispatch(set_countri(_city || `Helsinki`, minors_guests + mayors_guests));
		} else {
			dispatch(set_countri(_city || `Helsinki`, minors_guests + mayors_guests));
		}
		dispatch(all_cities());
	}, [_city, minors_guests, mayors_guests]);

	return (
		<Flex
			justify={"space-between"}
			align="center"
			width="320px"
			height="65px"
			fontSize={"14px"}
			boxShadow={"0px 1px 6px rgba(0, 0, 0, 0.1)"}
			borderRadius="16px"
			zIndex={30}
			bg="#FFFFFF"
			m={['auto','auto',0,0]}
		>
			<Menu isLazy>
				<MenuButton
					onChange={(e) => console.log("hola")}
					borderRight="1px solid #F2F2F2"
					height={"100%"}
					pr="15px"
					pl="15px"
					cursor={"pointer"}
				>
					{_city}
				</MenuButton>
				<MenuList>
					{cities?.map((elem, i) => {
						return (
							<MenuItem key={i} onClick={() => set_city(elem)}>
								<Box mr={2} color="#4F4F4F" fontSize={"20px"}>
									<MdLocationPin />
								</Box>
								{elem}
							</MenuItem>
						);
					})}
				</MenuList>
			</Menu>

			<Menu isLazy autoSelect={false} closeOnSelect={false}>
				<MenuButton
					color={"#BDBDBD"}
					borderRight="1px solid #F2F2F2"
					height={"100%"}
					pr="20px"
					pl="10px"
					cursor={"pointer"}
				>
					Add guest
				</MenuButton>
				<MenuList>
					<MenuItem _hover={{ bg: "none" }}>
						<Stack>
							<Text>Adults</Text>
							<Text color={"#BDBDBD"} fontWeight="light">
								Ages 13 or above
							</Text>
							<Flex justify={"center"} align="center">
								<Button
									variant="outline"
									p="1px"
									mx={2}
									onClick={() =>
										setmayors_guests(mayors_guests > 0 ? mayors_guests - 1 : 0)
									}
								>
									-
								</Button>
								<Text>{mayors_guests}</Text>
								<Button
									variant="outline"
									p="1px"
									mx={2}
									onClick={() => setmayors_guests(mayors_guests + 1)}
								>
									+
								</Button>
							</Flex>
						</Stack>
					</MenuItem>
					<MenuItem _hover={{ bg: "none" }}>
						<Stack>
							<Text>Children</Text>
							<Text color={"#BDBDBD"} fontWeight="light">
								Ages 2-12
							</Text>
							<Flex justify={"center"} align="center">
								<Button
									variant="outline"
									p="1px"
									mx={2}
									onClick={() =>
										setminors_guests(minors_guests > 0 ? minors_guests - 1 : 0)
									}
								>
									-
								</Button>
								<Text>{minors_guests}</Text>
								<Button
									variant="outline"
									p="1px"
									mx={2}
									onClick={() => setminors_guests(minors_guests + 1)}
								>
									+
								</Button>
							</Flex>
						</Stack>
					</MenuItem>
				</MenuList>
			</Menu>
			<Box color="#EB5757" fontSize={"25px"} pr="10px">
				<BiSearchAlt2 />
			</Box>
		</Flex>
	);
}

export default SearchBar;
