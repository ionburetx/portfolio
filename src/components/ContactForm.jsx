import { useState } from "react";
import emailjs from "@emailjs/browser";
import { sendForm } from '@emailjs/browser';
import { useTranslation } from 'react-i18next';


const ContactForm = () => {
  const { t } = useTranslation();
  const [sending, setSending] = useState(false);
  const [resultMessage, setResultMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setResultMessage(null);

    emailjs
      sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setSending(false);
          setResultMessage(t('HomePage.Contact.form.successMessage'));
          e.target.reset();
        },
        (error) => {
          setSending(false);
          setResultMessage(t('HomePage.Contact.form.errorMessage'));
          console.error(error.text);
        }
      );
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl mx-auto space-y-6 text-white"
      >
        <div>
          <label htmlFor="nombre" className="block mb-2 font-semibold">
            {t('HomePage.Contact.form.nameLabel')}
          </label>
          <input
            type="text"
            id="nombre"
            name="from_name"
            className="w-full p-3 rounded-md bg-white bg-opacity-10 placeholder-white placeholder-opacity-60 border border-white border-opacity-30 focus:outline-none"
            placeholder={t('HomePage.Contact.form.namePlaceholder')}
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-semibold">
            {t('HomePage.Contact.form.emailLabel')}
          </label>
          <input
            type="email"
            id="email"
            name="reply_to"
            className="w-full p-3 rounded-md bg-white bg-opacity-10 placeholder-white placeholder-opacity-60 border border-white border-opacity-30 focus:outline-none"
            placeholder={t('HomePage.Contact.form.emailPlaceholder')}
            required
          />
        </div>

        <div>
          <label htmlFor="mensaje" className="block mb-2 font-semibold">
            {t('HomePage.Contact.form.messageLabel')}
          </label>
          <textarea
            id="mensaje"
            name="message"
            rows="5"
            className="w-full p-3 rounded-md bg-white bg-opacity-10 placeholder-white placeholder-opacity-60 border border-white border-opacity-30 focus:outline-none"
            placeholder={t('HomePage.Contact.form.messagePlaceholder')}
            required
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={sending}
            className="px-8 py-3 bg-white bg-opacity-20 text-white font-bold uppercase rounded-md hover:bg-opacity-40 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {sending ? t('HomePage.Contact.form.sending') : t('HomePage.Contact.form.sendButton')}
          </button>
        </div>
      </form>

      {resultMessage && (
        <p className="text-center mt-4 text-white font-semibold">{resultMessage}</p>
      )}
    </>
  );
};

export default ContactForm;
