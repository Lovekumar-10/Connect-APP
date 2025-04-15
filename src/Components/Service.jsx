import React from 'react';
import '../Styles/Service.css';
import Card from '../Common/Card';

const Service = () => {
  return (
    <div className="service-container">
      <div className="service-top">
        <h2>Services</h2>
        <p>
        At Connect , We Make Managing your social media effortless. Our <br />
        platform brings all your conversations together in one place. 
        </p>
      </div>
    
      <div className="card-grid">
      <Card
        title="Unified Messaging"
        description="Manage messages from all platforms in one place."
        image="https://img.freepik.com/free-vector/phone-surrounded-by-messages-isometric-style_52683-22931.jpg"
      />
      <Card
        title="Social Media Notifications"
        description="Stay updated with all alerts in one dashboard."
        image="https://img.freepik.com/free-vector/likes-addiction-abstract-concept-vector-illustration-addicted-likes-thumbs-up-dependence-social-media-madness-selfie-addiction-posting-photos-self-esteem-problem-abstract-metaphor_335657-2260.jpg?t=st=1743906462~exp=1743910062~hmac=ecf23e525f38fe1313120d99972714862d6728af38b0a0248fcc36965c8114d9&w=826"
      />
      <Card
        title="Multi Platform Posting"
        description="Send posts from one to all your platforms in advance."
        image="https://img.freepik.com/premium-vector/flat-illustration-content-marketing-editable-design_203633-2315.jpg?w=826"
      />
      <Card
        title="Analytics and Insights"
        description="Track engagement and performance of your posts."
        image="https://img.freepik.com/free-vector/people-analyzing-growth-charts-illustrated_23-2148865275.jpg?t=st=1743906304~exp=1743909904~hmac=cbb6ff8f502987615713084fd152e52f62e04e715bc6516ac7d8390ef59a33ec&w=826"
      />
      </div>
     
    </div>
  );
};

export default Service;
