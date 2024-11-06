import React from 'react';
import { Star, Award } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function Portfolio() {
  const categories = ['All', 'Music', 'Video', 'Direction'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Music Producer',
      content: 'Working with Aria was an incredible experience. Her talent and professionalism are unmatched.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80'
    },
    {
      name: 'Michael Chen',
      role: 'Film Director',
      content: 'One of the most creative and innovative artists I have had the pleasure to collaborate with.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80'
    }
  ];

  const awards = [
    'Best Music Video Director 2023',
    'Outstanding Artistic Achievement',
    'Innovation in Digital Media 2022'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900 pt-16">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">Portfolio</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my journey through music, video production, and creative direction.
          </p>
        </div>
      </section>

      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-black/30 text-gray-300 hover:bg-purple-600/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="group relative overflow-hidden rounded-lg aspect-video cursor-pointer"
              >
                <img
                  src={`https://images.unsplash.com/photo-151167178277${item}-c97d3d27a1d4?auto=format&fit=crop&q=80`}
                  alt={`Portfolio item ${item}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-lg">Project Title</h3>
                    <p className="text-gray-300 text-sm">Category • Year</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
              <p className="text-gray-300 mb-6">
                With over a decade of experience in the creative industry, I have had the privilege of working with some of the most innovative artists and brands. My work spans multiple disciplines, from music production to video direction, always pushing the boundaries of artistic expression.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <Award className="h-5 w-5 text-purple-400 mr-2" />
                  Awards & Recognition
                </h3>
                <ul className="space-y-2">
                  {awards.map((award) => (
                    <li key={award} className="text-gray-300 flex items-center">
                      <Star className="h-4 w-4 text-purple-400 mr-2" />
                      {award}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1516575334481-f85287c2c82d?auto=format&fit=crop&q=80"
                alt="Artist at work"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-purple-600 p-4 rounded-lg">
                <p className="text-white font-bold">10+ Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-black/30 backdrop-blur-sm p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-white font-bold">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-gray-300">
              Interested in collaboration? Let's create something amazing together.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}