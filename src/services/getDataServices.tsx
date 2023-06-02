
export const getDataServices = {
    async getAll () {
        const res = await fetch('https://swapi.dev/api/people/1')
        return res.json()
    },

    async getAllFakeProducts () {
        const res = await fetch('https://fakestoreapi.com/products')
        return res.json()
    },

    async getSingleFakeProduct (id) {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        return res.json()
    }

}