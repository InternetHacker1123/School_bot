class Text {
    BOT_TOKEN  = '6164447070:AAHJyUEsQv7mrno4K2FTnkM5EWfW9jXrcdU'

    // StartAct
    START_MESSAGE = 'Добро пожаловать, дорогой друг!\nЭтот бот поможет тебе разобраться в нашей онлайн-школе!\n\n💬 Здесь ты можешь узнать контакты преподавателей.\n📖 Посмотреть какие программы есть в нашей школе.\n🧑🏻‍🎓 Записаться на курсы обучения.\n📝 Оставить отзыв о нашей школе.'

    // NavigationAct
    MENU_MESSAGE = 'ГЛАВНОЕ МЕНЮ\nКликай по кнопкам и изучай😄'
    BACK_BTN = 'Назад'
    BACK_CB = 'back'

    // RewievAct
    REVIEW_MESSAGE = 'Напиши свой отзыв!\nОтзыв должен выглядеть так: "Отзыв: ..."'


    // CursesAct
    CURSES_MESSAGE = 'Какие курсы мы предлагаем:\n▪️Математика профиль\n▪️Курсы GO\n▪️Основы Python\n▪️Курсы веб-дизайна'

    // buttons
    MENU_BTN = 'Меню'
    MENU_CB = 'menu'

    REWIEV_BTN = 'Оставить отзыв'
    REWIEV_CB = 'review'

    CONTACTS_BTN = 'Контакты'
    CONTACTS_CB = 'contacts'

    CURSES_BTN = 'Курсы'
    CURSES_CB = 'curses'

    SIGNUP_BTN = 'Записаться на курс'
    SIGNUP_CB = 'signup'

    // channels
    SUB_CHANNEL = ' -1001868401281'
    REVIEW_CHANNEL = '-1001939079005'

    // Errors
    NO_REVIEW_ERROR = 'Отзывы доступны только людям, купившим хотя бы один курс'
    NO_CONTACTS_ERROR = 'Контакты доступны только людям,\nкупившим хотя бы один курс'



}

module.exports = new Text()

