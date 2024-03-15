import { ID, UserTypeEnum } from "./model";

const backendResponse = {
  data: {
    id: 1,
    name: "Sanyam Trehan",
    email: "sanyam@koverhoop.com",
    age: 25,
    profilePicture: "www.google.com",
    company: {
      companyName: "OHRA Productions",
      companyId: 5,
      address: {
        streetName: "265 B",
        city: "Amritsar",
        country: "India",
      },
      billingAddress: {
        streetName: "643 C",
        city: "Quebec",
        country: "Canada",
        pinCode: "1FA4C4",
      },
    },
  },
  userMessage: "Data Fetched Successfully",
};

interface User extends ID {
  name: string;
  email: string;
  age: number;
  profilePicture: string;
  company: Company;
}

interface Company {
  companyName: string;
  companyId: number;
  address: Address;
  billingAddress: Address & { pinCode: string };
}

interface Address {
  streetName: string;
  city: string;
  country: string;
}

// interface BillingAddress extends Address {
//   pinCode: string;
// }

export const user: User = backendResponse.data;

interface LoggedInUser {
  name: string;
  userType: UserTypeEnum;
}

export const loggedInUser: LoggedInUser = {
  name: "sanyam",
  userType: UserTypeEnum.MANAGEMENT,
};
