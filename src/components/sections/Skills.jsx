import { Flex, useColorModeValue, useMediaQuery, Text } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import PageStore from "@src/store/PageStore";
import { DeveloperIcon } from "../../assets/icons/Icons";
import CarouselOrGrid from "../ui/CarouselOrGrid/CarouselOrGrid";
import { 
    CssIcon, 
    HtmlIcon,
    JsIcon,
    PostgresIcon,
    OracleIcon,
    ReactIcon,
    JavaIcon,
    CSharpIcon,
    SpringIcon,
    SqlServerIcon,
    MySqlIcon,
    NodeJsIcon,
    GitIcon
} 
from "../../assets/icons/SkillIcons";

export default function Skills(){
    const fillColor = useColorModeValue("#536DFE", "#536DFE");
    const bgCard = useColorModeValue("gray.100", "black");
    const principalColor = useColorModeValue("#536DFE", "white");
    const language = PageStore((state) => state.language);
    const [desktopView] = useMediaQuery("(min-width: 1000px)");
    const secondColor = useColorModeValue("#ffffffb5", "#3d437669");

    const ListSkills = [
        {name: "HTML", icon: HtmlIcon},
        {name: "CSS", icon: CssIcon},
        {name: "JavaScript", icon: JsIcon},
        {name: "React JS", icon: ReactIcon},
        {name: "Node JS", icon: NodeJsIcon},
        {name: "Java", icon: JavaIcon},
        {name: "Spring Boot", icon: SpringIcon},
        {name: "C#", icon: CSharpIcon},
        {name: "Oracle / PL-SQL", icon: OracleIcon},
        {name: "Postgres SQL", icon: PostgresIcon},
        {name: "Sql Server / T-SQL", icon: SqlServerIcon},
        {name: "Git", icon: GitIcon},
    ]

    return (
        <Flex
            id="skills"
            flexDirection="column"
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
                        flexDir={desktopView ? "row-reverse" : "2.5rem"}
                    >
                        <DeveloperIcon fontSize={300}/>
                        <Text
                            color={principalColor}
                            lineHeight=" 1.5"
                            fontSize={desktopView ? 60 : "2.5rem"}
                            fontWeight=" 900"
                            letterSpacing=" .2rem"
                            textAlign="center"
                        >
                            {language ? "Skills" : "Habilidades"}
                        </Text>
                    </Flex>
                    <CarouselOrGrid bgColor={secondColor}>
                        {ListSkills.map((item, index) => {
                            return (
                                <Flex
                                    key={index}
                                    pos="relative"
                                    height="fit-content"
                                    bg={bgCard}
                                    justify="center"
                                    align="center"
                                    minH={220}
                                    className=""
                                    _hover={{ bg: "#536dfed1" }}
                                    transition=" 0.5s ease-in-out"
                                    borderRadius={10}
                                >
                                    <item.icon
                                        fontSize={100}
                                        fill={fillColor}
                                        transition="0.5s ease-in-out"
                                    />
                                    <Flex
                                        position="absolute"
                                        w="100%"
                                        h="100%"
                                        flexDirection="column"
                                        justify="center"
                                        align="center"
                                        borderRadius={10}
                                        opacity={0}
                                        transition=" 0.5s ease-in-out"
                                        _hover={{ opacity: 1, transition: " 1.5s ease-in-out" }}
                                    >
                                        <Text
                                            fontSize={22} 
                                            fontWeight="bold" 
                                            color="black"
                                        >
                                            {item.name}
                                        </Text>
                                    </Flex>
                                </Flex>
                            )
                        })}
                    </CarouselOrGrid>
                </motion.div>
            </AnimatePresence>
        </Flex>
    )
}
