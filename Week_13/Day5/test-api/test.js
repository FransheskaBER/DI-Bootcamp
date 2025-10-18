import request from "supertest";
import { expect } from "chai";
import app from "./app.js";

// describe() and it() - describe what is being tested and what is expected from the test as a response.
// it() functions are inside describe()
// the actual test take place inside the it() function
describe("Testing POSTS/shots endpoint", function(){
    it(`responds with 200 and expected body`, async function(){
        //  Make POST request
        const response = await request(app)
            .post("/shots")
            .send({ title: "how to write a shot", body: "access the edpresso tutorial" });

        // compare response with expectations:
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal("Success");
        expect(response.body.message).to.equal("Shot Saved Successfully");
    });
});

