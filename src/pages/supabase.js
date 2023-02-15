import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wsrpysvbdbzuydrdczqv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndzcnB5c3ZiZGJ6dXlkcmRjenF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYxOTQwNTEsImV4cCI6MTk5MTc3MDA1MX0.E-awWeUnepPdBceh-Izm_wqnQyexkgBU5PbjKkfow5o";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
