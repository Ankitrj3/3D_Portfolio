import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import GlowCard from "../components/GlowCard";
import TitleHeader from "../components/TitleHeader";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

gsap.registerPlugin(ScrollTrigger);

const Certificates = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  const certificates = [
    {
      title: " Data Structures and Algorithms - Self Paced [Online Course]",
      issuer: "GeeksforGeeks",
      date: "August 2024",
      description: "Data Structures",
      imgPath: "/images/cert1.png",
      link: "https://drive.google.com/file/d/1jImgEsaQJiLcpB3SPr4ZWyAzVolx_0l0/view?usp=drive_link",
    },
    {
      title: "Introduction to Internet of Things",
      issuer: "NPTEL",
      date: "July - October 2024",
      description: "Introduction to Internet of Things",
      imgPath: "/images/cert2.png",
      link: "https://drive.google.com/file/d/1eLgoP9ZJ4ckWbrw7jYKaHEgRbrCIUt_m/view?usp=drive_link",
    },
    {
      title: "Data Structures & Algorithms",
      issuer: "Udemy",
      date: "August 2023",
      description: "Mastering Data Structures & Algorithms using C and C++",
      imgPath: "/images/cert3.png",
      link: "https://drive.google.com/file/d/1To5DA9CCwI69igvCq_kA6GKDLtjOgJKv/view?usp=drive_link",
    },
    {
      title: "Cloud Computing Basics (Cloud 101)",
      issuer: "Coursera",
      date: "March 2023",
      description: "Cloud computing basics",
      imgPath: "/images/cert4.png",
      link: "https://drive.google.com/file/d/1maqOiESFKkfEZsLEMumMA7YnmA4fH49x/view?usp=drive_link",
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Coursera",
      date: "February 2024",
      description: "Computer Networking Basics",
      imgPath: "/images/cert5.png",
      link: "https://drive.google.com/file/d/1V6B6E3KX_PGB2oHYrGZTtJhHZiBj9hZV/view?usp=drive_link",
    },
    {
      title: "Hands on Google cloud platform (GCP) --- Cloud Architect",
      issuer: "Udemy",
      date: "October 2024",
      description: "Google Cloud Platform Basics",
      imgPath: "/images/cert6.png",
      link: "https://drive.google.com/file/d/1hy3_Sw8Zbj3Q9uXZqrWxUC9pKySsbg6H/view?usp=drive_link",
    },
  ];

  return (
    <section
      id="certificates"
      ref={sectionRef}
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="Certificates" sub="📜 My Achievements" />

        <div className="mt-16">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            className="certificate-slider"
          >
            {certificates.map((cert, index) => (
              <SwiperSlide key={index} className="certificate-card">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <GlowCard card={cert}>
                    <div className="p-4">
                      <div className="image-wrapper mb-4">
                        <img
                          src={cert.imgPath}
                          alt={cert.title}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-white-50 mb-2">🏢 {cert.issuer}</p>
                      <p className="text-white-50 mb-2">🗓️ {cert.date}</p>
                      <p className="text-white-50">{cert.description}</p>
                      <p className="text-slate-400">View Certificate</p>
                    </div>
                  </GlowCard>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
