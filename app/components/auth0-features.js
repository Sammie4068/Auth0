import { Auth0Feature } from "./auth0-feature";

export const Auth0Features = () => {
  const featuresList = [
    {
      title: "Course Management",
      description:
        "The student portal offers course management tools including Course Enrollment for registering for classes and viewing schedules, Course Materials for accessing syllabi, lecture notes, and assignments, Assignment Submission for submitting assignments and checking due dates, and a section for viewing Grades and Feedback.",
      resourceUrl: "/",
      icon: "https://res.cloudinary.com/okorosamuel/image/upload/v1721543336/certificate-quality-award-education-medal-svgrepo-com_pyoq25.svg",
    },
    {
      title: "Academic Resources",
      description:
        "Academic Resources include Library Access to digital resources like e-books and journals, and information about available Tutoring Services.",
      resourceUrl: "/",
      icon: "https://res.cloudinary.com/okorosamuel/image/upload/v1721543328/knowledge-book-education-learning-books-svgrepo-com_u3ttt4.svg",
    },
    {
      title: "Calendar and Scheduling",
      description:
        "The Calendar and Scheduling features offer an Academic Calendar showing important dates such as exam schedules and registration deadlines, and a Personal Calendar for managing personal schedules and reminders.",
      resourceUrl: "/",
      icon: "https://res.cloudinary.com/okorosamuel/image/upload/v1721543502/calendar-svgrepo-com_aq3j9o.svg",
    },
    {
      title: "Financial Services",
      description:
        "Financial Services sections allow students to view and pay tuition fees, check account balances, access payment history, apply for Financial Aid, and view financial aid awards.",
      resourceUrl: "/",
      icon: "https://res.cloudinary.com/okorosamuel/image/upload/v1721545382/financial-education_wj9tci.png",
    },
    {
      title: "Campus Life",
      description:
        "Campus Life information includes details on joining student clubs and organizations, viewing events, managing on-campus housing, viewing dining options, and checking meal plan balances.",
      resourceUrl: "/",
      icon: "https://res.cloudinary.com/okorosamuel/image/upload/v1721545986/university-campus-svgrepo-com_vnj3at.svg",
    },
    {
      title: "Support Services",
      description:
        "Support Services offer Technical Support for resolving portal-related issues, and information about Health and Wellness programs, including campus health services and counseling.",
      resourceUrl: "/",
      icon: "https://res.cloudinary.com/okorosamuel/image/upload/v1721546006/support-online-center-svgrepo-com_xxqypw.svg",
    },
  ];

  return (
    <div className="auth0-features">
      <h2 className="auth0-features__title">Explore Student Features</h2>
      <div className="auth0-features__grid">
        {featuresList.map((feature) => (
          <Auth0Feature
            key={feature.resourceUrl}
            title={feature.title}
            description={feature.description}
            resourceUrl={feature.resourceUrl}
            icon={feature.icon}
          />
        ))}
      </div>
    </div>
  );
};
