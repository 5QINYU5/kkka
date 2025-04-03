const mysql=require('mysql')
const db=mysql.createPool({
	host:'127.0.0.1',
	user:'数据库账号',
	password:'数据库密码',
	database:'api'
})
module.exports=db
