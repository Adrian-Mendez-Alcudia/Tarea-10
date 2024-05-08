import  supabase  from "../utils/supabase";
import  Cliente  from "../models/clientes";

export const getCliente = async (): Promise<Cliente[]> => {
    const { data , error} = await supabase.from("clientes").select();
    if (error) throw error;
    return data
}