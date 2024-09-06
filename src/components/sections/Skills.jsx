import { Flex, useColorModeValue, useMediaQuery, Text } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import PageStore from "@src/store/PageStore";
import { DeveloperIcon } from "../../assets/icons/Icons";

export default function Skills(){
    const fillColor = useColorModeValue("#536DFE", "#536DFE");
    const bgCard = useColorModeValue("gray.100", "black");
    const principalColor = useColorModeValue("#536DFE", "white");
    const languague = PageStore((state) => state.languague);
    const [desktopView] = useMediaQuery("(min-width: 1000px)");
    const secondColor = useColorModeValue("#ffffffb5", "#3d437669");

    return (
        <Flex
            id="skills"
            flexDirection="column"
        >
            <AnimatePresence wait>
                <motion.div
                    key={languague ? languague + languague : "empty"}
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
                            {languague ? "Skills" : "Habilidades"}
                        </Text>
                    </Flex>
                </motion.div>
            </AnimatePresence>
        </Flex>
    )
}
