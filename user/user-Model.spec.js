const Model = require("./user-Model");

const db = require("../data/dbConfig");

describe("user model", () => {
  beforeEach(async () => {
    await db("user").truncate();
  });

  it("should insert a user", async () => {
    let records = await db("user");
    expect(records).toHaveLength(0);
    await Model.addUser({ username: "connor", password: "pass" });
    records = await db("user");
    expect(records).toHaveLength(1);
  });

  it("should get Users", async () => {
    let users = await db("user");
    await Model.addUser({ username: "connor", password: "pass" });
    await Model.getUsers();
    users = await db("user");
    expect(users).toHaveLength(1);
    expect(users).toEqual([
      {
        id: 1,
        username: "connor",
        password: "pass",
        admin: 0,
        user_country_id: null
      }
    ]);
  });

  //   it("should edit user", async () => {
  //     let user = await db("user");
  //     await Model.addUser({ username: "connor", password: "pass" });
  //     await Model.editUser({
  //       id: 1,
  //       changes: { username: "testing", password: "pass" }
  //     });
  //     user = await db("user");
  //     console.log(user);
  //   });

  it("should find by username", async () => {
    await Model.addUser({ username: "connor", password: "pass" });
    await Model.findByUsername({ username: "connor" });
  });
});
