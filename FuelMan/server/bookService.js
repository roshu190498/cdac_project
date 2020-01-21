const db = require('./db')
const utils =require('./utils')
const express = require('express')

const router = express.Router()

router.get('/',(request,response)=> {

    const connection = db.connect()
    const statment = `SELECT * FROM BookServices`

    connection.query(statment,(error,data) => {
        connection.end()
        const bookServices = []

        for(let i = 0 ; i< data.length; i++)
        {
            const bookService = data[i]

            bookServices.push({
               userId : bookService['userId'],
                location : bookService['location'],
                service : bookService['service'],
                mobileNo : bookService['mobileNo'],
                userEmailId : bookService['userEmailId'],
                vehicleNo : bookService['vehicleNo'],
                msg : bookService['msg'],
                vehicleType : bookService['vehicleType'],
                choice : bookService['choice'],
                vendorId : bookService['vendorId']     
            })
        }
        response.send(utils.createResult(error,bookServices))
    })
})


router.post('/',(request,reponse) => {
    const {userId,location,service,mobileNo,userEmailId,vehicleNo,msg,vehicleType,choice,vendorId} = request.body
    const connection = db.connect()

    const statement = `insert into BookServices(userId,location,service,mobileNo,userEmailId,vehicleNo,msg,vehicleType,choice,vendorId) values (${userId},'${location}','${service}','${mobileNo}','${userEmailId}','${vehicleNo}','${msg}','${vehicleType}','${choice}',${vendorId})`
    connection.query(statement,(error,data) => {
        connection.end()
        reponse.send(utils.createResult(error,data))
    })
        
    })


module.exports = router





 // for (let index = 0; index < data.length; index++) {
            // const bookService = data[index]
            // bookServices.push({
                // // userId = bookService['userId'],
                // location = bookService['location'],
                // service = bookService['service'],
                // mobileNo = bookService['mobileNo'],
                // userEmailId = bookService['userEmailId'],
                // vehicleNo = bookService['vehicleNo'],
                // msg = bookService['msg'],
                // vehicleType = bookService['vehicleType'],
                // choice = bookService['choice'],
                // vendorId = bookService['vendorId']     
            // })
        // }