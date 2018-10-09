console.log(array);
const wrapperPhoto = document.querySelector(".wrapper-photo");
const wrapperInfo = document.querySelector(".wrapper-info");
const wrapperMain = document.querySelector(".wrapper-main");
const btnAdd = document.querySelector("#btnAdd");

const displayGallery = () => {
  wrapperPhoto.innerHTML = '';
  wrapperInfo.innerHTML = '';
  array.forEach((element, index) => {
    var divPhoto = document.createElement("div");
    var firstName = document.createElement("span");
    var test = document.createElement("div");
    var btn = document.createElement("button");
    btn.setAttribute("class", "btn")
    var pic = document.createElement("img");
    console.log(firstName);
    btn.textContent = element.firstName;
    pic.setAttribute('src', './images/' + element.src);
    divPhoto.appendChild(btn);
    divPhoto.appendChild(firstName);
    test.appendChild(pic);
    divPhoto.appendChild(test);
    divPhoto.style.position = "relative";
    wrapperPhoto.appendChild(divPhoto);
    wrapperMain.appendChild(wrapperPhoto);

    btn.onclick = function () {
      overlayDisplay(index);
    }
  });


  //console.log(displayInfo()) ;

};

displayGallery();

function nextPicture(i) {
  if (i == array.length - 1) {
    i = 0;
    overlayDisplay(i);
  } else {
    i++;
    console.log(i);
    overlayDisplay(i);
  }

}

function prevPicture(i) {
  if (i == 0) {
    i = array.length - 1;
    overlayDisplay(i);
  } else {
    i--;
    overlayDisplay(i);
  }
};

function overlayDisplay(index) {
  var pic = document.createElement("img");
  var divInfoz = document.getElementById("infoz");
  divInfoz.setAttribute("class", "divInfoz");
  divInfoz.innerHTML = '';
  divInfoz.style.display = "initial";
  var firstName = document.createElement("li");
  var lastName = document.createElement("li");
  var title = document.createElement("li");
  var nationality = document.createElement("li");
  var skills = document.createElement("li");
  pic.setAttribute('src', `./images/${array[index].src}`);
  var whySoftwareDeveloper = document.createElement("li");
  firstName.textContent = `First Name: ${array[index].firstName}`;
  lastName.textContent = `Last Name: ${array[index].lastName}`;
  title.textContent = `Title: ${array[index].title}`;
  nationality.textContent = `Nationality: ${array[index].nationality}`;
  skills.textContent = `Skills: ${array[index].skills}`;
  whySoftwareDeveloper.textContent = `Why Software Developer: ${array[index].whySoftwareDeveloper}`;
  var btnDelete = document.createElement("button");
  divInfoz.appendChild(btnDelete);
  divInfoz.appendChild(pic);
  divInfoz.appendChild(firstName);
  divInfoz.appendChild(lastName);
  divInfoz.appendChild(title);
  divInfoz.appendChild(nationality);
  divInfoz.appendChild(skills);
  divInfoz.appendChild(whySoftwareDeveloper);
  pic.style.cssFloat = "left";
  var btnNext = document.createElement("button");
  var btnBack = document.createElement("button");
  btnDelete.setAttribute("class", "btnDelete");
  btnDelete.textContent = "X";
  btnBack.textContent = "Previous";
  btnNext.textContent = "Next";
  btnNext.setAttribute("id", "btnNext");
  btnBack.setAttribute("id", "btnBack");
  btnNext.onclick = function () {
  nextPicture(index)
  };
  btnBack.onclick = function () {
    prevPicture(index)
  };
  divInfoz.appendChild(btnBack);
  divInfoz.appendChild(btnNext);
  
  
  btnDelete.addEventListener("click", function () {
    divInfoz.style.display = "none";
  });
}