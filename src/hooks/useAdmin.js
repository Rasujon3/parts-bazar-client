import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    const email = user?.email;
    const url = `https://sujon-assignment12-parts-bazar.herokuapp.com/admin/${email}`;
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAdmin(data.admin);
        setAdminLoading(false);
      });
  }, [user]);
  return [admin, adminLoading];
};

export default useAdmin;
