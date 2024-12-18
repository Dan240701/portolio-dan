import JournalApp from "@assets/images/projects/journal.png";
import Service from "@assets/images/projects/service.png";
import Tree from "@assets/images/projects/tree.png";



import CourseApp from "@assets/images/projects/aula.png";
import gesApp from "@assets/images/projects/riesgos.png";
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
const python = {
    name: "Python",
    image: ""
}
const django = {
    name: "Django",
    image: ""
}
const PostgresSql = {
    name: "Postgres SQL",
    image: ""
}
const JavaScript = {
    name: "JavaScript",
    image: ""
}
const Csharp = {
    name: "C#",
    image: ""
}

export const projects = [
    {
        title: "Courses SPA App",
        github: "https://github.com/Dan240701/EduLEARN-CS50W2024.git",
        gifProject: CourseApp,
        image: CourseApp,
        description: {
            esp: "",
            eng: ""
        },
        technologies: [python, django, PostgresSql, JavaScript],
        type: ["web-app", "Spa", "Python", "Django", "Postgres SQL", "Bootstrap", "Js", "Rest API"],
    },
    {
        title: "Sistema de Votación MT2024",
        github: "",
        githubBack: "https://github.com/Dan240701/Votos-MT204.git",
        gifProject: Service,
        image: Service,
        description: {
            esp: "",
            eng: ""
        },
        technologies: [JavaScript, sql, Csharp],
        type: ["web-app", ".NET framework", "SQL", "Razor templates", "API REST"], 
    },
    {
        title: "Sistema de Gestion Empresarial SEES",
        github: "https://gitfront.io/r/Danellson-Miranda/UsYH7ga9KwxK/SEES-BACKEND/",
        gifProject: gesApp,
        image: gesApp,
        description: {
            esp: "",
            eng: ""
        },
        technologies: [python, PostgresSql, django, JavaScript],
        type: ["web-app", "Python", "Django", "Postgres SQL", "Bootstrap", "Js", "Rest API"],
    }
]

export const myExperiences = [
    {
        year: "JUL 2024 - AGO 2024",
        titleEsp: "Desarrolador Jr.",
        titleEng: "Jr Developer",
        textEsp : "Diseño y desarrollo de nuevas funcionalidades en los aplicativos web y móviles de la organización haciendo uso de tecnologías como Angular, Java (SpringBoot), e Ionic (Capacitor.js).",
        textEng: "Design and development of new functionalities in the organization's web and mobile applications using technologies such as Angular, Java (SpringBoot), and Ionic (Capacitor.js)."
    },
    {
        year: "AGO 2022 - JUN 2023",
        titleEsp: "Analista de sistemas.",
        titleEng: "System Analyst",
        textEsp : "Colaboración en la mejora de los sistemas de gestión interna del centro" +
                    "educativo, incluyendo análisis de datos para optimizar la eficiencia" +
                    "operativa y la experiencia de usuario.",
        textEng: "Collaboration in the improvement of the internal management systems of the educational center, including data analysis to optimize operational efficiency and user experience.",
    },
    {
        year: "FEB 2024 – JUN 2024",
        titleEsp: "Desarollador Web",
        titleEng: "Web Developer",
        textEsp : "Implementación del sistema de administración y votación para el evento MT-Nicaragua 2024, utilizando C# .NET Framework, Razor templates, API REST y JavaScript.",

    },
    {
        year: "2020 - 2024",
        titleEsp: "Estudiante de Ingenieria en Sistemas de Información",
        titleEng: "Information Systems Engineering Student",
        textEsp : "Estudie en la Universidad Nacional Autonoma de Nicaragua(UNAN), donde me prepare profesionalmente en la carrera de Ingeniería en Sistemas de la Información. En el transcurro de mi estadía en la UNAN, pude obtener tanto los conocimientos importantes de programación para poder desarrollar mis habilidades y lógica de programación. De igual manera, ser capaz de entender el proceso colaborativo en la diseño, análisis y gestión de proyectos de desarrollo.",
        textEng: "I studied at the National Autonomous University of Nicaragua (UNAN), where I professionally prepared in the career of Information Systems Engineering. During my stay at the UNAN, I was able to obtain both the important programming knowledge to be able to develop my programming skills and logic. Likewise, be able to understand the collaborative process in the design, analysis, and management of development projects."
    }, 
    
]