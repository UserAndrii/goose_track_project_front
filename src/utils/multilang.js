import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
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
            namehold: 'Enter your name',
            emailhold: 'Enter email',
            passhold: 'Enter password',
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
          feedback: {
            feedbackbtn: 'Feedback',
            err1: 'Feedback must be a little bit smaller',
            err2: 'All fields required',
            err3: 'Soory, delete error',
            succ1: 'Review edited',
            succ2: 'Thank you for review',
            succ3: 'Review deleted succesfully',
            rating: 'Rating',
            review: 'Review',
            reviewhold: 'Enter Text',
            edit: 'Edit',
            delete: 'Delete',
            save: 'Зберегти',
            cancel: 'Cancel',
          },
          addFeedbackBtn: {
            feedback: 'Feedback',
            err1: 'Your review should be less than 180 characters.',
            err2: 'Error editing review: the Rating and Review fields must be filled',
            err3: 'Error deleting review: try again please',
            succ1: 'You have successfully edited your comment!',
            succ2: 'Thank you for your feedback! It will be published soon.',
            succ3: "Your review has been deleted. We hope we didn't upset you?",
            rating: 'Rating',
            review: 'Review:',
          },
          userForm: {
            user: 'User',
            name: 'User Name',
            namehold: 'Add a username',
            birth: 'Birthday',
            email: 'Email',
            verify: 'Your email has been successfully verified.',
            notverify: 'Your email has not been verified.',
            verifybtn: 'Verify?',
            phone: 'Phone',
            skype: 'Skype',
            birthhold: 'Add a birthday',
            emailhold: 'Add an email',
            phonehold: 'Add a phone number',
            skypehold: 'Add a skype number',
            update: 'Update password',
            save: 'Save changes',
          },
          header: {
            letgo: 'Let go',
            resttext: ' of the past and focus on the present!',
            profile: 'User Profile',
            calendar: 'Calendar',
            stat: 'Statistics',
          },
          addtask: {
            addtaskbtn: 'Add task',
            err1: 'Please fill in all fields',
            err2: 'Start time cannot be after end time',
            err3: 'Error creating/editing task',
            err4: 'Something went wrong...',
            succ1: 'Task edited:',
            succ2: 'New task created:',
            succ3: 'Task deleted',
            title: 'Title',
            titlehold: 'Enter text',
            start: 'Start',
            end: 'End',
            low: 'Low',
            medium: 'Medium',
            high: 'High',
            edit: 'Edit',
            add: 'Add',
            cancel: 'Cancel',
          },
          statChart: {
            todo: 'To Do',
            inprogress: 'In Progress',
            done: 'Done',
            tasks: 'Tasks',
            day: 'By Day',
            month: 'By Month',
          },
          recovery: {
            pass: 'Password recovery',
            err1: 'Invalid email',
            err2: 'This field is required',
            err3: 'Password must be at least 6 characters',
            err4: 'Your new passwords do not match',
            email: 'Email',
            emailhold: 'Enter email',
            send: 'Send',
            old: 'Old password',
            new: 'New password',
            repeat: 'Repeat the new password',
            submit: 'Submit',
            passhold: 'Add password',
            update: 'Update password',
          },
          calendar: {
            tasks: 'Tasks:',
            month: 'Month',
            day: 'Day',
            1: 'Mon',
            2: 'Tue',
            3: 'Wed',
            4: 'Thu',
            5: 'Fri',
            6: 'Sat',
            7: 'Sun',
            m1: 'M',
            m2: 'T',
            m3: 'W',
            m4: 'T',
            m5: 'F',
            m6: 'S',
            m7: 'S',
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
            namehold: 'Як Вас звати? Хотілось би познайомитись',
            emailhold: 'А пошта Ваша електронна?',
            passhold: 'Ось тут незрозумілий нікому набір символів',
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
          feedback: {
            feedbackbtn: 'Ваш відгук',
            err1: 'Чи міг би ваш відгук бути трішечки коротшим?',
            err2: 'Заповніть усі поля, будьласка.',
            err3: 'нажаль, не вдалось видалити Ваш відгук',
            succ1: 'Відгук відредаговано, спасибі.',
            succ2: 'Спасибі за Ваш відгук',
            succ3: 'Ваш відгук було видалено, залиште новий, кращий.',
            rating: 'Рейтинг',
            review: 'Що Ви думаєте?',
            reviewhold: 'Пишіть що бажаєте, папір усе витримає',
            edit: 'Редагувати',
            delete: 'Знищити',
            save: 'Зберегти',
            cancel: 'Я передумав',
          },
          userForm: {
            user: 'Вітаємо Вас!',
            name: "Ваше ім'я",
            namehold: 'Як Вас зовуть?',
            birth: 'День Вашого народження',
            email: 'Ваша пошта електронна',
            verify: 'Ваша пошта верифікована.',
            notverify: 'Ваша пошта, не верифікована',
            verifybtn: 'Верифікувати?',
            phone: 'Ваш телефон',
            skype: 'Ваш Skype',
            birthhold: 'Коли Ви народилися?',
            emailhold: 'Додайте Вашу пошту',
            phonehold: 'Додайте Ваш телефон',
            skypehold: 'Додайте Ваш Skype',
            update: 'Оновити Ваш пароль',
            save: 'Зберегти зміни',
          },
          header: {
            letgo: 'Виривайся',
            resttext: ' із минулого та сфокусуйся на сьогоденні!',
            profile: 'Обліковий запис',
            calendar: 'Ваш календар',
            stat: 'Ваша статистика',
          },
          addtask: {
            addtaskbtn: 'Додати задачу',
            err1: 'Заповніть усі поля, будьласка',
            err2: 'Початковий час повинен бути меншим за кінцевий',
            err3: 'Помилка створення/редагування задачі',
            err4: 'Щось пішло не так як потрібно',
            succ1: 'Відредаговано',
            succ2: 'Створено',
            succ3: 'Видалено',
            title: 'Опис:',
            titlehold: 'Чого б Вам хотілося?',
            start: 'Початок',
            end: 'Кінець',
            low: 'Не важлива',
            medium: 'Така собі',
            high: 'Важлива',
            edit: 'Редагувати',
            add: 'Додати',
            cancel: 'Скасувати',
          },
          statChart: {
            todo: 'Тре рішати',
            inprogress: 'Рішається',
            done: 'Вирішено',
            tasks: 'Завдання',
            day: 'Сьогоднішні',
            month: 'На місяць',
          },
          recovery: {
            pass: 'Відновлення паролю',
            err1: 'Десь тут помилка',
            err2: "Це поле є обов'язковим",
            err3: 'Введіть щонайменше 6 символів',
            err4: 'Нажаль новий пароль не підходить',
            email: 'Пошта',
            emailhold: 'Введіть пошту',
            send: 'Надіслати',
            old: 'Старий пароль',
            new: 'Новий пароль',
            repeat: 'Новий пароль ще раз будьласка',
            submit: 'Підтвердити',
            passhold: 'який у Вас пароль? цікаво знати )',
            update: 'Оновити пароль',
          },
          calendar: {
            tasks: 'Таски:',
            month: 'Місяць',
            day: 'День',
            1: 'ПН',
            2: 'ВТ',
            3: 'СР',
            4: 'ЧТ',
            5: 'ПТ',
            6: 'СБ',
            7: 'НД',
            m1: 'П',
            m2: 'В',
            m3: 'С',
            m4: 'Ч',
            m5: 'П',
            m6: 'С',
            m7: 'Н',
          },
        },
      },
    },
  });

export default i18next;
