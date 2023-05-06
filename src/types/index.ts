export type user = {
  accountBalance: string,
  accountNumber: string,
  createdAt: string,
  education: {
    duration: string,
    employmentStatus: string,
    level: string,
    loanRepayment: string,
    monthlyIncome: string[],
    officeEmail: string,
    sector: string,
  }    
  email: string,
  guarantor: {
    address: string,
    firstName: string,
    lastName: string,
    gender: string,
    phoneNumber: string
  },
  id: string,
  lastActiveDate: string,
  orgName: string,
  phoneNumber: string,
  profile: {
    firstName: string,
    lastName: string,
    avatar: string,
    bvn: string,
    currency: string,
    gender: string,
    phoneNumber: string,
    address: string
  },
  socials: {
    facebook: string,
    instagram: string,
    twitter: string,
  },
  userName: string,
}

