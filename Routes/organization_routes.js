
const express = require("express")
const { createorganization, vieworganization, deleteorganizationDetails, updateorganizationDetails } = require("../controller/organization_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     organization:
 *       type: object
 *       required:
 *         - organizationId
 *         - Name
 *         - Email
 *         - Phone
 *         - About
 *       properties:
 *         organizationId:
 *           type: integer
 *           description: uniqueid
 *         Name:
 *           type: string
 *           description: Name 
 *         Email:
 *           type: string
 *           description: EmailID 
 *         Phone:
 *           type: integer
 *           description: Phone 
 *         About:
 *           type: string
 *           description: About 
 * 
 * 
 *       example:
 *        organizationId: 
 *          Name  : 
 *          Email :
 *          Phone : 
 *          About :
 *        
 *
 */

/**
 * @swagger
 * /api/v1/organization/createorganization:
 *   post:
 *     summary: create a new organization
 *     tags: [organization]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/organization'
 *     responses:
 *       200:
 *         description: organization create successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/organization'
 *       500:
 *         description: Some server error
 */

router.route("/organization/createorganization").post(createorganization)



/**
 * @swagger
 * /api/v1/organization/vieworganization:
 *   get:
 *     summary: get all organization
 *     tags: [organization]
 *     responses:
 *       200:
 *         description: get All organization
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/organization'
 */
router.route("/organization/vieworganization").get(vieworganization)
// router.route("/organization/deleteorganizationDetails/:organizationId").delete(deleteorganizationDetails)
/**
 * @swagger
 * /api/v1/organization/updateorganizationDetails:
 *   post:
 *     summary: update organization Details
 *     tags: [organization]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/organization'
 *     responses:
 *       200:
 *         description: organization update successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/organization'
 *       500:
 *         description: Some server error
 */
router.route("/organization/updateorganizationDetails").post(updateorganizationDetails)
/**
 * @swagger
 * /api/v1/organization/deleteorganizationDetails/{organizationId}:
 *   delete:
 *     summary: Delete an organization
 *     tags: [organization]
 *     parameters:
 *         - in: path
 *           name: organizationId
 *           required: true
 *           description: organizationId is required
 *           schema:
 *              type: string
 *     responses:
 *       200:
 *         description: organization delete successfully
 *   
 */
 router.route("/organization/deleteorganizationDetails/:organizationId").delete(deleteorganizationDetails)

module.exports = router
