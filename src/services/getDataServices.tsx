import {AuthorizationToken, defaultApiUrl} from "@/constants/constans";


const requestOptions: RequestInit = {
    next: {revalidate: 60},
    headers: {}
};

export const getDataServices = {

    async getAllFakeProducts() {
        try {
            const res = await fetch(`${defaultApiUrl}/products?populate=image`, requestOptions)
            return res.json()
        } catch (err) {
            console.log(err)
        }
    },

    async getPosts() {
        try {
            const res = await fetch(`${defaultApiUrl}/posts/1`, requestOptions)
            return res.json()
        } catch (err) {
            console.log(err)
        }
    },

    async getSingleFakeProduct(id: any) {
        const res = await fetch(`${defaultApiUrl}/products/${id}`, requestOptions)
        return res.json()
    },


    async postOrder(product) {
       await fetch(`${defaultApiUrl}/orders`)


    }

}