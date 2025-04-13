import React from 'react';
import Image from 'next/image';
import { FaHome, FaSearchLocation, FaHandshake, FaChartLine, FaBuilding, FaMapMarkedAlt } from 'react-icons/fa';
import Header from '@/components/Header';

export const metadata = {
  title: 'Our Services | Prospect BD',
  description: 'Comprehensive real estate services offered by Prospect BD - from property management to investment consulting.'
};

const ServicesPage = () => {
  const services = [
    {
      icon: <FaHome className="w-12 h-12 text-orange-500" />,
      title: 'Property Management',
      description: 'Comprehensive property management services including tenant screening, rent collection, maintenance coordination, and financial reporting to maximize your investment returns.'
    },
    {
      icon: <FaSearchLocation className="w-12 h-12 text-orange-500" />,
      title: 'Property Acquisition',
      description: 'Expert assistance in identifying and acquiring properties that align with your investment goals and preferences, from initial search to closing the deal.'
    },
    {
      icon: <FaHandshake className="w-12 h-12 text-orange-500" />,
      title: 'Sales & Marketing',
      description: 'Strategic marketing campaigns and sales expertise to showcase your property to the right audience and secure the best possible deal in the current market.'
    },
    {
      icon: <FaChartLine className="w-12 h-12 text-orange-500" />,
      title: 'Investment Consulting',
      description: 'Professional guidance on real estate investment opportunities, market trends analysis, and portfolio diversification strategies to optimize your returns.'
    },
    {
      icon: <FaBuilding className="w-12 h-12 text-orange-500" />,
      title: 'Development Services',
      description: 'End-to-end development services from land acquisition and zoning approvals to construction management and project marketing for residential and commercial projects.'
    },
    {
      icon: <FaMapMarkedAlt className="w-12 h-12 text-orange-500" />,
      title: 'Land Development',
      description: 'Expert services in land acquisition, feasibility studies, subdivision planning, infrastructure development, and regulatory compliance for successful land development projects.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] bg-gray-900">
        <div className="">
            <Header/>
        </div>
        {/* <div className="absolute inset-0">
          <Image 
            src="/images/services-hero.jpg" 
            alt="Real Estate Services" 
            fill 
            priority
            className="object-cover opacity-40"
          />
        </div> */}
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
            Comprehensive real estate solutions tailored to meet your specific needs
          </p>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Exceptional Real Estate Services</h2>
            <p className="text-lg text-gray-600">
              At Prospect BD, we offer a complete range of real estate services designed to help you navigate the complex property market with confidence. Whether you're buying, selling, investing, or developing, our expert team is here to guide you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:transform hover:scale-105"
              >
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Choose Prospect BD</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-orange-500 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-orange-400">Professional Expertise</h3>
                <p>Our team of licensed professionals brings years of experience and in-depth knowledge of the local real estate market to every project.</p>
              </div>
              <div className="border border-orange-500 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-orange-400">Client-Centered Approach</h3>
                <p>We listen carefully to your needs and goals, providing personalized service and tailored solutions to achieve your real estate objectives.</p>
              </div>
              <div className="border border-orange-500 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-orange-400">Market Intelligence</h3>
                <p>Access to comprehensive market data and analytics to help you make informed decisions backed by real-time information and trends.</p>
              </div>
              <div className="border border-orange-500 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-orange-400">Results-Driven</h3>
                <p>Our success is measured by your satisfaction. We consistently deliver exceptional results that exceed expectations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss how we can help you achieve your real estate goals.
          </p>
          <div>
            <a 
              href="/contact" 
              className="inline-block px-8 py-3 bg-white text-orange-500 font-medium rounded-lg hover:bg-gray-100 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Our Clients Say</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">Property Investor</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The investment consulting services from Prospect BD have transformed my property portfolio. Their market insights and strategic guidance have been invaluable."
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-semibold">Michael Reynolds</h4>
                  <p className="text-sm text-gray-500">Property Owner</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Their property management team is exceptional. Responsive, professional, and detail-oriented - my rental properties have never performed better."
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-semibold">David Chen</h4>
                  <p className="text-sm text-gray-500">Developer</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Working with Prospect BD on our development project was seamless. Their expertise in navigating regulations and managing the construction process was impressive."
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;