import { Suspense, lazy, useLayoutEffect, useRef } from "react";
import { Flex, useMediaQuery } from "@chakra-ui/react";
import PageStore from "@src/store/PageStore";

const MenuOptions = lazy(() => import("@src/components/ui/Menu/MenuOption"));
const MenuDrawer = lazy(() => import("@src/components/ui/Menu/MenuDrawer"));

export default function Header() {
    const [desktopView] = useMediaQuery("(min-width: 1000px)");
    const headerRef = useRef(null);
    
    const changeVisibility = PageStore((state) => state.changeVisibility);

    const getSections = () => {
        changeVisibility();
        window.removeEventListener("scroll", getSections);
        window.removeEventListener("mouseover", getSections);
        window.removeEventListener("click", getSections);
    };

    const headerWatcher = () => {
        if (!headerRef.current) return

        const contentHeight = window.scrollY;
        if (contentHeight < headerRef.current.offsetHeight){
            headerRef.current.classList.remove("fixed-header");
            const main = document.querySelector("main");
            main.style.paddingTop = "0px";
            const FloatingOptions = document.querySelector("#floating-options");
            FloatingOptions.classList.remove("opacity-1");
        } else {
            headerRef.current.classList.add("fixed-header");
            const main = document.querySelector("main");
            main.style.paddingTop = "40px";
            const FloatingOptions = document.querySelector("#floating-options");
            FloatingOptions.classList.add("opacity-1");
        }
    };

    useLayoutEffect(() => {
        if(headerRef.current) {
            window.addEventListener("scroll", headerWatcher);
            window.addEventListener("scroll", getSections);
            window.addEventListener("mouseover", getSections);
            window.addEventListener("click", getSections);
        }
    }, [headerRef]);

    return (
        <header
            ref={headerRef}
        >
            <Flex
                justify="end"
                w="100vw"
                align="center"
                h="100%"
                px={"30px"}
            >
                {desktopView && (
                    <Suspense>
                        <MenuOptions />
                    </Suspense>
                )}
                {!desktopView && (
                    <Suspense>
                        <MenuDrawer />
                    </Suspense>
                )}
            </Flex>
        </header>
    )
}