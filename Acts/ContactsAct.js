const {
    BACK_BTN,
    BACK_CB,
    NO_CONTACTS_ERROR
} = require('../utils/c')

class Contacts {

    async contacts(ctx) {
        await ctx.answerCbQuery()
        return ctx.editMessageText(NO_CONTACTS_ERROR, {
            reply_markup: {
                inline_keyboard: [
                    [{text: BACK_BTN, callback_data: BACK_CB}],

                ]
            }
        })
    }

}

module.exports = new Contacts()