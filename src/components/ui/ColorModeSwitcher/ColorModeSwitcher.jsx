import { useEffect, useState } from "react";
import {
    useColorMode,
    useColorModeValue,
    Tooltip,
    Link,
    Flex
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import PageStore from "@src/store/PageStore";
import { SunIcon, MoonIcon } from "@assets/icons/Icon";

export const ColorModeSwitcher = () => {
    const fill =  useColorModeValue("yellow", "white");
    const bgContainer = useColorModeValue("#73c0fc", "blue.900");
    const switchICon = useColorModeValue(SunIcon, MoonIcon);
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
                    
                </Flex>
            ) : (
                <Link>
                </Link>
            )}
        </Flex>
    );
}