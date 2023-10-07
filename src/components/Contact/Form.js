import React from "react";

const Form = () => {
  return (
    <>
      <form action=" ">
        <span>LEAVE A MESSAGE</span>
        <h2>We Love To Hear From You</h2>
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Your Email" />
        <input type="text" name="subject" placeholder="Subject" />
        <textarea
          name="message"
          cols={30}
          rows={10}
          placeholder="Your Message"
          defaultValue={"           "}                                                          
        />
        <button className="normal">Submit</button>
      </form>
    </>
  );
};

export default Form;
