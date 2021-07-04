import request from 'supertest'
import Server from "../server/server";

describe("Server /", () => {


  const server = new Server()

  test("It should respond with an 200 status", async () => {

    const response = await request(server.app).get("/");
    expect(response.text).toEqual("It works");
    expect(response.statusCode).toBe(200);

  });

  test("It should respond with correct object", async () => {

    const response = await request(server.app).get("/a");
    expect(response.body).toEqual({ msg: "ok" });
    expect(response.statusCode).toBe(200);

  });

});
