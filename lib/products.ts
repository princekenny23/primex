export type Product = {
  slug: string;
  name: string;
  shortMark: string;
  category: string;
  tagline: string;
  overview: string;
  audience: string;
  heroScreenshot?: { src: string; alt: string; caption: string };
  featureHeadline: string;
  featureIntro: string;
  features: string[];
  featureShowcase: {
    label: string;
    summary: string;
    title: string;
    description: string;
    screenshot?: { src: string; alt: string };
  }[];
  benefits: string[];
};

export const products: Product[] = [
  {
    slug: 'primepos',
    name: 'PrimePOS',
    shortMark: 'P',
    category: 'Retail & hospitality',
    tagline: 'Sales, stock and day-to-day operations in one clear view.',
    overview: 'PrimePOS helps retail and hospitality teams bring checkout, inventory and reporting into one connected workflow. Spend less time switching between tools and more time serving your customers.',
    audience: 'Retail shops, restaurants and growing multi-location businesses.',
    heroScreenshot: { src: '/primepos%20screenshots02/primepos%20screenshots/dash.png', alt: 'PrimePOS dashboard showing sales, expenses and outstanding credit for the selected outlet', caption: 'PrimePOS business dashboard' },
    featureHeadline: 'See the whole business, not just the sale.',
    featureIntro: 'From the counter to the back office, PrimePOS keeps your operation connected without making it feel complicated.',
    features: ['Fast, straightforward point of sale', 'Product and inventory tracking', 'Sales reports and business insights', 'Customer and staff management', 'Multi-location workflows', 'Flexible setup for your operation'],
    featureShowcase: [
      { label: 'Dashboard', summary: 'See the whole business', title: 'The whole business, clearly in view.', description: 'Bring sales, expenses and outstanding credit together in one view of your business.', screenshot: { src: '/primepos%20screenshots02/primepos%20screenshots/dash.png', alt: 'PrimePOS dashboard showing sales, expenses and outstanding credit for a selected outlet' } },
      { label: 'POS', summary: 'Sell faster', title: 'A cashier-first checkout that keeps every sale moving.', description: 'Ring up purchases, build the cart and keep checkout moving from one focused workspace.', screenshot: { src: '/primepos%20screenshots02/primepos%20screenshots/pos.png', alt: 'PrimePOS checkout screen with product catalogue and active cart' } },
      { label: 'Inventory', summary: 'Stay in control', title: 'Stay in control of every product.', description: 'Keep product records, stock levels and low-stock items visible to your team.', screenshot: { src: '/primepos%20screenshots02/primepos%20screenshots/inventory.png', alt: 'PrimePOS inventory screen showing products, categories and stock levels' } },
      { label: 'Reports', summary: 'See the signal', title: 'See the signal in your sales.', description: 'Review business performance, sales trends and key financial activity.', screenshot: { src: '/primepos%20screenshots02/primepos%20screenshots/sales%20insights.png', alt: 'PrimePOS sales report showing product sales insights' } },
      { label: 'Outlets', summary: 'One view', title: 'Every location in one view.', description: 'Manage your outlets and tills with a clearer picture of activity across locations.', screenshot: { src: '/primepos%20screenshots02/primepos%20screenshots/outlet-multi-branch.png', alt: 'PrimePOS outlets and tills management screen' } },
      { label: 'Customers', summary: 'Build relationships', title: 'Keep customer records close to every sale.', description: 'Access customer details, loyalty information and credit accounts from your operation.', screenshot: { src: '/primepos%20screenshots02/primepos%20screenshots/credit.png', alt: 'PrimePOS customer management screen with customer and credit details' } },
      { label: 'Hospitality', summary: 'Serve smoothly', title: 'Keep tables and tabs moving.', description: 'Organise table service, open tabs and orders for a smoother hospitality workflow.', screenshot: { src: '/primepos%20screenshots02/primepos%20screenshots/table.png', alt: 'PrimePOS table service screen showing occupied and available tables' } },
    ],
    benefits: ['See sales and stock more clearly', 'Keep daily operations moving smoothly', 'Make informed decisions with useful reports', 'Choose a subscription or one-time licence'],
  },
  {
    slug: 'primeschool',
    name: 'PrimeSchool',
    shortMark: 'S',
    category: 'Education',
    tagline: 'A more connected way to manage your school.',
    overview: 'PrimeSchool brings essential school administration into one organised place. Support your staff with connected information for learners, classes, attendance and school operations.',
    audience: 'Schools and education organisations seeking simpler administration.',
    featureHeadline: 'See the whole school, not just the classroom.',
    featureIntro: 'From learner records to attendance and reporting, PrimeSchool keeps your school operations connected and clear.',
    features: ['Learner and enrolment records', 'Class and term organisation', 'Attendance tracking', 'Staff and role management', 'School communications workflows', 'Administrative reporting'],
    featureShowcase: [
      { label: 'Learners', summary: 'Keep records organised', title: 'Every learner record, easier to find.', description: 'Keep enrolment and learner information organised for your school team.' },
      { label: 'Classes', summary: 'Organise each term', title: 'Bring classes and terms together.', description: 'Structure class and term information in one connected workspace.' },
      { label: 'Attendance', summary: 'Track participation', title: 'See attendance clearly.', description: 'Record learner attendance and make participation easier to follow.' },
      { label: 'Reports', summary: 'See school activity', title: 'Turn school activity into insight.', description: 'Review administrative information to support everyday planning.' },
    ],
    benefits: ['Keep important school information organised', 'Reduce repetitive administrative work', 'Make information easier for staff to access', 'Shape workflows around your school'],
  },
  {
    slug: 'gym-management-system',
    name: 'Gym Management System',
    shortMark: 'G',
    category: 'Fitness & wellbeing',
    tagline: 'Memberships, people and daily gym operations together.',
    overview: 'The Gym Management System gives fitness teams a structured way to manage memberships, attendance and member information. Spend less time juggling administration and more time building a great member experience.',
    audience: 'Gyms, fitness studios and membership-based wellness businesses.',
    heroScreenshot: { src: '/gym%20management%20screenshots/dashboard.png', alt: 'Gym Management System admin dashboard showing member, attendance, membership and revenue summaries', caption: 'Gym Management System admin dashboard' },
    featureHeadline: 'See the whole gym, not just the workout.',
    featureIntro: 'From the front desk to memberships and reports, keep your gym operations connected without adding complexity.',
    features: ['Member profiles and membership plans', 'Visit and attendance tracking', 'Renewal and expiry visibility', 'Staff and class organisation', 'Member communication workflows', 'Operational reports'],
    featureShowcase: [
      { label: 'Dashboard', summary: 'One clear overview', title: 'See the whole gym at a glance.', description: 'Track active members, attendance, payments and the daily health of your operation.', screenshot: { src: '/gym%20management%20screenshots/dashboard.png', alt: 'Gym Management System dashboard showing member, attendance and revenue summaries' } },
      { label: 'Members', summary: 'Look after your people', title: 'Make every member easy to look after.', description: 'Keep member profiles and account information organised for your team.', screenshot: { src: '/gym%20management%20screenshots/member%20dash%20portal.png', alt: 'Gym member portal overview showing the member account, membership and attendance shortcuts' } },
      { label: 'Memberships', summary: 'Plans and renewals', title: 'Keep plans and renewals in view.', description: 'Review membership history and follow up on renewals and expiries.', screenshot: { src: '/gym%20management%20screenshots/memberships%20member%20portal.png', alt: 'Gym member portal showing membership history and plan details' } },
      { label: 'Attendance', summary: 'Know who’s showing up', title: 'Know who’s showing up.', description: 'Record gym visits and review member check-ins and attendance history.', screenshot: { src: '/gym%20management%20screenshots/attendance.png', alt: 'Gym attendance management screen showing member check-in and attendance history' } },
      { label: 'Payments', summary: 'Track every payment', title: 'Keep payment activity organised.', description: 'Track member payments and make balances easier for staff to follow.', screenshot: { src: '/gym%20management%20screenshots/payments.png', alt: 'Gym Management System payments screen listing member transactions' } },
      { label: 'Reports', summary: 'See the bigger picture', title: 'Turn daily activity into a clearer picture.', description: 'Review attendance, revenue and operational summaries for your gym.', screenshot: { src: '/gym%20management%20screenshots/reports.png', alt: 'Gym operational reports with revenue and attendance summaries' } },
    ],
    benefits: ['Keep membership details in one place', 'Make renewals easier to follow up', 'Understand attendance patterns', 'Create workflows that suit your gym'],
  },
  {
    slug: 'primefit',
    name: 'PrimeFit',
    shortMark: 'F',
    category: 'Fitness & wellbeing',
    tagline: 'A focused fitness experience for your members and team.',
    overview: 'PrimeFit is a digital fitness solution designed to support the connection between your business and its members. Tell us how you work and we can tailor the experience to your services and goals.',
    audience: 'Fitness providers and businesses building digital wellness experiences.',
    featureHeadline: 'See the whole experience, not just the workout.',
    featureIntro: 'From member access to programmes and progress, PrimeFit connects the moving parts of your fitness service.',
    features: ['Member access and profiles', 'Fitness programme organisation', 'Progress and activity visibility', 'Flexible service configuration', 'Business and member workflows', 'Customisable to your needs'],
    featureShowcase: [
      { label: 'Members', summary: 'Connect with your people', title: 'A more connected member experience.', description: 'Organise member access and profiles around the services you offer.' },
      { label: 'Programmes', summary: 'Organise your offering', title: 'Bring fitness programmes together.', description: 'Keep programmes organised in a clear workflow for your team.' },
      { label: 'Progress', summary: 'Follow every milestone', title: 'Make activity easier to follow.', description: 'Keep member activity and progress visible as they work toward their goals.' },
      { label: 'Your service', summary: 'Work your way', title: 'Shape the experience around your business.', description: 'Configure workflows to fit your services and the way your business works.' },
    ],
    benefits: ['Offer members a more connected experience', 'Bring fitness services into a clear workflow', 'Adapt the platform as your offering grows', 'Discuss a subscription or tailored build'],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
