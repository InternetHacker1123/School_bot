


class SignUpAct {

    async signUpReq(ctx) {
        await ctx.answerCbQuery()
        return ctx.editMessageText(NO_REVIEW_ERROR, {
            reply_markup: {
                inline_keyboard: [
                    [{text: BACK_BTN, callback_data: BACK_CB}],

                ]
            }
        })
    }


}