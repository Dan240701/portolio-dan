import JournalApp from "@assets/images/projects/journal.png";
import Service from "@assets/images/projects/service.png";
import Tree from "@assets/images/projects/tree.png";

const react = {
    name: "React Js",
    image: ""
}

const firebase = {
    name: "FireBase",
    image: ""
}

const node = {
    name: "Node Js",
    image: ""
}

const sql = {
    name: "SQL",
    image: ""
}

const java = {
    name: "Java",
    image: ""
}

const jsp = {
    name: "JavaServer Pages",
    image: ""
}

export const projects = [
    {
        title: "Journal App",
        link: "https://journal-app-zc.netlify.app/",
        github: "https://github.com/Zcley02/journal-app",
        gifProject: JournalApp,
        image: JournalApp ,
        description: {
            esp: "",
            eng: ""
        },
        technologies: [react, firebase],
        type: ["front", "react", "firebase"]
    },
    {
        title: "Express API with Sequelize ORM",
        github: "",
        githubBack: "https://github.com/Zcley02/api-sequelize",
        gifProject: Service,
        image: Service,
        description: {
            esp: "",
            eng: ""
        },
        technologies: [node, sql],
        type: ["Node Js", "Express Js", "Postgres SQL"]
    },
    {
        title: "Arboreto Carmelo Palma Website",
        github: "https://github.com/Zcley02/arboret-carmelo-palma",
        gifProject: Tree,
        image: Tree,
        description: {
            esp: "Hola",
            eng: "Adio"
        },
        technologies: [java, sql, jsp],
        type: ["Java", "JavaServer Pages", "Postgres SQL"]
    }
]

export const myExperiences = [
    {
        year: "2022 - 2024",
        titleEsp: "Desarrolador Jr.",
        titleEng: "Jr Developer",
        textEsp : "Como Desarrollador Junior en el Instituto Nicaragüense de Seguros y Reaseguros (INISER), me especializo en el mantenimiento, gestión e implementación de procesos para el sistema Acsel/x utilizando Oracle Forms. También me encargo del diseño y mejora de reportes generados con Oracle Reports, facilitando la obtención de información valiosa para los usuarios. En el ámbito de la programación, utilizo Oracle PL/SQL para desarrollar y mantener procesos en objetos de base de datos. Además, tengo experiencia como desarrollador web, realizando mantenimiento y gestión de una página web diseñada con ASP Clásico, Microsoft y Crystal Reports. También gestiono un servicio de API REST desarrollado con Spring Boot.",
        textEng: "As a Junior Developer at the Instituto Nicaragüense de Seguros y Reaseguros (INISER), I specialize in the maintenance, management, and implementation of processes for the Acsel/x system using Oracle Forms. I am also responsible for designing and improving reports generated with Oracle Reports, facilitating the extraction of valuable information for users. In programming, I use Oracle PL/SQL to develop and maintain processes in database objects. Additionally, I have experience as a web developer, performing maintenance and management of a website designed with Classic ASP, Microsoft technologies, and Crystal Reports. I also manage a REST API service developed with Spring Boot."
    },
    {
        year: "2018 - 2023",
        titleEsp: "Estudiante de Ingenieria en Sistemas de Información",
        titleEng: "Information Systems Engineering Student",
        textEsp : "Estudie en la Universidad Centroamericana (UCA), donde me prepare profesionalmente en la carrera de Ingeniería en Sistemas de la Información. En el transcurro de mi estadía en la UCA, pude obtener tanto los conocimientos importantes de programación para poder desarrollar mis habilidades y lógica de programación. De igual manera, ser capaz de entender el proceso colaborativo en la diseño, análisis y gestión de proyectos de desarrollo.",
        textEng: "I studied at the Central American University (UCA), where I received professional training in the field of Information Systems Engineering. During my time at UCA, I acquired essential programming knowledge that allowed me to develop my skills and programming logic. Additionally, I gained an understanding of the collaborative process involved in designing, analyzing, and managing development projects."
    }
]