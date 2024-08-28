import { useEffect, useState } from "react";
import { Link, useMediaQuery, Image } from "@chakra-ui/react";

import MenuItem from "./MenuItem";

export default function MenuOptions() {
    const [ menuOptions, setMenuOptions ] = useState([]);
    const [ flag, setFlag] = useState([]);

    const [desktopView] = useMediaQuery("(min-width: 1000px)");

    const language = "spanish";
    
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
        { ref: "certificates", text: "Certificados" },
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
        </div>
    )
    
}