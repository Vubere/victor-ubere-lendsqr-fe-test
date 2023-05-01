import routes from '../../contants/routes'

/* top */
import home from './assets/sideBarImages/home.svg'
import switchOrganizationIcon from './assets/sideBarImages/switch_organizations.svg'

/* customers */

import users from './assets/sideBarImages/customersSection/users.svg'
import guarantors from './assets/sideBarImages/customersSection/guarantors.svg'
import loans from './assets/sideBarImages/customersSection/loans.svg'
import decisionModels from './assets/sideBarImages/customersSection/decisionModels.svg'
import savings from './assets/sideBarImages/customersSection/savings.svg'
import loanRequest from './assets/sideBarImages/customersSection/loanRequest.svg'
import whiteList from './assets/sideBarImages/customersSection/whiteList.svg'
import karma from './assets/sideBarImages/customersSection/karma.svg'

/* businesses */
import organization from './assets/sideBarImages/businessesSection/organization.svg'
import loanProducts from './assets/sideBarImages/businessesSection/loadProducts.svg'
import savingsProduct from './assets/sideBarImages/businessesSection/savingsProducts.svg'
import feesAndCharges from './assets/sideBarImages/businessesSection/feesAndCharges.svg'
import transaction from './assets/sideBarImages/businessesSection/transactions.svg'
import services from './assets/sideBarImages/businessesSection/services.svg'
import serviceAccount from './assets/sideBarImages/businessesSection/serviceAccount.svg'
import settlements from './assets/sideBarImages/businessesSection/settlements.svg'
import reports from './assets/sideBarImages/businessesSection/reports.svg'

/* settings */
import preferences from './assets/sideBarImages/settingsSection/preferences.svg'
import feesAndPricing from './assets/sideBarImages/settingsSection/feesAndPricing.svg'
import auditLogs from './assets/sideBarImages/settingsSection/auditLogs.svg'
import systemsMessages from './assets/sideBarImages/settingsSection/systemMessages.svg'

/* bottom */
import logout from './assets/sideBarImages/logout.svg'



export const switchOrganizations = {
  icon: switchOrganizationIcon,
  route: routes.usersLink,
  text: 'Switch Organizations'
}
export const Dashboard = {
  icon: home,
  route: routes.usersLink,
  text: 'Dashboard'
}

export const customers = [
  {
    icon: users,
    route: routes.usersLink,
    text: "Users",
  },
  {
    icon: guarantors,
    route: routes.usersLink,
    text: "Guarantors",
  },
  {
    icon: loans,
    route: routes.usersLink,
    text: "Loans",
  },
  {
    icon: decisionModels,
    route: routes.usersLink,
    text: "Decision Models",
  },
  {
    icon: savings,
    route: routes.usersLink,
    text: "Savings",
  },
  {
    icon: loanRequest,
    route: routes.usersLink,
    text: "Loan Requests",
  },
  {
    icon: whiteList,
    route: routes.usersLink,
    text: "Whitelist",
  },
  {
    icon: karma,
    route: routes.usersLink,
    text: "Karma",
  },
];

export const businesses = [
  {
    icon: organization,
    route: routes.usersLink,
    text: "Organization",
  },
  {
    icon: loanProducts,
    route: routes.usersLink,
    text: "Loan Products",
  },
  {
    icon: savingsProduct,
    route: routes.usersLink,
    text: "Savings Product",
  },
  {
    icon: feesAndCharges,
    route: routes.usersLink,
    text: "Fees and Charges",
  },
  {
    icon: transaction,
    route: routes.usersLink,
    text: "Transactions",
  },
  {
    icon: services,
    route: routes.usersLink,
    text: "Services",
  },
  {
    icon: serviceAccount,
    route: routes.usersLink,
    text: "Service Account",
  },
  {
    icon: settlements,
    route: routes.usersLink,
    text: "Settlements",
  },
  {
    icon: reports,
    route: routes.usersLink,
    text: "Reports",
  },
]

export const settings = [
  {
    icon: preferences,
    route: routes.usersLink,
    text: "Preferences",
  },
  {
    icon: feesAndPricing,
    route: routes.usersLink,
    text: "Fess and Pricing",
  },
  {
    icon: auditLogs,
    route: routes.usersLink,
    text: "Audit Logs",
  },
  {
    icon: systemsMessages,
    route: routes.usersLink,
    text: "Systems Messages",
  },
]

export const logOut = {
  icon: logout,
  text: 'Logout'
}