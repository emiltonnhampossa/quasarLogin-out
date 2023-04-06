import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fmskeqecmtmkfydheyym.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtc2tlcWVjbXRta2Z5ZGhleXltIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA4MDU0NjcsImV4cCI6MTk5NjM4MTQ2N30.GM3GSE8QOxIoxQUliyxmbAiKg7aqOAbvFzdLOam10lk'

const supabase = createClient(supabaseUrl, supabaseKey)

console.log('INIT SUPABASE', supabase)

export default function useSupabase () {
  return { supabase }
}
