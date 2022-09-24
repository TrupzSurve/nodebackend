const express = require("express")
const {getAdmin} = require("../controller/admin_controller")
const {Adminlogin} = require("../controller/adminLogin_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     admin:
 *       type: object
 *       required:
 *         - Email
 *         - Password
 *       properties:
 *         Email:
 *           type: string
 *           description: admin@gmail.com
 *         Password:
 *           type: string
 *           description: password
 *       example:
 *         Email: admin@gmail.com
 *         Password: 12345
 *        
 *
 */

/**
 * @swagger
 * /api/v1/admin/getAdmin:
 *   get:
 *     summary: get all admin
 *     tags: [admin]
 *     responses:
 *       200:
 *         description: get All admin
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/admin'
 */
router.route("/getAdmin").get(getAdmin)
/**
 * @swagger
 * /api/v1/admin/Adminlogin:
 *   post:
 *     summary: admin login
 *     tags: [admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/admin'
 *     responses:
 *       200:
 *         description: admin login successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/admin'
 *       500:
 *         description: Some server error
 */
 router.route("/Adminlogin").post(Adminlogin)

module.exports = router

