import React from "react";
import { Game } from "../hooks/useGames";
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
} from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card
      direction={{ base: "column", md: "column", lg: "column" }}
      overflow="hidden"
      variant="elevated"
      borderWidth="1px"
      borderRadius="md"
      boxShadow="md"
    >
      <Image src={game.background_image} />
      <Stack>
        <CardBody>
          <Heading fontSize="2xl" size="md">
            {game.name}
          </Heading>
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Stack>
    </Card>
  );
};

export default GameCard;
