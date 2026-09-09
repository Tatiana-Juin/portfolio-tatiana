// INTERFACE DE PROJET 
interface Project  {
    id:number,
    name : string,
    description : string,
    category: string,
    urlGithub : string,
    tag:string[],
    urlOnline? : string
};

const project1: Project={
    id:1,
    name:"morpions",
    description:"Pour un défis lancé par un codeur, j'ai décidé de créer un morpions",
    category:"frontend",
    tag:["HTML","CSS","JS"],
    urlGithub:"https://",
    urlOnline:"http://"
};

