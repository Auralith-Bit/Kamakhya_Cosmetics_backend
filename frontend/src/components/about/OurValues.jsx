import React from 'react';
import integrityIcon from '../../assets/clock.png';
import innovationIcon from '../../assets/mountaion.png';
import peopleIcon from '../../assets/people.png';
import focusIcon from '../../assets/focus.png';
import responsibleIcon from '../../assets/earth.png';
import bulbIcon from '../../assets/bulb.svg';
import increaseIcon from '../../assets/increase.svg';
import loveIcon from '../../assets/love.svg';

const ShieldSmall = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#CCA466"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const TeamSmall = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#CCA466"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const VALUES = [
  {
    title: 'Integrity First',
    subtitle: "We Do What's Right",
    description:
      'We uphold honesty, transparency, and ethics in everything we do.',
    image: integrityIcon,
    SmallIcon: ShieldSmall,
  },
  {
    title: 'Innovative Fearlessly',
    subtitle: 'We Embrace Change',
    description:
      'We encourage creativity, curiosity, and continuous improvement.',
    image: innovationIcon,
    SmallIconImg: bulbIcon,
  },
  {
    title: 'People First',
    subtitle: 'We Grow Together',
    description:
      'We value our people, collaboration, and create a positive impact.',
    image: peopleIcon,
    SmallIcon: TeamSmall,
  },
  {
    title: 'Focus on Impact',
    subtitle: 'We Deliver Results',
    description:
      'We are committed to quality, efficiency, and measurable outcomes.',
    image: focusIcon,
    SmallIconImg: increaseIcon,
  },
  {
    title: 'Responsible Always',
    subtitle: 'We Care for Tomorrow',
    description:
      'We take responsibility towards our clients, community and planet.',
    image: responsibleIcon,
    SmallIconImg: loveIcon,
  },
];

