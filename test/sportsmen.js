const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

describe("POST --- /sportsmen/ ---", () => {
    it("Should create new user", (done) => {
      chai.request("http://localhost:9999/")
          .post("/sportsmen/")
          .send({
              name: "Podsnezhnik",
              password: "Podsnezhnik"
          })
          .then((response) =>{
              expect(response.statusCode).to.not.equal(404);
                expect(response.body.data).to.have.property("_id");
          })
          .catch((error) =>{
                done(error);
          })
    })
    it("Should return status 400", (done) => {
        chai.request("http://localhost:9999/")
            .post("/sportsmen/")
            .send({
                name: "Podsnezhnik"
            })
            .then((response) =>{
                expect(response.statusCode).to.not.equal(404);
                expect(response.body.status).to.equal("400");
            })
            .catch((error) =>{
                done(error);
            })
    })
});
