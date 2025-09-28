import styles from "./Contact.module.css";
import "../../index.css";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import ContactForm from "../../components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <div className="container">
        <h1 className="title">Kontak Saya</h1>
        <div className={styles.row}>
          <div className={styles.column}>
            <ContactInfo />
          </div>
          <div className={styles.column}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
