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

  it("should add a kid", async () => {
    let kids = await db("kids");
    expect(kids).toHaveLength(0);
    await Model.addKid({
      community_id: 1,
      country_id: 2,
      child_name: "abc",
      parent_name: "abc123",
      contact_info: "as;lfkjw",
      date_of_screening: "1/2/3",
      date_of_birth: "1/22/33",
      gender: "male",
      height: 1,
      weight: 2
    });
    kids = await db("kids");
    expect(kids).toHaveLength(1);
  });

  it("should delete a kid", async () => {
    let kids = await db("kids");
    expect(kids).toHaveLength(0);
    await Model.addKid({
      community_id: 1,
      country_id: 2,
      child_name: "abc",
      parent_name: "abc123",
      contact_info: "as;lfkjw",
      date_of_screening: "1/2/3",
      date_of_birth: "1/22/33",
      gender: "male",
      height: 1,
      weight: 2
    });
    kids = await db("kids");
    expect(kids).toHaveLength(1);
    await Model.deleteKid((id = 1));
    kids = await db("kids");
    expect(kids).toHaveLength(0);
  });
});
