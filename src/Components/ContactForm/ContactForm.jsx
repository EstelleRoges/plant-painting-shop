import "./ContactForm.scss";

const ContactForm = () => {
  return (
    <div className="contactFormContent">
      <h2>Contact me!</h2>
      <div className="contactArea">
        <div className="contactText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis odio natus soluta vero? Ut adipisci culpa aut corporis incidunt nobis blanditiis officiis illum voluptate. Iure repellendus neque quaerat voluptate. </div>
        <div className="contactForm">
          <form action="" method="post">
            <label htmlFor="">Name</label>
              <input type="text" name="name" id="" />
            <label htmlFor="mail">E-mail</label>
              <input type="email" name="mail" id="" />
            <label htmlFor="subject">Subject</label>
              <select name="subjects" id="subject">
                <option disabled defaultValue hidden>Choose...</option>
                <option value="Purchase">Purchase</option>
                <option value="Commission">Commission</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Other">Other</option>
              </select>
            <label htmlFor="message">Message</label>
              <textarea name="message" id="" cols="30" rows="10"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
