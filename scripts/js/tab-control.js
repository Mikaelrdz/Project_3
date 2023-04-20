"use strict";
var timer;
(
  function(){
    document.getElementsByName("nav-home-overview")[0].classList.add('active');
    document.getElementsByName('nav-home')[0].classList.add('active');
    document.querySelectorAll('div[name="home"] .tab-content').forEach((e) => {
  e.style.display = "block";
});
    let home = document.querySelector('div[name="home"]');
    home.style.opacity = '0%'
    animOpacity(home, 500);
    document.querySelectorAll(".mtab").forEach((link) => {
      link.addEventListener("click", (event) => {
        if (event.target.tagName.toLowerCase() === "button") {
          changeTab(event.target);
        } else {
          changeTab(event.target.parentElement);
        }
      });
    });
  }
)()

function changeTab(tab) {
  var sel = document.getElementsByClassName("mtab active")[0];
  if (sel !== undefined && tab !== undefined && sel !== tab) {
    // Variables
    var sel_str = sel.getAttribute('name').split('-');
    var tab_str = tab.getAttribute('name').split('-');

    //Remove Actives
    sel.classList.remove("active");
    if(sel_str.length > 2) {
      if(sel_str[1] !== tab_str[1]) {
        document.getElementsByName(sel_str[0] + '-' + sel_str[1])[0].classList.remove('active');
      }
      if (sel_str[2] === 'overview') {
        document.querySelectorAll('div[name="' + sel_str[1] + '"] .tab-content').
      forEach((elem) => {
          elem.style.display = "none";
        });
      } else {
        document.getElementsByName(
          sel_str[1]+'-'+sel_str[2]
        )[0].style.display = "none";
      }
    } else {
      document.getElementsByName(
        sel_str[1]
      )[0].style.display = "none";
    }

    //Set new Actives
    tab.classList.add("active");
    if(tab_str.length > 2) {
      if(sel_str[1] !== tab_str[1]) {
        document.getElementsByName(tab_str[0] + '-' + tab_str[1])[0].classList.add('active');
      }
      if(tab_str[2] === 'overview') {
        var elms = document.querySelectorAll(
          'div[name="' + tab_str[1] + '"] .tab-content'
        );
        elms.forEach((e) => {
          e.style.display = "block";
        });
      } else {
        document.getElementsByName(tab_str[1]+'-'+tab_str[2])[0].style.display = 'block';
      }
    }
    var content = document.querySelector('div[name='+tab_str[1]+']');
    clearInterval(timer);
    content.style.opacity = "0%";
    content.style.display = "block";
    animOpacity(content, 1000);
  }
}

function animOpacity(obj, time) {
  let start = Date.now();
  timer = setInterval(function () {
    let timePassed = Date.now() - start;

    obj.style.opacity = (timePassed / time) * 100 + "%";

    if (timePassed > time) clearInterval(timer);
  }, 20);
}
