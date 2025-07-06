export function isEmail(value) {
  console.log("email check :", value.includes("@"));
  return value.includes("@");
}

export function isNotEmpty(value) {
  console.log("check empty :", value.trim() !== "");

  return value.trim() !== "";
}

export function hasMinLength(value, minLength) {
  return value.length >= minLength;
}

export function isEqualsToOtherValue(value, otherValue) {
  return value === otherValue;
}
