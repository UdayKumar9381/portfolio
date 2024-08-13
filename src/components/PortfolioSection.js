// src/components/PortfolioSection.js
import React from 'react';
import './Portfoliosection.css'; // To add specific styles later

function PortfolioSection() {
  return (
    <section id="portfolio" className="portfolio-section">
      <h2>My Experiences</h2>
      <div className="portfolio-items">
        <div className="portfolio-item">
          <img src="https://w7.pngwing.com/pngs/942/353/png-transparent-project-team-project-management-computer-icons-business-furniture-service-people-thumbnail.png" alt="Project 1" />
          <h3>Project Nest</h3>
          <p>Restuarant Website</p>
          <a href="https://github.com/UdayKumar9381/D-3F-306/tree/main/project%20nest" className="project-link">View Project</a>
        </div>
        <div className="portfolio-item">
          <img src="https://w7.pngwing.com/pngs/263/314/png-transparent-project-manager-project-management-office-management-project-miscellaneous-company-text-thumbnail.png" alt="Project 1" />
          <h3>CODSOFT</h3>
          <p>VirtualInternship</p>
          <a href="https://www.linkedin.com/posts/narapureddi-uday-kumar-523551262_python-codsoftinternship-programming-activity-7128452740317409280-hRrL?utm_source=share&utm_medium=member_desktop" className="project-link">Viewinternship</a>
        </div>
        <div className="portfolio-item">
          <img src="https://img.freepik.com/premium-psd/graduation-cap-with-diploma-certificate-png_1155868-8127.jpg?size=626&ext=jpg" alt="Project 1" />
          <h3>SOLOLEARN</h3>
          <p>Profile</p>
          <a href="https://www.sololearn.com/en/profile/27428133" className="project-link">learning</a>
        </div>
        <div className="portfolio-item">
          <img src="https://w7.pngwing.com/pngs/118/895/png-transparent-hackerrank-logos-and-brands-line-filled-icon-thumbnail.png" alt="Project 1" />
          <h3>HACKERANK</h3>
          <p>Task</p>
          <a href="https://www.hackerrank.com/certificates/693fa8476e28" className="project-link">Assessment</a>
        </div>
        <div className="portfolio-item">
        <img src="https://w7.pngwing.com/pngs/307/635/png-transparent-ibm-cloud-computing-bluemix-microsoft-azure-cloud-computing-text-logo-cloud-computing-thumbnail.png" alt="Project 1" />
          <h3>IBM</h3>
          <p>CComputer Networking Basics: How Computers Communicate (MDL-236)
          According to the Moodle system of record</p>
          <a href="https://skills.yourlearning.ibm.com/certificate/MDL-236" className="project-link">SkillBuild</a>
        </div>
        <div className="portfolio-item">
        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1003/https://ihub-data.ai/wp-content/uploads/2023/06/4th.png" alt="Project 1" />
          <h3>FMML</h3>
          <p>FOUNDATION OF MODERN MACHINE LEARNING</p>
          <a href="https://www.linkedin.com/posts/narapureddi-uday-kumar-523551262_kiet-machinelearning-activity-7223974850833301505-6N0K?utm_source=share&utm_medium=member_desktop" className="project-link">machinelearning</a>
        </div>
        <div className="portfolio-item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQty67bigD-nQG8dVN-s1ebnQvKtceiZjZSYIenccf8uXipi9LCGz9oqTZIHQ&s" alt="Project 1" />
          <h3>SWECHA AI</h3>
          <p>swecha AI Of Intership Program At Swecha</p>
          <a href="https://learning.swecha.org/mod/customcert/my_certificates.php?downloadcert=1&userid=21454&certificateid=52" className="project-link">machinelearning</a>
        </div>
        <div className="portfolio-item">
        <img src="https://assets-global.website-files.com/60d04c4106d835bf99aa4c35/61fa729d8c0a0605c14e6c67_Python%20Programming%20Intro%20and%20Advanced-p-800.jpeg" alt="Project 1" />
          <h3>EDYST</h3>
          <p>Introduction Of Python</p>
          <a href="https://www.linkedin.com/posts/narapureddi-uday-kumar-523551262_edyst-python-coding-activity-7100717823198433280-Frq_?utm_source=share&utm_medium=member_desktop" className="project-link">python</a>
        </div>

      </div>
    </section>
  );
}

export default PortfolioSection;
