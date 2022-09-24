const express = require("express")
const {createleave,viewleave,updateleaveDetails,deleteleaveDetails} = require("../controller/leave_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     leave:
 *       type: object
 *       required:
 *         - leaveId
 *         - EmployeeId
 *         - leaveType
 *         - FormDate
 *         - ToDate
 *         - PostingDate
 *         - ApporveByHR
 *         - AdminStatus
 *       properties:
 *         leaveId:
 *           type: integer
 *           description: Autogenrated
 *         EmployeeId:
 *           type: string
 *           description: password
 *         leaveType:
 *           type: string
 *           description: asdf
 *         FormDate:
 *           type: string
 *           description: asdf
 *         ToDate:
 *           type: string
 *           description: asdf
 *         PostingDate:
 *           type: string
 *           description: asdf
 *         ApporveByHR:
 *           type: string
 *           description: asdf
 *         AdminStatus:
 *           type: string
 *           description: asdf
 *       example:
 *         leaveId: admin@gmail.com
 *         EmployeeId: 12345
 *         FormDate: 02-10-2022
 *         ToDate: 07-10-2022
 *         PostingDate: 10-10-2022
 *         ApporveByHR: Not-Apporved
 *         AdminStatus: Active
 *        
 *
 */

/**
 * @swagger
 * /admin/getAdmin:
 *   get:
 *     summary: get all leave
 *     tags: [leave]
 *     responses:
 *       200:
 *         description: get All leave
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/leave'
 */
router.route("/viewleave").get(viewleave)


/**
 * @swagger
 * /api/v1/createleave:
 *   post:
 *     summary: create a new leave  
 *     tags: [leave]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/leave'
 *     responses:
 *       200:
 *         description: create a leave successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/leave'
 *       500:
 *         description: Some server error
 */
 router.route("/createleave").post(createleave)
 /**
 * @swagger
 * /api/v1/updateleaveDetails:
 *   post:
 *     summary: update leave Details
 *     tags: [leave]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/leave'
 *     responses:
 *       200:
 *         description: leave update successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/leave'
 *       500:
 *         description: Some server error
 */
  router.route("/updateleaveDetails").post(updateleaveDetails)
/**
 * @swagger
 * /api/v1/deleteleaveDetails/{leaveId}:
 *   delete:
 *     summary: Delete an leave
 *     tags: [leave]
 *     parameters:
 *         - in: path
 *           name: leaveId
 *           required: true
 *           description: leaveId is required
 *           schema:
 *              type: string
 *     responses:
 *       200:
 *         description: leave delete successfully
 *   
 */
 router.route("/deleteleaveDetails/:leaveId").delete(deleteleaveDetails)

module.exports = router

