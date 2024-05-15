import supabase from "../utils/supabase";
import { Product } from "../models/product";


export const getProducts = async (): Promise<Product[]> => {
    const { data , error} = await supabase.from("productos").select();
    if (error) throw error;
    return data
}
export const createProducts  = async (products: Product ): Promise<void> => {
    const { error} = await supabase.from("productos").insert(products );
    if (error) throw error;
}