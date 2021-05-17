module.exports.validateRegisterInput = (
  username,
  email,
  password,
  confirmPassword
) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "Username must not be empty, abey username dal chutiye";
  }
  if (email.trim() === "") {
    errors.email = "Email must not be empty, abey chutiye Email enter kar";
  } else {
    const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.email =
        "Email must be a valid email address, abey yedi gaand valid email enter kar";
    }
    if (password === "") {
      errors.password =
        "Password must not be empty, Password bhi blank chood diya BC";
    } else if (password !== confirmPassword) {
      errors.confirmPassword =
        "Passwords must match, ABEY chutiye same password bhi enter nahi kar sakta kya tu 😠 ";
    }
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports.validateLoginInput = (username, password) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "Username must not be empty, username enter kar ba";
  }
  if (password.trim() === "") {
    errors.password = "Password must not be empty, katai chutiye insaan ho aap";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