const OurValues = () => {
  return (
    <section className="w-full bg-white py-[85px]">
      <div className="w-full px-[125px] max-lg:px-8 max-sm:px-5">
        {/* Header */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-[1100px] mx-auto mb-12 max-sm:mb-8">
          <p
            className="m-0 font-semibold uppercase"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '12px',
              lineHeight: 'normal',
              letterSpacing: '3.5px',
              color: '#e0912f',
              textAlign: 'center',
              alignSelf: 'stretch',
            }}
          >
            Our Values
          </p>
          <h2
            className="m-0"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: 'clamp(26px, 3.2vw, 34px)',
              lineHeight: 1.25,
              color: '#2e3192',
              textAlign: 'center',
              textTransform: 'capitalize',
              margin: '6px 0 0',
            }}
          >
            The Principle That Guides Us
          </h2>
          <svg xmlns="http://www.w3.org/2000/svg" width="172" height="24" viewBox="0 0 172 24" fill="none" style={{ display: 'block', margin: '8px auto 0' }}>
            <path fillRule="evenodd" clipRule="evenodd" d="M45.8439 14.1335C38.4543 16.3024 29.9227 18.4608 21.7152 18.9997C14.7002 19.4597 7.92427 18.7452 2.37809 15.7053C1.59628 15.2773 0.61724 15.5716 0.194429 16.3637C-0.229027 17.1551 0.0622971 18.1463 0.844111 18.575C6.89431 21.8902 14.2716 22.7574 21.9234 22.255C30.2784 21.7069 38.9641 19.5341 46.5019 17.3339C47.3765 19.1276 49.1877 20.7999 52.3781 22.0337C57.2785 23.9292 63.9693 23.9057 71.0179 22.8376C81.2408 21.2892 92.2377 17.5969 99.3082 14.9733C99.5982 14.8662 100.03 14.696 100.559 14.4715C100.72 14.8317 100.9 15.1866 101.1 15.5351C102.834 18.5717 105.902 21.027 109.028 21.9039C128.853 27.4643 151.992 20.8019 170.832 15.3797C171.682 15.1338 172.179 14.2308 171.94 13.3649C171.695 12.4991 170.806 11.996 169.949 12.242C151.638 17.5127 129.156 24.1628 109.885 18.7596C107.513 18.0941 105.206 16.2071 103.891 13.9025C103.743 13.6455 103.614 13.3825 103.491 13.1157C106.089 11.8127 109.144 9.99615 110.787 8.05176C112.476 6.05844 112.895 3.9307 111.425 1.92106C110.162 0.203083 108.248 0.0569249 106.256 0.94756C104.11 1.90149 101.899 4.13163 101.184 5.17821C99.8431 7.13304 99.4178 9.25362 99.6627 11.3213C99.0311 11.5915 98.518 11.7924 98.2016 11.9099C91.2858 14.4754 80.5369 18.0967 70.5409 19.6111C64.1092 20.5859 57.9997 20.7157 53.5279 18.9867C51.6208 18.2487 50.3607 17.3875 49.6768 16.3879C51.0265 15.9794 52.3278 15.5775 53.5711 15.1938C56.03 14.435 61.1495 13.179 64.8072 10.9403C67.716 9.16033 69.6882 6.73897 69.5735 3.70364C69.5149 2.14421 68.6234 1.10348 67.2048 0.520167C65.085 -0.350894 61.4189 0.0705989 60.0538 0.364215C55.9133 1.25289 50.3871 4.93159 47.6531 9.0768C46.5619 10.7308 45.9128 12.4612 45.8439 14.1335ZM49.245 13.1143C50.4148 12.7581 51.5454 12.4083 52.6314 12.073C54.9266 11.3644 59.7244 10.2388 63.1398 8.1483C64.9483 7.04169 66.425 5.71587 66.3534 3.82825C66.3476 3.68144 66.2039 3.63969 66.0769 3.57966C65.8803 3.48766 65.6554 3.42436 65.4156 3.37477C63.7933 3.03939 61.6142 3.36366 60.7222 3.55549C57.2481 4.30127 52.6269 7.41035 50.333 10.8887C49.8483 11.6234 49.4622 12.3718 49.245 13.1143ZM102.847 9.81932C104.361 9.03047 105.947 8.07653 107.197 7.03844C107.861 6.48709 108.422 5.92011 108.776 5.33157C109.073 4.84482 109.189 4.34629 108.834 3.86476C108.693 3.66967 108.48 3.66578 108.261 3.70232C108.029 3.74147 107.79 3.82497 107.552 3.93262C105.979 4.63339 104.355 6.27047 103.833 7.03844C103.221 7.92907 102.918 8.87127 102.847 9.81932Z" fill="#CCA466"/>
          </svg>
          <p
            className="m-0"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              fontSize: 'clamp(13px, 1.4vw, 14.5px)',
              lineHeight: 1.7,
              color: '#666680',
              maxWidth: '620px',
              margin: '12px auto 0',
            }}
          >
            Quality is at the heart of everything we do. We uphold high
            standards of safety, innovation, integrity, and excellence to
            create products our customers can trust.
          </p>
        </div>

        {/* CARDS */}
        <div className="flex w-full flex-wrap justify-center gap-[20px]">
          {VALUES.map((value) => {
            const SmallIconComp = value.SmallIcon;

            return (
              <div
                key={value.title}
                className="
                  flex
                  w-[calc((100%-80px)/5)]
                  flex-col
                  items-center
                  text-center
                  rounded-[10px]
                  py-[20px]
                  px-0
                  border
                  border-[#D7DAE4]
                  bg-[#FCF9F2]
                  max-lg:w-[calc((100%-40px)/3)]
                  max-tab:w-[calc((100%-20px)/2)]
                  max-sm:w-full
                "
                style={{
                  boxShadow: '0 0.4167vw 0.625vw rgba(0,0,0,0.05), 0 1.0417vw 1.3021vw rgba(0,0,0,0.04)',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#CCA466';
                  e.currentTarget.style.boxShadow = '0 0.25vw 0.5vw rgba(0,0,0,0.09), 0 0.9vw 1.6vw rgba(43,46,126,0.14)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#D7DAE4';
                  e.currentTarget.style.boxShadow = '0 0.4167vw 0.625vw rgba(0,0,0,0.05), 0 1.0417vw 1.3021vw rgba(0,0,0,0.04)';
                }}
              >
                {/* Main Image */}
                <div className="w-[100px] h-[100px] flex items-center justify-center mb-5 shrink-0">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="m-0 font-body text-[15px] font-bold text-brand-blue mb-2">
                  {value.title}
                </h3>

                {/* Subtitle */}
                <p className="m-0 font-body text-[14px] font-semibold text-hero-orange mb-3">
                  {value.subtitle}
                </p>

                {/* Description */}
                <p className="m-0 font-body text-[13px] leading-[1.7] text-[#6B7280] mb-auto">
                  {value.description}
                </p>

                {/* Bottom Icon */}
                <div className="mt-4">
                  {SmallIconComp ? (
                    <SmallIconComp />
                  ) : (
                    <img src={value.SmallIconImg} alt="" className="w-6 h-6" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurValues;