const request = require("supertest");

const server = require("../api/server.js");
const db = require("../database/dbConfig.js");
const Users = require("../users/users-model.js");

describe("users", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  describe("POST /api/auth/register", () => {
    it("returns status 201", () => {
      return request(server)
        .post("/api/auth/register")
        .send({ username: "tony", password: "stark" })
        .then(res => {
          expect(res.status).toBe(201);
        });
    });

    it("returns black widow as a new user with id 1", () => {
      return request(server)
        .post("/api/auth/register")
        .send({ username: "black", password: "widow" })
        .then(res => {
          expect(res.body.username).toBe("black");
          expect(res.body.id).toBe(1);
        });
    });
  });
});
