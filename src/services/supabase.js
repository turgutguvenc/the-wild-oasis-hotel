import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dzkvscowaymbbmoykfay.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6a3ZzY293YXltYmJtb3lrZmF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI2OTM4OTYsImV4cCI6MjAyODI2OTg5Nn0.AkAXvSqfh7vUTBSrrUQrH8CUyAZ2NwTamS3ua4I-2KM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
