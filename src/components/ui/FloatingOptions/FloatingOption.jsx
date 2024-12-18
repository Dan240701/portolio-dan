import { Flex, Link, } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { GitHubIcon, LinkedinIcon, ArrowIcon } from "@assets/icons/Icons";

export default function FloatingOption() { 
    const links = [
        {
            link: "https://github.com/Dan240701",
            icon: GitHubIcon,
            font: 38,
            name: "github"
        },
        {
            link: "https://www.linkedin.com/in/danellson-miranda-stclair-30a32321b/",
            icon: LinkedinIcon,
            font: 28,
            name: "linkedin"
        } 
    ];

    return (
        <Flex
            id="floating-options"
            position="fixed"
            flexDirection="column"
            w="80px"
            bottom="70px"
            right="0px"
            alignItems="center"
            gap={4}
            transition="0.5s ease-in-out"
            zIndex={3}
        >
            {links.map((item, index) => {
                return (
                    <Link
                        key={index}
                        target="_blank"
                        rel="noreferrer"
                        href={item.link}
                        bg="#21519D"
                        borderRadius={30}
                        w="46px"
                        h="46px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        aria-label={`Link To ${item.name}`}
                        _hover={{
                          transform: "scale(1.3)", bg: "#536DFE"
                        }}
                    >
                        <item.icon fontSize={item.font} fill="white" />
                    </Link>
                );
            })}
            <Button
                bg="#21519D"
                borderRadius={30}
                w="46px"
                h="46px"
                display="flex"
                justifyContent="center"
                opacity={0}
                _hover={{
                    transform: "scale(1.3)", bg: "#536DFE"
                }} 
                alignItems="center"
                aria-label="top arrow button"
                onClick={() => {
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                }}
            >
                <ArrowIcon fontSize={25} fill="white"/>
            </Button>
        </Flex>
    )
} 