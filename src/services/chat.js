import {apiClient} from './config'

//get all rooms from API
export const apiGetRooms = async() => await apiClient.get('/rooms');

//add a room
export const apiAddRoom =async(payload) => await apiClient.post('/rooms',payload);

//to search for chatrooms
export const apiSearch = async(filter) => await apiClient.get(`/rooms?filter=${filter}`);

//to post chats in chatrooms
export const apiPostChats = async(payload) => apiClient.post('/messages', payload);

//to post an image in chatroom
export const apiPostImage = async(payload)=> apiClient.post('/images', payload)

//to get chats in chatrooms
export const apiGetMessage = async() => apiClient.get('/messages');

//update user details
export const apiUpdateUser = async (payload) => apiClient.patch('/users/update');

//get User Details
export const apiGetUser  = async (id) => apiClient.get('/users/me')