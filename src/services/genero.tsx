import  supabase  from "../utils/supabase";
import { Genero } from "../models/genero";

export const getGenero = async (): Promise<Genero[]> => {
    const { data , error} = await supabase.from("genero").select();
    if (error) throw error;
    return data
}
export const createGenero = async (genero: Genero): Promise<void> => {
    const { error} = await supabase.from("genero").insert(genero);
    if (error) throw error;
}