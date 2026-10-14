-- Migration: Create LMS Tables (Class Sessions and Attendance)

-- Create crm_class_sessions table
CREATE TABLE IF NOT EXISTS public.crm_class_sessions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    tenant_id UUID NOT NULL REFERENCES public.tenants(id) ON DELETE CASCADE,
    class_id UUID NOT NULL REFERENCES public.crm_classes(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    date TIMESTAMP WITH TIME ZONE NOT NULL,
    status TEXT DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'completed', 'cancelled')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create crm_attendance table
CREATE TABLE IF NOT EXISTS public.crm_attendance (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    tenant_id UUID NOT NULL REFERENCES public.tenants(id) ON DELETE CASCADE,
    session_id UUID NOT NULL REFERENCES public.crm_class_sessions(id) ON DELETE CASCADE,
    contact_id UUID NOT NULL REFERENCES public.crm_contacts(id) ON DELETE CASCADE,
    status TEXT NOT NULL CHECK (status IN ('present', 'absent', 'late')),
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE(session_id, contact_id)
);

-- RLS Policies
ALTER TABLE public.crm_class_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.crm_attendance ENABLE ROW LEVEL SECURITY;

-- Allow read/write access for users within the same tenant
CREATE POLICY "Users can manage sessions for their tenant" ON public.crm_class_sessions
    FOR ALL
    USING (tenant_id IN (SELECT tenant_id FROM public.users WHERE id = auth.uid()));

CREATE POLICY "Users can manage attendance for their tenant" ON public.crm_attendance
    FOR ALL
    USING (tenant_id IN (SELECT tenant_id FROM public.users WHERE id = auth.uid()));

-- Add indexes
CREATE INDEX IF NOT EXISTS idx_crm_class_sessions_class_id ON public.crm_class_sessions(class_id);
CREATE INDEX IF NOT EXISTS idx_crm_attendance_session_id ON public.crm_attendance(session_id);
CREATE INDEX IF NOT EXISTS idx_crm_attendance_contact_id ON public.crm_attendance(contact_id);
