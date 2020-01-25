const db = require('./db')
const utils =require('./utils')
const express = require('express')
const multer = require('multer')
const upload = multer({ dest: './vendorImages/'})


const router = express.Router()


router.post('/request/:id',(request,response) => {
    const {choice} = request.body
    const {id} = request.params

    console.log(id)
    console.log(choice)

    const connection = db.connect()
    const statement = `update BookServices set choice = '${choice}' where id = ${id};`
    console.log(statement)
    connection.query(statement,(error,data) =>{
            connection.end()
            response.send(utils.createResult(error,data))

    })
})

router.get('/getVendorName',(request,response) => {
    const connection = db.connect()
    const statement = `select * from vendors`

    connection.query(statement,(error,data) => {
        connection.end()
        const vendors = []
        for(let i=0; i<data.length;i++){
            const vendor = data[i]
            vendors.push({
                vendorId : vendor['vendorId'],
                vendorName : vendor['vendorName'],
                vendorMobileNo : vendor['vendorMobileNo'],
                vendorEmailId : vendor['vendorEmailId']       
            })
        }
        console.log(vendors)
        response.send(utils.createResult(error,vendors))
    })
})

router.get('/getServicesName',(request,response) => {
    const connection = db.connect()
    const statement = `select * from services`

    connection.query(statement,(error,data) => {
        connection.end()
        const services = []
        for(let i=0; i<data.length;i++){
            const service = data[i]
            services.push({
                serviceId : service['serviceId'],
                serviceName : service['serviceName'],
                cost : service['cost']
            })
        }
        response.send(utils.createResult(error,services))
    })
})


// router.post('/register',(request,reponse) => {

//     const {vendorName,vendorLocation,vendorAddress,vendorImages,vendorRatings,vendorLicNo,vendorEmailId,vendorMobileNo} = request.body
//     const connection = db.connect()
//     const userRole = 'vendor'
//     const statement1 = `select * from user where emailId = '${vendorEmailId}'`
//     connection.query(statement1,(error,users) => {

//         if(users.length == 0)
//         {
//             // const statement = `insert into user(userName, emailId, password, mobileNo, userRole) values ('${vendorName}','${vendorEmailId}','${password}','${vendorMobileNo}','${userRole}')`
//             const statement2 = `insert into vendors(vendorName, vendorLocation,vendorAddress,vendorImages,vendorRatings,vendorLicNo,vendorEmailId,vendorMobileNo) values ('${vendorName}', '${vendorLocation}','${vendorAddress}','${vendorImages}',${vendorRatings},'${vendorLicNo}','${vendorEmailId}','${vendorMobileNo}')` 
//             // connection.query(statement,(error,data) => {
//             //     connection.end()
//             //     reponse.send(utils.createResult(error,data))
//             // })
//             // connection = db.connect()
//             connection.query(statement2,(error,data) => {
//                 connection.end()
//                 response.send(utils.createResult(error,data))
//             })
//         }
//         else{
//             connection.end()
//             reponse.send(utils.createResult('email exists. Please use another email.'))
//         }
        
//     })
// })

router.get('/requestList',(request,response)=> {
 
    const connection = db.connect()
    const statment = `select * from BookServices`
    connection.query(statment,(error,data) => {
        connection.end()
        console.log(data)
        const bookServices = []
        
        for(let index = 0 ;index<data.length; index++){
                    const bookService = data[index]
                    bookServices.push({
                        id : bookService['id'],
                        userId : bookService['userId'],
                        vendorId : bookService['vendorId'],
                        location : bookService['location'],
                        service : bookService['service'],
                        mobileNo : bookService['mobileNo'],
                        userEmailId : bookService['userEmailId'],
                        vehicleNo : bookService['vehicleNo'],
                        choice : bookService['choice'],
                        cost : bookService['cost'],
                        msg : bookService['msg'],
                        vehicleType : bookService['vehicleType']
                    })
        }

        console.log(bookServices)
                    response.send(utils.createResult(error,bookServices))

    })
})



router.get('/request/:vendorId',(request,response)=> {
    const {vendorId} = request.params
    const connection = db.connect()
    const statment = `select * from BookServices where vendorId = ${vendorId}`
    connection.query(statment,(error,data) => {
        connection.end()
        console.log(data)
        const bookServices = []
        
        for(let index = 0 ;index<data.length; index++){
                    const bookService = data[index]
                    bookServices.push({
                        id : bookService['id'],
                        userId : bookService['userId'],
                        vendorId : bookService['vendorId'],
                        location : bookService['location'],
                        service : bookService['service'],
                        mobileNo : bookService['mobileNo'],
                        userEmailId : bookService['userEmailId'],
                        vehicleNo : bookService['vehicleNo'],
                        cost : bookService['cost'],
                        msg : bookService['msg'],
                        vehicleType : bookService['vehicleType']
                    })
        }

        console.log(bookServices)
                    response.send(utils.createResult(error,bookServices))

    })
})

router.post('/getVendorName',(request,response) => {

    const {userName} = request.body
    console.log(userName)
   const connection = db.connect()
   const vendors = []
   const statement = `select * from vendors where vendorName = '${userName}'`

   console.log(statement)

   connection.query(statement,(error,data) => {
       connection.end()
       console.log(data)

       for(let index= 0 ; index<data.length; index++)
       {
           const vendor = data[index]
           vendors.push({
            vendorId: vendor['vendorId'],
            vendorName: vendor['vendorName'],
            vendorLocation: vendor['vendorLocation'],
            vendorAddress:vendor['vendorAddress'],
            vendorImages: vendor['vendorImages'],
            vendorRatings: vendor['vendorRatings'],
            vendorEmailId: vendor['vendorEmailId'],
            vendorMobileNo: vendor['vendorMobileNo']
        })
       }
       response.send(utils.createResult(error,data))
   })
})

