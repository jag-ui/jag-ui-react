import { props as systemProps } from "@styled-system/should-forward-prop";
const rebassProps = [...systemProps, "sx", "variant"];

export const getProps = (test) => (props) => {
  const next = {};
  for (const key in props) {
    if (test(key || "")) next[key] = props[key];
  }
  return next;
};

const MRE = /^m[trblxy]?$/;

export const getMargin = getProps((k) => MRE.test(k));
export const omitMargin = getProps((k) => !MRE.test(k));

const PRE = new RegExp(`^(${rebassProps.join("|")})$`);
export const getSystemProps = getProps((k) => PRE.test(k));
