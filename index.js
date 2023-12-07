const telegraf  = require('telegraf')
const StartAct = require('./Acts/StartAct')
const NavigationAct = require('./Acts/NavigationAct')
const ReviewAct = require('./Acts/ReviewAct')
const CursesAct = require('./Acts/CursesAct')
const ContactsAct = require('./Acts/ContactsAct')
const {
    MENU_CB, 
    BOT_TOKEN,
    BACK_CB,
    REWIEV_CB,
    CURSES_CB,
    CONTACTS_CB
} = require('./utils/c')



const bot = new telegraf.Telegraf(BOT_TOKEN)

bot.start(StartAct.startKey)



bot.action(MENU_CB, NavigationAct.menu)
bot.action(BACK_CB, NavigationAct.back)
bot.action(REWIEV_CB, ReviewAct.review)
bot.action(CURSES_CB, CursesAct.curses)
bot.action(CONTACTS_CB, ContactsAct.contacts)


bot.hears(/Отзыв:/, ReviewAct.sendReview)



bot.launch()