import { loggedInUser, user } from "./user";
import { meRes } from "./me-api";
import { CreatedUpdatedAt, Language, UserTypeEnum } from "./model";
import { UserEtc } from "./etc";
import { companies } from "./companies";

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

// console.log(meRes.companies[0].company.abbreviatedName);
if (loggedInUser.userType === UserTypeEnum.MANAGEMENT) {
}

const user1 = new UserEtc("sanyam");
const user2 = new UserEtc("ashish");
console.log(user1.name);
console.log(user2.name);

const etc: UserEtc = {
  name: "sanyam",
  dob: "",
  getAge() {
    return 7;
  },
};

// -----------------------------------------------------------------------------------------------------
// ##########################
// -----------------------------------------------------------------------------------------------------

const obj: CreatedUpdatedAt = {
  createdAt: "one",
  updatedAt: "two",
};

function temp(obj: CreatedUpdatedAt, key: keyof CreatedUpdatedAt) {
  const x = obj[key];
  console.log(x);
}

temp(obj, "updatedAt");

// -----------------------------------------------------------------------------------------------------
// ##########################
// -----------------------------------------------------------------------------------------------------

const obj2 = {
  name: "abc",
  age: 21,
  subject: ["physics", "english", "maths"],
};

function temp2(obj: typeof obj2, key: keyof typeof obj2) {
  const x = obj[key];
  console.log(x);
}

temp2(obj2, "subject");

console.log("##########################");

// -----------------------------------------------------------------------------------------------------
// ##########################
// -----------------------------------------------------------------------------------------------------

companies.forEach(({ company: { id: companyId, abbreviatedName } }) => {
  console.log(companyId, abbreviatedName);
});
