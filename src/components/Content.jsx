import { Box, useColorModeValue } from "@chakra-ui/react";
import { Suspense, lazy } from "react";

import PageStore from "@src/store/PageStore";
import Header from "./ui/Header/Header";
import FloatingOption from "./ui/FloatingOptions/FloatingOption";
import Home from "./sections/Home";
import About from "./sections/About";

const Footer = lazy(() => import("@src/components/ui/Footer/Footer"));
const Skills = lazy(() => import("@src/components/sections/Skills"));

export default function Content() {
    const bgBody = useColorModeValue("gray.100", "black");
    const visibleContent = PageStore((state) => state.visibleContent);

    return (
        <Box
            id="start"
            bg={bgBody}
            h="100vh"
            overflow="hidden"
            className="visible-content"
        >
            <Header />
            <div className="radial-gradient "></div>
            <main>
                <Home />
                {visibleContent && (
                    <Suspense>
                        <About />
                        <Skills />
                        <Footer />
                    </Suspense>
                )}
                <FloatingOption />
            </main>
        </Box>
    )
}