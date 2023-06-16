import {AuthorizationToken} from "@/constants/constans";


const requestOptions: RequestInit = {
    next: {revalidate: 60},
    headers: {
        'Authorization': AuthorizationToken,
    }
};

export const getDataServices = {

    async getAllFakeProducts() {
        try {
            const res = await fetch('https://art-vostorg-store-test.up.railway.app/api/products/', requestOptions)
            return res.json()
        } catch (err) {
            console.log(err)
        }
    },

    async getCart() {
        try {
            const res = await fetch('https://art-vostorg-store-test.up.railway.app/api/basket/', requestOptions)
            return res.json()
        } catch (err) {
            console.log(err)
        }
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