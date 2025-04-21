// Для примера, на реальном проекте требуется соответствующие переменные окружения
export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co';
export const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-public-key';

export type SupabaseClient = any; // Заглушка, пока не установлена библиотека

export const createClient = (): SupabaseClient => {
  return {} as SupabaseClient;
};

export const supabase = createClient(); 