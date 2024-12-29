import React from "react";
import { Game } from "../hooks/useGames";
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

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
      <HStack>
        <CardBody>
          <Heading size="md">{game.name}</Heading>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
        </CardBody>
        {/* <CardFooter>Footer</CardFooter> */}
      </HStack>
    </Card>
  );
};

export default GameCard;
