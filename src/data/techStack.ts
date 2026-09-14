// nom des langages
export interface TechItem{
    id:number,
    name:string
}
// pour la category
 export interface TechCategory{
    id:number,
    title:string,
    color:"purple" | "pink" | "blue" |"white",
    items:TechItem[]
}

export const techCategories: TechCategory[] = [
    {
        id:1,
        title:"Frontend",
        color:"purple",
        items:[
            {id:1,name:"HTML"},
            {id:2,name:"CSS"},
            {id:3,name:"JS"},
            {id:4,name:"TypeScript"},
            {id:5,name:"React"}
        ],
    },{
        id:2,
        title:"Backend & Data",
        color:"pink",
        items:[
            {id:6,name:"PHP"},
            {id:7,name:"SQL"},
            {id:8,name:"Python"},
            {id:9,name:"Base de Nest.js"},
            {id:10,name:"Base de Java"}
            
        ],
    },{
        id:3,
        title:"Outils",
        color:"blue",
        items:[
            {id:11,name:"Git"},
            {id:12,name:"Github"}
        ]
    }
]


