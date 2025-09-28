import { useState } from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import "../../index.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const sendToWhatsApp = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      alert("Mohon lengkapi semua field yang wajib diisi (*).");
      return;
    }

    const phoneNumber = "6285721122232";

    const whatsappMessage = encodeURIComponent(
      `Halo, saya ${name}. Email saya adalah ${email}. Saya ingin menghubungi Anda mengenai "${subject}".\n\nIsi Pesan:\n${message}`
    );

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <form className={styles.contactForm} onSubmit={sendToWhatsApp}>
      <h2>Kirim Pesan</h2>
      <p>Isi form di bawah ini dan saya akan merespon dalam 24 jam</p>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nama Lengkap *</label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="subject">Subjek *</label>
        <input
          type="text"
          id="subject"
          required
          value={formData.subject}
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message">Pesan *</label>
        <textarea
          rows="5"
          id="message"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>

      <Button type="submit" href="#portfolio" variant="primary">
        <i className="fa-solid fa-paper-plane"></i> Kirim Pesan
      </Button>
    </form>
  );
};

export default ContactForm;
