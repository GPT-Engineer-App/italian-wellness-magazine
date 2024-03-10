import { Box, Container, Flex, Heading, Text, VStack, SimpleGrid, Image, Link, Spacer } from "@chakra-ui/react";
import { FaRegHeart, FaRegComment, FaRegBookmark } from "react-icons/fa";

const articles = [
  {
    id: 1,
    title: "10 Best Places to Visit in Tuscany",
    excerpt: "Discover the top destinations in the heart of Italy with our comprehensive guide...",
    imageUrl: 'https://images.unsplash.com/photo-1645093139174-6d019a19e234?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxUdXNjYW55JTIwSXRhbHl8ZW58MHx8fHwxNzEwMDcwMjUzfDA&ixlib=rb-4.0.3&q=80&w=1080',
    author: "Giulia Rossi",
    date: "April 10, 2023",
  },
  {
    id: 2,
    title: "The Ultimate Guide to Italian Cuisine",
    excerpt: "Explore the flavors and traditions of authentic Italian cooking...",
    imageUrl: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwQ3Vpc2luZXxlbnwwfHx8fDE3MTAwNzAyNTN8MA&ixlib=rb-4.0.3&q=80&w=1080',
    author: "Marco Bianchi",
    date: "April 08, 2023",
  },
  // Add more articles as needed
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Vita Italiana Magazine
        </Heading>
        <Text fontSize="xl" textAlign="center" maxW="2xl">
          Your go-to source for the latest in lifestyle and wellness articles, directly from Italy.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {articles.map((article) => (
            <Box key={article.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={article.imageUrl} alt={article.title} />

              <Box p={6}>
                <Box display="flex" alignItems="baseline">
                  <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
                    {article.date} &bull; {article.author}
                  </Box>
                </Box>

                <Heading as="h3" size="md" mt={2}>
                  {article.title}
                </Heading>

                <Text mt={2} color="gray.600">
                  {article.excerpt}
                </Text>

                <Flex alignItems="center" mt={4}>
                  <Link href="#" color="teal.500" fontWeight="bold">
                    Read More
                  </Link>
                  <Spacer />
                  <Box as="span" ml={2}>
                    <FaRegHeart />
                  </Box>
                  <Box as="span" ml={2}>
                    <FaRegComment />
                  </Box>
                  <Box as="span" ml={2}>
                    <FaRegBookmark />
                  </Box>
                </Flex>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
