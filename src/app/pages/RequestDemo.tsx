import { useState } from 'react';
import { toast } from 'sonner';
import Seo from '../components/Seo';
import { submitForm } from '../lib/forms';

export default function RequestDemo() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    schoolName: '',
    contactPerson: '',
    email: '',
    phone: '',
    studentCount: '',
    deploymentType: 'cloud',
    website: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot: if filled, treat as bot submission.
    if (formData.website.trim().length > 0) {
      toast.success('Request submitted!');
      return;
    }

    try {
      setIsSubmitting(true);
      await submitForm({
        formType: 'request-demo',
        ...formData,
      });

      toast.success("Request submitted! We'll contact you within 24 hours.");

      setFormData({
        schoolName: '',
        contactPerson: '',
        email: '',
        phone: '',
        studentCount: '',
        deploymentType: 'cloud',
        website: '',
      });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed to submit request');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Seo
        title="Request a Demo | EduManage Pro by SableBoxx"
        description="Request a demo of EduManage Pro. Tell us about your school and we’ll reach out within 24 hours." 
        canonicalPath="/request-demo"
      />
      {/* Hero */}
      <section className="px-6 lg:px-8 pt-32 pb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-semibold text-black mb-6">Get Started</h1>
        <p className="text-xl text-black/60 max-w-2xl mx-auto">
          Request a demo and see EduManage Pro in action at your school.
        </p>
      </section>

      {/* Form */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="hidden" aria-hidden="true">
              <label className="block text-sm text-black/60 mb-2">Website</label>
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-black/10"
              />
            </div>

            <div>
              <label className="block text-sm text-black/60 mb-2">
                School Name *
              </label>
              <input
                type="text"
                name="schoolName"
                required
                value={formData.schoolName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-black/10 focus:border-black focus:outline-none transition-colors"
                placeholder="Your school name"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-black/60 mb-2">
                  Contact Person *
                </label>
                <input
                  type="text"
                  name="contactPerson"
                  required
                  value={formData.contactPerson}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-black/10 focus:border-black focus:outline-none transition-colors"
                  placeholder="Full name"
                />
              </div>

              <div>
                <label className="block text-sm text-black/60 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-black/10 focus:border-black focus:outline-none transition-colors"
                  placeholder="08012345678"
                />
              </div>
            </div>

            <div>
              <label htmlFor="studentCount" className="block text-sm text-black/60 mb-2">
                Number of Students *
              </label>
              <select
                id="studentCount"
                name="studentCount"
                required
                value={formData.studentCount}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-black/10 focus:border-black focus:outline-none transition-colors"
              >
                <option value="">Select range</option>
                <option value="1-100">1 - 100</option>
                <option value="101-300">101 - 300</option>
                <option value="301-500">301 - 500</option>
                <option value="501-1000">501 - 1,000</option>
                <option value="1001-1500">1,001 - 1,500</option>
                <option value="1501+">1,501+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-black/60 mb-4">
                Preferred Deployment *
              </label>
              <div className="grid md:grid-cols-2 gap-4">
                <label className="flex items-center gap-3 p-4 border border-black/10 cursor-pointer hover:border-black/30 transition-colors">
                  <input
                    type="radio"
                    name="deploymentType"
                    value="cloud"
                    checked={formData.deploymentType === 'cloud'}
                    onChange={handleChange}
                  />
                  <div>
                    <div className="font-medium text-black">Cloud Hosted</div>
                    <div className="text-sm text-black/60">On our servers</div>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-4 border border-black/10 cursor-pointer hover:border-black/30 transition-colors">
                  <input
                    type="radio"
                    name="deploymentType"
                    value="self-hosted"
                    checked={formData.deploymentType === 'self-hosted'}
                    onChange={handleChange}
                  />
                  <div>
                    <div className="font-medium text-black">Self Hosted</div>
                    <div className="text-sm text-black/60">Your domain</div>
                  </div>
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-4 bg-[#2979FF] text-white hover:bg-[#2979FF]/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting…' : 'Request Demo'}
            </button>

            <p className="text-center text-sm text-black/40">
              We'll contact you within 24 hours
            </p>
          </form>
        </div>
      </section>

      {/* Contact Info */}
      <section className="px-6 lg:px-8 py-24 bg-black">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-white mb-8">Or contact us directly</h2>
          <div className="space-y-4">
            <div>
              <div className="text-white/60 text-sm mb-1">Email</div>
              <a href="mailto:hello@sableboxx.com" className="text-white hover:text-[#2979FF] transition-colors">
                hello@sableboxx.com
              </a>
            </div>
            <div>
              <div className="text-white/60 text-sm mb-1">Phone</div>
              <a href="tel:08108699059" className="text-white hover:text-[#2979FF] transition-colors">
                0810 869 9059
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}