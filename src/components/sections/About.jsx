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

export default function About() {
    const languague = PageStore((state) => state.languague);
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
            <AnimatePresence wait>
                <motion.div
                    key={languague ? languague + languague : "empty"}
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
                        {languague ? "About me" : "Acerca de mi"}
                        </Text>
                        {!desktopView && <ProfileIcon fontSize={300} my={10} />}

                        <Box bg={secondColor} px={10} py={12} mt={10}>
                            <Text textAlign="justify">
                                {languague
                                ? ""
                                : ""}
                            </Text>
                            <Box mt={10}>
                                <List spacing={3}>
                                    <ListItem>
                                        {languague ? "Name :" : "Nombre :"} David Enrique Morales
                                        Cajina
                                    </ListItem>
                                    <ListItem>
                                        {languague ? "Age :" : "Edad :"} {age}
                                    </ListItem>
                                    <ListItem>
                                        {languague
                                        ? "Academic level : Graduate  (2018-2023)"
                                        : "Nivel académico : Egresado (2018-2023)"}
                                    </ListItem>
                                    <ListItem>
                                        {languague
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
                                    href={languague ? "CV" : "CV2"}
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
                                    {languague ? "Download CV " : "Descargar CV "}
                                </Link>
                            </Box>
                        </Box>
                    </Flex>
                </motion.div>
            </AnimatePresence>
        </Flex>
    );
  }