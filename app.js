const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.google.com",
    port: 465,
    secure: true,
    auth: {
        user: "user",
        pass: "password"
    },
    tls: {rejectUnauthorized: false}

})

// format untuk alis -> "alias" <emailnya@gmail.com>

// send email with transporter
transport.sendMail({
    from: '"faris akbar" <noreply@frsakbr@gmail.com>', // sender address
    to: "risusanto@outlook.com", // list of receivers
    subject: "Submission: Chapter-9 Challenge#<faris akbar>", // Subject line
    text: "Favorite Song: ada apa denganmu | link github: https://github.com/frsakbr/challenge-chp9", // plain text body
    html: "<b>Favorite Song: ada apa denganmu | link github: https://github.com/frsakbr/challenge-chp9</b>", // html body
}).then(res => {
    console.log(
        res.messageId
    )
}).catch(err => {
    console.error(err)
})

