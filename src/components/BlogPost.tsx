import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { supabase } from '../lib/supabase';
import { ArrowLeft } from 'lucide-react';

interface Blog {
  title: string;
  content: string;
  image_url: string;
  published_at: string;
}

export default function BlogPost() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const { data, error } = await supabase
          .from('blogs')
          .select('*')
          .eq('slug', slug)
          .single();

        if (error) throw error;
        setBlog(data);
      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Blog post not found</p>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-24">
      <a 
        href="/blog" 
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Blog
      </a>
      <img
        src={blog.image_url}
        alt={blog.title}
        className="w-full h-64 object-cover rounded-xl mb-8"
      />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>
      <time className="text-gray-600 mb-8 block">
        {new Date(blog.published_at).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </time>
      <div className="prose max-w-none">
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </div>
    </article>
  );
}