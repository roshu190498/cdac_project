const db = require('./db')
const utils =require('./utils')
const express = require('express')


const router = express.Router()



router.post('/login',(request,response)=> {
    const {emailId,password} = request.body
    const connection = db.connect()
    const statement = `select * from user where emailId = '${emailId}' and password = '${password}'`

    connection.query(statement,(error, users) => {
        connection.end()

        if(users.length == 0)
        {
            response.send(utils.createResult('user does not exits'))
        }
        else
        {
            const user = users[0]
            const info = {
                userName: user['userName'],
                emailId: user['emailId'],
                userRole : user[ 'userRole']
            }
            response.send(utils.createResult(null,info))
        }
        
    })
})
