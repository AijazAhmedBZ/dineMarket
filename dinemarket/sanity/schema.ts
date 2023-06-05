import { type SchemaTypeDefinition } from 'sanity'
import { product } from "./product"
import { groupCategory } from './groupCategory'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, groupCategory],
}
