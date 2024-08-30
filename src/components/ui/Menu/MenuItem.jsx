import { Link, useMediaQuery } from "@chakra-ui/react";

export default function MenuItem( {option} ) { 
    const [ desktopView ] = useMediaQuery("(min-width: 1000px)");

    return (
        <Link
            position = "relative"
            w = "120px"
            px="0"
            opacity="0.8"
            display="flex"
            alignItems="center"
            borderBottom="2px solid transparent"
            justifyContent = { desktopView && "center" }
            _hover={{
                opacity: "1",
                fontWeight: "bold",
                borderBottom: "2px solid #536DFE",
            }}
            href={`#${option.ref}`}
        >
            {option.text}
        </Link>
    )
}