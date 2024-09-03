import { useEffect, useState } from "react";
import {
    useColorMode,
    useColorModeValue,
    useMediaQuery,
    Tooltip,
    Link,
    Flex
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import PageStore from "@src/store/PageStore";
import { SunIcon, MoonIcon } from "@assets/icons/Icons";

export const ColorModeSwitcher = () => {
    const fill =  useColorModeValue("yellow", "white");
    const bgContainer = useColorModeValue("#73c0fc", "blue.900");
    const SwitchIcon = useColorModeValue(SunIcon, MoonIcon);
    const { colorMode, toggleColorMode } = useColorMode();
    const language = PageStore((state) => state.language);
    const [options, setOptions] = useState([]);
    const [ desktopView ] = useMediaQuery("(min-width: 1000px)");
    const [isOn, setIsOn] = useState(colorMode == "dark" ? false : true);

    const toggleSwitch = () => {
        setIsOn(!isOn);
        toggleColorMode();
    }; 

    const spring = {
        type: "spring",
        stiffness: 700,
        dampoing: 30
    };

    useEffect(() => {
      setOptions(language ? ["Dark", "Light"] : ["Oscuro", "Claro"]);
    }, [language]);
    
    return(
        <Flex
            position="relative"
            align="center"
        >
            {desktopView ? (
                <Tooltip
                    label={colorMode === "light" ? options[1] : options[0]}
                    hasArrow
                    arrowSize={15}
                    color= "white"
                    bg="blue.400"
                >
                    <Flex
                        ml="20px"
                        w="60px"
                        h="20px"
                        bg={bgContainer}
                        borderRadius="20px"
                        justifyContent={isOn ? "flex-start" : "flex-end"}
                        justify="space-between"
                        overflow="hidden"
                        onClick={toggleSwitch}
                        cursor="pointer"
                        position="relative"
                    >
                        <Flex
                            className={isOn ? "SwitcherText-Ligth" : "SwitcherText-Dark"}
                            position="absolute"
                            w="100%"
                            maxW="30px"
                            zIndex={5}
                        ></Flex>
                        <motion.div
                            layout
                            transition={spring}
                            style={{
                                position: "relative",
                                width: "26px",
                                cursor: "pointer",
                                borderRadius: "20px",
                                zIndex: "12",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                pointerEvent: "none"
                            }}
                        >
                            <SwitchIcon fill={fill} />
                        </motion.div>
                        
                    </Flex>
                </Tooltip>
            ) : (
                <Link
                    w="fit-content"
                    onClick={(e) =>  {
                        e.stopPropagation();
                        toggleColorMode();
                    }}
                    color={colorMode === "light" ? "black" : "white"}
                    bg="none"
                    opacity={0.8}
                    _hover={{opacity: "1"}}
                    _active={{}}
                    justifyContent="start"
                    p="0"
                    mt="10px"
                >
                    {colorMode === "light" ? options[0] : options[1]}
                </Link>
            )}
        </Flex>
    );
}