"use client";

import React, { useRef, useEffect, useState } from "react";

import { useUser } from "@auth0/nextjs-auth0/client";
import { PageLayout } from "../components/page-layout";
import Image from "next/image";

const Profile = () => {
  const formRefs = useRef({});
  const [storedData, setStoredData] = useState({});
  const [saving, setSaving] = useState(false)
 
  useEffect(() => {
    const storedSurname = localStorage.getItem("surname");
    const storedFirstName = localStorage.getItem("firstname");
    const storedMiddleName = localStorage.getItem("middlename");
    const storedProgramme = localStorage.getItem("programme");
    const storedYearAdmitted = localStorage.getItem("yearAdmitted");
    const storedLevel = localStorage.getItem("level");
    const storedAddress = localStorage.getItem("address")
    const storedPhone = localStorage.getItem("phone")

  

    setStoredData({
      surname: storedSurname || "",
      firstname: storedFirstName || "",
      middlename: storedMiddleName || "",
      programme: storedProgramme || "",
      yearAdmitted: storedYearAdmitted || "",
      level: storedLevel || "",
      address: storedAddress || "",
      phone: storedPhone || "",
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const surname = formRefs.current["surname"].value;
    const firstname = formRefs.current["firstname"].value
    const middlename = formRefs.current["middlename"].value
    const programme = formRefs.current["programme"].value
    const yearAdmitted = formRefs.current["yearAdmitted"].value
    const level = formRefs.current["level"].value
    const address = formRefs.current["address"].value
    const phone = formRefs.current["phone"].value

    localStorage.setItem("surname", surname);
    localStorage.setItem("firstname", firstname);
    localStorage.setItem("middlename", middlename);
    localStorage.setItem("programme", programme);
    localStorage.setItem("yearAdmitted", yearAdmitted);
    localStorage.setItem("level", level);
    localStorage.setItem("address", address);
    localStorage.setItem("phone", phone);

    // console.log("User info saved to localStorage!");
    setSaving(true);

    setTimeout(() => {
      setSaving(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
      }, 2000);
  };

  const defaultPicture =
    "https://cdn.auth0.com/blog/hello-auth0/auth0-user.png";
  const { user } = useUser();

  if (!user) {
    return null;
  }

  return (
    <PageLayout>
      <div className="content-layout">
        <div className="content__body">
          <div className="profile-grid">
            <div className="profile__header">
              <Image
                src={user.picture || defaultPicture}
                alt="Profile"
                className="profile__avatar"
                width={80}
                height={80}
              />
              <div className="profile__headline">
                <h2 className="profile__title">{user.name}</h2>
                <span className="profile__description">{user.email}</span>
              </div>
            </div>
            <div className="profile__details">
              <form onSubmit={handleSubmit}>
                <div className="input-subs">
                  <div className="profile_field">
                    <label htmlFor={"surname"}>Surname</label>
                    <input
                      name="surname"
                      id="surname"
                      ref={(el) => (formRefs.current["surname"] = el)}
                      defaultValue={storedData.surname}
                    />
                  </div>

                  <div className="profile_field">
                    <label htmlFor={"firstname"}>First Name</label>
                    <input
                      name="firstname"
                      id="firstname"
                      ref={(el) => (formRefs.current["firstname"] = el)}
                      defaultValue={storedData.firstname}
                    />
                  </div>

                  <div className="profile_field">
                    <label htmlFor={"middlename"}>Middle Name</label>
                    <input
                      name="middlename"
                      id="middlename"
                      ref={(el) => (formRefs.current["middlename"] = el)}
                      defaultValue={storedData.middlename}
                    />
                  </div>
                </div>

                <div className="input-subs">
                  <div className="profile_field">
                    <label htmlFor={"programme"}>Programme</label>
                    <input
                      name="programme"
                      id="programme"
                      ref={(el) => (formRefs.current["programme"] = el)}
                      defaultValue={storedData.programme}
                    />
                  </div>

                  <div className="profile_field">
                    <label htmlFor={"yearAdmitted"}>Year Admitted</label>
                    <input
                      name="yearAdmitted"
                      id="yearAdmitted"
                      ref={(el) => (formRefs.current["yearAdmitted"] = el)}
                      defaultValue={storedData.yearAdmitted}
                    />
                  </div>

                  <div className="profile_field">
                    <label htmlFor={"level"}>Level</label>
                    <input
                      name="level"
                      id="level"
                      ref={(el) => (formRefs.current["level"] = el)}
                      defaultValue={storedData.level}
                    />
                  </div>
                </div>

                <div className="input-subs">
                  <div className="profile_field">
                    <label htmlFor={"address"}>Address</label>
                    <input
                      name="address"
                      id="address"
                      ref={(el) => (formRefs.current["address"] = el)}
                      defaultValue={storedData.address}
                    />
                  </div>

                  <div className="profile_field">
                    <label htmlFor={"phone"}>Phone</label>
                    <input
                      name="phone"
                      id="phone"
                      ref={(el) => (formRefs.current["phone"] = el)}
                      defaultValue={storedData.phone}
                    />
                  </div>
                </div>

                <div className="btn_wrapper">
                  <button className="button__save" disabled={saving}>{saving ? "Saving..." : "Save"}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Profile;
