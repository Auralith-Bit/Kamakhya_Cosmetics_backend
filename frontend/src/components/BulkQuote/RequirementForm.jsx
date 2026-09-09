import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const RequirementForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contact: "",
    email: "",
    phone: "",
    market: "",
    rangeOfInterest: "",
    expectedVolume: "",
    timeline: "",
    description: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const fieldClass =
    "w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3.5 text-[15px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-1";
  const selectClass =
    "w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3.5 text-[15px] font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-1 appearance-none cursor-pointer";
  const labelClass = "block text-[15px] font-bold text-slate-800 mb-2.5";

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 items-start">
        {/* Requirement Form */}
        <div>
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-slate-200 rounded-2xl px-8 sm:px-10 pt-10 pb-11"
          >
            <h1 className="font-serif font-bold text-3xl text-indigo-800 mb-7">
              Your requirement
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
              <div>
                <label htmlFor="companyName" className={labelClass}>
                  Registered Company Name*
                </label>
                <input
                  id="companyName"
                  type="text"
                  placeholder="Legal Business name"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="contact" className={labelClass}>
                  Contact Person*
                </label>
                <input
                  id="contact"
                  type="text"
                  placeholder="Full name and role"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  Business Email*
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone Number*
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Include country code"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="market" className={labelClass}>
                  Country / market *
                </label>
                <input
                  id="market"
                  type="text"
                  placeholder="Where products will be sold"
                  value={formData.market}
                  onChange={handleChange}
                  required
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="rangeOfInterest" className={labelClass}>
                  Range of intrest*
                </label>
                <select
                  id="rangeOfInterest"
                  value={formData.rangeOfInterest}
                  onChange={handleChange}
                  required
                  className={selectClass}
                >
                  <option className="text-xs" value="" disabled>
                    Select an Option (options- shine, royal luxury, both)
                  </option>
                  <option value="shine">Shine</option>
                  <option value="royal-luxury">Royal Luxury</option>
                  <option value="both">Both</option>
                </select>
              </div>

              <div>
                <label htmlFor="expectedVolume" className={labelClass}>
                  Expected Volume*
                </label>
                <select
                  id="expectedVolume"
                  value={formData.expectedVolume}
                  onChange={handleChange}
                  required
                  className={selectClass}
                >
                  <option value="" disabled>
                    Select an Option (kati units chaiyo ? tai anusar)
                  </option>
                  <option value="under-500">Under 500 units</option>
                  <option value="500-2000">500–2,000 units</option>
                  <option value="2000-plus">2,000+ units</option>
                </select>
              </div>

              <div>
                <label htmlFor="timeline" className={labelClass}>
                  Timeline
                </label>
                <select
                  id="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className={selectClass}
                >
                  <option value="" disabled>
                    Select an Option (options-immediately, 3 days, 1 week)
                  </option>
                  <option value="immediately">Immediately</option>
                  <option value="3-days">3 days</option>
                  <option value="1-week">1 week</option>
                </select>
              </div>

              <div className="sm:col-span-2 mt-1">
                <label htmlFor="description" className={labelClass}>
                  Describe your requirement*
                </label>
                <textarea
                  id="description"
                  placeholder="Products, pack sizes, shade or variant preferences, target price band, distribution channel…"
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  required
                  className={`${fieldClass} resize-y min-h-[150px]`}
                />
              </div>
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2.5 bg-[#2E3192] hover:bg-indigo-900 !text-white font-bold text-[15px] rounded-lg px-6 py-2 mt-8 transition-colors"
            >
              Request Quotation
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[14px] text-slate-500 mt-5">
              We use your details only to respond to this enquiry
            </p>
          </form>
        </div>

        {/* Right Section */}
        <div>
          <div className="bg-[##FCFAF7] border border-[#E8D6BB] rounded-2xl px-7 py-7">
            <h2 className="font-serif font-bold text-xl text-indigo-800 mb-4">
              What you receive
            </h2>
            <ul className="space-y-3.5">
              {[
                "Tiered pricing based on order volume",
                "Confirmed MOQ and production lead time",
                "Packaging and private-label options",
                "Sample dispatch before bulk production",
                "Dedicated account contact for your market",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-[15px] text-slate-600 leading-snug"
                >
                  <span className="mt-2 w-1 h-1 rounded-full bg-slate-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequirementForm;