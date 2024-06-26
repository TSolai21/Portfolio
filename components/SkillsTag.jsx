// import React, { useEffect } from "react";
// import TagCloud from "TagCloud";

// const container = ".content";

// const options = {
//   radius: 250,
//   // animation speed
//   // slow, normal, fast
//   maxSpeed: "slow",
//   initSpeed: "fast",
//   // 0 = top
//   // 90 = left
//   // 135 = right-bottom
//   direction: 135,
//   // interact with cursor move on mouse out
//   keep: true,
// };

// const SkillsTag = ({ skills }) => {
//   // to render wordcloud each time the page is reloaded

//   const texts = skills.map((d) => d.skill);

//   useEffect(() => {
//     const fn = TagCloud(container, texts, options);
//     return () => fn.destroy();
//   }, []);

//   return <div className="content"></div>;
// };

// export default SkillsTag;

import React, { useEffect, useRef, useState } from "react";
import TagCloud from "TagCloud";

const SkillsTag = ({ skills }) => {
  const containerRef = useRef(null);
  const [radius, setRadius] = useState(250); // initial radius

  useEffect(() => {
    const updateRadius = () => {
      if (containerRef.current) {
        const newRadius = containerRef.current.offsetWidth / 2.5;
        setRadius(newRadius);
      }
    };

    // Set radius initially
    updateRadius();

    // Add event listener to update radius on window resize
    window.addEventListener("resize", updateRadius);

    // Initialize TagCloud with dynamic radius
    if (containerRef.current) {
      const container = containerRef.current;
      const texts = skills.map((d) => d.skill);
      const options = {
        radius: radius,
        maxSpeed: "slow",
        initSpeed: "fast",
        direction: 135,
        keep: true,
      };

      // Initialize TagCloud
      const tagCloudInstance = TagCloud(container, texts, options);

      // Cleanup function to destroy TagCloud instance on unmount
      return () => {
        tagCloudInstance.destroy();
        window.removeEventListener("resize", updateRadius);
      };
    }
  }, [radius]);

  return (
    <div
      className="content"
      ref={containerRef}
      style={{ width: "100%", height: "100%" }}
    ></div>
  );
};

export default SkillsTag;
