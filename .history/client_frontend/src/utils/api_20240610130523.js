import axios from 'axios';

export const api = axios.create({
    baseURL: "http://localhost:8000"
})

export const getAllCoffees = async() ={
    try{
        cost response = await api.get("/allcoffees", {timeout: 10*1000,})
    }
    catch (error) {
        alert.error("Can't pull data from backend")
        throw error

    }
}