import  supabase  from "../utils/supabase";
import { Genero } from "../models/genero";

export const getGenero = async (): Promise<Genero[]> => {
    const { data , error} = await supabase.from("genero").select();
    if (error) throw error;
    return data
}