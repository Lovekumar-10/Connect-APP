import React, { useEffect, useRef } from 'react';
import '../Styles/Feedback.css';
import CommentCard from './CommentCard';

const feedbackData = [
    {
      image: "https://randomuser.me/api/portraits/men/10.jpg",
      name: "Ravi Kumar",
      comment: "Amazing service and support. Really loved the experience!"
    },
    {
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      name: "Aditi Sharma",
      comment: "Quick, responsive and helpful team. Highly recommend!"
    },
    {
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      name: "Kunal Verma",
      comment: "My favorite platform. Smooth and reliable performance."
    },
    {
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      name: "Priya Sen",
      comment: "Simple and clean design. It’s a joy to use daily."
    },
    {
      image: "https://randomuser.me/api/portraits/men/33.jpg",
      name: "Aman Singh",
      comment: "They truly care about users. Five stars!"
    },
    {
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      name: "Divya Mehra",
      comment: "Very intuitive and fast platform. Loved it."
    },
    {
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      name: "Manoj Yadav",
      comment: "One of the best customer services I’ve experienced."
    },
    {
      image: "https://randomuser.me/api/portraits/women/34.jpg",
      name: "Sneha Joshi",
      comment: "Reliable and beautifully designed. Great work!"
    },
    {
      image: "https://randomuser.me/api/portraits/men/14.jpg",
      name: "Vikram Chauhan",
      comment: "Extremely smooth experience from start to end."
    },
    {
      image: "https://randomuser.me/api/portraits/women/18.jpg",
      name: "Meena Rathi",
      comment: "Elegant, easy to use, and very practical."
    },
    {
      image: "https://randomuser.me/api/portraits/men/19.jpg",
      name: "Rajeev Nair",
      comment: "Good interface and great accessibility features."
    },
    {
      image: "https://randomuser.me/api/portraits/women/25.jpg",
      name: "Anjali Deshmukh",
      comment: "Awesome app! Never felt confused using it."
    },
    {
      image: "https://randomuser.me/api/portraits/men/21.jpg",
      name: "Siddharth Patel",
      comment: "Works like magic! Smooth and simple."
    },
    {
      image: "https://randomuser.me/api/portraits/women/27.jpg",
      name: "Pooja Kumari",
      comment: "Great for daily use. Helps me stay productive!"
    },
    {
      image: "https://randomuser.me/api/portraits/men/30.jpg",
      name: "Deepak Thakur",
      comment: "Excellent UI and features. Everything I need!"
    },
    {
      image: "https://randomuser.me/api/portraits/women/31.jpg",
      name: "Kritika Bhatt",
      comment: "Best platform I’ve used so far. Clean and useful."
    },
    {
      image: "https://randomuser.me/api/portraits/men/37.jpg",
      name: "Harsh Sharma",
      comment: "Super fast and easy to understand!"
    },
    {
      image: "https://randomuser.me/api/portraits/women/39.jpg",
      name: "Neha Mishra",
      comment: "A platform that actually gets the job done."
    },
    {
      image: "https://randomuser.me/api/portraits/men/42.jpg",
      name: "Saurabh Jain",
      comment: "Nothing confusing, just clean and efficient."
    },
    {
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Nisha Rawat",
      comment: "I recommend this to all my friends and colleagues!"
    }
  ];
  

const Feedback = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    let scrollAmount = 0;
    const scrollStep = 320; // width of one card + margin

    const interval = setInterval(() => {
      if (track) {
        scrollAmount += scrollStep;

        if (scrollAmount >= track.scrollWidth - track.clientWidth) {
          scrollAmount = 0; // Reset to start
        }

        track.scrollTo({
          left: scrollAmount,
          behavior: 'smooth',
        });
      }
    }, 3000); // every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="feedback-slider">
      <h2>What People Say,,</h2>
      <div className="feedback-track" ref={trackRef}>
        {feedbackData.map((data, index) => (
          <CommentCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default Feedback;
