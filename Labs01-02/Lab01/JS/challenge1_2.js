let markW = document.getElementById("markW");
let markH = document.getElementById("markH");
let joinW = document.getElementById("joinW");
let joinH = document.getElementById("joinH");
let rs = document.getElementById("result");
let compare = document.getElementById("submit");
let BMI = (weigth, height) => {
  return weigth / (height * height);
};
compare.onclick = () => {
  let mark = BMI(markW.value, markH.value);
  let join = BMI(joinW.value, joinH.value);
  let markHigherBMI = mark > join;
  rs.innerHTML = "Result Mark's BMI Getter Than Join's BMI: " + markHigherBMI;
  console.log("Challenge 2 : Print to the console which BMI is higher");
  markHigherBMI
    ? console.log(
        "Mark's BMI(" + mark + ") is higher than Join's BMI(" + mark + ")"
      )
    : console.log(
        "Mark's BMI(" + mark + ") is lower than Join's BMI(" + mark + ")"
      );
};
