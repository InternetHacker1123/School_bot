const telegraf = require('telegraf')

const  {
    MENU_MESSAGE,
    REWIEV_BTN,
    REWIEV_CB,
    CONTACTS_BTN,
    CONTACTS_CB,
    SIGNUP_BTN,
    SIGNUP_CB,
    CURSES_BTN,
    CURSES_CB
} = require('../utils/c')

class NavigationAct {
    async menu(ctx) {
        await ctx.answerCbQuery()
        return ctx.editMessageText(MENU_MESSAGE, {
            reply_markup: {
                inline_keyboard: [
                    [{text: CONTACTS_BTN, callback_data: CONTACTS_CB}],
                    [{text: CURSES_BTN, callback_data: CURSES_CB}],
                    [{text: SIGNUP_BTN, callback_data: SIGNUP_CB}],
                    [{text: REWIEV_BTN, callback_data: REWIEV_CB}]
                ]
            }
        })
    }

    async back(ctx) {
        await ctx.answerCbQuery()
        return ctx.editMessageText(MENU_MESSAGE, {
            reply_markup: {
                inline_keyboard: [
                    [{text: CONTACTS_BTN, callback_data: CONTACTS_CB}],
                    [{text: CURSES_BTN, callback_data: CURSES_CB}],
                    [{text: SIGNUP_BTN, callback_data: SIGNUP_CB}],
                    [{text: REWIEV_BTN, callback_data: REWIEV_CB}]
                ]
            }
        })
    }

}

module.exports = new NavigationAct()