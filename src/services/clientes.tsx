import  supabase  from "../utils/supabase";
import  Cliente  from "../models/clientes";

export const getCliente = async (): Promise<Cliente[]> => {
    const { data , error} = await supabase.from("clientes").select();
    if (error) throw error;
    return data
}
export const createCliente = async (cliente: Cliente): Promise<void> => {
    const { error} = await supabase.from("clientes").insert(cliente);
    if (error) throw error;
}