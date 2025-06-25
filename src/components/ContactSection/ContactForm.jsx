import { useState } from "react";
import { sendForm } from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';

const ContactForm = () => {
  const { t } = useTranslation();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(async () => {
        setSending(false);
        e.target.reset();

        let randomQuoteText = '¡Gracias por escribirme!';

        try {
          // Evitar cache con timestamp
          const res = await fetch(`https://api.adviceslip.com/advice?timestamp=${Date.now()}`);

          if (res.ok) {
            const data = await res.json();
            console.log('Consejo recibido:', data.slip.advice);
            randomQuoteText = data.slip.advice || randomQuoteText;
          } else {
            console.warn('Error en la respuesta de la API:', res.status);
          }
        } catch (error) {
          console.warn('No se pudo cargar la frase:', error);
        }

        Swal.fire({
          title: '✅ ¡Mensaje enviado!',
          text: randomQuoteText,
          icon: 'success',
          confirmButtonText: 'Genial 😄',
          confirmButtonColor: '#3085d6',
          background: '#1a1a1a',
          color: '#fff',
        });
      })
      .catch((error) => {
        console.error('Error enviando email:', error);
        setSending(false);

        Swal.fire({
          title: '❌ Error',
          text: 'Hubo un problema al enviar el mensaje. Inténtalo de nuevo.',
          icon: 'error',
          confirmButtonText: 'Vale',
          background: '#1a1a1a',
          color: '#fff',
        });
      });
  };

  return (
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
  );
};

export default ContactForm;
