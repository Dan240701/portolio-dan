import { Link, useMediaQuery } from "@chakra-ui/react";

export default function MenuItem( {option} ) { 
    const [ desktopView ] = useMediaQuery("(min-width: 1000px)");

    return (
        <Link
            position = "relative"
            w = "120px"
            justifyContent = { desktopView && "center" }
        >
            {option.text}
        </Link>
    )
}