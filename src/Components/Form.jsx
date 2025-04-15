import React from "react";
import { useForm } from "react-hook-form";
import "../Styles/Form.css"; // link to external CSS file
import form_img from '../assets/form.png';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Message Sent!");
    reset();
  };

  return (
    <div className="form-wrapper">
      <div className="head-line">
      <h2>
          <span className="highlight-title">Contact Us</span>
        </h2>
        <p className="subtext">
        Get in Touch - Let’s Simplify Your
        Social Experience!
        </p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      
        <div className="form">
        <div className="radio-group">
          <label>
            <input
              type="radio"
              value="Say Hi"
              defaultChecked
              {...register("inquiryType")}
            />
            Say Hi
          </label>
          <label>
            <input type="radio" value="Get a Quote" {...register("inquiryType")} />
            Get a Quote
          </label>
        </div>

        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p className="error">{errors.name.message}</p>}

        <label>Email*</label>
        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format"
            }
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <label>Message*</label>
        <textarea
          rows="5"
          placeholder="Message"
          {...register("message", { required: "Message is required" })}
        ></textarea>
        {errors.message && <p className="error">{errors.message.message}</p>}

        <button className="btn-form" type="submit">Send Message</button>

        </div>

       

        <div className="form-img">
        <img src={form_img} alt="" />
      </div>
      </form>
    
    </div>
  );
};

export default Form;
