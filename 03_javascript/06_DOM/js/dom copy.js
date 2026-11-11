//

//
document.getElementById("example_id").style.color = "red";

//
document.getElementsByClassName("example_class")[0].style.color = "blue";
document.getElementsByClassName("example_class")[1].style.color = "purple";

//
document.getElementsByClassName("example_class")[1].setAttribute("data-id", "text-data");

//
document.getElementsByClassName("p")[0].style.backgrondcoler = "pink";
document.getElementsByClassName("p")[1].setAttribute("date-id", "text-data");
document.getElementsByClassName("p")[1].classList.add("test_color");

document.querySelector(".text_class").removeAttribute("type");
document.querySelector(".text_class").setAttribute("id", "data_id");

document.querySelector(".test_class").removeAttribute("type");
document.querySelector(".test_class").setAttribute("id", "data_id");

document.querySelectorAll(['data-id="test'])[1].setAttribute("id", "yul");
