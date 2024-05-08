import  supabase  from "../utils/supabase";
import { Sesion } from "../models/sesiones";

export const getSesion = async (): Promise<Sesion[]> => {
    const { data , error} = await supabase.from("sesiones").select();
    if (error) throw error;
    return data
}