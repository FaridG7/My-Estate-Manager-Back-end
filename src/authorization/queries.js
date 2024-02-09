export const queries = {
  getUser:
    "SELECT id, manager_id, password FROM public.user WHERE manager_id = $1",
};
