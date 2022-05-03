import "./ContactForm.scss";

const ContactForm = () => {
  return (
    <div>
      Contact me!
      <form action="" method="post">
        <label for="">Name</label>
        <input type="text" name="name" id="" />
        <label for="mail">E-mail</label>
        <input type="email" name="mail" id="" />
        <label for="subject">Subject</label>
        <input type="text" name="subject" id="" />
        <textarea name="message" id="" cols="30" rows="10"></textarea>
      </form>
    </div>
  );
};

export default ContactForm;
