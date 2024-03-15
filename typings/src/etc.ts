export const userEtc = {
  name: "sanyam",
  dob: "20 Mar 1998",

  getAge() {
    const diff = Date.now() - Date.parse(this.dob);
    return Math.abs(new Date(diff).getUTCFullYear() - 1970);
  },
};

export class UserEtc {
  name = "ashish";
  dob = "11 Sept 2001";

  constructor(name: string) {
    this.name = name;
  }

  getAge() {
    const diff = Date.now() - Date.parse(this.dob);
    return Math.abs(new Date(diff).getUTCFullYear() - 1970);
  }
}
