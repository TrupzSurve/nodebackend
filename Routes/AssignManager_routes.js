const express = require("express")
const {CreateAssignManager,GetAllAssignManager,updateAssignManagerDetails,deleteAssignManager} = require("../controller/Assign_manager_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     AssignManager:
 *       type: object
 *       required:
 *         - AssignManagerId
 *         - EmployeeId
 *         - ReportingTo
 *       properties:
 *         AssignManagerId:
 *           type: integer
 *           description: 7894
 *         EmployeeId:
 *           type: string
 *           description: 1234
 *         ReportingTo:
 *           type: integer
 *           description: 5671
 *       example:
 *         AssignManagerId: 7894
 *         EmployeeId: 12345
 *         ReportingTo : 9874
 *        
 *
 */

/**
 * @swagger
 * /api/v1/GetAllAssignManager:
 *   get:
 *     summary: get all AssignManager
 *     tags: [AssignManager]
 *     responses:
 *       200:
 *         description: get All AssignManager
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/AssignManager'
 */
router.route("/GetAllAssignManager").get(GetAllAssignManager)


/**
 * @swagger
 * /api/v1/CreateAssignManager:
 *   post:
 *     summary: create a new AssignManager
 *     tags: [AssignManager]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AssignManager'
 *     responses:
 *       200:
 *         description: AssignManager create successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AssignManager'
 *       500:
 *         description: Some server error
 */
 router.route("/CreateAssignManager").post(CreateAssignManager)

 /**
 * @swagger
 * /api/v1/updateAssignManagerDetails:
 *   post:
 *     summary: update AssignManager Details
 *     tags: [AssignManager]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AssignManager'
 *     responses:
 *       200:
 *         description: AssignManager update successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AssignManager'
 *       500:
 *         description: Some server error
 */
  router.route("/updateAssignManagerDetails").post(updateAssignManagerDetails)

  /**
 * @swagger
 * /api/v1/deleteAnnounceMentDetails/{AssignManagerId}:
 *   delete:
 *     summary: Delete an AssignManager
 *     tags: [AssignManager]
 *     parameters:
 *         - in: path
 *           name: AssignManagerId
 *           required: true
 *           description: AssignManagerId is required
 *           schema:
 *              type: string
 *     responses:
 *       200:
 *         description: AssignManager delete successfully
 *   
 */
   router.route("/deleteAssignManager/:AssignManagerId").delete(deleteAssignManager)

module.exports = router

