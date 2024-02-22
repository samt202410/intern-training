import { CreatedUpdatedAt, ID } from "./model";

enum Language {
  EN = "en",
  FR = "fr",
}

enum Gender {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other",
}

const beResponse = {
  data: {
    id: 1,
    email: "webmaster@koverhoop.com",
    firstName: "Aakash",
    lastName: "Malhotra",
    dateOfBirth: null,
    profileImage:
      "https://hsa-files-staging.s3.us-east-2.amazonaws.com/assests/users/1/1701239197712-aakash.png",
    isPasswordChanged: true,
    language: Language.EN,
    gender: null,
    askForPhoneVerification: true,
    phone: {
      number: "5145721062",
      countryCode: "+1",
      verifiedAt: "2023-09-08T17:44:00.145Z",
    },
    admin: {
      id: 1,
      status: true,
      dateOfHire: null,
      dateOfTermination: null,
      adminType: "management",
      loginAt: "2024-02-22T10:05:02.963Z",
      lastLoginAt: "2024-02-22T07:53:26.230Z",
      position: null,
      address: null,
      timeZone: null,
      selectedCompanyId: 19,
      createdAt: "2022-10-11T04:46:55.291Z",
      updatedAt: "2024-02-22T10:05:02.965Z",
      createdByUserId: null,
      updatedByUserId: 1,
      latestInvitationSentOn: null,
      firstName: "Aakash",
      lastName: "Malhotra",
      gender: null,
      phone: "5145721062",
      dateOfBirth: null,
      profileImage:
        "https://hsa-files-staging.s3.us-east-2.amazonaws.com/assests/users/1/1701239197712-aakash.png",
    },
    companies: [
      {
        company: {
          id: 58,
          abbreviatedName: "aaa",
        },
      },
      {
        company: {
          id: 55,
          abbreviatedName: "AD",
        },
      },
      {
        company: {
          id: 56,
          abbreviatedName: "Alberta",
        },
      },
      {
        company: {
          id: 9,
          abbreviatedName: "Analytiks AI",
        },
      },
      {
        company: {
          id: 40,
          abbreviatedName: "Apple Inc",
        },
      },
      {
        company: {
          id: 49,
          abbreviatedName: "Ash-Testa",
        },
      },
      {
        company: {
          id: 50,
          abbreviatedName: "Ash-Testb",
        },
      },
      {
        company: {
          id: 51,
          abbreviatedName: "ATC",
        },
      },
      {
        company: {
          id: 60,
          abbreviatedName: "ATC- self",
        },
      },
      {
        company: {
          id: 59,
          abbreviatedName: "bbb",
        },
      },
      {
        company: {
          id: 25,
          abbreviatedName: "Dev - Boisvert",
        },
      },
      {
        company: {
          id: 31,
          abbreviatedName: "Dev - Collier Group",
        },
      },
      {
        company: {
          id: 21,
          abbreviatedName: "Dev - Company",
        },
      },
      {
        company: {
          id: 29,
          abbreviatedName: "Dev - DS",
        },
      },
      {
        company: {
          id: 20,
          abbreviatedName: "Dev - FeedSound",
        },
      },
      {
        company: {
          id: 23,
          abbreviatedName: "Dev - GBS",
        },
      },
      {
        company: {
          id: 22,
          abbreviatedName: "Dev - GoHoop",
        },
      },
      {
        company: {
          id: 32,
          abbreviatedName: "Dev - Hodkiewicz Ltd",
        },
      },
      {
        company: {
          id: 41,
          abbreviatedName: "Dev - invoice test",
        },
      },
      {
        company: {
          id: 10,
          abbreviatedName: "Dev - Karttik",
        },
      },
      {
        company: {
          id: 24,
          abbreviatedName: "Dev - KoverClaim",
        },
      },
      {
        company: {
          id: 1,
          abbreviatedName: "Dev - Koverhoop",
        },
      },
      {
        company: {
          id: 18,
          abbreviatedName: "Dev- Latest Company",
        },
      },
      {
        company: {
          id: 30,
          abbreviatedName: "Dev - Martin",
        },
      },
      {
        company: {
          id: 16,
          abbreviatedName: "Dev - New Testing Company",
        },
      },
      {
        company: {
          id: 37,
          abbreviatedName: "Dev-Nike",
        },
      },
      {
        company: {
          id: 42,
          abbreviatedName: "Dev - PCAUG",
        },
      },
      {
        company: {
          id: 11,
          abbreviatedName: "Dev - Pharma",
        },
      },
      {
        company: {
          id: 12,
          abbreviatedName: "Dev - Prateek",
        },
      },
      {
        company: {
          id: 14,
          abbreviatedName: "Dev - Prateek 2 TMP",
        },
      },
      {
        company: {
          id: 45,
          abbreviatedName: "Dev - Psm",
        },
      },
      {
        company: {
          id: 27,
          abbreviatedName: "Dev - Red Mango",
        },
      },
      {
        company: {
          id: 38,
          abbreviatedName: "Dev - RedTable",
        },
      },
      {
        company: {
          id: 26,
          abbreviatedName: "Dev - Red Ted",
        },
      },
      {
        company: {
          id: 28,
          abbreviatedName: "Dev - Rockwood",
        },
      },
      {
        company: {
          id: 19,
          abbreviatedName: "Dev - Sanyam",
        },
      },
      {
        company: {
          id: 48,
          abbreviatedName: "Dev - SelfManaged",
        },
      },
      {
        company: {
          id: 53,
          abbreviatedName: "Dev - Test7th Dec",
        },
      },
      {
        company: {
          id: 13,
          abbreviatedName: "Dev-Testing",
        },
      },
      {
        company: {
          id: 6,
          abbreviatedName: "Dev Testing - GoKlaim",
        },
      },
      {
        company: {
          id: 36,
          abbreviatedName: "Dev - Windler Group",
        },
      },
      {
        company: {
          id: 57,
          abbreviatedName: "dfff",
        },
      },
      {
        company: {
          id: 47,
          abbreviatedName: "Dunder Mifflin",
        },
      },
      {
        company: {
          id: 35,
          abbreviatedName: "Fondation René-Verrier",
        },
      },
      {
        company: {
          id: 46,
          abbreviatedName: "GK India",
        },
      },
      {
        company: {
          id: 2,
          abbreviatedName: "Jean Coutu",
        },
      },
      {
        company: {
          id: 54,
          abbreviatedName: "LD",
        },
      },
      {
        company: {
          id: 34,
          abbreviatedName: "Maison René-Verrier",
        },
      },
      {
        company: {
          id: 17,
          abbreviatedName: "Matritech",
        },
      },
      {
        company: {
          id: 15,
          abbreviatedName: "Metritech - Test",
        },
      },
      {
        company: {
          id: 3,
          abbreviatedName: "Plastiques Évolupak",
        },
      },
      {
        company: {
          id: 52,
          abbreviatedName: "PSG",
        },
      },
      {
        company: {
          id: 33,
          abbreviatedName: "Services René-Verrier",
        },
      },
      {
        company: {
          id: 7,
          abbreviatedName: "SM Ltd",
        },
      },
      {
        company: {
          id: 43,
          abbreviatedName: "STC",
        },
      },
      {
        company: {
          id: 44,
          abbreviatedName: "STC-FR",
        },
      },
      {
        company: {
          id: 4,
          abbreviatedName: "TYT",
        },
      },
      {
        company: {
          id: 39,
          abbreviatedName: "Valtas Pvt Ltd",
        },
      },
      {
        company: {
          id: 5,
          abbreviatedName: "Vibrant",
        },
      },
      {
        company: {
          id: 8,
          abbreviatedName: "Vibrant Ventes",
        },
      },
    ],
  },
  userMessage: "Updated successfully",
};

interface MeResponse extends ID, MeAndAdmin {
  email: string;
  isPasswordChanged: boolean;
  language: Language;
  askForPhoneVerification: boolean;
  phone: Phone;
  admin: Admin;
  companies: Company[];
}

interface Phone {
  number: string;
  countryCode: string;
  verifiedAt: string;
}

interface Admin extends ID, MeAndAdmin, CreatedUpdatedAt {
  status: boolean;
  dateOfHire: DateOrNull;
  dateOfTermination: DateOrNull;
  adminType: string;
  loginAt: string;
  lastLoginAt: string;
  position: string | null;
  address: string | null;
  timeZone: string | null;
  selectedCompanyId: number;
  createdByUserId: number | null;
  updatedByUserId: number;
  latestInvitationSentOn: DateOrNull;
  phone: string;
}

interface MeAndAdmin {
  firstName: string;
  lastName: string;
  profileImage: string;
  gender: Gender | null;
  dateOfBirth: Date | null;
}

type DateOrNull = Date | null;

interface Company {
  company: ID & { abbreviatedName: string };
}

export const meRes: MeResponse = beResponse.data;
