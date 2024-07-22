import Image from "next/image";
import { PageFooterHyperlink } from "./page-footer-hyperlink";

export const PageFooter = () => {
  const resourceList = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/",
      label: "About Us",
    },
    {
      path: "/",
      label: "Academic Calendar",
    },
    {
      path: "/",
      label: "Course Catalog",
    },
    {
      path: "/",
      label: "Admissions",
    },
    {
      path: "/",
      label: "Career Services",
    },
    {
      path: "/",
      label: "Student Support Services",
    },
  ];

  return (
    <footer className="page-footer">
      <div className="page-footer-grid">
        <div className="page-footer-grid__info">
          <div className="page-footer-info__message">
            <p className="page-footer-message__headline">
              <span>Beware that activities on this portal is being monitored for security reasons</span>
            </p>
            {/* <p className="page-footer-message__description">
              <PageFooterHyperlink path="https://auth0.com/docs/quickstarts/">
                <span>
                  Securely implement authentication using Auth0 on any stack and
                  any device&nbsp;
                </span>
                <u>in less than 10 minutes</u>
              </PageFooterHyperlink>
            </p> */}
          </div>
          <div className="page-footer-info__button">
            {/* <a
              id="create-account-button"
              className="button button--secondary"
              href="https://auth0.com/signup"
              target="_blank"
              rel="noreferrer noopener"
            >
              Create Free Auth0 Account
            </a> */}
          </div>
          <div className="page-footer-info__resource-list">
            {resourceList.map((resource) => (
              <div
                key={resource.label}
                className="page-footer-info__resource-list-item"
              >
                <PageFooterHyperlink path={resource.path}>
                  {resource.label}
                </PageFooterHyperlink>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </footer>
  );
};
