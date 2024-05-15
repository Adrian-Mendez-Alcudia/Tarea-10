import  supabase  from "../utils/supabase";
import Usuario from "../models/usuarios";

export const getUsuario = async (): Promise<Usuario[]> => {
    const { data , error} = await supabase.from("usuarios").select();
    if (error) throw error;
    return data
}
export const createUsuario = async (usuario: Usuario): Promise<void> => {
    const { error} = await supabase.from("usuarios").insert(usuario);
    if (error) throw error;
}