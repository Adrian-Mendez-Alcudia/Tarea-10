import  supabase  from "../utils/supabase";
import Usuario from "../models/ususarios";

export const getUsuario = async (): Promise<Usuario[]> => {
    const { data , error} = await supabase.from("usuarios").select();
    if (error) throw error;
    return data
}