import {
    Flex,
    Box,
    Text,
    useColorModeValue,
    Grid,
    useMediaQuery,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import PageStore from "@src/store/PageStore";
import { ChevronDown } from "../../assets/icons/Icons";
import { myExperiences } from "../../utils/content";

export default function Experiences() {
    const secondColor = useColorModeValue("#536DFE", "#3d437669");
    const principalColor = useColorModeValue("#536DFE", "white");
    const language = PageStore((state) => state.language);
    const [desktopView] = useMediaQuery("(min-width: 960px)");
    const maxItem = myExperiences.length;

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={language ? language + language : "empty"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.4 }}
            >
                <Flex
                    id="experiencie"
                    minH="100vh"
                    align="center"
                    justify="center"
                    flexDirection="column"
                    gap={20}
                    pb={20}
                >
                    <Text
                        fontSize={desktopView ? 50 : "2.5rem"}
                        fontWeight="bold"
                        color={principalColor}
                    >
                        {language ? "Experience" : "Experiencia"}
                    </Text>
                    <Grid
                        w="100%" 
                        position="relative" 
                        gap={20} 
                        px="20px"
                    >
                        <Flex
                            position="absolute"
                            h="105%"
                            w="0px"
                            insetBlockStart={0}
                            insetInlineStart={desktopView ? "50%" : 0}
                            flexDirection="column"
                            justify="space-around"
                            align="center"
                        >
                            {myExperiences &&
                                myExperiences.map((item, index) => {
                                    return (
                                        <Flex
                                            key={index}
                                            h="100%"
                                            flexDir="column"
                                            justify="center"
                                            align="center"
                                        >
                                            <Box h="100%" w="6px" bg="#536DFE"></Box>
                                            {index != maxItem-1 && (
                                                <Box bg="transparent" minW="18px" minH="18px">
                                                <Box
                                                    position="relative"
                                                    insetBlockStart="-1px"
                                                    bg="transparent"
                                                    minW="20px"
                                                    minH="20px"
                                                    borderRadius={20}
                                                    border={`4px solid #536DFE}}`}
                                                ></Box>
                                                </Box>
                                            )}
                                            <Box h="100%" w="6px" bg="#536DFE"></Box>
                                        </Flex>
                                    )
                                })
                            }
                            <ChevronDown
                                fontSize="30px"
                                fill="#536DFE"
                                position="absolute"
                                insetBlockStart="-10px"
                                transform="rotate(180deg)"
                            />
                            <Text
                                fontWeight="bold"
                                position="absolute"
                                insetInlineStart={!desktopView && "-8px"}
                                insetBlockStart="-40px"
                            >
                                {language ? "Currently" : "Actualmente"}
                            </Text>
                        </Flex>
                        {myExperiences &&
                            myExperiences.map((item, index) => {
                                return (
                                    <Box w={desktopView && "44%"} key={index}>
                                        <Text fontSize={24} fontWeight="bold" color="#536DFE">
                                            {item.year}
                                        </Text>
                                        <Box
                                            p={6}
                                            mt={4}
                                            bg={secondColor}
                                            color={"white"}
                                            borderRadius="10px"
                                        >
                                        <Text fontWeight="bold" mb={4}>
                                            {language ? item.titleEng : item.titleEsp}
                                        </Text>
                                        <Text textAlign="justify">
                                            {language ? item.textEng : item.textEsp}
                                        </Text>
                                        </Box>
                                    </Box>
                                );
                        })}
                    </Grid>
                </Flex>
            </motion.div>
        </AnimatePresence>
    )
}