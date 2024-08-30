import { useEffect, useState } from "react";
import { Link, useMediaQuery, Image } from "@chakra-ui/react";

import MenuItem from "./MenuItem";
import PageStore from "@src/store/PageStore";

export default function MenuOptions() {
    const [ menuOptions, setMenuOptions ] = useState([]);
    const [ flag, setFlag] = useState([]);

    const [desktopView] = useMediaQuery("(min-width: 1000px)");

    const language = PageStore((state) => state.language);
    const changeLanguage = PageStore((state) => state.changeLanguage);
    
    const spanish = [
      { ref: "start", text: "Inicio" },
      { ref: "about", text: "Sobre mi" },
      { ref: "skills", text: "Habilidades" },
      { ref: "certificates", text: "Certificados" },
      { ref: "projects", text: "Proyectos" },
      { ref: "experiencie", text: "Experiencia" },
      { ref: "contact", text: "Contacto" },
    ];
      
    const english = [
      { ref: "start", text: "Home" },
      { ref: "about", text: "About" },
      { ref: "skills", text: "Skills" },
      { ref: "certificates", text: "Certificates" },
      { ref: "projects", text: "Proyects" },
      { ref: "experiencie", text: "Experiencie" },
      { ref: "contact", text: "Contact" },
    ];

    
    useEffect(() => {
      setMenuOptions(language ? [...english] : [...spanish])        
    }, [language]);

    return (
        <div>
            {menuOptions.map((option, index) => {
                return <MenuItem key={index} option={option}/>;
            })}
            <Link
              display="flex"
              alignItems="center"
              w="60px" 
              opacity={0.8}
              _hover={{ opacity: "1" }}
              _active={{}}
              onClick={(e) => {
                e.stopPropagation();
                changeLanguage(language);
              }}
            >
              <span>{!desktopView && (language ? "Es" : "En")}</span>
              <Image src={flag} h="10px" mx="10px" pointerEvents="none" alt="flag" />
              <span> {desktopView && (language ? "Es" : "En")}</span>
            </Link>
        </div>
        
    )
    
}