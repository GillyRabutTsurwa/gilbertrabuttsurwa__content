import blockContent from './blockContent'
import category from './category' //NOTE: j'utilise pas pour le moment
import author from './author'
import personal from './posts/personal'
import tech from './posts/tech'
import homeGrid from './homeGrid'
import about from './about'
import shop from './shop/products'

// l'ordre de ce tableau va definir l'ordre dans la liste dans l'affichage
export const schemaTypes = [about, homeGrid, personal, tech, author, shop, blockContent]
