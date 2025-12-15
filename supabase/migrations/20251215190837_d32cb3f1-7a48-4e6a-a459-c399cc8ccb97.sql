-- Drop the conflicting restrictive policies
DROP POLICY IF EXISTS "Dealers can view all available listings" ON public.waste_listings;
DROP POLICY IF EXISTS "Users can view all waste listings" ON public.waste_listings;

-- Create a single PERMISSIVE policy for authenticated users to view available listings
CREATE POLICY "Authenticated users can view available listings"
ON public.waste_listings
FOR SELECT
TO authenticated
USING (available = true);

-- Keep farmers able to see their own listings (even if not available)
CREATE POLICY "Users can view their own listings"
ON public.waste_listings
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);