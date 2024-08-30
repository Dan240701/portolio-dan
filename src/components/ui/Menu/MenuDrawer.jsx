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

import { IconMenu } from "@assets/icons/Icons";

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
        <div>
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
                <IconMenu fill={colorIcon} />
            </Button>
            <Drawer placement="left" isOpen={isOpen} onClose={CloseModal}>
                {isOpen && (
                    <Suspense>
                        <MenuOptions />
                    </Suspense> 
                )}
            </Drawer>
               
        </div>
    )

}