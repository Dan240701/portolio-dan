import { useEffect, useState } from "react";
import { Flex, useMediaQuery, Box, useColorModeValue } from "@chakra-ui/react";

import PageStore from "@src/store/PageStore";

export default function Footer() {
    const bg = useColorModeValue("#ffffffb5", "#3d437669");
    const year = Number(new Date().getFullYear());
    const principalColor = useColorModeValue("#536DFE", "#536DFE");
    const [desktopView] = useMediaQuery("(min-width: 1000px)");
    const [rights, setRights] = useState("");
    const language = PageStore((state) => state.language);

    useEffect(() => {
      setRights(!language ? `${year} @ Cleymer Zavala. Todos los derechos reservados` : `${year} @ Cleymer Zavala. All rights reserved`)
    }, [language]);
    

    return (
        <footer>
            <Flex
                bg={bg}
                position="relative"
                zIndex={2}
            >
                <Flex
                    w="100%"
                    gap={desktopView ? 16 : 4}
                    align="center"
                    flexDirection={!desktopView && "column"}
                    marginBlock={desktopView && "20px"}
                >
                    <Box
                        height="0px"
                        border={`1px solid ${principalColor}`}
                        w="100%"
                    >
                    </Box>
                    <Box
                        minW="fit-content"
                        paddingInline={!desktopView && "20px"}
                        textAlign="center"
                    >
                        {rights} 
                    </Box>
                    <Box
                        height="0px"
                        border={`1px solid ${principalColor}`}
                        w="100%"
                    >
                    </Box>
                </Flex>
            </Flex>
        </footer>
    )

} 