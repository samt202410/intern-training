import { user } from "./user";
import { meRes } from "./me-api";

type UserType = "admin" | "companyAdmin" | "management" | "webmaster" | "owner";

let userType: UserType;

for (let i = 0; i < 5; i++) {
  userType = abc();

  if (userType === "companyAdmin") {
  }
}

function abc(): UserType {
  const isEven = Math.ceil(Math.random() * 10) % 2 === 0;
  if (isEven) {
    return "admin";
  } else if (!isEven) {
    return "companyAdmin";
  } else {
    return "owner";
  }
}

// -----------------------------------------------------------------------------------------------------
// ##########################
// -----------------------------------------------------------------------------------------------------

console.log(meRes.companies[0].company.abbreviatedName);
