export const queries = {
  getUser: "SELECT * FROM public.user WHERE manager_id = $1",
};

