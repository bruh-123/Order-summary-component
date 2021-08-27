import "./App.css";
import {
	Box,
	Flex,
	Image,
	Heading,
	Text,
	HStack,
	Button,
	VStack,
	Spacer,
} from "@chakra-ui/react";
import musik from "./images/illustration-hero.svg";
import iconM from "./images/icon-music.svg";

function App() {
	console.log(Button);
	return (
		<Flex minH="100vh" className="container" justify="center" align="center">
			<Flex
				bg="white"
				w="355px"
				direction="column"
				border="1px solid #c2c2c2"
				borderRadius="20px"
				align="center"
				boxShadow="xl"
			>
				<Box>
					<Image borderRadius="20px 20px 0px 0px" src={musik} alt="" />
				</Box>
				<Heading as="h1" m="1rem">Order Summary</Heading>
				<Text
					px="1rem"
					mb="1rem"
					textAlign="center"
					fontWeight="500"
					color="hsl(224, 23%, 55%)"
				>
					You can now listen to millions of songs, audiobooks, and podcasts on
					any device anywhere you like!
				</Text>
				<Box mx="2rem" borderRadius="10px" bg="hsl(225, 100%, 98%)">
					<HStack>
						<Image m="1rem" src={iconM} alt="music icon" />
						<VStack spacing="1px">
							<Text fontWeight="700" fontSize="sm">
								Annual Plan
							</Text>
							<Text fontSize="sm" color="hsl(224, 23%, 55%)" fontWeight="500">
								$59.99/year
							</Text>
						</VStack>
						<Spacer />
						<Button p="1rem" variant="link">
							<Text
								as="u"
								fontSize="sm"
								fontWeight="700"
								color="hsl(245, 75%, 52%)"
							>
								Change
							</Text>
						</Button>
					</HStack>
				</Box>
				<Button
					boxShadow="xl"
					my="1rem"
					h="50px"
					w="80%"
					bg="hsl(245, 75%, 52%)"
					_hover={{ bg: "hsl(245, 75%, 45%)" }}
					color="hsl(225, 100%, 98%)"
					variant="solid"
					fontWeight="700"
				>
					Proceed to Payment
				</Button>
				<Button
					mb="1.5rem"
					variant="ghost"
					color="hsl(224, 23%, 55%)"
					fontWeight="700"
				>
					Cancel Order
				</Button>
			</Flex>
		</Flex>
	);
}

export default App;
