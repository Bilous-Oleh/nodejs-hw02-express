import mongoose from "mongoose";
import request from "supertest";
import "dotenv/config";

import app from "../../app.js";
import User from "../../models/user.js";
import { subscriptionList } from "../../constants/contact-constants.js";
import { bool } from "joi";

const { PORT, DB_HOST_TEST } = process.env;

// describe("test register route", () => {
//   let server = null;

//   beforeAll(async () => {
//     await mongoose.connect(DB_HOST_TEST);
//     server = app.listen(PORT);
//   });

//   afterAll(async () => {
//     await mongoose.connection.close();
//     server.close();
//   });

//   afterEach(async () => {
//     await User.deleteMany({});
//   });

//   test("test register with correct data", async () => {
//     const registerData = {
//       email: "2005net2005@gmail.com",
//       password: "123456",
//     };

//     const { statusCode, body } = await request(app)
//       .post("/users/register")
//       .send(registerData);

//     expect(statusCode).toBe(201);
//     expect(body.user.email).toBe(registerData.email);

//     const user = await User.findOne({ email: registerData.email });
//     expect(user.email).toBe(registerData.email);
//   });
// });

// describe("test login route", () => {
//   let server = null;

//   const correctData = {
//     email: "2005net2005@gmail.com",
//     password: "123456",
//   };

//   beforeAll(async () => {
//     await mongoose.connect(DB_HOST_TEST);
//     server = app.listen(PORT);

//     await request(app).post("/users/register").send(correctData);
//   });

//   afterAll(async () => {
//     await mongoose.connection.close();
//     server.close();
//   });

//   afterEach(async () => {
//     await User.deleteMany({});
//     await request(app).post("/users/logout").send();
//   });

//   test("test login with correct data", async () => {
//     const { statusCode, body } = await request(app)
//       .post("/users/login")
//       .send(correctData);

//     expect(statusCode).toBe(200);
//     expect(body).toHaveProperty("token");
//     expect(body).toMatchObject({
//       user: {
//         email: expect.any(String),
//         subscription: expect.any(String),
//       },
//     });
//     expect(body.user.email).toBe(correctData.email);
//   });

// test("test login with incorrect email", async () => {
//   const incorrectEmail = {
//     email: "2005net@gmail.com",
//     password: "123456",
//   };
//   const { statusCode, body } = await request(app)
//     .post("/users/login")
//     .send(incorrectEmail);

//   expect(statusCode).toBe(401);
//   expect(body).not.toHaveProperty("token");
//   expect(body).toMatchObject({
//     message: "Email or password is wrong",
//   });
// });

// test("test login with invalid email", async () => {
//   const invalidEmail = {
//     email: "2005net2005gmail.com",
//     password: "123456",
//   };
//   const { statusCode, body } = await request(app)
//     .post("/users/login")
//     .send(invalidEmail);

//   expect(statusCode).toBe(400);
//   expect(body).not.toHaveProperty("token");
//   expect(body).toMatchObject({
//     message: "Field email is invalid",
//   });
// });
// });
