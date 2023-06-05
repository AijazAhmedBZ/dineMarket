import { defineType, defineField } from "sanity"
export const product = defineType( {
    name:"product",
    type:"document",
    title:"Product",
    fields:[
        defineField(
        {
            name:"title",
            title:"Product Title",
            type:"string",            
        }),
        defineField(
        {
            name:"itemCategory",
            title:"Product Item Category",
            type:"string",
        }),
        defineField(
        {
            name:"price",
            title:"Product Price",
            type:"number",            
        }),
        defineField(
            {
                name:"image",
                title:"Product Image",
                type:"image",            
    }),        defineField(
        {
            name:"groupCategory",
            title:"Product Category",
            type:"reference",
            to:[
                {
                    type:"groupCategory"
                }
            ]          
})]
})