import { useEffect, useState, useRef } from "react";
import {
    Flex,
    useColorModeValue,
    Text,
    useMediaQuery,
    Image ,
    Box,
    Button,
    Link,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import PageStore from "@src/store/PageStore";
import CarouselOrGrid from "../ui/CarouselOrGrid/CarouselOrGrid";
import { projects } from "../../utils/content";

export default function Project() {
    const principalColor = useColorModeValue("#536DFE", "white");
    const language = PageStore((state) => state.language);
    const [desktopView] = useMediaQuery("(min-width: 1000px)"); 
    const [selectedId, setSelectedId] = useState(null);
    const [selectesItem, setSelectedItem] = useState({});
    const secondColor = useColorModeValue("none", "#3d437669");
    const borderStyle = useColorModeValue(
        "2px solid gray",
        "2px solid #3d437669"
    );
    const bgCard = useColorModeValue("gray.100", "black");
    const refModal = useRef(null);

    useEffect(() => {
        setSelectedItem({ ...projects[selectedId]});
        if (selectedId != null) {
            document.querySelector("body").classList.add("d-hidden");
            document.querySelector("header").classList.add("none-fixed");
        } else {
            document.querySelector("body").classList.remove("d-hidden");
            document.querySelector("header").classList.remove("none-fixed");
        }
    }, [selectedId]);

    useEffect(() => {
        const footer = document.querySelector("footer");
        footer.classList.add("opacity-1-element");
    }, []);

    const closeModal = () => {
        refModal.current.classList.add("opacity-0-modal");
        setTimeout(() => {
            setSelectedId(null);
        }, 800);
    };

    return (
        <Flex
            id="projects"
            flexDirection="column"
            justify="center"
            position="relative"
            zIndex={"3 !important"}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={language ? language + language : "empty"}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <Flex
                        justify="center"
                        align="center"
                        my="40px"
                        gap={10}
                        flexWrap="wrap"
                        mb={100}
                    >
                        <Text
                            color={principalColor}
                            lineHeight=" 1.5"
                            fontSize={desktopView ? 60 : "2.5rem"}
                            fontWeight="900"
                            letterSpacing=" .2rem"
                            textAlign="center"
                        >
                            {language ? "Projects" : "Proyectos"}
                        </Text>
                    </Flex>
                    <CarouselOrGrid
                        bgColor={secondColor}
                    >
                        {projects.map((item, index) => {
                            return (
                                <motion.div
                                    layoutId={item.id}
                                    onClick={() => {
                                        setSelectedId(index);
                                    }}
                                    key={index}
                                    style={{
                                    transition: "0.5s ease-in-out",
                                    }}
                                >
                                    <Box
                                        position="relative"
                                        bg={bgCard}
                                        w="100%"
                                        minH={100}
                                        cursor="pointer"
                                        transition=" 0.5s ease-in-out"
                                        borderRadius={10}
                                    >
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            h="full"
                                            minH={"150px"}
                                        />
                                    </Box>
                                </motion.div>
                            )
                        })}
                    </CarouselOrGrid>
                </motion.div>
            </AnimatePresence>
            {selectedId != null && (
                <AnimatePresence mode="wait">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        layoutId={selectedId}
                        ref={refModal}
                        id="modal-project"
                    >
                        <Flex
                            w="80vw"
                            maxW="600px"
                            bg="black"
                            color="white"
                            pb={14}
                            position="relative"
                            justify="center"
                            alignItems="center"
                            flexDirection="column"
                            border={borderStyle}
                            borderRadius="10px"
                        >
                            <motion.h5
                                style={{
                                paddingInline: "40px",
                                paddingBlock: "10px",
                                borderBottom: "1px solid #536DFE",
                                width: "100%",
                                }}
                            >
                                {selectesItem.title}
                            </motion.h5>
                            <Button
                                position="absolute"
                                insetBlockStart="0px"
                                insetInlineEnd="6px"
                                bg="none"
                                transition="0.1s ease-in-out"
                                onClick={closeModal}
                                _active={{}}
                                _hover={{
                                transform: "scale(1.4)",
                                color: "red",
                                }}
                            >
                                X
                            </Button>
                            <Image
                                src={selectesItem.gifProject}
                                alt={`${selectesItem.title}`}
                                my={4}
                                w={desktopView ? 300 : 200}
                            />
                            
                            <Flex
                                flexWrap="wrap"
                                pl="10px"
                            >
                                <Text mr={2}>
                                    {language ? "Technologies: " : "Tecnologías: "}{" "}
                                </Text>
                                {selectesItem.technologies && 
                                    selectesItem.technologies.map((item, index) => {
                                        return (
                                            <Text
                                                key={index}
                                                fontWeight="bold" ml="2px"
                                            >
                                                { item.name} {index < selectesItem.technologies.length -1 && " , "} 
                                            </Text>
                                        )
                                })}
                            </Flex>
                            {selectesItem.title && (
                                <Flex
                                    w="100%" 
                                    py="4px" 
                                    px="10px" 
                                    gap="10px" 
                                    justify="center"
                                >
                                    {selectesItem.github && (
                                        <Link
                                            target="_blank"
                                            aria-label={` link gitgub ${selectesItem.github}`}
                                            bg="rgb(83, 109, 254)"
                                            w="50%"
                                            mt="10px"
                                            textAlign="center"
                                            py="6px"
                                            _hover={{}}
                                            borderRadius="20px"
                                            href={`${selectesItem.github}`}
                                        >
                                            Github{""}
                                        </Link>
                                    )}{" "}
                                    {selectesItem.githubBack && (
                                        <Link
                                            target="_blank"
                                            aria-label={` link gitgub ${selectesItem.githubBack}`}
                                            bg="rgb(83, 109, 254)"
                                            w="50%"
                                            mt="10px"
                                            textAlign="center"
                                            py="6px"
                                            _hover={{}}
                                            borderRadius="20px"
                                            href={`${selectesItem.githubBack}`}
                                        >
                                            Github{" (Back end)"}
                                        </Link>
                                    )}
                                </Flex>
                            )}
                            {selectesItem.link && (
                                <Link
                                    target="_blank"
                                    aria-label={` link gitgub ${selectesItem.github}`}
                                    bg="rgb(83, 109, 254)"
                                    w="50%"
                                    mt="10px"
                                    textAlign="center"
                                    py="6px"
                                    _hover={{}}
                                    borderRadius="20px"
                                    href={`${selectesItem.link}`}
                                >
                                    {language ? "Project demo" : "Demo del proyecto"}
                                </Link>
                            )}
                        </Flex>
                    </motion.div>
                </AnimatePresence>
            )}
        </Flex>
    )
}