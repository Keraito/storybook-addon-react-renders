export const DIFF_TYPES = {
  UNAVOIDABLE: "unavoidable",
  SAME: "same",
  EQUAL: "equal",
  FUNCTIONS: "functions"
};

export const formatTitle = ({ name, type }) => {
  switch (type) {
    case DIFF_TYPES.SAME:
      return `${name}: Value is the same (equal by reference). Avoidable re-render`;
    case DIFF_TYPES.EQUAL:
      return `${name}: Value did not change, avoidable re-render`;
    case DIFF_TYPES.FUNCTIONS:
      return `${name}: Changes are in functions only. Possibly avoidable re-render`;
    default:
      return name;
  }
};