// router.get('/request',(request,response) => {
//     const connection = db.connect()
    
//     const statement = `select * from BookServices`
//     connection.query(statement,(error,data) => {
//         connection.end()
//         console.log(data)
//         const bookServices = []
//         let bookService = []
//         for(let index = 0 ;index<data.length; index++){}
//             bookService = data[index]
//             bookServices.push({
//                 id : bookService['id'],
//                 userId : bookService['userId'],
//                 vendorId : bookService['vendorId'],
//                 location : bookService['location'],
//                 service : bookService['service'],
//                 mobileNo : bookService['mobileNo'],
//                 userEmailId : bookService['userEmailId'],
//                 vehicleNo : bookService['vehicleNo'],
//                 msg : bookService['msg'],
//                 vehicleType : bookService['vehicleType']
//             })
//             console.log(bookServices)
//             response.send(utils.createResult(error,bookServices))
//         }
//     })
// })
router.get('/',(request,response)=> {
     
    const connection = db.connect()
    const statment = `select * from vendors`
    connection.query(statment,(error,data) => {
        connection.end()
        console.log(data)
        const users = []
        for (let index = 0; index < data.length; index++) {
            const user = data[index]
            users.push({
                vendorId:user['vendorId'],
                vendorName: user['vendorName'],
                vendorLocation: user['vendorLocation'],
                vendorAddress: user['vendorAddress'],
                vendorImages: user['vendorImages'],
                vendorRatings: user['vendorRatings'],
                vendorLicNo: user['vendorLicNo'],
                vendorEmailId: user['vendorEmailId'],
                vendorMobileNo: user['vendorMobileNo'],
            })
        }
        console.log(users)
            response.send(utils.createResult(error,users))
    })
})

// router.post('/register',(request,reponse) => {

//     const {vendorName,vendorLocation,vendorAddress,vendorImages,vendorRatings,vendorLicNo,vendorEmailId,vendorMobileNo} = request.body
//     const connection = db.connect()
//     const userRole = 'vendor'
//     const statement1 = `select * from user where emailId = '${vendorEmailId}'`
//     connection.query(statement1,(error,users) => {

//         if(users.length == 0)
//         {
//             // const statement = `insert into user(userName, emailId, password, mobileNo, userRole) values ('${vendorName}','${vendorEmailId}','${password}','${vendorMobileNo}','${userRole}')`
//             const statement2 = `insert into vendors(vendorName, vendorLocation,vendorAddress,vendorImages,vendorRatings,vendorLicNo,vendorEmailId,vendorMobileNo) values ('${vendorName}', '${vendorLocation}','${vendorAddress}','${vendorImages}',${vendorRatings},'${vendorLicNo}','${vendorEmailId}','${vendorMobileNo}')` 
//             // connection.query(statement,(error,data) => {
//             //     connection.end()
//             //     reponse.send(utils.createResult(error,data))
//             // })
//             // connection = db.connect()
//             connection.query(statement2,(error,data) => {
//                 connection.end()
//                 response.send(utils.createResult(error,data))
//             })
//         }
//         else{
//             connection.end()
//             reponse.send(utils.createResult('email exists. Please use another email.'))
//         }
        
//     })
// })

router.delete('/:vendorId',(request, response) => {
    const  {vendorId}  = request.params
    console.log(vendorId)
    const connection = db.connect()
    const statement = `delete from vendors where vendorId = ${vendorId}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.put('/:vendorId',upload.single('vendorImages'),(request,reponse) => {
   
    const {vendorName,vendorLocation,vendorAddress,vendorImages,vendorRatings,vendorLicNo,vendorEmailId,vendorMobileNo} = request.body
    const {vendorId} = request.params
    const connection = db.connect()
    vendorImages = request.file.filename

    const statement = `update vendors set vendorName = '${vendorName}', vendorLocation = '${vendorLocation}',vendorAddress = '${vendorAddress}',vendorImages = '${vendorImages}',vendorRatings = ${vendorRatings},vendorLicNo = '${vendorLicNo}',vendorEmailId = '${vendorEmailId}',vendorMobileNo = '${vendorMobileNo}' where vendorId = ${vendorId}`

    connection.query(statement,[2,1],(error,users)=> {
        if(users.length != 0)
        {
            connection.end()
            response.send(utils.createResult(error,data))
        }
        else 
        {
            console.log('error while updating data')
        }
        
    })
})

router.post('/register',upload.single('vendorImages'),(request,reponse) => {
    const {vendorName,vendorLocation,vendorAddress,vendorRatings,vendorLicNo,vendorEmailId,vendorMobileNo,password} = request.body
    const connection = db.connect()
    const vendorImages = request.file.filename
    const userRole = 'vendor'
    const statement1 = `select * from user where emailId = '${vendorEmailId}'`
    connection.query(statement1,(error,users) => {

        if(users.length == 0)
        {
            const statement = `insert into user(userName, emailId, password, mobileNo, userRole) values ('${vendorName}','${vendorEmailId}','${password}','${vendorMobileNo}','${userRole}');insert into vendors(vendorName, vendorLocation,vendorAddress,vendorImages,vendorRatings,vendorLicNo,vendorEmailId,vendorMobileNo) values ('${vendorName}', '${vendorLocation}','${vendorAddress}','${vendorImages}',${vendorRatings},'${vendorLicNo}','${vendorEmailId}','${vendorMobileNo}');`
            
            connection.query(statement,[2,1],(error,data) => {
                connection.end()
                reponse.send(utils.createResult(error,data))
            })
  
        }
        else{
            connection.end()
            reponse.send(utils.createResult('email exists. Please use another email.'))
        }
        
    })
})

module.exports = router