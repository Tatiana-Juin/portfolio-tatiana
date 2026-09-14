// INTERFACE DE PROJET 
export interface Project  {
    id:number,
    name : string,
    description : string,
    category: string,
    urlGithub : string,
    tag:string[],
    urlOnline? : string
};

export const termEscape : Project={
    id:1,
    name:"termEscape",
    description:"Un jeu permettant d'apprendre les lignes de commande Linux.",
    category:"frontend",
    tag:["REACT","CSS"],
    urlGithub:"#",
    urlOnline:"#"
};

export const components : Project={
    id:2,
    name:"Components",
    description:"Site permettant de generer des composant modificable dont tu peux recuperer le code HTML et CSS pour l'integrer à tes projets.",
    category:"frontend",
    tag:["REACT","TAILWIND CSS"],
    urlGithub:"#",
    urlOnline:"#"
}

export const outilsLinks : Project={
    id:3,
    name:"OutilsLinks",
    description:"Site permettant d'enregistrer see liens favoris dans des categories.",
    category:"fullstack",
    tag:["HTML/CSS","JAVASCRIPT","PHP","SQL"],
    urlGithub:"#",
    
}

export const morpion: Project={
    id:4,
    name:"morpions",
    description:"Pour un défis lancé par un codeur, j'ai décidé de créer un morpions",
    category:"frontend",
    tag:["HTML","CSS","JS"],
    urlGithub:"https://",
    urlOnline:"http://"
};

export const projectFinale : Project[] = [termEscape,components,outilsLinks,morpion];
