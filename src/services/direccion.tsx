import  supabase  from "../utils/supabase";
import  {Direccion}  from "../models/direccion";

export const getDireccion = async (): Promise<Direccion[]> => {
    const { data , error} = await supabase.from("direccion").select();
    if (error) throw error;
    return data
}
export const createDireccion = async (direccion: Direccion): Promise<void> => {
    const { error} = await supabase.from("direccion").insert(direccion);
    if (error) throw error;
}