let container = document.getElementById("container");
let result = document.getElementById("submit");
let dol = document.getElementById("dol");
let koa = document.getElementById("koa");
let arrDol = dol.value.split(",");
let arrKoa = koa.value.split(",");
let avgDol = arrDol.reduce((a, b) => parseInt(a) + parseInt(b)) / arrDol.length;
let avgKoa = arrKoa.reduce((a, b) => parseInt(a) + parseInt(b)) / arrKoa.length;
let check = (avgDol, avgKoa) => {
  if (avgDol < 100 & avgKoa < 100) {
    return "No one is winner";
  }else if (avgDol > avgKoa) {
    return "Dolphins is winner";
  }else if (avgDol < avgKoa) {
    return "Koalas is winner";
  }else {
    return "Draw";
  }
};
result.onclick = () => {
  container.append(document.createTextNode(check(avgDol, avgKoa)));
}
