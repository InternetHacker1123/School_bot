const axios = require('axios')
const {
    BACK_BTN,
    BACK_CB,
    REVIEW_MESSAGE,
    NO_REVIEW_ERROR,
    BOT_TOKEN,
    REVIEW_CHANNEL

} = require('../utils/c')

class ReviewAct {

    async review(ctx) {
        await ctx.answerCbQuery()
        return ctx.editMessageText(REVIEW_MESSAGE, {
            reply_markup: {
                inline_keyboard: [
                    [{text: BACK_BTN, callback_data: BACK_CB}],

                ]
            }
        })
    }

    async sendReview(ctx) {
        const review = `${ctx.message.text}          От: @${ctx.message.from.username}`
        console.log(ctx.message)
        console.log(review)
        await axios.get(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${REVIEW_CHANNEL}&text=${review}`)
        await ctx.reply('Ваш отзыв был отправлен!')
    }

}

module.exports = new ReviewAct()