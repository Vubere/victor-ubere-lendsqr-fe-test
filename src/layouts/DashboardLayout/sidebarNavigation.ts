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
  route: routes.dashboard,
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
    route: routes.guarantorsLink,
    text: "Guarantors",
  },
  {
    icon: loans,
    route: routes.loansLink,
    text: "Loans",
  },
  {
    icon: decisionModels,
    route: routes.decisionModelsLink,
    text: "Decision Models",
  },
  {
    icon: savings,
    route: routes.savingsLink,
    text: "Savings",
  },
  {
    icon: loanRequest,
    route: routes.loanRequestLink,
    text: "Loan Requests",
  },
  {
    icon: whiteList,
    route: routes.whiteListLink,
    text: "Whitelist",
  },
  {
    icon: karma,
    route: routes.karmaLink,
    text: "Karma",
  },
];

export const businesses = [
  {
    icon: organization,
    route: routes.organizationLink,
    text: "Organization",
  },
  {
    icon: loanProducts,
    route: routes.loanProductsLink,
    text: "Loan Products",
  },
  {
    icon: savingsProduct,
    route: routes.savingsProductsLink,
    text: "Savings Product",
  },
  {
    icon: feesAndCharges,
    route: routes.feesAndChargesLink,
    text: "Fees and Charges",
  },
  {
    icon: transaction,
    route: routes.transactionLinks,
    text: "Transactions",
  },
  {
    icon: services,
    route: routes.servicesLink,
    text: "Services",
  },
  {
    icon: serviceAccount,
    route: routes.serviceAccountsLink,
    text: "Service Account",
  },
  {
    icon: settlements,
    route: routes.settlementsLink,
    text: "Settlements",
  },
  {
    icon: reports,
    route: routes.reportsLink,
    text: "Reports",
  },
]

export const settings = [
  {
    icon: preferences,
    route: routes.preferencesLink,
    text: "Preferences",
  },
  {
    icon: feesAndPricing,
    route: routes.feesAndPricingLink,
    text: "Fess and Pricing",
  },
  {
    icon: auditLogs,
    route: routes.auditLogsLink,
    text: "Audit Logs",
  },
  {
    icon: systemsMessages,
    route: routes.systemMessagesLink,
    text: "Systems Messages",
  },
]

export const logOut = {
  icon: logout,
  text: 'Logout'
}