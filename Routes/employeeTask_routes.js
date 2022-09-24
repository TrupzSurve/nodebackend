const express = require("express")
const {CreateEmployeeTask,GetAllEmplyeeTask,deleteEmplyeeTask,updateEmplyeeTaskDetails} = require("../controller/EmployeeTask_controller")
const router = express.Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     employeeTask:
 *       type: object
 *       required:
 *         - TaskId
 *         - EmployeeId
 *         - EmployeeTask
 *         - Description
 *         - DueDate
 *         - Priority
 *         - NotifiedBefore
 *         - Status
 *       properties:
 *         TaskId:
 *           type: integer
 *           description: 1234
 *         EmployeeId:
 *           type: string
 *           description: 7894
 *         EmployeeTask: 
 *           type: string
 *           description: avcd
 *         Description :
 *           type: string 
 *           description: sdfg
 *         DueDate :
 *           type : string
 *           description: sdfg
 *         Priority :
 *           type : string
 *           description: high
 *         NotifiedBefore :
 *           type : string
 *           description: 1 Day
 *         Status :
 *           type : string
 *           description: Active
 *       example: 
 *          TaskId        : 1
 *          EmployeeId  : 9874
 *          EmployeeTask  : createResTAPI
 *          Description  : HR Task
 *          DueDate  : 20-09-2022
 *          Priority  : high
 *          NotifiedBefore  : 19-09-2022, 07:00 PM
 *          Status  : Active
 *        
 *
 */

/**
 * @swagger
 * /api/v1/CreateEmployeeTask:
 *   post:
 *     summary: Create Employee Task
 *     tags: [employeeTask]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/employeeTask'
 *     responses:
 *       200:
 *         description: employee Task create successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/employeeTask'
 *       500:
 *         description: Some server error
 */
router.route("/CreateEmployeeTask").post(CreateEmployeeTask)

/**
 * @swagger
 * /api/v1/GetAllEmplyeeTask:
 *   get:
 *     summary: get all employeeTask
 *     tags: [employeeTask]
 *     responses:
 *       200:
 *         description: get All employeeTask
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/employeeTask'
 */
router.route("/GetAllEmplyeeTask").get(GetAllEmplyeeTask)
/**
 * @swagger
 * /api/v1/deleteEmplyeeTask/{TaskId}:
 *   delete:
 *     summary: Delete an employeeTask
 *     tags: [employeeTask]
 *     parameters:
 *         - in: path
 *           name: TaskId
 *           required: true
 *           description: TaskId is required
 *           schema:
 *              type: string
 *     responses:
 *       200:
 *         description: employeeTask delete successfully
 *   
 */
router.route("/deleteEmplyeeTask/:TaskId").delete(deleteEmplyeeTask)
/**
 * @swagger
 * /api/v1/updateEmplyeeTaskDetails:
 *   post:
 *     summary: update employeeTask Details
 *     tags: [employeeTask]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/employeeTask'
 *     responses:
 *       200:
 *         description: employeeTask update successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/employeeTask'
 *       500:
 *         description: Some server error
 */
router.route("/updateEmplyeeTaskDetails").put(updateEmplyeeTaskDetails)
module.exports = router
