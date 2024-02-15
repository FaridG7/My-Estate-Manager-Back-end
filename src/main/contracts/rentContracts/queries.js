export const queries = {
  getContract: "SELECT * from rent_contract_view WHERE id = $1",
  getContracts: "SELECT * from rent_contract_view",
  insertContract:
    "INSERT INTO rent_contract_view (contract_id, estate_id, manager_id, commission_fee, start_date, expire_date, mortgage, rent, renter_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
  updateContract:
    "UPDATE rent_contract_view SET contract_id = $2, estate_id = $3, commission_fee = $4, start_date = $5, expire_date = $6, mortgage = $7, rent = $8, renter_id = $9 WHERE id = $1",
  deleteContract: "DELETE FROM rent_contract_view WHERE id = $1",
};
