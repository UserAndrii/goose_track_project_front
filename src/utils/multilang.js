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
            logout: 'Log out',
          },
          reviewsSlider: {
            header: 'Reviews',
          },
          footer: {
            rights: 'All Rights Reserved',
            develop: 'Developed by',
            avengers: 'AVENGERS',
          },
          team: {
            o: 'O',
            urteam: 'ur TEAM',
            back: 'Back',
            hadar: 'Andriy Hadar',
            vaynagiy: 'Oleksandr Vainahii',
            till: 'Anna Til',
            ketsko: 'Andriy Ketsko',
            hanzel: 'Andriy Hanzel',
            siracenko: 'Serghei Siracenko',
            klymenko: 'Yurii Klymenko',
            kagadiy: 'Yurii Kagadiy',
            karpinska: 'Galyna Karpinska',
            deren: 'Oleksandr Deren',
            kostenko: 'Volodymyr Kostenko',
            daskova: 'Ivetta Dashkova',
            teamlead: 'Team lead',
            scrum: 'Scrum master',
            front: 'Front-end',
            back1: 'Back-end',
            dev: 'Developer',
            mentor: 'Mentor',
          },
          inout: {
            name: 'Name',
            login: 'Log In',
            email: 'Email',
            pass: 'Password',
            signup: 'Sign Up',
            have: 'Already have an account?',
            donthave: "Don't have an account?",
            forgot: 'Forgot password?',
          },
          notfound: {
            text: 'We’re sorry, the page you requested could not be found. Please go back to the homepage.',
            back: 'Back to home',
          },
          userNav: {
            panel: 'User Panel',
            acc: 'My account',
            calendar: 'Calendar',
            stat: 'Statistics',
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
            logout: 'Вийти',
          },
          reviewsSlider: {
            header: 'Відгуки',
          },
          footer: {
            rights: 'Усі права захищено',
            develop: 'Розроблено',
            avengers: 'МЕСНИКАМИ',
          },
          team: {
            o: 'Н',
            urteam: 'аша КОМАНДА',
            back: 'Повернутись',
            hadar: 'Aндрій Гадар',
            vaynagiy: 'Олександр Вайнагій',
            till: 'Анна Тілл',
            ketsko: 'Андрій Кецко',
            hanzel: 'Андрій Ганзел',
            siracenko: 'Сергій Сіраченко',
            klymenko: 'Юрій Клименко',
            kagadiy: 'Юрій Кагадій',
            karpinska: 'Галина Карпінська',
            deren: 'Олександр Дерен',
            kostenko: 'Володимир Костенко',
            daskova: 'Іветта Дашкова',
            teamlead: 'Наш лідер',
            scrum: 'Наш скрам',
            front: 'на фронті',
            back1: 'на беку',
            dev: 'Розробник',
            mentor: 'Наш ментор',
          },
          inout: {
            name: "Ваше ім'я",
            login: 'Увійти',
            email: 'Ваша пошта',
            pass: 'Ваш пароль',
            signup: 'Зареєструватись',
            have: 'Зареєстровані?',
            donthave: 'Не зареєстровані?',
            forgot: 'Нагадати Вам пароль?',
          },
          notfound: {
            text: 'На жаль, сторінку, яку ви запитуєте, не вдалося знайти. Будь ласка, поверніться на домашню сторінку.',
            back: 'Поверніться, прошу Вас',
          },
          userNav: {
            panel: 'Ваші дані',
            acc: 'Обліковий запис',
            calendar: 'Ваш календар',
            stat: 'Ваша статистика',
          },
        },
      },
    },
  });

export default i18next;
