import React, { useEffect, useRef } from "react";
import "../Styles/Timeline.css";

const timelineData = [
  {
    year: "2025",
    title: "A Smarter Beginning",
    description:
      "We begin our AI-first transformation—launching personalized dashboards, predictive insights, and automation tools to help users work smarter, not harder.",
  },
  {
    year: "2026",
    title: "Real-Time Collaboration",
    description:
      "Teams now collaborate across the globe in real-time using our smart integration suite—bridging time zones, languages, and platforms with ease.",
  },
  {
    year: "2027",
    title: "Embracing Sustainability",
    description:
      "Every feature now runs on green hosting and eco-first protocols. We introduce tools that track digital carbon footprints to help users stay eco-conscious.",
  },
  {
    year: "2028",
    title: "Hyper-Personal Experience",
    description:
      "Our system now adapts to each user’s behavior, goals, and mood—delivering a deeply personalized digital experience powered by next-gen AI.",
  },
  {
    year: "2029",
    title: "Global Expansion, Local Impact",
    description:
      "We expand into 50+ countries with localized experiences and partnerships, empowering creators, learners, and innovators everywhere.",
  },
  {
    year: "2030",
    title: "Mixed Reality Integration",
    description:
      "Users step into immersive dashboards with AR/VR support, making every interaction feel intuitive, engaging, and real.",
  },
];

const Timeline = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) {
            target.classList.add(
              target.classList.contains("left") ? "animate-left" : "animate-right"
            );
            observer.unobserve(target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="timeline-container">
      <h2 className="timeline-title">Our Visionary Journey</h2>
      <div className="timeline-wrapper">
        {/* Desktop Zigzag Line */}
        <svg className="timeline-line desktop-line" viewBox="0 0 500 1000" preserveAspectRatio="none">
          <path
            d="M 250 0
               C 100 100, 400 200, 250 300
               C 100 400, 400 500, 250 600
               C 100 700, 400 800, 250 900"
            stroke="url(#grad1)"
            strokeWidth="4"
            fill="transparent"
          />
          <defs>
            <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4ade80" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Mobile Straight Line */}
        <div className="timeline-line mobile-line"></div>

        <div className="timeline-items">
          {timelineData.map((item, index) => (
            <div
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-content">
                <div className="timeline-star">⭐</div>
                <p className="timeline-year">{item.year}</p>
                <h3 className="timeline-heading">{item.title}</h3>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
