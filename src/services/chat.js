import {apiClient} from './config'

//get all rooms from API
export const apiGetRooms = async() => await apiClient.get('/rooms');