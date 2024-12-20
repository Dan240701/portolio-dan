import { useEffect, useState } from "react";
import PageStore from "@src/store/PageStore";
import {
    Flex,
    useMediaQuery,
    Image,
    Text,
    Link,
    useColorModeValue,
    Box,
    Heading
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { linkWhatsapp } from "../../utils/utils";
import { WhatsAppIcon } from "@assets/icons/Icons";

export default function Home() {
    const shadowText = useColorModeValue(
        "",
        "white 2px 0px 0px,  #536DFE 0px 0px 12px"
    );

    const secondShadowText = useColorModeValue(
        "",
        "black 0px 0px 1px,  #536DFE 0px 0px 8px"
    );

    const bgLink = useColorModeValue("#c9ddfb0f", "#00000070");
    const language = PageStore((state) => state.language);
    const [hello, setHello] = useState("");
    const [strings, setStrings] = useState("");

    const [desktopView] = useMediaQuery("(min-width: 700px)");

    const principalColor = useColorModeValue("#536DFE", "white");

    const linkW = linkWhatsapp(
        "Hola Danellson, me gustaría contactarte."
    );

    useEffect(() => {
        setHello(language ? "Hi! I´m " : "Hola! Soy  ");
        setStrings(language ? [
            " Web Developer",
            " Fullstack Developer",
            " Developer Jr"
        ] :
            [
                " Desarrollador Web",
                " Programador Fullstack",
                " Desarrollador Jr"
            ])
    }, [language]);


    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={language ? language + language : "empty"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                    margin: 0,
                }}
            >
                <Flex
                    flexDirection="column"
                    justify="center"
                    align="center"
                    position="relative"
                    pt="0"
                    textShadow={shadowText}
                    justifyContent="center"
                    minH="100vh"
                    paddingInline="5%"
                    gap={2}
                >
                    <Text
                        fontSize={desktopView ? "1.7rem" : "1rem"}
                        fontWeight={desktopView ? "900" : "600"}
                        letterSpacing=" .2rem"
                        textTransform=" uppercase"
                    >
                        {hello}
                    </Text>
                    <Heading
                        color={principalColor}
                        lineHeight="1.5"
                        fontSize={desktopView ? "4.1rem" : "2.1rem"}
                        fontWeight={desktopView ? "900" : "600"}
                        letterSpacing=" .2rem"
                        as="h1"
                    >
                        Danellson Miranda
                    </Heading>
                    <Flex
                        gap="10px"
                        fontSize={desktopView ? "2.7rem" : "1.4rem"}
                        fontWeight={desktopView ? "700" : "600"}
                    >
                        <Box>
                            {language ? "I am " : "Soy "}
                        </Box>

                        <Box color="#536DFE" textShadow={secondShadowText}>
                            <Typewriter
                                options={{
                                    strings: strings,
                                    autoStart: true,
                                    loop: true,
                                    delay: 150,
                                    deleteSpeed: "100"
                                }}

                            />
                        </Box>
                    </Flex>
                    <Link
                        href={linkW}
                        target="_blank"
                        rel="noreferrer"
                        my="40px"
                        display="flex"
                        alignItems="center"
                        gap={2}
                        textShadow={secondShadowText}
                        position="relative"
                        _hover={{
                            boxShadow: "0px 0px 13px 5px #536DFE",
                            border: " 1px solid #657cff",
                            bg: "#536DFE",
                            borderRadius: "8px",
                            transform: "scale(1.1)",
                            color: "white"
                        }}
                        p="10px 20px"
                        border="1px solid #536DFE"
                        borderRadius="4px"
                        bg={bgLink}
                    >
                        <WhatsAppIcon fill="currentColor" />
                        {language ? "Reach me " : "Contáctame "}
                    </Link>
                </Flex>
            </motion.div>
        </AnimatePresence>
    )
}