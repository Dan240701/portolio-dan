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
        link: "",
        github: "aa",
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
        github: "",
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