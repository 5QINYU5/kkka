const express = require('express')
const db = require('../db/db.js')
const router = express.Router()
// 查询username所有id,用户,密码
// http://127.0.0.1:3000/api/reguser?username=username
router.get('/reguser', (req, res) => {
	const username = req.query.username
	const sqlStr = 'select * from user where username= ?'
	db.query(sqlStr, username, (err, results) => {
		if (err) return res.json({
			err_code: 1,
			message: '获取数据失败',
			affectedRows: 0
		})
		if (results.length !== 1) return res.json({
			err_code: 1,
			message: '数据不存在',
			affectedRows: 0
		})
		return res.json({
			err_code: 0,
			message: results[0],
			affectedRows: 0
		})
	})
})
// 添加数据api接口
router.get('/add', (req, res) => {
	const username = req.query.username
	const password = req.query.password
	const insert = 'insert into user set ?'
	db.query(insert, {
		username: username,
		password: password
	}, (err, results) => {
		if (err) return res.json({
			err_code: 1,
			message: '添加数据失败',
			affectedRows: 0
		})
		if (results.affectedRows !== 1) return res.json({
			err_code: 1,
			message: '添加失败',
			affectedRows: 0
		})
		return res.json({
			err_code: 0,
			message: results[0],
			affectedRows: results.affectedRows
		})
	})
})
// 删除数据api接口
router.get('/del', (req, res) => {
	const username = req.query.username
	const del = 'DELETE FROM user WHERE username = ?'
	db.query(del, username, (err, results) => {
		if (err) return res.json({
			err_code: 1,
			message: '删除数据失败',
			affectedRows: 0
		})
		if (results.affectedRows !== 1) return res.json({
			err_code: 1,
			message: '删除失败',
			affectedRows: 0
		})
		return res.json({
			err_code: 0,
			message: '删除数据成功',
			affectedRows: results.affectedRows
		})
	})
})
// 修改数据api接口
router.get('/alter', (req, res) => {
	const alter = `UPDATE user SET username = ?,password = ? WHERE id = ?`
	const username=req.query.username
	const password=req.query.password
	const id=req.query.id
	var userModSql_Params = [username,password,id];
	db.query(alter,userModSql_Params , (err, results) => {
		if (err) return res.json({
			err_code: 1,
			message: '修改数据失败',
			affectedRows: 0
		})
		if (results.affectedRows !== 1) return res.json({
			err_code: 1,
			message: '修改失败',
			affectedRows: 0
		})
		return res.json({
			err_code: 0,
			message: '修改数据成功',
			affectedRows: results.affectedRows
		})
	})
})

// 查看数据api接口
router.get('/check', (req, res) => {
	const check = 'select * from user'
	db.query(check, (err, results) => {
		if (err) {
			return res.json(error.message);
		}
		return res.json(results);
	})
})


router.get('/img',(req,res)=>{
	const img='select * from img'
	db.query(img, (err, results) => {
		if (err) {
			return res.json(error.message);
		}
		return res.json(results);
	})
})

router.get('/login', (req, res) => {
	res.send('login ok')
})

module.exports = router