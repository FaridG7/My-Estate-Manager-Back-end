export const queries = {
  getContract: "SELECT * from sale_contract_view WHERE id = $1",
  getContracts: "SELECT * from sale_contract_view",
  updateContract:
    "UPDATE sale_contract_view SET contract_id = $2, estate_id = $3, commission_fee = $4, sale_date = $5, price = $6, buyer_id = $7 WHERE id = $1",
  insertContract:
    "INSERT INTO sale_contract_view (contract_id, estate_id, manager_id, commission_fee, sale_date, price, buyer_id) VALUES ($1, $2, $3, $4, $5, $6, $7)",
  deleteContract: "DELETE FROM sale_contract_view WHERE id = $1",
};
