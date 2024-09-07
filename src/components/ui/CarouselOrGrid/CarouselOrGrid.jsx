import { useEffect, useState, useRef } from "react";
import { 
    Flex,
    useMediaQuery,
    Button,
    Icon,
    useColorModeValue
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { LeftArrowIcon, RightArrowIcon } from "../../../assets/icons/Icons";

export default function CarouselOrGrid({children, bgColor}) {
    const [animate, setAnimate] = useState(0);
    const [right, setRight] = useState(true);
    const [desktopView] = useMediaQuery("(max-width: 800px)");

    const carouselRef = useRef(null);
    const indexRef = useRef(0);

    const border = useColorModeValue(
        "1px solid #80808042",
        "1px solid transparent"
    );

    const changeIndex = (index) => {
        indexRef.current += index;

        const width = carouselRef.current.offsetWidth;
        if (index > 0) {
            if (indexRef.current >= carouselRef.current.childElementCount - 1) {
                setRight(false);
            }
        }else{
            setRight(true);
        }

        const temp = indexRef.current * width + indexRef.current * 20;
        setAnimate(temp); 
    }

    useEffect(() => {
        if(!desktopView) {
            setAnimate(0);
        }
    }, [desktopView])
    
    return (
        <AnimatePresence initial="false" bg={bgColor && bgColor}>
            <Flex
                w="100%"
                position="relative"
                overflow="hidden"
                bg={bgColor && bgColor}
                border={border}
                borderRadius={10}
            >
                <Flex
                    position="absolute"
                    w="100%"
                    height="100%"
                    inset={0}
                    zIndex={2}
                    justify="space-between"
                    alignItems="center"
                    pointerEvents="none"
                >
                    <Button
                        opacity={animate <= 0 && "0"}
                        bg="none" 
                        _hover={{bg:"#536dfed1",color:"white"}}
                        _active={{bg:"#536dfed1",color:"white"}}
                        pointerEvents={animate <= 0 ? "none" : "all"}
                        onClick={() => {
                          changeIndex(-1);
                        }}
                    >
                        <Icon as={LeftArrowIcon} w={6} h={6} fill="currentcolor" />
                    </Button>
                    {right == true && desktopView == true && (
                        <Button
                            pointerEvents="all"
                            _hover={{bg:"#536dfed1",color:"white"}}
                            _active={{bg:"#536dfed1",color:"white"}}
                            onClick={() => {
                            changeIndex(+1);
                            }}
                            bg="none"
                        >
                            <Icon as={RightArrowIcon} w={6} h={6} fill="currentcolor" />
                        </Button>
                    )}
                </Flex>
                <motion.div
                    className={!desktopView ? "grid-template" : "carousel-template"}
                    style={{ display: "flex", position: "relative" }}
                    animate={{
                        translateX: `-${animate}px`,
                    }}
                    ref={carouselRef}
                >
                    {children}
                </motion.div>
            </Flex>
        </AnimatePresence>
    )
}