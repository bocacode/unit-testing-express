import supertest from "supertest";
import app from "../src/index.js"

const request = supertest(app)

describe("Getting pets from the API", () => {
    it("should return all the pets i loved before", async () =>{
        //arrange 
        const endpoint = "/pets",
        expectedResponse = "All the pets "

        //act
        const actual = await request.get(endpoint)
        
        //assert
        expect(actual.status).toBe(200)
        expect(actual.error).toBeFalsy()
        expect(actual.text).toContain(expectedResponse)

    })
})