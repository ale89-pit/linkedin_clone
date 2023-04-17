const API_URL_PROFILES = "https://striveschool-api.herokuapp.com/api/profile/";
export const GET_PROFILES = "GET_PROFILES";
export const GET_ALLPROFILES = "GET_ALLPROFILES";
const team = [
  {
    userName: "Gabriele",
    password: "gabriele",
    key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNjZjRkZDE4NmE4NzAwMTQzODY3YmIiLCJpYXQiOjE2ODE3MTY0NDUsImV4cCI6MTY4MjkyNjA0NX0.oOR7DIMKZCxaZkYvBIWTwTda1oeRSWQp4XQEkS5X_Hw",
  },
  {
    userName: "AlessioP",
    password: "alessiop",
    key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNjZjU1NDE4NmE4NzAwMTQzODY3YmMiLCJpYXQiOjE2ODE3MTY1NjQsImV4cCI6MTY4MjkyNjE2NH0.L5-SuknkVHJgea3WZ5Vy9ITPkNgEyTWCd3PUBLuJjSk",
  },
  {
    userName: "AlessioF",
    password: "alessiof",
    key: "chiave Alessio F",
  },
  {
    userName: "Davide",
    password: "davide",
    key: "chiave Davide",
  },
  {
    userName: "Federico",
    password: "federico",
    key: "chiave Federico",
  },
];

export const profileThunk = (user) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(API_URL_PROFILES + "me", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + team.find((u) => u.userName === user).key,
        },
      });
      if (response.ok) {
        const profileData = await response.json();
        console.log(profileData, getState);
        dispatch({
          type: GET_PROFILES,
          payload: profileData,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const allProfilesThunk = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(API_URL_PROFILES, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + team.alessiop.key,
        },
      });
      if (response.ok) {
        const profiles = await response.json();
        console.log(profiles, getState);
        dispatch({
          type: GET_ALLPROFILES,
          payload: profiles,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
