export const cutOffContent = (rawContent) => {
  console.log("cutOffContent");
  var maxLength = 100;
  //trim the string to the maximum length
  var shortenedString = rawContent.substr(0, maxLength);

  //re-trim if we are in the middle of a word
  shortenedString = shortenedString.substr(
    0,
    Math.min(shortenedString.length, shortenedString.lastIndexOf(" "))
  );

  if (shortenedString.length < rawContent.length) shortenedString += "...";
  return shortenedString;
};
