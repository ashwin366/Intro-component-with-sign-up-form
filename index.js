var validate = document.querySelector(".submit-btn");
var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

validate.addEventListener("click", function() {

  var getInput = document.querySelectorAll(".text");
  var flag = 0;
  for (var i = 0; i < getInput.length; i++) {

    if (i === 2 && pattern.test(getInput[2].value) == false) {
      getInput[i].setAttribute("placeholder", "");
      getInput[i].classList.add("error");
      document.querySelectorAll(".demo")[2].innerHTML = "Looks like this is not an email";
      document.querySelectorAll(".demo")[i].style.display = "block";
    }

    else if (i === 2 && pattern.test(getInput[2].value) == true) {
      getInput[i].classList.remove("error");
      document.querySelectorAll(".demo")[i].style.display = "none";
      flag++;
    }

    else {
      if (getInput[i].value == "") {
        console.log(getInput[i].getAttribute("placeholder"));
        var text = "" + getInput[i].getAttribute("name") + " cannot be empty";
        getInput[i].setAttribute("placeholder", "");
        getInput[i].classList.add("error");
        document.querySelectorAll(".demo")[i].innerHTML = text;
        document.querySelectorAll(".demo")[i].style.display = "block";
      }

      else {
        getInput[i].classList.remove("error");
        document.querySelectorAll(".demo")[i].style.display = "none";
        flag++;
      }
    }
  }

  if (flag == 4) {
    alert("Your registration is success.");
    window.location.reload();
  }

})
