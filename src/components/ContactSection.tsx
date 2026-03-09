import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { CLINIC_DATA } from '../constants';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-neutral-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8">
              Get in Touch
            </h2>
            <p className="text-primary/60 text-lg mb-12">
              Ready to start your journey to radiant skin? Book a consultation with our experts today.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-accent shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-primary mb-1 text-lg">Our Location</h4>
                  <p className="text-primary/50 leading-relaxed">{CLINIC_DATA.address}</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-accent shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-primary mb-1 text-lg">Phone Number</h4>
                  <p className="text-primary/50 leading-relaxed">{CLINIC_DATA.phone}</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-accent shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-primary mb-1 text-lg">Email Address</h4>
                  <p className="text-primary/50 leading-relaxed">{CLINIC_DATA.email}</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-accent shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-primary mb-1 text-lg">Working Hours</h4>
                  <p className="text-primary/50 leading-relaxed">{CLINIC_DATA.workingHours}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <a 
                href={`tel:${CLINIC_DATA.phone}`}
                className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all flex items-center gap-2"
              >
                <Phone size={18} /> Call Clinic
              </a>
              <a 
                href={`https://wa.me/${CLINIC_DATA.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all flex items-center gap-2"
              >
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[40px] overflow-hidden shadow-2xl h-[500px] border-8 border-white bg-white"
          >
            {/* Live Google Map */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.669660860079!2d73.79647897546307!3d19.980389981419407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebf0c0e55f11%3A0xc5242ed521db2e84!2sCosmoRoot%20Skin%2C%20Hair%2C%20Laser%20%26%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1773045537305!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="CosmoRoot Clinic Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
