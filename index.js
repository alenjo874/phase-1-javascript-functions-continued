function saturdayFun(string = "roller-skate") {
  return `This Saturday, I want to ${string}!`;
}

let mondayWork = function (string = "go to the office") {
  return `This Monday, I will ${string}.`;
};

mondayWork(string);

function wrapAdjective(string) {
  const innerFunction = function (name = "special") {
    return `You are ${string}${name}${string}!`;
  };
  return innerFunction;
}
