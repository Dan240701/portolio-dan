import { useEffect, lazy, Suspense } from 'react';
import { 
    Drawer,
    DrawerBody,
    DrawerContent,
    useDisclosure,
    Button,
    DrawerOverlay,
    useColorModeValue,
    ModalCloseButton
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

import { MenuIcon } from "@assets/icons/Icons";

const MenuOptions = lazy(() => import("./MenuOption"));



export default function MenuDrawer () {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const colorIcon = useColorModeValue("black", "white");
    const bgMenuDrawer = useColorModeValue(
        "linear-gradient( to bottom right, white ,gray.100 70% ,gray.300)",
        "linear-gradient( to bottom right,#0f122b  ,#261a4c  )"
    );

    useEffect(() => {
    
      return () => {
        document.querySelector("body").classList.remove("d-hidden");
      }
    }, [])
    
    const OpenModal = () => {
        onOpen();
        document.querySelector("body").classList.add("d-hidden");
    };
    
    const CloseModal = () => {
        onClose();
        document.querySelector("body").classList.remove("d-hidden");
    };

    return (
        <>
            <Button
                _hover={{ bg: "none" }}
                _active={{ bg: "none" }}
                onClick={OpenModal}
                bg="none"
                w="fit-content"
                h="fit-content"
                px="0px"
                py="0px"
                fontSize="30px"
                aria-label="hamburger menu"
            >
                <MenuIcon fill={colorIcon} />
            </Button>
            <Drawer placement="left" isOpen={isOpen} onClose={CloseModal}>
                {isOpen && (
                    <Suspense>
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerBody
                                bg={bgMenuDrawer}
                            >
                                <AnimatePresence mode="wait">
                                    <ModalCloseButton 
                                        position = "absolute"
                                        insetInlineEnd = "20px"
                                        insetBlockStart = "20px"
                                        variant = "ghost"
                                        _hover = {{transform: "scale(1.8)", color: "red"}}
                                        onClick = {CloseModal}
                                    />
                                    <motion.div
                                        onClick={() => {
                                            CloseModal();
                                        }}
                                        style={{
                                            marginBlockStart: "20vh",
                                            display: "flex",
                                            flexDirection: "column",
                                            marginInlineStart: "4%",
                                            overflow: "hidden",
                                            position: "relative",
                                            width: "fit-content",
                                            gap: "10px"
                                        }}
                                        key={"empty"}
                                        initial={{opacity: 0, scale: "0"}}
                                        animate={{opacity: 1, scale: "1.2"}}
                                        exit={{opacity: 0, scale: "0"}}
                                        transition={{duration: 1.4, delay: 0.3}}
                                    >
                                        <MenuOptions />
                                    </motion.div>
                                </AnimatePresence>
                            </DrawerBody>
                        </DrawerContent>
                    </Suspense> 
                )}
            </Drawer>
               
        </>
    )

}