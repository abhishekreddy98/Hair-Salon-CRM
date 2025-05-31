
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ChatRequest {
  message: string;
  userId: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { message, userId }: ChatRequest = await req.json();

    // Initialize Supabase client
    const supabaseUrl = "https://rinrpzuggwiayygtcmxq.supabase.co";
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpbnJwenVnZ3dpYXl5Z3RjbXhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2NDk0MDEsImV4cCI6MjA2NDIyNTQwMX0.1fKfx8746Dj30oLXCwY19HQCUkvGRcoVleIYxmb21JE";
    
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Fetch relevant data from Supabase for context
    const { data: clients } = await supabase
      .from('clients')
      .select('name, email, phone, notes')
      .limit(50);

    const { data: appointments } = await supabase
      .from('appointments')
      .select(`
        *,
        clients (name, email, phone),
        services (name, price, duration)
      `)
      .gte('appointment_datetime', new Date().toISOString())
      .limit(20);

    const { data: services } = await supabase
      .from('services')
      .select('name, description, price, duration')
      .eq('is_active', true);

    // Prepare context for AI
    const context = {
      clients: clients || [],
      upcomingAppointments: appointments || [],
      services: services || [],
      currentDate: new Date().toISOString(),
    };

    // For now, return a simple response
    // In a real implementation, you would integrate with OpenAI here
    const aiResponse = `I understand you're asking: "${message}". 

Based on your salon data:
- You have ${context.clients.length} clients
- ${context.upcomingAppointments.length} upcoming appointments
- ${context.services.length} available services

This is a placeholder response. To complete the AI integration, you'll need to:
1. Set up an OpenAI API key
2. Install OpenAI SDK
3. Create a proper AI prompt with the salon context

Would you like me to help you set up the OpenAI integration?`;

    return new Response(
      JSON.stringify({ 
        response: aiResponse,
        context: context 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('Chatbot error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
