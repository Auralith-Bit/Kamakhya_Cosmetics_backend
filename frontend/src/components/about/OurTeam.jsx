import React, { useRef, useState, useEffect } from 'react';
import b1 from '../../assets/b1.png';
import b2 from '../../assets/b2.png';

const GoldenWave = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="172" height="24" viewBox="0 0 172 24" fill="none" className="ot-wave" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M45.8439 14.1335C38.4543 16.3024 29.9227 18.4608 21.7152 18.9997C14.7002 19.4597 7.92427 18.7452 2.37809 15.7053C1.59628 15.2773 0.61724 15.5716 0.194429 16.3637C-0.229027 17.1551 0.0622971 18.1463 0.844111 18.575C6.89431 21.8902 14.2716 22.7574 21.9234 22.255C30.2784 21.7069 38.9641 19.5341 46.5019 17.3339C47.3765 19.1276 49.1877 20.7999 52.3781 22.0337C57.2785 23.9292 63.9693 23.9057 71.0179 22.8376C81.2408 21.2892 92.2377 17.5969 99.3082 14.9733C99.5982 14.8662 100.03 14.696 100.559 14.4715C100.72 14.8317 100.9 15.1866 101.1 15.5351C102.834 18.5717 105.902 21.027 109.028 21.9039C128.853 27.4643 151.992 20.8019 170.832 15.3797C171.682 15.1338 172.179 14.2308 171.94 13.3649C171.695 12.4991 170.806 11.996 169.949 12.242C151.638 17.5127 129.156 24.1628 109.885 18.7596C107.513 18.0941 105.206 16.2071 103.891 13.9025C103.743 13.6455 103.614 13.3825 103.491 13.1157C106.089 11.8127 109.144 9.99615 110.787 8.05176C112.476 6.05844 112.895 3.9307 111.425 1.92106C110.162 0.203083 108.248 0.0569249 106.256 0.94756C104.11 1.90149 101.899 4.13163 101.184 5.17821C99.8431 7.13304 99.4178 9.25362 99.6627 11.3213C99.0311 11.5915 98.518 11.7924 98.2016 11.9099C91.2858 14.4754 80.5369 18.0967 70.5409 19.6111C64.1092 20.5859 57.9997 20.7157 53.5279 18.9867C51.6208 18.2487 50.3607 17.3875 49.6768 16.3879C51.0265 15.9794 52.3278 15.5775 53.5711 15.1938C56.03 14.435 61.1495 13.179 64.8072 10.9403C67.716 9.16033 69.6882 6.73897 69.5735 3.70364C69.5149 2.14421 68.6234 1.10348 67.2048 0.520167C65.085 -0.350894 61.4189 0.0705989 60.0538 0.364215C55.9133 1.25289 50.3871 4.93159 47.6531 9.0768C46.5619 10.7308 45.9128 12.4612 45.8439 14.1335ZM49.245 13.1143C50.4148 12.7581 51.5454 12.4083 52.6314 12.073C54.9266 11.3644 59.7244 10.2388 63.1398 8.1483C64.9483 7.04169 66.425 5.71587 66.3534 3.82825C66.3476 3.68144 66.2039 3.63969 66.0769 3.57966C65.8803 3.48766 65.6554 3.42436 65.4156 3.37477C63.7933 3.03939 61.6142 3.36366 60.7222 3.55549C57.2481 4.30127 52.6269 7.41035 50.333 10.8887C49.8483 11.6234 49.4622 12.3718 49.245 13.1143ZM102.847 9.81932C104.361 9.03047 105.947 8.07653 107.197 7.03844C107.861 6.48709 108.422 5.92011 108.776 5.33157C109.073 4.84482 109.189 4.34629 108.834 3.86476C108.693 3.66967 108.48 3.66578 108.261 3.70232C108.029 3.74147 107.79 3.82497 107.552 3.93262C105.979 4.63339 104.355 6.27047 103.833 7.03844C103.221 7.92907 102.918 8.87127 102.847 9.81932Z" fill="#CCA466"/>
  </svg>
);

const SHAPE_A = "M0,10 Q150,70 300,10 L300,318 Q150,392 0,318 Z";
const SHAPE_B = "M0,42 Q150,-26 300,42 L300,352 Q150,282 0,352 Z";

const TEAM = [
  { name: 'Smlan Ku. Khan', role: 'Visa Specialist', photo: b1, shape: 'A', bg: '#F9E0C2' },
  { name: 'Smlan Ku. Khan', role: 'Visa Specialist', photo: b2, shape: 'B', bg: '#F2AFB4' },
  { name: 'Smlan Ku. Khan', role: 'Visa Specialist', photo: b1, shape: 'A', bg: '#F9E0C2' },
  { name: 'Smlan Ku. Khan', role: 'Visa Specialist', photo: b2, shape: 'B', bg: '#F2AFB4' },
  { name: 'Smlan Ku. Khan', role: 'Visa Specialist', photo: b1, shape: 'A', bg: '#F9E0C2' },
];

