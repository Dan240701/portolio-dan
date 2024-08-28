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

import MenuOptions from './MenuOption';

export default function MenuDrawer () {
    useEffect(() => {
    
      return () => {
        
      }
    }, [])
    
    return (
        <div>
            <MenuOptions></MenuOptions>
        </div>
    )

}