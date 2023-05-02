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
  route: routes.notImplemented,
  text: 'Switch Organizations'
}
export const Dashboard = {
  icon: home,
  route: routes.notImplemented,
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
    route: routes.notImplemented,
    text: "Guarantors",
  },
  {
    icon: loans,
    route: routes.notImplemented,
    text: "Loans",
  },
  {
    icon: decisionModels,
    route: routes.notImplemented,
    text: "Decision Models",
  },
  {
    icon: savings,
    route: routes.notImplemented,
    text: "Savings",
  },
  {
    icon: loanRequest,
    route: routes.notImplemented,
    text: "Loan Requests",
  },
  {
    icon: whiteList,
    route: routes.notImplemented,
    text: "Whitelist",
  },
  {
    icon: karma,
    route: routes.notImplemented,
    text: "Karma",
  },
];

export const businesses = [
  {
    icon: organization,
    route: routes.notImplemented,
    text: "Organization",
  },
  {
    icon: loanProducts,
    route: routes.notImplemented,
    text: "Loan Products",
  },
  {
    icon: savingsProduct,
    route: routes.notImplemented,
    text: "Savings Product",
  },
  {
    icon: feesAndCharges,
    route: routes.notImplemented,
    text: "Fees and Charges",
  },
  {
    icon: transaction,
    route: routes.notImplemented,
    text: "Transactions",
  },
  {
    icon: services,
    route: routes.notImplemented,
    text: "Services",
  },
  {
    icon: serviceAccount,
    route: routes.notImplemented,
    text: "Service Account",
  },
  {
    icon: settlements,
    route: routes.notImplemented,
    text: "Settlements",
  },
  {
    icon: reports,
    route: routes.notImplemented,
    text: "Reports",
  },
]

export const settings = [
  {
    icon: preferences,
    route: routes.notImplemented,
    text: "Preferences",
  },
  {
    icon: feesAndPricing,
    route: routes.notImplemented,
    text: "Fess and Pricing",
  },
  {
    icon: auditLogs,
    route: routes.notImplemented,
    text: "Audit Logs",
  },
  {
    icon: systemsMessages,
    route: routes.notImplemented,
    text: "Systems Messages",
  },
]

export const logOut = {
  icon: logout,
  text: 'Logout'
}