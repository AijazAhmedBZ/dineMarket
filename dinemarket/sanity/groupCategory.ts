import { defineType, defineField } from "sanity"
export const groupCategory = defineType( {
    name:"groupCategory",
    title:"GroupCategory",
    type:"document",
    fields:[
        defineField(
        {
        name:"name",
        title:"Group Category",
        type:"string",
        })
    ]
})