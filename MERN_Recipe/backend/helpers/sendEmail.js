const nodemailer = require('nodemailer')
const ejs = require('ejs')

let sendEmail = async ({view,data,from,to,subject}) => {
    try {
        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "2760f469a78f6b",
                pass: "556a3ce2029832"
            }
        });
        
        let dataString = await ejs.renderFile('./views/'+ view +'.ejs', data)
        const info = await transport.sendMail({
            from,
            to,
            subject, 
            html: dataString, 
        });
        console.log("Message sent: %s", info.messageId);
    } catch(e) {
        throw new Error(e)
    }
}

module.exports = sendEmail