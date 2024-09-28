import { getMyAPiUrl } from "service/AuthMethods";

export const signInUrl = getMyAPiUrl() + "/user/sign-up";
export const loginUrl = getMyAPiUrl() + "/user/login";

export const errorMessage = "Something Wrong!";
export const successMessage = "Login successfully!";