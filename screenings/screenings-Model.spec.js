const Model = require("./screenings-Model");

const db = require("../data/dbConfig");

describe("country model", () => {
  beforeEach(async () => {
    await db("country").truncate();
  });

  it("should bring back the countries", async () => {
    const countries = await db("country");
    expect(countries).toHaveLength(0);
  });

  it("should add country", async () => {
    let countries = await db("country");
    expect(countries).toHaveLength(0);
    await Model.addCountry({ country: "abc" });
    countries = await db("country");
    expect(countries).toHaveLength(1);
  });
});

describe("community model", () => {
  beforeEach(async () => {
    await db("community").truncate();
  });

  it("should bring back communities", async () => {
    const communities = await db("community");
    expect(communities).toHaveLength(0);
  });

  it("should add a community", async () => {
    let communities = await db("community");
    expect(communities).toHaveLength(0);
    await Model.addCommunity({ name: "abc" });
    communities = await db("community");
    expect(communities).toHaveLength(1);
  });
});

describe("kid model", () => {
  beforeEach(async () => {
    await db("kids").truncate();
  });

  it("should get kids", async () => {
    const kids = await db("kids");
    await db("kids");
    expect(kids).toHaveLength(0);
  });
});
