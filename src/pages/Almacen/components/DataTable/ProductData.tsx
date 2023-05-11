export const ProductData = {

    getProductData(){
        return [
            {
                id: "1",
                code:"1100100",
                name:"PC Gamer",
                quantity:2,
                action:"edit delete"
            },
            {
                id: "2",
                code:"1100101",
                name:"Teclado",
                quantity:2,
                action:"edit delete"
            },
            {
                id: "3",
                code:"1100102",
                name:"Mouse",
                quantity:3,
                action:"edit delete"
            },
            {
                id: "4",
                code:"1100104",
                name:"Silla Gamer",
                quantity:1,
                action:"edit delete"
            }
        ]
    },

    getProductDataInfo(){
        return Promise.resolve(this.getProductData())
    }
}