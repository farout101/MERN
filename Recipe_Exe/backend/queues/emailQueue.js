const Queue = require("bull")
const sendEmail = require("../helpers/sendEmail")

const emailQueue = new Queue('email Queue', {
    redis : {port: 6379, host: '127.0.0.1'}
})

emailQueue.process(async (job) => {
    await sendEmail(job.data)
})

module.exports = emailQueue