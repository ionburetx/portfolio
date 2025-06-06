import SectionHeader from "./SectionHeader";
import SocialIcons from "./SocialIcons";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section id="contacto" className="w-full px-6 py-16 md:px-12 text-white">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-12">
        <SectionHeader title="CONTACTO" />
        <SocialIcons />
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
