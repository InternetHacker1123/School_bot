const {
    MENU_BTN,
    MENU_CB,
    START_MESSAGE
} = require('../utils/c')

class StartAct {
    startKey(ctx) {
        return ctx.reply(START_MESSAGE, {
            reply_markup: {
                inline_keyboard: [
                    [{text: MENU_BTN, callback_data: MENU_CB}]
                ]
            }
        })
    }

}

module.exports = new StartAct()