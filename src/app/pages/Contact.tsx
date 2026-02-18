import { useState } from 'react';
import { toast } from 'sonner';
import Seo from '../components/Seo';
import { submitForm } from '../lib/forms';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.website.trim().length > 0) {
      toast.success('Message sent!');
      return;
    }

    try {
      setIsSubmitting(true);
      await submitForm({
        formType: 'contact',
        ...formData,
      });

      toast.success("Message sent! We'll get back to you soon.");
      setFormData({
        name: '',
        email: '',
        message: '',
        website: '',
      });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Seo
        title="Contact | SableBoxx"
        description="Contact SableBoxx about EduManage Pro. Email or phone us, or send a message using the form." 
        canonicalPath="/contact"
      />
      {/* Hero */}
      <section className="px-6 lg:px-8 pt-32 pb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-semibold text-black mb-6">Contact Us</h1>
        <p className="text-xl text-black/60 max-w-2xl mx-auto">
          Get in touch. We're here to help.
        </p>
      </section>

      {/* Contact Info */}
      <section className="px-6 lg:px-8 pb-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-black/60 text-sm mb-2">Email</div>
              <a href="mailto:hello@sableboxx.com" className="text-black hover:text-[#2979FF] transition-colors">
                hello@sableboxx.com
              </a>
            </div>
            <div>
              <div className="text-black/60 text-sm mb-2">Phone</div>
              <a href="tel:08108699059" className="text-black hover:text-[#2979FF] transition-colors">
                0810 869 9059
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="px-6 lg:px-8 py-24 bg-black">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-white mb-8 text-center">Send a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="hidden" aria-hidden="true">
              <label className="block text-sm text-white/60 mb-2">Website</label>
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white"
              />
            </div>

            <div>
              <label className="block text-sm text-white/60 mb-2">
                Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:border-white focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm text-white/60 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:border-white focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm text-white/60 mb-2">
                Message *
              </label>
              <textarea
                name="message"
                rows={6}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:border-white focus:outline-none transition-colors resize-none"
                placeholder="How can we help?"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-4 bg-[#2979FF] text-white hover:bg-[#2979FF]/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}