export interface ID {
  id: number;
}

export interface CreatedUpdatedAt {
  createdAt: string;
  updatedAt: string;
}

export enum Language {
  EN = "en",
  FR = "fr",
}

export enum UserTypeEnum {
  MANAGEMENT = "management_super",
  SUPER_ADMIN = "superUser",
  AGENT = "agent",
}
