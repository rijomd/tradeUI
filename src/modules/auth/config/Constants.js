import { getMyAPiUrl } from "service/AuthMethods";

export const signInUrl = getMyAPiUrl() + "/auth/signup";
export const loginUrl = getMyAPiUrl() + "/auth/login";

export const errorMessage = "Something Wrong!";
export const successMessage = "Login successfully!";