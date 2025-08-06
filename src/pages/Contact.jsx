import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircle, XCircle, Loader2, Mail } from "lucide-react";
import classNames from "classnames";
import { motion } from "framer-motion";

function Contact() {
  const formRef = useRef();
  const [values, setValues] = useState({ user_name: "", user_email: "", message: "" });
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValid = (field) =>
    field === "user_email" ? isEmailValid(values[field]) : values[field].trim().length > 1;

  const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });
  const handleBlur = (e) => setTouched({ ...touched, [e.target.name]: true });

  const sendEmail = (e) => {
    e.preventDefault();
    const allValid = Object.keys(values).every((key) => isValid(key));
    if (!allValid) return;

    setLoading(true);

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formRef.current, "YOUR_PUBLIC_KEY")
      .then(() => {
        setSent(true);
        setValues({ user_name: "", user_email: "", message: "" });
        setTouched({});
        setTimeout(() => setSent(false), 3000);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  return (
    <section className="contact">
        <h2> Contactez-nous <Mail className="icon" /></h2>

        <form ref={formRef} onSubmit={sendEmail}>
          {["user_name", "user_email", "message"].map((field) => (
            <div
              key={field}
              className={classNames("field", {
                valid: touched[field] && isValid(field),
                error: touched[field] && !isValid(field),
              })}
            >
              <label>
                {field === "user_name" && "Nom"}
                {field === "user_email" && "Email"}
                {field === "message" && "Message"}
              </label>

              {field !== "message" ? (
                <input
                  name={field}
                  type={field === "user_email" ? "email" : "text"}
                  value={values[field]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={field === "user_email" ? "exemple@mail.com" : ""}
                  required
                />
              ) : (
                <textarea
                  name={field}
                  rows="5"
                  value={values[field]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
              )}

              {touched[field] && isValid(field) && <CheckCircle size={18} className="valid-icon" />}
              {touched[field] && !isValid(field) && <XCircle size={18} className="error-icon" />}
            </div>
          ))}

          <button type="submit" disabled={loading}>
            {loading ? <Loader2 className="spinner" /> : "Envoyer"}
          </button>

          {sent && (
            <motion.div className="sent" initial={{ scale: 0 }} animate={{ scale: 1 }}>
              <CheckCircle /> Message envoyé !
            </motion.div>
          )}
        </form>
    </section>
  );
}

export default Contact;
