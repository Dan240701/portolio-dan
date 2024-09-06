import { useState, useEffect } from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";

export default function Loader() {
    const activeColor = useColorModeValue("white", "#1c173d");
    const [count, setCount] = useState(3);

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setCount((prevCount) => prevCount - 1);
        }, 1000);

        if (count <= 2) {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }

        if (count <= 0) {
            document.querySelector("body").classList.add("chakra-ui-visible");
            clearTimeout(timeoutID);
        } 
        return () => clearTimeout(timeoutID);
    }, [count]);

    return (
        <Flex
            position="fixed"
            width="100vw"
            height="100vh"
            bg={activeColor}
            zIndex={20}
            justify="center"
            align="center"
            className={count <= 1 && "opacity-animation"}
            pointerEvents={count <= 1 && "none"}
        ></Flex>
    );
}