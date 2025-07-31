import React, { useEffect, useState } from "react";
import BadgeCard from "../components/BadgeCard";
import AOS from "aos";
import "aos/dist/aos.css";

const Badges = () => {
  const [filter, setFilter] = useState("All");
  const [displayCount, setDisplayCount] = useState(6); // State to control number of badges displayed

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const platforms = ["All", "AWS", "IBM SKILLBUILD", "CodeChef", "E-learning", "Google For Developers"];

  const badgeData = [
    {
      title: "AWS Academy Cloud Foundations",
      platform: "AWS",
      img: "/badges/aws-Cloud-foundations.png",
      link: "https://www.credly.com/badges/1e223c57-4853-435b-8176-48d758df9ae2/public_url"
    },
    {
      title: "AWS Academy Machine Learning Foundations",
      platform: "AWS",
      img: "/badges/aws-machine-learning-foundations.png",
      link: "https://www.credly.com/badges/a859df09-22e5-4aa1-8fc6-2e90c75119bd/public_url"
    },
    {
      title: "CodeChef 50 days of Code",
      platform: "CodeChef",
      img: "/badges/CodeChefBadge.png",
      link: "https://www.codechef.com/users/udayreddi28"
    },
    {
      title: "CodeChef 05 days Star",
      platform: "CodeChef",
      img: "/badges/codechef.jpg",
      link: "https://www.codechef.com/users/udayreddi28"
    },
    {
      title: "Artificial Intelligence Fundamentals IBMSkillsBuild",
      platform: "IBM SKILLBUILD",
      img: "/badges/AI fundamentals.png",
      link: "https://skills.yourlearning.ibm.com/learning/completed"
    },
    {
      title: "AI Ethics",
      platform: "IBM SKILLBUILD",
      img: "/badges/AI Ethics.png",
      link: "https://skills.yourlearning.ibm.com/learning/completed"
    },
    {
      title: "Artificial Intelligence In 5 Minutes",
      platform: "IBM SKILLBUILD",
      img: "/badges/AI.png",
      link: "https://skills.yourlearning.ibm.com/learning/completed"
    },
    {
      title: "Communicating with impact",
      platform: "IBM SKILLBUILD",
      img: "/badges/Communicating.png",
      link: "https://skills.yourlearning.ibm.com/learning/completed"
    },
    {
      title: "Computer Basics",
      platform: "IBM SKILLBUILD",
      img: "/badges/Computer Basics.png",
      link: "https://skills.yourlearning.ibm.com/learning/completed"
    },
    {
      title: "Create a Credly account",
      platform: "IBM SKILLBUILD",
      img: "/badges/Credly.png",
      link: "https://skills.yourlearning.ibm.com/learning/completed"
    },
    {
      title: "Critical Soft Skills for Project Managers",
      platform: "IBM SKILLBUILD",
      img: "/badges/ProjectManager.png",
      link: "https://skills.yourlearning.ibm.com/learning/completed"
    },
    {
      title: "Edunet-SkillsBuild Orientation",
      platform: "IBM SKILLBUILD",
      img: "/badges/Edunet.png",
      link: "https://skills.yourlearning.ibm.com/learning/completed"
    },
    {
      title: "How Computers Communicate",
      platform: "IBM SKILLBUILD",
      img: "/badges/Communicating.png",
      link: "https://skills.yourlearning.ibm.com/learning/completed"
    },
    {
      title: "Introduction to Artificial Intelligence",
      platform: "IBM SKILLBUILD",
      img: "/badges/Intro to ai.png",
      link: "https://skills.yourlearning.ibm.com/learning/completed"
    },
    {
      title: "Learning Plan Job Readiness Skills",
      platform: "IBM SKILLBUILD",
      img: "/badges/Job readiness.png",
      link: "https://skills.yourlearning.ibm.com/learning/completed"
    },
    {
      title: "Mastering the Art of Prompting",
      platform: "IBM SKILLBUILD",
      img: "/badges/Mastering the art of prompt.png",
      link: "https://skills.yourlearning.ibm.com/learning/completed"
    },
    {
      title: "Natural Language Processing and Computer Vision",
      platform: "IBM SKILLBUILD",
      img: "/badges/NLP & CV.png",
      link: "https://skills.yourlearning.ibm.com/learning/completed"
    },
    {
      title: "Professional Skills",
      platform: "IBM SKILLBUILD",
      img: "/badges/Professinol Skills.png",
      link: "https://skills.yourlearning.ibm.com/learning/completed"
    },
    {
      title: "Run AI Models with IBM Watson Studio",
      platform: "IBM SKILLBUILD",
      img: "/badges/Run Ai.png",
      link: "https://skills.yourlearning.ibm.com/learning/completed"
    },
    {
      title: "The Job Landscape",
      platform: "IBM SKILLBUILD",
      img: "/badges/Future in ai.png",
      link: "https://skills.yourlearning.ibm.com/learning/completed"
    },
    {
      title: "Web Development Basics",
      platform: "IBM SKILLBUILD",
      img: "/badges/Web development basics.png",
      link: "https://skills.yourlearning.ibm.com/learning/completed"
    },
    {
      title: "What is JavaScript",
      platform: "IBM SKILLBUILD",
      img: "/badges/What is js.png",
      link: "https://skills.yourlearning.ibm.com/learning/completed"
    },
    {
      title: "Your Future in IT Support The Job",
      platform: "IBM SKILLBUILD",
      img: "/badges/future in IT.png",
      link: "https://skills.yourlearning.ibm.com/learning/completed"
    },
    // E-learning badges (auto-generated)
    ...Array.from({ length: 86 }, (_, i) => ({
      title: `E-learning Badge ${i + 1}`,
      platform: "E-learning",
      img: `/badges/elearning/elearning- ${i + 1}.png`,
      link: "https://skills.yourlearning.ibm.com/learning/completed"
    })),
    {
      title: "Go further with product image search badge",
      platform: "Google For Developers",
      img: "/badges/google/further with product image.png",
      link: "https://developers.google.com/profile/badges/playlists/ml/going-further-image-product-search"
    },
    {
      title: "Go further with image classification badge",
      platform: "Google For Developers",
      img: "/badges/google/image classification.png",
      link: "https://developers.google.com/profile/badges/playlists/ml/going-further-image-classification"
    },
    {
      title: "Get started with product image search badge",
      platform: "Google For Developers",
      img: "/badges/google/started with product image.png",
      link: "https://developers.google.com/profile/badges/playlists/ml/get-started-product-image-search"
    },
    {
      title: "Get started with object detection badge",
      platform: "Google For Developers",
      img: "/badges/google/started with object detection.png",
      link: "https://developers.google.com/profile/badges/playlists/ml/get-started-object-detection"
    },
    {
      title: "Go further with object detection badge",
      platform: "Google For Developers",
      img: "/badges/google/further with object detection.png",
      link: "https://developers.google.com/profile/badges/playlists/ml/going-further-object-detection"
    },
    {
      title: "Joined the Google Developer Program",
      platform: "Google For Developers",
      img: "/badges/google/created_profile.png",
      link: "https://developers.google.com/profile/badges/profile/created-profile"
    },
    {
      title: "TensorFlow badge",
      platform: "Google For Developers",
      img: "/badges/google/TensorFlow badge.png",
      link: "https://developers.google.com/profile/badges/playlists/ml/tensorflow-badge"
    },
    {
      title: "Learning",
      platform: "Google For Developers",
      img: "/badges/google/learnings.png",
      link: "https://developers.google.com/profile/badges/playlists/ml/learning"
    }
    
  ];

  const filteredBadges =
    filter === "All" ? badgeData : badgeData.filter((b) => b.platform === filter);

  const handleShowAll = () => {
    setDisplayCount(filteredBadges.length); // Show all badges
  };

  const handleCloseAll = () => {
    setDisplayCount(6); // Revert to showing only 6 badges
  };

  return (
    <div className="bg-[#0b1925] py-16 px-6 text-white min-h-screen">
      <h2 className="text-4xl font-bold text-cyan-400 text-center mb-8" data-aos="fade-down">🏅 Badges</h2>

      {/* Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-8" data-aos="fade-up">
        {platforms.map((platform) => (
          <button
            key={platform}
            onClick={() => {
              setFilter(platform);
              setDisplayCount(6); // Reset display count when filter changes
            }}
            className={`px-4 py-1 text-sm rounded-full border ${
              filter === platform
                ? "bg-cyan-400 text-black font-bold"
                : "border-cyan-400 text-cyan-300"
            } hover:bg-cyan-500 hover:text-black transition-all`}
          >
            {platform}
          </button>
        ))}
      </div>

      {/* Badge Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {filteredBadges.slice(0, displayCount).map((badge, idx) => (
          <BadgeCard key={idx} badge={badge} />
        ))}
      </div>

      {/* Show All / Close All Button */}
      {filteredBadges.length > 6 && (
        <div className="flex justify-center mt-8">
          {displayCount < filteredBadges.length ? (
            <button
              onClick={handleShowAll}
              className="px-6 py-2 text-sm rounded-full bg-cyan-400 text-black font-bold hover:bg-cyan-500 transition-all"
            >
              Show All
            </button>
          ) : (
            <button
              onClick={handleCloseAll}
              className="px-6 py-2 text-sm rounded-full bg-cyan-400 text-black font-bold hover:bg-cyan-500 transition-all"
            >
              Close All
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Badges;