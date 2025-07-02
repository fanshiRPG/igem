const reFontSize = function () {
    let home_p_list = document.querySelectorAll(".home-p");
    home_p_list.forEach((p, index) => {
      let font_size = 1;
      p.style.fontSize = font_size + "px";
      while (p.offsetHeight < p.parentNode.offsetHeight) {
        font_size += 2;
        p.style.fontSize = font_size + "px";
      }
      font_size -= 2;
      p.style.fontSize = font_size + "px";
    });
  };
  const animationRepeat = function () {
    let el = arguments[0];
    var newone = el.cloneNode(true);
    el.parentNode.replaceChild(newone, el);
    return el;
  };
  // let test = 1;
  let test = 0;
  let page_15 = document.querySelector(".page-15");
  
  const test_web = function () {
    test = 1;
    document.body.style.overflow = "auto";
  };
  
  let AjustWindowSize = function () {
    let standard_width = 1707;
    let standard_height = 932;
    let H_over_W = standard_height / standard_width;
    let home_page_list = document.querySelectorAll(".home-page");
    let home_page = document.querySelector(".home-page");
    let user_width = home_page.offsetWidth;
    let user_height = home_page.offsetHeight;
    let result_width;
    let result_height;
    if (user_height / user_width > H_over_W) {
      home_page_list.forEach((item, index) => {
        result_width = user_width;
        result_height = user_width * H_over_W;
        item.style.width = result_width + "px";
        item.style.height = result_height + "px";
        // if (index == 0) {
        //   // item.style.top = (user_height - user_width * H_over_W) / 2 + "px";
        // } else {
        //   item.style.top =
        //     ((user_height - user_width * H_over_W) / 2) * (2 * index - 1) + "px";
        // }
      });
      page_15.style.marginBottom = "0px"
    } else {
      home_page_list.forEach((item, index) => {
        result_width = user_height / H_over_W;
        result_height = user_height;
        if (index != 0) {
          item.style.width = result_width + "px";
          item.style.height = result_height + "px";
  
          item.style.left = (user_width - user_height / H_over_W) / 2 + "px";
        }
      });
    }
    page_15.style.marginBottom = `${-0.5 * user_height}` + "px";
  
    // let mir_210 = document.querySelector(".page-7 > .item-3");
    // mir_210.style.setProperty("--x31", `${0.31 * result_width}` + "px");
    // mir_210.style.setProperty("--x08", `${-0.08 * result_width}` + "px");
    // mir_210.style.setProperty("--x020", `${-0.2 * result_width}` + "px");
    // mir_210.style.setProperty("--y39", `${0.39 * result_height}` + "px");
    // mir_210.style.setProperty("--y15", `${-0.15 * result_height}` + "px");
    // mir_210.style.setProperty("--y043", `${-0.43 * result_height}` + "px");
    console.log("AjustWindowSize");
  };
  AjustWindowSize();
  reFontSize();
  
  window.addEventListener("resize", function () {
    AjustWindowSize();
    reFontSize();
  });
  
  // function isMobile() {
  //   const userAgent = navigator.userAgent;
  //   const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i;
  //   return mobileRegex.test(userAgent);
  // }
  // if(isMobile)
  // {
  //   let home_page_list  = document.querySelectorAll('.home-page');
  //   test_web();
  // }
    // test_web();
  
  if (!test) {
    const take_place_func = function () {
      console.log("Take the place");
    };
  
    let page_height = document.querySelector(".home-page").offsetHeight;
    let home_container = document.querySelector(".home-container");
    const page_up = function () {
      let home_container_style = getComputedStyle(home_container);
      let temp_value = Number(home_container_style.marginTop.slice(0, -2));
      home_container.style.marginTop = temp_value - page_height + "px";
    };
    const page_down = function () {
      let home_container_style = getComputedStyle(home_container);
      let temp_value = Number(home_container_style.marginTop.slice(0, -2));
      home_container.style.marginTop = temp_value + page_height + "px";
    };
    let item_ani_11_list = document.querySelectorAll(".ani-11");
    item_ani_11_list.forEach((item) => {
      item.style.display = "none";
    });
    let item_ani_12_list = document.querySelectorAll(".ani-12");
    item_ani_12_list.forEach((item) => {
      item.style.display = "none";
    });
    let command_index = 1;
    let command_list = [take_place_func, take_place_func];
    let cur_func = command_list[command_index];
    let nodown_list = [6, 11, 12, 18, 19, 20, 22];
    let noup_list = [0, 5, 10, 11, 17, 18, 19];
  
    cur_func();
    //create command
    for (let i = 2; i <= 21; i++) {
      let cur_command = function () {
        let ani_item_list = document.querySelectorAll(`.ani-${i}`);
  
        ani_item_list.forEach((item) => {
          animationRepeat(item);
        });
      };
      command_list.push(cur_command);
    }
    command_list.push(take_place_func);
    console.log(command_list);
    function handleWheel(e) {
      document.body.removeEventListener("wheel", handleWheel);
      if (e.deltaY < 0) {
        // back
        command_index--;
        console.log(command_index);
        let up_judge = 1;
        noup_list.forEach((item) => {
          if (item == command_index) {
            up_judge = 0;
          }
        });
        if (up_judge) {
          page_down();
        }
  
        if (command_index == 5) {
          let people_container = document.querySelector(".people-container");
          let people_container_2 = document.querySelector(".people-container-2");
          people_container.style.left = "0vw";
          people_container_2.style.left = "100vw";
        }
        if (command_index == 10) {
          let item_ani_11_list = document.querySelectorAll(".ani-11");
          item_ani_11_list.forEach((item) => {
            item.style.display = "none";
          });
  
          let item_ani_10_list = document.querySelectorAll(".ani-10");
          item_ani_10_list.forEach((item) => {
            item.style.display = "block";
          });
        }
        if (command_index == 11) {
          let item_ani_12_list = document.querySelectorAll(".ani-12");
          item_ani_12_list.forEach((item) => {
            item.style.display = "none";
          });
  
          let item_ani_11_list = document.querySelectorAll(".ani-11");
          item_ani_11_list.forEach((item) => {
            item.style.display = "block";
          });
        }
  
        if (command_index == 17) {
          let item_ani_18_list = document.querySelectorAll(".ani-18");
          item_ani_18_list.forEach((item) => {
            item.style.display = "none";
          });
  
          let item_ani_17_list = document.querySelectorAll(".ani-17");
          item_ani_17_list.forEach((item) => {
            item.style.display = "block";
          });
        }
        if (command_index == 18) {
          let item_ani_19_list = document.querySelectorAll(".ani-19");
          item_ani_19_list.forEach((item) => {
            item.style.display = "none";
          });
  
          let item_ani_18_list = document.querySelectorAll(".ani-18");
          item_ani_18_list.forEach((item) => {
            item.style.display = "block";
          });
        }
        if (command_index == 19) {
          let item_ani_20_list = document.querySelectorAll(".ani-20");
          item_ani_20_list.forEach((item) => {
            item.style.display = "none";
          });
  
          let item_ani_19_list = document.querySelectorAll(".ani-19");
          item_ani_19_list.forEach((item) => {
            item.style.display = "block";
          });
        }
      } else {
        //go ahead
        command_index++;
        let down_judge = 1;
        nodown_list.forEach((item) => {
          if (item == command_index) {
            down_judge = 0;
          }
        });
        console.log(command_index, down_judge);
  
        if (down_judge) {
          page_up();
        }
  
        if (command_index == 6) {
          let people_container = document.querySelector(".people-container");
          let people_container_2 = document.querySelector(".people-container-2");
          people_container.style.left = "-100vw";
          people_container_2.style.left = "0vw";
          console.log("www");
        }
        if (command_index == 11) {
          let item_ani_10_list = document.querySelectorAll(".ani-10");
          item_ani_10_list.forEach((item) => {
            item.style.display = "none";
          });
  
          let item_ani_11_list = document.querySelectorAll(".ani-11");
          item_ani_11_list.forEach((item) => {
            item.style.display = "block";
          });
        }
        if (command_index == 12) {
          let item_ani_11_list = document.querySelectorAll(".ani-11");
          item_ani_11_list.forEach((item) => {
            item.style.display = "none";
          });
  
          let item_ani_12_list = document.querySelectorAll(".ani-12");
          item_ani_12_list.forEach((item) => {
            item.style.display = "block";
          });
        }
  
        if (command_index == 18) {
          let item_ani_17_list = document.querySelectorAll(".ani-17");
          item_ani_17_list.forEach((item) => {
            item.style.display = "none";
          });
  
          let item_ani_18_list = document.querySelectorAll(".ani-18");
          item_ani_18_list.forEach((item) => {
            item.style.display = "block";
          });
        }
        if (command_index == 19) {
          let item_ani_18_list = document.querySelectorAll(".ani-18");
          item_ani_18_list.forEach((item) => {
            item.style.display = "none";
          });
  
          let item_ani_19_list = document.querySelectorAll(".ani-19");
          item_ani_19_list.forEach((item) => {
            item.style.display = "block";
          });
        }
        if (command_index == 20) {
          let item_ani_19_list = document.querySelectorAll(".ani-19");
          item_ani_19_list.forEach((item) => {
            item.style.display = "none";
          });
  
          let item_ani_20_list = document.querySelectorAll(".ani-20");
          item_ani_20_list.forEach((item) => {
            item.style.display = "block";
          });
        }
      }
  
      let cur_func = command_list[command_index];
      cur_func();
      if (command_index == 0) {
        command_index = 1;
      }
      if (command_index == 22) {
        command_index = 21;
      }
      setTimeout(() => {
        document.body.addEventListener("wheel", handleWheel);
      }, 1000); // return event after 1 second
    }
  
    document.body.addEventListener("wheel", handleWheel);
  }
  
  const btn_1 = document.querySelector(".page-15 > .item-2");
  console.log(btn_1);
  btn_1.onclick = function () {
    window.location.href = "https://2024.igem.wiki/cjuh-jlu-china/design";
  };
  const btn_2 = document.querySelector(".page-15 > .item-3");
  btn_2.onclick = function () {
    window.location.href = "https://2024.igem.wiki/cjuh-jlu-china/results";
  };
  
  const btn_3 = document.querySelector(".page-15 > .item-4");
  btn_3.onclick = function () {
    window.location.href = "https://2024.igem.wiki/cjuh-jlu-china/engineering";
  };
  
  const btn_4 = document.querySelector(".page-15 > .item-5");
  btn_4.onclick = function () {
    window.location.href = "https://2024.igem.wiki/cjuh-jlu-china/model";
  };
  
  const btn_5 = document.querySelector(".page-15 > .item-6");
  btn_5.onclick = function () {
    window.location.href =
      "https://2024.igem.wiki/cjuh-jlu-china/human-practices";
  };
  
  const btn_6 = document.querySelector(".page-15 > .item-7");
  btn_6.onclick = function () {
    window.location.href = "https://2024.igem.wiki/cjuh-jlu-china/education";
  };
  
  document.onclick = function (e) {
    console.log(e.target);
  };
  
  let type_out = document.querySelector('.page-4 > .item-7 > .type-out');
  type_out.style.lineHeight = type_out.offsetHeight + 'px';
  
  
  let prize_container = document.querySelector(".prize-container");
  console.log(prize_container);
  let prize_btn = document.querySelector(".prize-btn");