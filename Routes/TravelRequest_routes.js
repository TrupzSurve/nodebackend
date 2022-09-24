const express = require("express")
const {CreateTravelRequest,GetAllTravelRequest,deleteTravelRequest,updateTravelRequestDetails} = require("../controller/travelRequest_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     TravelRequest :
 *       type: object
 *       required:
 *          - TravelRequestId
 *          - EmployeeId
 *          - ResonOfTravel
 *          - Amount
 *          - Remark
 *          - DepartureCity
 *          - ArrivalCity
 *          - DepartureDate
 *          - ReturnDate
 *          - Status
 *       properties:
 *         TravelRequestId :
 *           type : integer
 *           description: 1234
 *         EmployeeId :
 *           type: string
 *           description: 7894
 *         ResonOfTravel : 
 *            type: string
 *            description: avcd
 *         Amount :
 *           type: integer 
 *           description: 100
 *         Remark :
 *           type : string
 *           description: sdfg
 *         DepartureCity :
 *           type : string
 *           description: Delhi
 *         ArrivalCity :
 *           type : string
 *           description: Pune
 *         DepartureDate: 
 *           type : string
 *           description: ASDF
 *         ReturnDate :
 *           type : string
 *           description: ASDF
 *         Status :
 *           type: string 
 *           description: ASDF
 * 
 *       example: 
 *          TravelRequestId : Auto generated
 *          EmployeeId : 1234
 *          ResonOfTravel : avcdf
 *          Amount : 2000
 *          Remark : ABC
 *          Day : Saturday
 *          DepartureCity : Delhi
 *          ArrivalCity : Pune
 *          DepartureDate : 19-09-2022
 *          ReturnDate : 25-09-2022   
 *          Status : Active
 *
 */

/**
 * @swagger
 * /api/v1/CreateTravelRequest:
 *   post:
 *     summary: Create TravelRequest Details
 *     tags: [TravelRequest]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TravelRequest'
 *     responses:
 *       200:
 *         description: TravelRequest create successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TravelRequest'
 *       500:
 *         description: Some server error
 */
router.route("/CreateTravelRequest").post(CreateTravelRequest)
/**
 * @swagger
 * /api/v1/GetAllTravelRequest:
 *   get:
 *     summary: get all TravelRequest
 *     tags: [TravelRequest]
 *     responses:
 *       200:
 *         description: get All TravelRequest
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/TravelRequest'
 */
router.route("/GetAllTravelRequest").get(GetAllTravelRequest)
/**
 * @swagger
 * /api/v1/deleteTravelRequest/{TravelRequestId}:
 *   delete:
 *     summary: Delete an TravelRequest
 *     tags: [TravelRequest]
 *     parameters:
 *         - in: path
 *           name: TravelRequestId
 *           required: true
 *           description: TravelRequest is required
 *           schema:
 *              type: string
 *     responses:
 *       200:
 *         description: TravelRequest delete successfully
 *   
 */
router.route("/deleteTravelRequest/:TravelRequestId").delete(deleteTravelRequest)
/**
 * @swagger
 * /api/v1/updateTravelRequestDetails:
 *   post:
 *     summary: update Travel Request Details
 *     tags: [TravelRequest]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TravelRequest'
 *     responses:
 *       200:
 *         description: TravelRequest update successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TravelRequest'
 *       500:
 *         description: Some server error
 */
router.route("/updateTravelRequestDetails").put(updateTravelRequestDetails)
module.exports = router
