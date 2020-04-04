import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3001/'
});

export const menuAPI = {
    getAllMenuData() {
        return instance.get(`menus?_embed=items`)
            .then(response => {
                return response.data;
            })
    }
};

export const orderAPI = {
    getUserCart() {
      return instance.get(`http://localhost:3001/orders`)
          .then(response => response.data)
    },
    setUserCart(cart, userId) {
        return instance.post(`http://localhost:3001/orders`, {
            cart,
            userId: userId
        })
    },
    updateUserCart( cart, userId, id ) {
        return instance.put(`http://localhost:3001/orders/${id}`, {
            cart,
            userId,
            id
        })
    },
    deleteUserCart(id) {
        return instance.delete(`http://localhost:3001/orders/${id}`)
    }
}
