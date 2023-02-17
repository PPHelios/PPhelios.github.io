import { useEffect, useCallback } from "react";
import { useStore } from "../../store/useStore";

export default function User() {
  const token = useStore((state) => state.loggedIn);
  const login = useStore((state) => state.login);

  const fetchUserDetails = useCallback(() => {
    fetch("http://localhost:8081/users/me", {
      method: "GET",
      credentials: "include",
      // Pass authentication token as bearer token in header
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.token}`,
      },
    }).then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        login({ details: data });
      } else {
        if (response.status === 401) {
          // Edge case: when the token has expired.
          // This could happen if the refreshToken calls have failed due to network error or
          // User has had the tab open from previous day and tries to click on the Fetch button
          window.location.reload();
        } else {
          login({ details: null });
        }
      }
    });
  }, [login, token]);

  useEffect(() => {
    // fetch only when user details are not present
    if (!token.details) {
      console.log(token);
      fetchUserDetails();
    }
  }, [token.details, fetchUserDetails]);

  const refetchHandler = () => {
    // set details to undefined so that spinner will be displayed and
    //  fetchUserDetails will be invoked from useEffect
    login({ details: undefined });
  };

  return token.details === null ? (
    "Error Loading User details"
  ) : !token.details ? (
    <h3>Loading...</h3>
  ) : (
    <div>
      <div>
        <div>
          <p>
            Welcome&nbsp;
            <strong>
              {token.details.firstName}
              {token.details.lastName && " " + token.details.lastName}
            </strong>
            !
          </p>
          <p>
            Your reward points: <strong>{token.details.points}</strong>
          </p>
        </div>
        <div>
          <button onClick={refetchHandler}> refresh</button>
        </div>
      </div>
    </div>
  );
}
