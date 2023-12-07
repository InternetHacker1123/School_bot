const {
    CURSES_MESSAGE, 
    BACK_BTN,
    BACK_CB
} = require('../utils/c')

class CursesAct {
    async curses(ctx) {
        await ctx.answerCbQuery()
        return ctx.editMessageText(CURSES_MESSAGE, {
            reply_markup: {
                inline_keyboard: [
                    [{text: BACK_BTN, callback_data: BACK_CB}]
                ]
            }
        })
    }

}

module.exports = new CursesAct()