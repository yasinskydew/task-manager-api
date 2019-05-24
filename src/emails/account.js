const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDKEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to:email,
        from: 'yasinsky2015@gmail.com',
        subject: 'Thasks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how get along with the app`
    })
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to:email,
        from:'yasinsky2015@gmail.com',
        subject: 'Removing account',
        text: `Goodbye ${name}, please get them know, what is wrong`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}