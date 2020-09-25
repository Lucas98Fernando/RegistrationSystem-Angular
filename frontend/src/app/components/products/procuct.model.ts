// Criação de um classe modelo para fazer as conexões com o Back-End da aplicação
export interface Product {
    // A interrogação(?) serve para tornar o atributo opcional
    id?: number
    name: string
    price: number
}
