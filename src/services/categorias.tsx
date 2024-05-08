import  supabase  from "../utils/supabase";
import  categorias  from "../models/categorias";

export const getcategorias= async (): Promise<categorias[]> => {
    const { data , error} = await supabase.from("categorias").select();
    if (error) throw error;
    return data
}