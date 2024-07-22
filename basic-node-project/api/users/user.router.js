const { createUser, getUsers, getUsersByUserId, updateUser, deleteUser, getExcelOfRecords } = require('./user.controller')
const router  = require("express").Router()
const { checkToken } = require("../../auth_validation/token_validation")

router.post("/", checkToken, createUser)
router.get("/", checkToken, getUsers)
router.get("/:id", checkToken, getUsersByUserId)
router.patch("/", checkToken, updateUser)
router.delete("/", checkToken, deleteUser)
router.get("/download/excel", getExcelOfRecords)

module.exports = router