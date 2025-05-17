import { createClient } from '@supabase/supabase-js'

const supabaseURL = import.meta.env.VITE_SUPBASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
console.log("import.meta.env.VITE_SUPBASE_URL::::",import.meta.env.VITE_SUPBASE_URL,import.meta.env.VITE_SUPABASE_KEY)
const supabase = createClient(supabaseURL, supabaseKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  });
export default supabase
