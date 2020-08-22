const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'SendGrid',
    auth: {
        user: process.env.SGUSER,
        pass: process.env.SGPASSWORD
    }
})

exports.sendEmail = (email, name, msg, password) => {
    return transporter.sendMail({
        from: '"Qwilt" <contact@qwilt.com>',
        to: email,
        subject: 'Thank you for your email',
        html: `<h1>Hello ${name}</h1>
      <p>
      Test
      </p>
      `

    })
}