const SCROLL_TEAM = [...TEAM, ...TEAM];
const getCardsPerView = () => {
  if (typeof window === 'undefined') return 5;
  const w = window.innerWidth;
  if (w <= 639) return 1;
  if (w <= 1023) return 3;
  return 5;
};

const ArrowLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const TeamCard = ({ member, id }) => (
  <div className="ot-card" data-index={id}>
    <div className="ot-card-inner">
      <svg className="ot-svg" viewBox="0 0 300 360" preserveAspectRatio="none" role="img" aria-label={member.name}>
        <path d={member.shape === 'A' ? SHAPE_A : SHAPE_B} fill={member.bg} />
        <image
          href={member.photo}
          x="0" y="0" width="300" height="360"
          preserveAspectRatio="xMidYMax slice"
          clipPath={`url(#ot-clip-${member.shape.toLowerCase()}-${id})`}
        />
      </svg>
    </div>
    <h4 className="ot-name">{member.name}</h4>
    <p className="ot-role">{member.role}</p>
  </div>
);

const OurTeam = () => {
  const rowRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());

  const totalPages = Math.max(1, Math.ceil(SCROLL_TEAM.length / cardsPerView));

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
      setActiveIndex((prev) => Math.min(prev, Math.max(1, Math.ceil(SCROLL_TEAM.length / getCardsPerView())) - 1));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollTo = (index) => {
    if (!rowRef.current || isAnimating) return;
    setIsAnimating(true);

    const container = rowRef.current;
    const targetCardIndex = Math.min(index * cardsPerView, container.children.length - 1);
    const targetCard = container.children[targetCardIndex];
    const scrollToX = targetCard ? targetCard.offsetLeft : 0;

    container.scrollTo({ left: scrollToX, behavior: 'smooth' });
    setActiveIndex(index);

    setTimeout(() => setIsAnimating(false), 500);
  };

  const scrollLeft = () => {
    if (isAnimating) return;
    const nextIndex = activeIndex === 0 ? totalPages - 1 : activeIndex - 1;
    scrollTo(nextIndex);
  };

  const scrollRight = () => {
    if (isAnimating) return;
    const nextIndex = activeIndex === totalPages - 1 ? 0 : activeIndex + 1;
    scrollTo(nextIndex);
  };

  useEffect(() => {
    const container = rowRef.current;
    if (!container) return;
    const handleScroll = () => {
      const targetCard = container.children[Math.round(container.scrollLeft / (container.children[0]?.offsetWidth || 1))];
      const idx = Math.floor(Number(targetCard?.dataset.index ?? 0) / cardsPerView);
      setActiveIndex(Math.min(Math.max(idx, 0), totalPages - 1));
    };
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [cardsPerView, totalPages]);

  return (
    <section id="our-team" className="ot-sec">
      <style>{`
        .ot-sec{
          width:100%;
          background:#F7F3EC;
          padding:80px 125px;
          box-sizing:border-box;
          overflow:visible;
        }

        .ot-head{
          display:flex;
          flex-direction:column;
          align-items:center;
          text-align:center;
          padding:0 6px;
          max-width:1100px;
          margin:0 auto 40px;
        }
        .ot-tag{
          color:#e0912f;
          font-family:'Poppins',sans-serif;
          font-size:12px;
          font-weight:600;
          letter-spacing:3.5px;
          text-transform:uppercase;
          line-height:normal;
        }
        .ot-title{
          margin-top:6px;
          color:#2e3192;
          font-family:'Playfair Display',serif;
          font-size:clamp(26px, 3.2vw, 34px);
          font-weight:700;
          line-height:1.25;
          text-transform:capitalize;
        }
        .ot-wave{
          display:block;
          width:172px;
          height:24px;
          margin:8px auto 0;
        }
        .ot-p{
          margin-top:12px;
          color:#666680;
          font-family:'Playfair Display',serif;
          font-size:clamp(13px, 1.4vw, 14.5px);
          line-height:1.7;
          max-width:620px;
          font-weight:400;
        }
        .ot-p2{display:block;}

        .ot-carousel{
          position:relative;
          width:100%;
          max-width:1100px;
          margin:0 auto;
        }

        .ot-row{
          width:100%;
          display:flex;
          overflow-x:auto;
          scroll-behavior:smooth;
          gap:24px;
          align-items:stretch;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding: 0 8px 8px;
        }
        .ot-row::-webkit-scrollbar { display: none; }

        .ot-card{
          flex: 0 0 calc(20% - 19.2px);
          text-align:center;
          margin-top:0;
        }
        .ot-card-inner{
          position:relative;
          width:100%;
        }
        .ot-svg{width:100%;height:auto;display:block;}
        .ot-name{
          margin-top:16px;
          color:#4d4d4d;
          font-family:'Playfair Display',serif;
          font-size:16px;
          font-weight:700;
          line-height:1.25;
        }
        .ot-role{
          margin-top:6px;
          color:#9a9a9a;
          font-family:'Poppins',sans-serif;
          font-size:13px;
          font-weight:400;
        }

        /* Navigation */
        .ot-nav{
          display:flex;
          align-items:center;
          justify-content:center;
          gap:20px;
          margin-top:36px;
        }
        .ot-nav-btn{
          width:40px;
          height:40px;
          border-radius:50%;
          border:1.5px solid #2E3192;
          background:transparent;
          display:flex;
          align-items:center;
          justify-content:center;
          cursor:pointer;
          color:#2E3192;
          flex-shrink:0;
          transition:all 0.2s ease;
        }
        .ot-nav-btn:hover:not(:disabled){
          background:#2E3192;
          color:#fff;
        }
        .ot-nav-btn:disabled{
          opacity:0.35;
          cursor:not-allowed;
        }
        .ot-nav-btn:focus-visible{
          outline:2px solid #2E3192;
          outline-offset:2px;
        }

        .ot-dots{
          display:flex;
          align-items:center;
          gap:8px;
        }
        .ot-dot{
          width:10px;
          height:10px;
          border-radius:5px;
          border:none;
          cursor:pointer;
          transition:all 0.3s ease;
          padding:0;
        }
        .ot-dot.active{
          width:32px;
          background:#2E3192;
        }
        .ot-dot:not(.active){
          background:#C9CBEC;
        }
        .ot-dot:hover:not(.active){
          background:#b0b3dc;
        }
        .ot-dot:focus-visible{
          outline:2px solid #2E3192;
          outline-offset:2px;
        }

        @media (max-width:1023px){
          .ot-sec{padding:60px 40px;}
          .ot-head{padding:0; margin-bottom:32px;}
          .ot-tag{font-size:clamp(11px, 1.4vw, 16px);}
          .ot-title{font-size:clamp(20px, 3vw, 32px);}
          .ot-wave{width:clamp(120px, 30vw, 172px);}
          .ot-p{font-size:clamp(12px, 1.5vw, 16px);line-height:1.6;}

          .ot-carousel{max-width:100%;}
          .ot-row{gap:20px; padding: 0 8px 8px;}
          .ot-card{flex: 0 0 calc(33.333% - 13.33px);}
          .ot-name{font-size:14px;margin-top:12px;}
          .ot-role{font-size:12px;}
        }

        @media (max-width:639px){
          .ot-sec{padding:40px 20px;}
          .ot-head{margin-bottom:24px;}
          .ot-row{gap:16px; padding-bottom:16px;}
          .ot-card{flex: 0 0 100%;}
          .ot-nav-btn{width:36px;height:36px;}
          .ot-dot.active{width:24px;}
        }
      `}</style>

      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
          {SCROLL_TEAM.map((m, i) => (
            <clipPath id={`ot-clip-${m.shape.toLowerCase()}-${i}`} key={i} clipPathUnits="userSpaceOnUse">
              <path d={m.shape === 'A' ? SHAPE_A : SHAPE_B} />
            </clipPath>
          ))}
        </defs>
      </svg>

      <header className="ot-head">
        <p className="ot-tag">Our Team</p>
        <h2 className="ot-title">People Behind The Quality</h2>
        <GoldenWave />
        <p className="ot-p">
          A dedicated team working together with expertise, care, and passion to create trusted beauty{' '}
          <span className="ot-p2">and home-care products that make a difference every day.</span>
        </p>
      </header>

      <div className="ot-carousel">
        <div className="ot-row" ref={rowRef}>
          {SCROLL_TEAM.map((member, i) => (
            <TeamCard key={`${member.name}-${i}`} member={member} id={i} />
          ))}
        </div>

        <div className="ot-nav">
          <button
            className="ot-nav-btn"
            onClick={scrollLeft}
            disabled={activeIndex === 0 || isAnimating}
            aria-label="Previous team members"
          >
            <ArrowLeft />
          </button>

          <div className="ot-dots">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={`ot-dot ${i === activeIndex ? 'active' : ''}`}
                onClick={() => scrollTo(i)}
                disabled={isAnimating}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>

          <button
            className="ot-nav-btn"
            onClick={scrollRight}
            disabled={activeIndex === totalPages - 1 || isAnimating}
            aria-label="Next team members"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;