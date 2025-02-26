import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image_url: string;
  published_at: string;
  slug: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const { data, error } = await supabase
          .from('blogs')
          .select('*')
          .order('published_at', { ascending: false })
          .limit(3);

        if (error) throw error;
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <section className="py-16 bg-white" id="blog">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <p className="text-gray-600">
            Stay informed with our latest articles and updates.
          </p>
        </div>
        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <div 
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img
                  src={post.image_url}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-blue-600 text-sm mb-2">
                    {new Date(post.published_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <a 
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 font-medium flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}