const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 465,
    secure: true,
    auth: {
        user: "frsakbr@gmail.com",
        pass: "password"
    }
})

// format untuk alis -> "alias" <emailnya@gmail.com>

// send email with transporter
transport.sendMail({
    from: "frsakbr@gmail.com", // sender address
    to: "contoh@contih.com", // list of receivers
    subject: "Submission: Chapter-9 Challenge#<faris>", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
}).then(res => {
    console.log(
        res.messageId
    )
}).catch(err => {
    console.error(err)
})

console.log('ini harusnya selesai duluan...')
