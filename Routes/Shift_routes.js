const express = require("express")
const {CreateShift,GetAllShift,updateShiftDetails,deleteShift} = require("../controller/Shift_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     Shift:
 *       type: object
 *       required:
 *         - ShiftId
 *         - ShiftName
 *         - ShiftCode
 *         - ShiftBeginTime
 *         - ShiftEndTime
 *       properties:
 *         ShiftId:
 *           type: integer
 *           description: 1620
 *         ShiftName:
 *           type: string
 *           description: FirstShift
 *         ShiftCode:
 *           type: string
 *           description: 5671
 *         ShiftBeginTime:
 *           type: string
 *           description: 10:00 AM
 *         ShiftEndTime:
 *           type: string
 *           description: 07:00 PM
 *       example:
 *         ShiftId: 7894
 *         ShiftName: FirstShift
 *         ShiftCode : SH012
 *         ShiftBeginTime : 10:00 AM
 *         ShiftEndTime : 07:00 PM
 *        
 *
 */

/**
 * @swagger
 * /api/v1/GetAllShift:
 *   get:
 *     summary: get all Shift
 *     tags: [Shift]
 *     responses:
 *       200:
 *         description: get All Shift
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Shift'
 */
router.route("/GetAllShift").get(GetAllShift)


/**
 * @swagger
 * /api/v1/CreateShift:
 *   post:
 *     summary: create a new Shift
 *     tags: [Shift]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Shift'
 *     responses:
 *       200:
 *         description: Shift create successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Shift'
 *       500:
 *         description: Some server error
 */
 router.route("/CreateShift").post(CreateShift)
/**
 * @swagger
 * /api/v1/updateShiftDetails:
 *   post:
 *     summary: update Shift Details
 *     tags: [Shift]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Shift'
 *     responses:
 *       200:
 *         description: Shift update successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Shift'
 *       500:
 *         description: Some server error
 */
 router.route("/updateShiftDetails").post(updateShiftDetails)
/**
 * @swagger
 * /api/v1/deleteShift/{ShiftId}:
 *   delete:
 *     summary: Delete an Shift
 *     tags: [Shift]
 *     parameters:
 *         - in: path
 *           name: ShiftId
 *           required: true
 *           description: ShiftId is required
 *           schema:
 *              type: string
 *     responses:
 *       200:
 *         description: Shift delete successfully
 *   
 */
 router.route("/deleteShift/:ShiftId").delete(deleteShift)

module.exports = router

