const express = require("express")
const {CreateAnnounceMent,viewAnnounceMent,updateAnnounceMentDetails,deleteAnnounceMentDetails} = require("../controller/AnnounceMent_controlller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     announcement:
 *       type: object
 *       required:
 *         - AnnouncementId
 *         - Topic
 *         - PublishedDate
 *         - Status
 *         - Description
 *         - Role
 *       properties:
 *         AnnouncementId:
 *           type: integer
 *           description: 1234
 *         Topic:
 *           type: string
 *           description: asfd
 *         PublishedDate:
 *           type: string
 *           description: asfd
 *         Status:
 *           type: string
 *           description: asfd
 *         Description:
 *           type: string
 *           description: asfd
 *         Role:
 *           type: string
 *           description: asfd
 *       example:
 *         AnnouncementId: Auto-generated
 *         Topic: ABC
 *         PublishedDate: 19-09-2022
 *         Status: Active
 *         Description: ASDFGH
 *         Role: Admin
 *        
 *
 */

/**
 * @swagger
 * /api/v1/viewAnnounceMent:
 *   get:
 *     summary: get all Announcement
 *     tags: [announcement]
 *     responses:
 *       200:
 *         description: get All Announcement
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/announcement'
 */
router.route("/viewAnnounceMent").get(viewAnnounceMent)
/**
 * @swagger
 * /api/v1/CreateAnnounceMent:
 *   post:
 *     summary: create a new announcement 
 *     tags: [announcement]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/announcement'
 *     responses:
 *       200:
 *         description: create announcement successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/announcement'
 *       500:
 *         description: Some server error
 */
 router.route("/CreateAnnounceMent").post(CreateAnnounceMent)
/**
 * @swagger
 * /api/v1/updateAnnounceMentDetails:
 *   post:
 *     summary: update AnnounceMent Details
 *     tags: [announcement]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/announcement'
 *     responses:
 *       200:
 *         description: announcement update successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/announcement'
 *       500:
 *         description: Some server error
 */
 router.route("/updateAnnounceMentDetails").post(updateAnnounceMentDetails)
/**
 * @swagger
 * /api/v1/deleteAnnounceMentDetails/{AnnouncementId}:
 *   delete:
 *     summary: Delete an announcement
 *     tags: [announcement]
 *     parameters:
 *         - in: path
 *           name: AnnouncementId
 *           required: true
 *           description: AnnouncementId is required
 *           schema:
 *              type: string
 *     responses:
 *       200:
 *         description: Announcement delete successfully
 *   
 */
 router.route("/deleteAnnounceMentDetails/:AnnouncementId").delete(deleteAnnounceMentDetails)
module.exports = router

