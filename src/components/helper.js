export const validateEmail = (email) => {
  const verifyEmail = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
  if (verifyEmail) {
    return true;
  }
  return false;
};

export const validatePassword = (password) => {
  if (password.length >= 6) {
    return true;
  } return false;
};

export const validateInformation = (email, password) => {
  const answer = {
    status: false,
    message: ' ',
  };
  if (validateEmail(email) && validatePassword(password)) {
    answer.status = true;
    answer.message = 'It is a valid Email and Pasword';
  } else if (validateEmail(email) === false && validatePassword(password)) {
    answer.status = false;
    answer.message = 'Please enter a valid email. Example: name@hotmail.com';
  } else if (validateEmail(email) && validatePassword(password) === false) {
    answer.status = false;
    answer.message = 'The Password should contain at least 6 characters';
  }

  return answer;
};
// export const validateInformation = (email)
// if (email === '' || password === '' || username === '' || validateEmail(email)) {
