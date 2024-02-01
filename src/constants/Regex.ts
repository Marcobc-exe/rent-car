const NAME_ES_REGEX = new RegExp(
  /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/
);

const RUT_REGEX = new RegExp(/^(\d{1,2}(?:[\.]?\d{3}){2}-[\dkK])$/);

export { NAME_ES_REGEX, RUT_REGEX };
