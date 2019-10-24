const Users = require("./user-Model");

const db = require("../data/dbConfig");

describe("user model", () => {
  beforeEach(async () => {
    await db("user").truncate();
  });

  it("should insert a user", () => {
      const records = await db('user')
      expect(records).toHaveLength(0);
  });
});
