export const queries = {
  getEstate:"SELECT * from estate WHERE id = $1",
  getIdleEstates: "SELECT * FROM idle_estate",
  getSoldEstates: "SELECT * FROM sold_estate",
  getRentedEstates: "SELECT * FROM rented_estate",
  updateEstate:
    "UPDATE estate SET property_id = $2, owner_id = $3, address = $4, geo_location = $5, type = $6, area = $7, room_count = $8, description = $9, \"for\" = $10, price = $11, mortgage = $12, rent = $13, registration_date = $14  WHERE id = $1",
  insertEstate:
    "INSERT INTO estate (property_id, owner_id, address, geo_location, type, area, room_count, description, \"for\" , price, mortgage, rent, registration_date) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)",
  deleteEstate: "DELETE FROM estate WHERE id = $1",
};
