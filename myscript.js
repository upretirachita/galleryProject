console.log(array);
const wrapperPhoto = document.querySelector(".wrapper-photo");
const wrapperInfo = document.querySelector(".wrapper-info");
const wrapperMain = document.querySelector(".wrapper-main");
const btnAdd = document.querySelector("#btnAdd");

const displayGallery = () => {
  wrapperPhoto.innerHTML = '';
  wrapperInfo.innerHTML = '';
  array.forEach((element, index) => {
    let  divPhoto = document.createElement("div");
    let firstName = document.createElement("span");
    let test = document.createElement("div");
    let btn = document.createElement("button");
    btn.setAttribute("class", "btn")
    let pic = document.createElement("img");
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
  let pic = document.createElement("img");
  let divInfoz = document.getElementById("infoz");
  divInfoz.setAttribute("class", "divInfoz");
  let divInfozWrapper = document.createElement('div');
  divInfozWrapper.setAttribute("id", "divInfozWrapper");
  divInfoz.innerHTML = '';
  divInfoz.style.display = "initial";
  let firstName = document.createElement("li");
  let lastName = document.createElement("li");
  let title = document.createElement("li");
  let nationality = document.createElement("li");
  let skills = document.createElement("li");
  pic.setAttribute('src', `./images/${array[index].src}`);
  let whySoftwareDeveloper = document.createElement("li");
  let longTermVision = document.createElement("li");
  let motivatesMe = document.createElement("li");
  let favoriteQuote = document.createElement("li");
  let joinedOn = document.createElement("li");
  firstName.textContent = `First Name: ${array[index].firstName}`;
  lastName.textContent = `Last Name: ${array[index].lastName}`;
  title.textContent = `Title: ${array[index].title}`;
  nationality.textContent = `Nationality: ${array[index].nationality}`;
  skills.textContent = `Skills: ${array[index].skills}`;
  whySoftwareDeveloper.textContent = `Why Software Developer: ${array[index].whySoftwareDeveloper}`;
  longTermVision.textContent = `LongTermVision: ${array[index].longTermVision}`;
  motivatesMe.textContent = `MotivatesMe: ${array[index].motivatesMe}`;
  favoriteQuote.textContent = `FavoriteQuote: ${array[index].favoriteQuote}`;
  joinedOn.textContent = `JoinedOn: ${array[index].joinedOn}`;
  let btnDelete = document.createElement("button");
  divInfoz.appendChild(btnDelete);
  divInfoz.appendChild(pic);
  divInfoz.appendChild(divInfozWrapper);
  divInfozWrapper.appendChild(firstName);
  divInfozWrapper.appendChild(lastName);
  divInfozWrapper.appendChild(title);
  divInfozWrapper.appendChild(nationality);
  divInfozWrapper.appendChild(skills);
  divInfozWrapper.appendChild(whySoftwareDeveloper);
  divInfozWrapper.appendChild(longTermVision);
  divInfozWrapper.appendChild(motivatesMe);
  divInfozWrapper.appendChild(favoriteQuote);
  divInfozWrapper.appendChild(joinedOn);
  pic.style.cssFloat = "left";
  let btnNext = document.createElement("button");
  let btnBack = document.createElement("button");
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