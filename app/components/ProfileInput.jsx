"use client"

import { useUser } from "@auth0/nextjs-auth0/client";

const ProfileInput = (props) => {
    const { user } = useUser();

  return (
    <div className="profile_field">
      <label htmlFor={props.id}>{props.name}</label>
      <input id={props.id} ref={props.ref} defaultValue={props.defaultValue}/>
    </div>
  );
};

export default ProfileInput;
