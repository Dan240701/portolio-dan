import {
    Flex,
    useColorModeValue,
    useMediaQuery,
    Text,
    Box,
    List,
    ListItem,
    Link
} from "@chakra-ui/react";
import { ProfileIcon } from "@assets/icons/Icons";
import PageStore from "../../store/PageStore";
import { motion, AnimatePresence } from "framer-motion";
import CV from "@assets/documents/cv-esp.pdf";

export default function About() {
    const language = PageStore((state) => state.language);
    const principalColor = useColorModeValue("#536DFE", "white");
    const secondColor = useColorModeValue("white", "#3d437669");
    const age = Number(new Date().getFullYear()) - 2000;
    const [desktopView] = useMediaQuery("(min-width: 1000px)");
  
    return (
        <Flex
            id="about"
            gap={20}
            flexDirection={desktopView ? "row" : "column-reverse"}
            justify={desktopView && "space-between"}
            align={desktopView ? "space-between" : "center"}
        >
            {desktopView && <ProfileIcon fontSize={400} mt={100} />}
            <AnimatePresence mode="wait">
                <motion.div
                    key={language ? language + language : "empty"}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <Flex flexDirection="column" w="100%" align="center" gap={4}>
                        <Text
                            color={principalColor}
                            lineHeight=" 1.5"
                            fontSize={desktopView ? 50 : "2.5rem"}
                            fontWeight=" 900"
                            letterSpacing=" .2rem"
                            position="relative"
                            paddingInline={0}
                            textAlign="center"
                        >
                        {language ? "About me" : "Acerca de mi"}
                        </Text>
                        {!desktopView && <ProfileIcon fontSize={300} my={10} />}

                        <Box bg={secondColor} px={10} py={12} mt={10}>
                            <Text textAlign="justify">
                                {language
                                ? "I am deeply engaged and enthusiastic about software development and technology. With a strong aptitude for quick learning, I take pleasure in broadening my expertise in programming and software development. This capability helps me address diverse challenges, and I am eager to test my skills to contribute to the development of projects and solutions."
                                : "Soy un persona interesada y apasionada tanto del mundo del desarrollo de software como la tecnología. Con una capacidad notable de rápido aprendizaje, disfruto aprendiendo en pro de cultivar un sólido conocimiento en programación y desarrollo de software. Lo que me permite abordar los distintos desafíos, dispuesto a poner apruebas mis habilidades para contribuir en el desarrollo de proyectos y soluciones."}
                            </Text>
                            <Box mt={7}>
                                <List spacing={3}>
                                    <ListItem>
                                        {language ? "Name :" : "Nombre :"} Cleymer Joel Zavala Tinoco
                                    </ListItem>
                                    <ListItem>
                                        {language ? "Age :" : "Edad :"} {age}
                                    </ListItem>
                                    <ListItem>
                                        {language
                                        ? "Academic level : Graduate  (2018-2023)"
                                        : "Nivel académico : Egresado (2018-2023)"}
                                    </ListItem>
                                    <ListItem>
                                        {language
                                        ? "College career : Information Systems Engineering  "
                                        : "Carrera universitaria :  Ingeniería en Sistemas de la información "}
                                    </ListItem>
                                </List>
                                <Link
                                    mt={5}
                                    target="_blank"
                                    rel="noreferrer"
                                    display="block"
                                    width="fit-content"
                                    position="relative"
                                    download="Cleymer Joel Zavala Tinoco - CV"
                                    href={language ? CV : CV}
                                    _hover={{
                                        color: "white",
                                        boxShadow: "0px 0px 10px 1px #536DFE",
                                        borderRadius: "8px",
                                        transform: "scale(1.1)",
                                        bg: "#536DFE",
                                        transition: "background .5s ease-in-out",
                                    }}
                                    p="10px 20px"
                                    border="1px solid #536DFE"
                                    borderRadius="4px"
                                >
                                    {language ? "Download CV " : "Descargar CV "}
                                </Link>
                            </Box>
                        </Box>
                    </Flex>
                </motion.div>
            </AnimatePresence>
        </Flex>
    );
  }