const express = require("express")
const {CreateAppraisal,GetAllAppraisal,deleteAppraisal,updateAppraisalDetails} = require("../controller/Appraisal_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     Appraisal:
 *       type: object
 *       required:
 *         - AppraisalId
 *         - EmployeeId
 *         - EfficiencyEmpolyee
 *         - Timelines
 *         - Quality
 *         - Accuracy
 *         - Remark
 *       properties:
 *         AppraisalId:
 *           type: integer
 *           description: 1234
 *         EmployeeId:
 *           type: string
 *           description: 7894
 *         EfficiencyEmpolyee: 
 *           type: string
 *           description: avcd
 *         Timelines :
 *           type: string 
 *           description: sdfg
 *         Quality :
 *           type : medium
 *           description: sdfg
 *         Accuracy :
 *           type : string
 *           description: high
 *         Remark :
 *           type : string
 *           description: ASDF
 *       example: 
 *          AppraisalId        : Auto generated
 *          EmployeeId  : 9874
 *          EfficiencyEmpolyee  : createResTAPI
 *          Timelines  : HR Task
 *          Quality  : 20-09-2022
 *          Accuracy  : high
 *          Remark  : 19-09-2022, 07:00 PM
 *          
 *        
 *
 */

/**
 * @swagger
 * /api/v1/CreateAppraisal:
 *   post:
 *     summary: Create Appraisal Details
 *     tags: [Appraisal]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Appraisal'
 *     responses:
 *       200:
 *         description: Appraisal create successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Appraisal'
 *       500:
 *         description: Some server error
 */
router.route("/CreateAppraisal").post(CreateAppraisal)

/**
 * @swagger
 * /api/v1/GetAllAppraisal:
 *   get:
 *     summary: get all Appraisal
 *     tags: [Appraisal]
 *     responses:
 *       200:
 *         description: get All Appraisal
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Appraisal'
 */
router.route("/GetAllAppraisal").get(GetAllAppraisal)
router.route("/deleteAppraisal/:TaskId").delete(deleteAppraisal)
/**
 * @swagger
 * /api/v1/updateAppraisalDetails:
 *   post:
 *     summary: update Appraisal Details
 *     tags: [Appraisal]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Appraisal'
 *     responses:
 *       200:
 *         description: announcement update successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Appraisal'
 *       500:
 *         description: Some server error
 */
router.route("/updateAppraisalDetails").put(updateAppraisalDetails)
/**
 * @swagger
 * /api/v1/deleteAppraisal/{AppraisalId}:
 *   delete:
 *     summary: Delete an Appraisal
 *     tags: [Appraisal]
 *     parameters:
 *         - in: path
 *           name: AppraisalId
 *           required: true
 *           description: AppraisalId is required
 *           schema:
 *              type: string
 *     responses:
 *       200:
 *         description: Appraisal delete successfully
 *   
 */
 router.route("/deleteAppraisal/:AppraisalId").delete(deleteAppraisal)

module.exports = router
