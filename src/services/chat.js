import {apiClient} from './config'

//get all rooms from API
export const apiGetRooms = async() => await apiClient.get('/rooms');

//to search for chatrooms
export const apiSearch = async(filter) => await apiClient.get(`/rooms?filter=${filter}`);

