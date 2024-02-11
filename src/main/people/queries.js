export const queries = {
  getPeople: "SELECT * FROM person_view",
  getOwners: "SELECT * FROM owner",
  getBuyers: "SELECT * FROM buyer",
  getRenters: "SELECT * FROM renter",
  getPerson: "SELECT * FROM person_view WHERE id = $1",
  updatePerson:"UPDATE person SET first_name = $2, last_name = $3, meli_code = $4, phone_number = $5 WHERE id = $1"
};
