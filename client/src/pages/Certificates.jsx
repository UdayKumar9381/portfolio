import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import AOS from "aos";
import "aos/dist/aos.css";

const CertificateCard = ({ cert }) => (
  <Tilt
    glareEnable={true}
    glareColor="#00fff0"
    tiltMaxAngleX={10}
    tiltMaxAngleY={10}
    className="transform transition-all hover:scale-105"
  >
    <div
      data-aos="flip-left"
      className="bg-[#0e1c2d]/70 backdrop-blur-md border border-cyan-500 rounded-xl shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[360px]"
    >
      <div className="h-[180px] w-full bg-white flex items-center justify-center overflow-hidden border-b border-cyan-700">
        <img
          src={cert.img}
          alt={cert.title}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <h3 className="text-md font-bold text-cyan-300 text-center">{cert.title}</h3>
        <p className="text-sm text-gray-400 text-center">{cert.platform}</p>
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center text-cyan-400 text-sm hover:underline mt-2"
        >
          🔗 View Certificate
        </a>
      </div>
    </div>
  </Tilt>
);

const Certificates = () => {
  const [filter, setFilter] = useState("All");
  const [displayCount, setDisplayCount] = useState(6); // State to control number of certificates displayed

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const certificateData = [
    {
      title: "IBM SkillBuild",
      platform: "IBM",
      img: "/certs/IBM_SKILLBUILD.png",
      link: "https://skills.yourlearning.ibm.com/activity/PLAN-7913EE1DB030"
    },
    {
      title: "GOOGLE ANDROID DEVELOPER VIRTUAL INTERNSHIP",
      platform: "Cohort Program",
      img: "/certs/Cohort_09.png",
      link: "https://internship.eduskillsfoundation.org/certificate"
    },
    {
      title: "JAVA FULL STACK DEVELOPER VIRTUAL INTERNSHIP",
      platform: "Cohort Program",
      img: "/certs/Cohort_10.png",
      link: "https://internship.eduskillsfoundation.org/certificate"
    },
    {
      title: "GOOGLE AI-ML VIRTUAL INTERNSHIP",
      platform: "Cohort Program",
      img: "/certs/Cohort_11.png",
      link: "https://internship.eduskillsfoundation.org/certificate"
    },
    {
      title: "AWS AI-ML VIRTUAL INTERNSHIP",
      platform: "Cohort Program",
      img: "/certs/Cohort_12.png",
      link: "https://internship.eduskillsfoundation.org/certificate"
    },
    {
      title: "Introduction to Python",
      platform: "Edyst",
      img: "/certs/Edyst_intro_to_python.png",
      link: "https://b823dg0hd023-dev.edyst.com/"
    },
    {
      title: "TimeZone Converter",
      platform: "Edyst",
      img: "/certs/Edyst_timezone_converter.png",
      link: "https://b823dg0hd023-dev.edyst.com/"
    },
    {
      title: "Password Generator",
      platform: "Edyst",
      img: "/certs/Edyst_password_generator.png",
      link: "https://b823dg0hd023-dev.edyst.com/"
    },
    {
      title: "FMML Part 01",
      platform: "FMML",
      img: "/certs/Fmml_part_01.png",
      link: "https://ihub-data.ai/archives/courses/foundations-of-modern-machine-learning-august-2023/"
    },
    {
      title: "FMML Part 02",
      platform: "FMML",
      img: "/certs/Fmml_part_02.png",
      link: "https://ihub-data.ai/archives/courses/foundations-of-modern-machine-learning-august-2023/"
    },
    {
      title: "FMML Part 03",
      platform: "FMML",
      img: "/certs/Fmml_part_03.png",
      link: "https://ihub-data.ai/archives/courses/foundations-of-modern-machine-learning-august-2023/"
    },
    {
      title: "FMMI Certification",
      platform: "FMML",
      img: "/certs/Fmml_final_certificate.png",
      link: "https://ihub-data.ai/archives/courses/foundations-of-modern-machine-learning-august-2023/"
    },
    {
      title: "IIITH RCTS Research Intern",
      platform: "IIITH",
      img: "/certs/IIIT-H_Research_Intern.png",
      link: "https://www.linkedin.com/posts/narapureddi-uday-kumar-523551262_researchinternship-iiithyderabad-techforgood-activity-7321270417397112832-_JXa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECCOqsBY_UnaiOOrTBPL5NK5_9oADb5TLI"
    },
    {
      title: "KHUB JUNIOR DEVLOPER ",
      platform: "IIITH",
      img: "/certs/IIIT-H_Junior_dev_Intern.jpeg",
      link: "https://www.linkedin.com/posts/narapureddi-uday-kumar-523551262_internship-khub-kiet-activity-7321256340960489474-3i3q?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECCOqsBY_UnaiOOrTBPL5NK5_9oADb5TLI"
    },
    {
      title: "Python Fundamentals",
      platform: "SoloLearn",
      img: "/certs/Sololearn_PYTHON.png",
      link: "https://www.sololearn.com/certificates/CC-LZM3YBV2"
    },
    {
      title: "HTML Fundamentals",
      platform: "SoloLearn",
      img: "/certs/Sololearn_HTML.png",
      link: "https://www.sololearn.com/certificates/CC-ZRTNJRLN"
    },
    {
      title: "Java Fundamentals",
      platform: "SoloLearn",
      img: "/certs/Sololearn_JAVA.png",
      link: "https://www.sololearn.com/certificates/CC-ZHO0WNLG"
    },
    {
      title: "Professional Certification",
      platform: "Deloitte",
      img: "/certs/Deloitte.png",
      link: "https://www.theforage.com/profile/W66okbFh7gBAPMonE"
    },
    {
      title: "Python Programming",
      platform: "Infosys Springboard",
      img: "/certs/Infosys_SpringBoard.png",
      link: "https://infyspringboard.onwingspan.com/web/en/app/profile/learning/history"
    },
    {
      title: "Swecha Certification",
      platform: "Swecha",
      img: "/certs/Swecha_ai.png",
      link: "https://learning.swecha.org/mod/customcert/my_certificates.php?downloadcert=1&userid=21454&certificateid=52"
    },
    {
      title: "Python Internship",
      platform: "CodSoft",
      img: "/certs/Codsoft.png",
      link: "https://www.linkedin.com/posts/narapureddi-uday-kumar-523551262_codsoft-internship-activity-7115998001273176064-svz9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECCOqsBY_UnaiOOrTBPL5NK5_9oADb5TLI"
    },
    {
      title: "Programming Certification",
      platform: "Guvi",
      img: "/certs/Guvi.png",
      link: "https://www.guvi.in/verify-certificate?id=27D16o82726NvV6H94"
    },
    {
      title: "YBI Foundation Certification",
      platform: "YBI Foundation",
      img: "/certs/YBI_Foundation.png",
      link: "https://github.com/UdayKumar9381/Machine_learning.ybi"
    },
    {
      title: "Java Programming",
      platform: "EduSkills",
      img: "/certs/Eduskills_java.png",
      link: "https://lms.eduskills.academy/certificates/eduskills-java-programming"
    },
    {
      title: "Python (Basic)",
      platform: "HackerRank",
      img: "/certs/HackerRank.png",
      link: "https://www.hackerrank.com/certificates/693fa8476e28"
    }
  ];

  const platforms = [
    "All",
    ...new Set(certificateData.map(cert => cert.platform))
  ];

  const filteredCertificates = 
    filter === "All" 
      ? certificateData 
      : certificateData.filter(c => c.platform === filter);

  const handleShowAll = () => {
    setDisplayCount(filteredCertificates.length); // Show all certificates
  };

  const handleCloseAll = () => {
    setDisplayCount(6); // Revert to showing only 6 certificates
  };

  return (
    <section className="bg-[#08131c] py-16 px-6 text-white min-h-screen">
      <h2 className="text-4xl text-cyan-400 font-bold text-center mb-6" data-aos="fade-down">
        📜 Certificates
      </h2>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-10" data-aos="fade-up">
        {platforms.map((p) => (
          <button
            key={p}
            onClick={() => {
              setFilter(p);
              setDisplayCount(6); // Reset display count when filter changes
            }}
            className={`px-4 py-1 text-sm rounded-full border ${
              filter === p
                ? "bg-cyan-500 text-black font-bold"
                : "border-cyan-500 text-cyan-300"
            } hover:bg-cyan-600 hover:text-black transition-all`}
          >
            {p}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredCertificates.slice(0, displayCount).map((cert, idx) => (
          <CertificateCard key={idx} cert={cert} />
        ))}
      </div>

      {/* Show All / Close All Button */}
      {filteredCertificates.length > 6 && (
        <div className="flex justify-center mt-8">
          {displayCount < filteredCertificates.length ? (
            <button
              onClick={handleShowAll}
              className="px-6 py-2 text-sm rounded-full bg-cyan-500 text-black font-bold hover:bg-cyan-600 transition-all"
            >
              Show All
            </button>
          ) : (
            <button
              onClick={handleCloseAll}
              className="px-6 py-2 text-sm rounded-full bg-cyan-500 text-black font-bold hover:bg-cyan-600 transition-all"
            >
              Close All
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default Certificates;