// import React from "react";
// import "./Projects.css";
// import OIP from "../assets/OIP.jpeg";
// import OIP2 from "../assets/Designer.png";
// import OIP3 from "../assets/OIP (1).jpeg";

// const Projects = () => {
//   return (
//     <div className="project">
//       <h1 style={{ overflow: "hidden", padding: "5px", marginTop: "10px" }}>
//         Latest Project
//       </h1>
//       <div className="row project-container">
//         <div className="col-lg-4 col-12">
//           <div className="image-wrapper">
//             <img src={OIP} alt="Project 1" className="project-img" />
//             <div className="overlay">
//               <div className="arrow">
//                 <a
//                   href=""
//                   type="button"
//                   style={{ textDecoration: "none" }}
//                   className="arrow-link"
//                 >
//                   &#8594;
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-4 col-12">
//           <div className="image-wrapper">
//             <img src={OIP2} alt="Project 2" className="img-stem" />
//             <div className="overlay">
//               <div className="arrow">
//                 <a
//                   href=""
//                   type="button"
//                   style={{ textDecoration: "none" }}
//                   className="arrow-link"
//                 >
//                   &#8594;
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-4 col-12">
//           <div className="image-wrapper">
//             <img src={OIP3} alt="Project 3" className="project3" />
//             <div className="overlay">
//               <div className="arrow">
//                 <a
//                   href=""
//                   type="button"
//                   style={{ textDecoration: "none" }}
//                   className="arrow-link"
//                 >
//                   &#8594;
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

import React from "react";
import "./Projects.css";
import OIP from "../assets/OIP.jpeg";
import OIP2 from "../assets/Designer.png";
import OIP3 from "../assets/OIP (1).jpeg";

const Projects = () => {
  return (
    <div className="project">
      <h1 style={{ overflow: "hidden", padding: "5px", marginTop: "10px" }}>
        Latest Project
      </h1>
      <div className="row project-container">
        <div className="col-lg-4 col-12">
          <div className="image-wrapper">
            <img src={OIP} alt="Project 1" className="project-img" />
            <div className="overlay">
              <div className="content">
                <a
                  href="https://portfolioak.dorik.io/"
                  type="button"
                  className="arrow-link"
                >
                  &#8594;
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-12">
          <div className="image-wrapper">
            <img src={OIP2} alt="Project 2" className="img-stem" />
            <div className="overlay">
              <div className="content">
                <a
                  href="https://iconstem24.jeppiaarcollege.org/"
                  type="button"
                  className="arrow-link"
                >
                  &#8594;
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-12">
          <div className="image-wrapper">
            <img src={OIP3} alt="Project 3" className="project3" />
            <div className="overlay">
              <div className="content">
                <a
                  href="https://github.com/JaiAakash2005/Travel"
                  type="button"
                  className="arrow-link"
                >
                  &#8594;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
