import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          description: {
            calendar: 'CALENDAR',
            view: 'VIEW',
            calendarText:
              'GooseTracks Calendar view provides a comprehensive overview of your schedule, displaying all your tasks, events, and appointmentsin a visually appealing and intuitive layout.',
            sidebar: 'SIDEBAR',
            sidebarText:
              'GooseTrack offers easy access to your account settings, calendar, and filters. The "My Account" section allows you to manage your profile information and preferences, while the calendar provides a quick and convenient way to view your upcoming events and tasks.',
            allIn: 'ALL IN',
            one: 'ONE',
            allInText:
              'GooseTrack is an all-in-one productivity tool that helps you stay on top of your tasks, events, and deadlines. Say goodbye to scattered to-do lists and hello to streamlined productivity with GooseTrack.',
          },
          authSection: {
            g: 'G',
            oo: 'oo',
            setrack: 'seTrack',
            login: 'Log in',
            signup: 'Sign up',
          },
          reviewsSlider: {
            header: 'Reviews',
          },
          footer: {
            rights: 'All Rights Reserved',
            develop: 'Developed by',
            avengers: 'AVENGERS',
          },
        },
      },
      ua: {
        translation: {
          description: {
            calendar: 'КАЛЕНДАРНИЙ',
            view: 'ВИГЛЯД',
            calendarText:
              'Подання календаря Гусятниця ;) надає вичерпний огляд вашого розкладу, відображаючи всі ваші завдання, події та зустрічі у візуально привабливому та інтуїтивно зрозумілому вигляді.',
            sidebar: 'МЕНЮ',
            sidebarText:
              'Гусятниця ;) пропонує легкий доступ до налаштувань вашого облікового запису, календаря, і фільтри. Розділ «Мій профіль» дозволяє керувати відомостями профілю та вподобаннями, а календар надає швидкий і зручний спосіб перегляду майбутніх подій і завдань.',
            allIn: 'УСЕ У',
            one: 'ОДНОМУ',
            allInText:
              'Гусятниця ;) — це універсальний інструмент підвищення продуктивності, який допоможе вам залишатися на пульсі ваших завдань, подій і термінів. Попрощайтеся із списками справ на папірцях і вітайте збільшену продуктивність з Гусятницею ;).',
          },
          authSection: {
            g: 'Г',
            oo: 'уу',
            setrack: 'сятниця ;)',
            login: 'Вхід',
            signup: 'Реєстрація',
          },
          reviewsSlider: {
            header: 'Відгуки',
          },
          footer: {
            rights: 'Усі права захищено',
            develop: 'Розроблено',
            avengers: 'МЕСНИКАМИ',
          },
        },
      },
    },
  });

export default i18next;
