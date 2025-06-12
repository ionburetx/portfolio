import SectionHeader from "./SectionHeader";
import SocialIcons from "./SocialIcons";
import ContactForm from "./ContactForm";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();
  return (
    <section id="contacto" className="w-full px-6 py-16 md:px-12 text-white">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-12">
        <SectionHeader titleKey="contact" />
        <SocialIcons />
        <div className="text-center space-y-2">
          <h2 className="text-white text-xl md:text-2xl font-bold">{t("HomePage.Contact.headline")}</h2>
          <p className="text-white text-sm md:text-base font-normal">{t("HomePage.Contact.subline")}</p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
