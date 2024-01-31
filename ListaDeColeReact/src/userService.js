import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/',
    withCredentials: false,
    headers: {
      "Accept": "application/json",
     "Content-Type": "application/json"
    }
})

export const UserService = {

    
    async getAllUsers () {
        
        
         let response = await apiClient.get("/users");
         let allUsers = response.data
         return allUsers

    },

    async submitUser(newUser){
        
        await apiClient.post("/users", newUser)
    },

    
    
      async deleteUser(userId) {
        // Implementa la lógica para eliminar el usuario con el ID proporcionado
        await apiClient.delete(`/users/${userId}`);
      },

      async updateUser(userId, updatedUser) {
        await apiClient.put(`/users/${userId}`, updatedUser);
      },
}
