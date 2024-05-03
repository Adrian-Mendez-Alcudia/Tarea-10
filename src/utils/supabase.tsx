import { createClient } from "@supabase/supabase-js";


const supabase = createClient('https://dlbaoffvvflzoekkjhpf.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsYmFvZmZ2dmZsem9la2tqaHBmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMzMzA3NDAsImV4cCI6MjAyODkwNjc0MH0.8GJw104vGF2XihTPMGRc3cWsn0zn_FF9_A25YT1zJjk');

export default supabase;