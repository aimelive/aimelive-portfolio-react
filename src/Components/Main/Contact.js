import { useState } from "react";
import { Link } from "react-router-dom";
import profile from "../../images/259876262_273615128057795_12441334990616548_n.jpg"
import logo from "../../images/Rectangle 21.png"
const ContactPage = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState("Send Message")
  const [sent, setSent] = useState(false)
  // variables for errors messages

  const [error, setError] = useState(null)




  const handleSubmit = (e) => {
    e.preventDefault()
    setSending("Send Message")
    setSent(false)
    if (validate()) {
      setError(null)
      setSending("Sending, Please wait...")
      fetch('https://my-brand-aimelive.herokuapp.com/api/v1/messages', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message
        })
      })
        .then((resp) => {
          if (resp.status === 201) {
            setSending("Send Message")
            setSent(true)
            setName('')
            setEmail('')
            setMessage('')
            return resp.json()
          }
          else {
            setError("Failed to send message! ")
            setSending("Try again")
          }

        })
        .catch(err => {
          setError("Failed to send message! Check your internet connection")
          setSending("Try again")
        })
    }
  }
  function validate() {


    if (name === "") {
      setError("Name is required!")
      return false;
    }
    if (name.length < 5) {
      setError("Name: Enter at least 5 characters!")
      return false;
    }
    if (email === "") {
      setError("Email is required!")
      return false;
    }

    if (email.indexOf("@") < 1 || (email.lastIndexOf(".") - email.indexOf("@") < 2)) {
      setError("Invalid Email Format!")
      return false;

    }
    if (message === "") {
      setError("Message is required!")
      return false;
    }
    return true
  }
  return (
    <div className="contactPage">
      <div className="profileCard">
        <img src={profile} alt="profile" />
        <div>
          <h3>Freelance Developer</h3>
          <p>Aime Ndayambaje</p>
        </div>
      </div>

      <div className="reachout">
        <img src={logo} id="logo" width="50px" alt="my-logo" />
        <h2><span> Reach  </span>out to <span> @Aimelive </span>here </h2>
        {error && <div className="validateForm"><i className="fa fa-warning"></i> {error}</div>}
        {sent && <div className="sentMessage"><i className="fa fa-check-circle"></i> Message Sent Successfully! </div>}
        <form className="reach-out" name="rechout" onSubmit={handleSubmit}>
          <input type="text" name="fullname" placeholder="Your name  " value={name} onChange={(e) => setName(e.target.value)} />

          <input type="text" name="youremail" placeholder="Your e-mail " id="youremail" value={email} onChange={(e) => setEmail(e.target.value)} />

          <br />
          <textarea name="yourmessage" placeholder="Your message  " cols="50" rows="15" value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>



          <input type="submit" value={sending} />
        </form>
        <p className="label">For further help please visit our <Link to="#">FAQs</Link></p>
      </div>
    </div>
  );
};

export default ContactPage;
