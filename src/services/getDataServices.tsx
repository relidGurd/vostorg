
export const getDataServices = {
    async getAllFakeProducts () {
        const res = await fetch('https://art-vostorg-store-test.up.railway.app/api/products/', {next: {revalidate: 60}})
        return res.json()
    },

    async getSingleFakeProduct (id: any) {
        const res = await fetch(`https://art-vostorg-store-test.up.railway.app/api/products/${id}/`)
        return res.json()
    }

}