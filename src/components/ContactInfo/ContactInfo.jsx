import styles from "./ContactInfo.module.css";
import "../../index.css";

const ContactInfo = () => {
  const contactInfoData = [
    {
      iconClass: "fa-solid fa-envelope",
      title: "Email",
      detail: "irfanapurnomo02@gmail.com",
    },
    {
      iconClass: "fa-solid fa-phone",
      title: "Telepon",
      detail: "+62 857-2112-2232",
    },
    {
      iconClass: "fa-solid fa-location-dot",
      title: "Lokasi",
      detail: "Bandung, Indonesia",
    },
  ];

  return (
    <div className={styles.contactInfo}>
      {contactInfoData.map((info, index) => (
        <div className={styles.infoCard} key={index}>
          <div className={styles.iconCircle}>
            <i className={info.iconClass}></i>
          </div>
          <div>
            <h4>{info.title}</h4>
            <p>{info.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
