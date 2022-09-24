const express = require("express")
const {createsalary,viewsalary,deletesalaryDetails,updatesalaryDetails} = require("../controller/salary_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     salary:
 *       type: object
 *       required:
 *         - salarySipId
 *         - EmployeeId
 *         - Designation
 *         - BasicPay
 *         - HouseRentAllowance
 *         - SpecialAllowance
 *         - ConveyanceAllowance
 *         - MedicalAllowance
 *       properties:
 *         salarySipId:
 *           type: integer
 *           description: salarySipId
 *         EmployeeId:
 *           type: string
 *           description: EmployeeId
 *         Designation:
 *           type: string
 *           description: Designation
 *         BasicPay:
 *           type: integer
 *           description: BasicPay
 *         HouseRentAllowance:
 *           type: string
 *           description: HouseRentAllowance
 *         SpecialAllowance:
 *           type: string
 *           description: SpecialAllowance
 *         ConveyanceAllowance:
 *           type: string
 *           description: ConveyanceAllowance
 *         MedicalAllowance:
 *           type: string
 *           description: MedicalAllowance
 *       example:
 *          salarySipId  : Autogenereted
 *          EmployeeId : 7894
 *          Designation : Developer
 *          BasicPay : 7894
 *          HouseRentAllowance : 2894
 *          SpecialAllowance : 2106
 *          ConveyanceAllowance : 1200
 *          MedicalAllowance : 1000
 *
 */

/**
 * @swagger
 * /api/v1/viewsalary:
 *   get:
 *     summary: get all salary
 *     tags: [salary]
 *     responses:
 *       200:
 *         description: get All salary
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/salary'
 */
router.route("/viewsalary").get(viewsalary)
/**
 * @swagger
 * /api/v1/createsalary:
 *   post:
 *     summary: create a new salary
 *     tags: [salary]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/salary'
 *     responses:
 *       200:
 *         description: salary created successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/salary'
 *       500:
 *         description: Some server error
 */
 router.route("/createsalary").post(createsalary)
/**
 * @swagger
 * /api/v1/updatesalaryDetails:
 *   post:
 *     summary: update salary Details
 *     tags: [salary]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/salary'
 *     responses:
 *       200:
 *         description: salary update successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/salary'
 *       500:
 *         description: Some server error
 */
 router.route("/updatesalaryDetails").post(updatesalaryDetails)
/**
 * @swagger
 * /api/v1/deletesalaryDetails/{salarySipId}:
 *   delete:
 *     summary: Delete an salary
 *     tags: [salary]
 *     parameters:
 *         - in: path
 *           name: salarySipId
 *           required: true
 *           description: salarySipId is required
 *           schema:
 *              type: string
 *     responses:
 *       200:
 *         description: salary delete successfully
 *   
 */
 router.route("/deletesalaryDetails/:salarySipId").delete(deletesalaryDetails)

module.exports = router

