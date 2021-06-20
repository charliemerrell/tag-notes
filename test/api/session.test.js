const request = require("supertest");
const app = require("../../app");
const { seedDb, seedData } = require("../utils/seed");

describe("session tests", () => {
    beforeEach(async () => {
        await seedDb();
    });
    it("returns a jwt when correct user data POSTed", (done) => {
        request(app)
            .post("/api/sessions")
            .send(seedData.users[0])
            .set("Accept", "application/json")
            .expect(201)
            .then((response) => {
                expect(response.body.jwt).toBeDefined();
                done();
            })
            .catch((err) => done(err));
    });
    it("returns a 404 when incorrect user data POSTed", (done) => {
        let { email, password } = seedData.users[0];
        password = "wrong";
        request(app)
            .post("/api/sessions")
            .send({ email, password })
            .set("Accept", "application/json")
            .expect(404, done);
    });
});
