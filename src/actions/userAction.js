export function fetchUser() {
  return {
    type: "FETCH_USER",
    payload: {
      name: "WIll",
      age: 35
    }
  };
}

export function setUserName(name) {
  return {
    type: "SET_SER_NAME",
    payload: name
  };
}

export function setUserAge(age) {
  return {
    type: "SET_USER_AGE",
    payload: age
  };
}
