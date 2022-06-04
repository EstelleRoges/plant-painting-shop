import { styled } from "@mui/material";

const ContactForm = () => {
  const sendMessage = (event) => {
    event.preventDefault();
    alert("Votre message a bien été envoyé!");
  }

  return (
    <>
      <Form>
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="" />
            <label htmlFor="mail">E-mail</label>
            <input type="email" name="mail" id="" />
            <label htmlFor="subject">Subject</label>
            <select name="subjects" id="subject">
              <option value="whichSubject" hidden defaultValue>
                C'est au sujet de...
              </option>
              <option value="Purchase">Achat</option>
              <option value="Commission">Commission</option>
              <option value="Collaboration">Collaboration</option>
              <option value="Other">Autre sujet</option>
            </select>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="" cols="30" rows="13"></textarea>
            <button type="submit" onClick={sendMessage}>Envoyer</button>
        </form>
      </Form>
    </>
  );
};

const Form = styled("div")`
  margin-top: 2em;
  form {
    margin: auto;
    padding: 2em 3em;
    max-width: 60%;

    label {
      margin-bottom: 1em;
    }

    input,
    select,
    textarea {
      width: 100%;
      height: fit-content;
    }

    .leftPart {
      margin: 0 2em;
      width: 40%;
    }

    .rightPart {
      margin: 0 2em;
      width: 60%;
      position: relative;

      button {
        position: absolute;
        right: 0.3em;
        bottom: 1em;
      }
    }
  }
`;

export default ContactForm;
