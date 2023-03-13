import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://edlsxnllrcpjsmuthktc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkbHN4bmxscmNwanNtdXRoa3RjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgzODgyNjUsImV4cCI6MTk5Mzk2NDI2NX0.FENnnP951SfbRaHLbhwgJLiJPDIhrhFmvlXgWDtHmr4"
);
