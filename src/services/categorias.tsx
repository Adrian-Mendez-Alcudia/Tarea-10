import  supabase  from "../utils/supabase";
import  categorias  from "../models/categorias";

export const getcategorias= async (): Promise<categorias[]> => {
    const { data , error} = await supabase.from("categorias").select();
    if (error) throw error;
    return data
}

export const createCategoria = async (categoria: categorias): Promise<void> => {
    const { error} = await supabase.from("categorias").insert(categoria);
    if (error) throw error;
}