/*
  # Create blogs table and add sample data

  1. New Tables
    - `blogs`
      - `id` (uuid, primary key)
      - `title` (text)
      - `slug` (text, unique)
      - `excerpt` (text)
      - `content` (text)
      - `image_url` (text)
      - `published_at` (timestamptz)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
      - `author_id` (uuid, references auth.users)

  2. Security
    - Enable RLS on `blogs` table
    - Add policy for public to view published blogs
    - Add policy for authors to manage their own blogs

  3. Sample Data
    - Add three initial blog posts
*/

-- Create the blogs table
CREATE TABLE IF NOT EXISTS blogs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text,
  content text,
  image_url text,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  author_id uuid REFERENCES auth.users(id)
);

-- Enable RLS
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Public can view published blogs"
  ON blogs
  FOR SELECT
  TO public
  USING (published_at IS NOT NULL AND published_at <= now());

CREATE POLICY "Authors can manage own blogs"
  ON blogs
  FOR ALL
  TO authenticated
  USING (author_id = auth.uid())
  WITH CHECK (author_id = auth.uid());

-- Insert sample blog posts
INSERT INTO blogs (title, slug, excerpt, content, image_url, published_at) VALUES
(
  'The Future of Home Healthcare',
  'future-of-home-healthcare',
  'Discover how technology is transforming the way we deliver care at home.',
  '# The Future of Home Healthcare

Technology is revolutionizing how we deliver and receive healthcare at home. From AI-powered diagnostics to remote monitoring systems, the future of home healthcare is becoming more accessible, efficient, and effective than ever before.

## Key Innovations

1. **AI-Powered Health Monitoring**
   - Real-time vital signs tracking
   - Early warning systems for health issues
   - Personalized care recommendations

2. **Telemedicine Integration**
   - Virtual consultations
   - Remote diagnostics
   - Digital prescription management

3. **Smart Home Integration**
   - Automated medication reminders
   - Environmental monitoring
   - Emergency response systems

## Benefits

- Improved patient comfort
- Reduced healthcare costs
- Better health outcomes
- Enhanced accessibility

The future of home healthcare is bright, and we''re just getting started.',
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=500',
  now()
),
(
  'Tips for Choosing a Home Care Provider',
  'choosing-home-care-provider',
  'Essential factors to consider when selecting the right care service for your needs.',
  '# Choosing the Right Home Care Provider

Making the decision to bring a home care provider into your life is significant. Here''s a comprehensive guide to help you make the best choice for you or your loved ones.

## Key Considerations

1. **Qualifications and Training**
   - Professional certifications
   - Specialized training
   - Experience level

2. **Service Range**
   - Types of care offered
   - Availability and scheduling
   - Emergency support

3. **References and Reviews**
   - Client testimonials
   - Professional references
   - Quality ratings

## Making Your Decision

Consider these factors when evaluating providers:
- Communication style
- Cost and payment options
- Insurance coverage
- Cultural compatibility

Remember, the right provider will align with both your care needs and personal preferences.',
  'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=500',
  now()
),
(
  'Understanding AI in Healthcare',
  'ai-in-healthcare',
  'How artificial intelligence is improving patient care and diagnosis.',
  '# The Role of AI in Modern Healthcare

Artificial Intelligence is transforming healthcare delivery and patient outcomes. Let''s explore how AI is making healthcare more efficient and accessible.

## Key Applications

1. **Diagnostic Assistance**
   - Image analysis
   - Pattern recognition
   - Risk assessment

2. **Treatment Planning**
   - Personalized medicine
   - Drug interaction checking
   - Outcome prediction

3. **Patient Monitoring**
   - Real-time health tracking
   - Predictive analytics
   - Early warning systems

## Benefits and Challenges

### Benefits
- Improved accuracy
- Faster diagnoses
- Cost reduction
- Better patient outcomes

### Challenges
- Data privacy
- Integration with existing systems
- Training requirements
- Regulatory compliance

The future of healthcare is increasingly digital, and AI will play a crucial role in this transformation.',
  'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=500',
  now()
);