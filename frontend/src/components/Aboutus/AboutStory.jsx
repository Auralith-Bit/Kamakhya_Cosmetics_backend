import React from 'react';
import { Link } from 'react-router-dom';
import warehouseImage from '../../assets/work.png';

const AboutStory = () => {
  return (
    <section
      id="about-story"
      aria-label="About Us - Our Story"
      className="w-full bg-white py-[85px] flex items-center box-border max-sm:py-10 overflow-x-hidden"
    >
      <div className="w-full px-[125px] max-lg:px-8 max-sm:px-5 grid grid-cols-2 items-center gap-[70px] max-nav:grid-cols-1 max-nav:gap-9">
        
        {/* ── LEFT: Warehouse / Manufacturing Image ── */}
        <div className="relative w-[calc(100%+20px)] mr-[-20px] aspect-[3/2.08] rounded-[10px] overflow-hidden bg-black/20 shadow-[0_10px_30px_rgba(0,0,0,0.08)] max-nav:w-full max-nav:mr-0 max-nav:max-h-[380px]">
          <img
            src={warehouseImage}
            alt="Kamakhya Cosmetics – Manufacturing Facility"
            className="w-full h-full object-cover block"
          />
        </div>

        {/* ── RIGHT: Story Content ── */}
        <div className="flex flex-col w-full h-full justify-between">
          
          {/* Label / Subheading */}
          <div className="flex flex-col gap-1.5 mb-[10px]">
            <span className="font-body text-[13px] font-bold tracking-[2px] text-hero-orange uppercase">OUR STORY</span>
            <span className="w-[42px] h-[2px] bg-brand-gold"></span>
          </div>

          {/* Heading */}
          <h2 className="font-title text-[clamp(26px,2.2vw,36px)] font-bold leading-[1.25] m-0 mb-[10px]">
            <span className="text-brand-blue block">The Story Behind </span>
            <span className="text-hero-orange">Kamakhya Cosmetics</span>
          </h2>

          {/* Description */}
          <div className="flex flex-col gap-4 mb-0 max-nav:max-w-full text-justify">
            <p className="font-body text-[clamp(13.5px,0.95vw,15px)] leading-[1.7] text-about-text m-0 font-normal">
              Kamakhya Cosmetics was born from a simple belief—that true beauty comes from 
              the perfect harmony of science, nature and trust. We create skincare that 
              empowers confidence through safe, effective, and luxurious care.
            </p>
            <p className="font-body text-[clamp(13.5px,0.95vw,15px)] leading-[1.7] text-about-text m-0 font-normal">
              What began as a vision to create safe, effective, and luxurious products has today 
              grown into a premium manufacturing brand trusted by businesses around the 
              world. Driven by innovation and uncompromising quality, we continue to set new 
              standards in beauty and personal care.
            </p>
          </div>

          {/* CTA Button — now routes to /about */}
          <div className="flex items-center mt-[10px]">
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 w-[210px] h-[48px] bg-brand-blue border-[3px] border-navy-700 rounded-[7px] text-white font-body text-[12px] font-bold tracking-[1px] no-underline uppercase cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-700 hover:border-navy-800 hover:shadow-[0_6px_20px_rgba(46,49,146,0.3)] active:translate-y-0 overflow-visible"
            >
              READ THE STORY
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0, verticalAlign:'middle'}}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutStory;