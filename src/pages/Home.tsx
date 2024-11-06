import React from 'react';
import { ArrowRight, Music, Video, Film, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import NewsletterSignup from '../components/NewsletterSignup';

export default function Home() {
  const services = [
    {
      title: 'Singing',
      icon: Music,
      description: 'Professional vocal performances for various genres and occasions.'
    },
    {
      title: 'Video Production',
      icon: Video,
      description: 'High-quality video production services for music videos and commercials.'
    },
    {
      title: 'Direction',
      icon: Film,
      description: 'Creative direction for music videos, short films, and artistic projects.'
    }
  ];

  const events = [
    {
      date: 'Mar 15, 2024',
      title: 'Live Performance at Echo Theater',
      location: 'Los Angeles, CA'
    },
    {
      date: 'Apr 2, 2024',
      title: 'Music Video Premier - "Ethereal Dreams"',
      location: 'Online Stream'
    },
    {
      date: 'Apr 20, 2024',
      title: 'Workshop: Direction in Modern Media',
      location: 'New York, NY'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900">
      {/* Hero Section */}
      <div 
        className="h-screen relative flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Creating Art Through
            <span className="block text-purple-400">Sound & Vision</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Multi-disciplinary artist specializing in music, video production, and creative direction.
          </p>
          <Link
            to="/portfolio"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-200"
          >
            View Portfolio
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-black/30 backdrop-blur-sm p-6 rounded-lg">
                <service.icon className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-lg aspect-video">
                <img
                  src={`https://images.unsplash.com/photo-151167178277${item}-c97d3d27a1d4?auto=format&fit=crop&q=80`}
                  alt={`Featured work ${item}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-lg">Project Title</h3>
                    <p className="text-gray-300 text-sm">Category</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center px-6 py-3 border border-purple-400 text-base font-medium rounded-md text-purple-400 hover:bg-purple-400 hover:text-white transition-colors duration-200"
            >
              View All Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div key={event.title} className="bg-black/30 backdrop-blur-sm p-6 rounded-lg">
                <Calendar className="h-8 w-8 text-purple-400 mb-4" />
                <time className="text-sm text-purple-400">{event.date}</time>
                <h3 className="text-xl font-bold text-white mt-2 mb-2">{event.title}</h3>
                <p className="text-gray-300">{event.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-3xl mx-auto">
          <NewsletterSignup />
        </div>
      </section>
    </div>
  );
}