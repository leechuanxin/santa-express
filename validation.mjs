export const validateUserName = (userInfo) => {
  const regex = /^[a-z0-9_]+$/;
  const obj = {};
  if (!userInfo.username || userInfo.username.trim === '') {
    obj.username_invalid = 'Please enter a valid display username.';
  } else if (userInfo.username.length < 2 || userInfo.username.length > 20) {
    obj.username_invalid = 'Your username should only be 2 to 20 characters long.';
  } else if (userInfo.username.search(regex) === -1) {
    obj.username_invalid = 'Your username should only include lowercase alphanumeric characters, or underscores.';
  }
  return obj;
};

export const validateUserSettings = (userInfo) => ({
  ...userInfo,
  ...validateUserName(userInfo),
});
