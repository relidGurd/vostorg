

const requestOptions: RequestInit = {
    next: {revalidate: 60},
    headers: {
       'Authorization': 'FbgFil71EC7GymRSEMpsE0T2HBUTRu3g'
    }
};

export const basePublicUrl = 'http://localhost:3000/'

export const getDataServices = {

    async getAllFakeProducts() {
        const res = await fetch('https://art-vostorg-store-test.up.railway.app/api/products/', requestOptions)
        return res.json()
    },

    async getSingleFakeProduct(id: any) {
        const res = await fetch(`https://art-vostorg-store-test.up.railway.app/api/products/${id}/`, requestOptions)
        return res.json()
    },

    async getTestProducts() {
        const res = await fetch(`https://fakestoreapi.com/products?limit=10`)
        return res.json()
    }

}