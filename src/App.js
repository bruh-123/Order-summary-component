import "./App.css";
import {
	Box,
	Flex,
	Image,
	Heading,
	Text,
	HStack,
	Button,
} from "@chakra-ui/react";
import musik from "./images/illustration-hero.svg";
import iconM from "./images/icon-music.svg";

function App() {
	return (
		<Flex minH="100vh" className="container" justify="center" align="center">
			<Flex
				bg="white"
				w="75%"
				direction="column"
				border="1px solid #c2c2c2"
				borderRadius="10px"
			>
				<Box>
					<Image borderRadius="10px 10px 0px 0px" src={musik} />
				</Box>
				<Heading align="center" m="1rem">Order Summary</Heading>
				<Text px="1rem" mb="1rem" textAlign="center">
					You can now listen to millions of songs, audiobooks, and podcasts on
					any device anywhere you like!
				</Text>
				<Box mx="2rem" borderRadius="10px" bg="hsl(225, 100%, 98%)">
					<HStack>
						<Image m="1rem" src={iconM} />
						<Text>Annual Plan</Text>
						<Text>$59.99/year</Text>
						<Button variant="link">Change</Button>
					</HStack>
				</Box>
				<Button>Proceed to Payment</Button>
				<Button>Cancel Order</Button>
			</Flex>
		</Flex>
	);
}

export default App;
// Order Summary

//   You can now listen to millions of songs, audiobooks, and podcasts on any
//   device anywhere you like!

//   Annual Plan
//   $59.99/year

//   Change

//   Proceed to Payment
//   Cancel Order

// Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
//     Coded by <a href="#">Bruno Riquelme</a>.
