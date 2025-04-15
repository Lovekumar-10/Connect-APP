import '../Styles/Founder.css';
import founderImg from '../assets/hit2.jpg'; // your image path

const Founder = () => {


  return (
    <div className="founder-wrap">
      <h2 className="founder-heading">Founder</h2>

      <div className="founder-box">
        <div className="founder-left">
          <img src={founderImg} alt="Founder" className="founder-image" />
        </div>

        <div className="founder-right">
        <p>
  <strong>Love Kumar</strong> is the founder of this platform, driven to simplify digital life. With a passion
  for user-focused design and scalable tools, he created a unified experience to help users manage their online presence
  smarter and more efficiently.
</p>

<p>
  <strong>Connect</strong> is a smart web app that combines all your social media platforms into one dashboard. It helps
  you manage messages, notifications, and posts effortlessly, saving time and boosting productivity. Perfect for creators,
  marketers, and multitaskers seeking a clean, simplified digital experience.
</p>

        </div>
      </div>
    </div>
  );
};

export default Founder;
