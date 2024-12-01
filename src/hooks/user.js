import useSWR from "swr";
import { fetcher } from "../services/config";

export const useUser = () => {
    const { data, mutate } = useSWR('/users/me', fetcher);

    return {
        user: data,
        refresh: mutate
    }
}