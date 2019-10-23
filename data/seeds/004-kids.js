exports.seed = function(knex) {
  // // Deletes ALL existing entries
  // return knex("kids")
  //   .truncate()
  //   .then(function() {
  //     // Inserts seed entries
  return knex("kids").insert([
    {
      community_id: 1,
      country_id: 1,
      child_name: "connor jr",
      parent_name: "connors dad",
      contact_info: "connorholly@bing",
      date_of_screening: "4/5/19",
      date_of_birth: "4/5/98",
      gender: "male",
      height: "5.0",
      weight: "100"
    },
    {
      community_id: 1,
      country_id: 1,
      child_name: "uzias jr",
      parent_name: "connors dad",
      contact_info: "connorholly@bing",
      date_of_screening: "4/5/19",
      date_of_birth: "4/5/98",
      gender: "male",
      height: "5.0",
      weight: "100"
    },
    {
      community_id: 2,
      country_id: 2,
      child_name: "lynn jr",
      parent_name: "connors dad",
      contact_info: "connorholly@bing",
      date_of_screening: "4/5/19",
      date_of_birth: "4/5/98",
      gender: "male",
      height: "5.0",
      weight: "100"
    }
  ]);
  // });
};
