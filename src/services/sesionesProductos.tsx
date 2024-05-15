import  supabase  from "../utils/supabase";
import { SesionProducto } from "../models/sesionesProductos";

export const getSesionProducto = async (): Promise<SesionProducto[]> => {
    const { data , error} = await supabase.from("sesionesproductos").select();
    if (error) throw error;
    return data
}
export const createSesionProducto = async (sesionProducto: SesionProducto): Promise<void> => {
    const { error} = await supabase.from("sesionesproductos").insert(sesionProducto);
    if (error) throw error;
}