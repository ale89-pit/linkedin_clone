import { async } from "q";

const API_URL_PROFILES = "https://striveschool-api.herokuapp.com/api/profile/";

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
    key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlYWNlY2ZjYTEyOTAwMTQ0MGMwZjEiLCJpYXQiOjE2ODE4MjkxMDAsImV4cCI6MTY4MzAzODcwMH0.DZvdaOSboeqiJ7sAs-9zvB1PtS14FVDZMiH53fK-i1s",
  },
  {
    userName: "Davide",
    password: "davide",
    key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNjZjYzZTE4NmE4NzAwMTQzODY3YmQiLCJpYXQiOjE2ODE3MTY3OTgsImV4cCI6MTY4MjkyNjM5OH0.bSwIRR4GF21LG6XvgnbmmW_T7fLNOrWmMJCGxDVIYZE",
  },
  {
    userName: "Federico",
    password: "federico",
    key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlYWRhMmZjYTEyOTAwMTQ0MGMwZjQiLCJpYXQiOjE2ODE4MjkyODIsImV4cCI6MTY4MzAzODg4Mn0._I-QvA_DTCaHtHLrPkNPHWf8KUJxyngghrMwxZ2NIog",
  },
];
//Fomr Experience
//Action Form New Experience
export const ADD_ROLE = "ADD_ROLE";
export const ADD_COMPANY = "ADD_COMPANY";
export const ADD_DESCRIPTION = "ADD_DESCRIPTION";
export const ADD_START_DATE = "ADD_START_DATE";
export const ADD_END_DATE = "ADD_END_DATE";
export const ADD_AREA = "ADD_AREA";
export const ADD_SINGLE_EXP = "ADD_SINGLE_EXP";
//Fine action form
export const handleNewRole = (role) => {
  return {
    type: ADD_ROLE,
    payload: role,
  };
};
export const handleCompany = (company) => {
  return {
    type: ADD_COMPANY,
    payload: company,
  };
};
export const handleStartDate = (startDate) => {
  return {
    type: ADD_START_DATE,
    payload: startDate,
  };
};
export const handlleDescription = (descr) => {
  return {
    type: ADD_DESCRIPTION,
    payload: descr,
  };
};
export const handleEndDate = (endDate) => {
  return {
    type: ADD_END_DATE,
    payload: endDate,
  };
};
export const handleArea = (area) => {
  return {
    type: ADD_AREA,
    payload: area,
  };
};
export const addSingleExp = (singlexp) => {
  return {
    type: ADD_SINGLE_EXP,
    payload: singlexp,
  };
};
export const postNewExpeThunk = (exp, userid, user) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(API_URL_PROFILES + userid + "/experiences", {
        method: "POST",
        body: JSON.stringify(exp),
        headers: {
          Authorization: "Bearer " + team.find((u) => u.userName === user).key,
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (resp.ok) {
        let newExpe = await resp.json();
        console.log(newExpe);
      }
    } catch (error) {}
  };
};

export const delExpThunk = (userId, expId, user) => {
  return async (dispatch, getStae) => {
    try {
      let resp = await fetch(
        `
        https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId} `,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer " + team.find((u) => u.userName === user).key,
          },
        }
      );
      if (resp.ok) {
        alert("Experience delete");
      } else {
        alert("Eliminazione fallita");
      }
    } catch (error) {}
  };
};
