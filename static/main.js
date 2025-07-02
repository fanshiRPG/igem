if(typeof web_page=="undefined")
    {
    const linear = document.querySelector(".linear");
    
      
    const UP = 1;
    const DOWN = -1;
    
    let up_btn_direction = DOWN;
    
    //鏁翠綋椤甸潰鐨勭Щ鍔�
    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    const stopThen = function (ms, func) {
      sleep(ms).then(() => {
        func();
      });
    };
    
    //
    
    //鎺у埗鍚戜笂绉诲姩鐨勬寜閽� up-btn
    
    if (up_btn) {
      const web_move_func = function () {
        document.body.style.overflow = "auto";
      };
    
      document.addEventListener("wheel", function (e) {
        // console.log(window.pageYOffset, window.scrollY);
        // both useful?
        if (e.deltaY > 0 && window.pageYOffset < header.offsetHeight) {
          up_btn_direction = UP;
          up_btn.classList.remove("up-btn-rotate");
          stopThen(1000, web_move_func);
          if (main_bg) {
            main_bg.style.opacity = 1;
          }
         
          main_item.classList.add("web-move");
          if (main_left) {
            main_left.classList.add("main-left-move");
          }
          if (main_right) {
            main_right.classList.add("main-right-move");
          }
        }
      });
      const margin_bug_list = document.querySelectorAll(".margin-bug");
      for (let i = 0; i < margin_bug_list.length; i++) {
        let margin_bug_item_son = document.createElement("div");
        margin_bug_item_son.classList.add("margin-bug-son");
        margin_bug_list[i].prepend(margin_bug_item_son);
      }
    
      up_btn.onclick = function () {
        {
          if (up_btn_direction == UP) {
            document.body.style.overflow = "hidden";
            if (main_bg) {
              main_bg.style.opacity = 0;
            }
            main_item.classList.remove("web-move");
            
            if (main_left) {
              main_left.classList.remove("main-left-move");
            }
            if (main_right) {
              main_right.classList.remove("main-right-move");
            }
    
            up_btn.classList.add("up-btn-rotate");
            up_btn_direction = DOWN;
    
            header.scrollIntoView({
              block: "end",
            });
          } else {
            document.body.style.overflow = "auto";
            if (main_bg) {
              main_bg.style.opacity = 1;
            }
    
            main_item.classList.add("web-move");
            if (main_left) {
              main_left.classList.add("main-left-move");
            }
            if (main_right) {
              main_right.classList.add("main-right-move");
            }
            up_btn.classList.remove("up-btn-rotate");
            up_btn_direction = UP;
            header.scrollIntoView({
              block: "end",
            });
          }
        }
      };
    }
    //璁剧疆涓嬫媺鐗规晥
    // let drop_btn_list = document.querySelectorAll(".drop-btn");
    // let drop_container_list = document.querySelectorAll(".drop-container");
    // let drop_statue_list = [];
    // drop_btn_list.forEach((item, index) => {
    //   drop_statue_list.push(0);
    //   item.onclick = function () {
    //     if (drop_statue_list[index] % 2 == 0) {
    //       drop_statue_list[index] += 1;
    //       item.classList.add("drop-btn-open");
    //       drop_container_list[index].classList.add("drop-container-open");
    //     } else {
    //       drop_statue_list[index] += 1;
    //       item.classList.remove("drop-btn-open");
    //       drop_container_list[index].classList.remove("drop-container-open");
    //       item.scrollIntoView({ behavior: "smooth", block: "start" });
    //     }
    //   };
    // });
    
    //鏍囬璺宠浆
    if (typeof leftsidenav_list != "undefined") {
      let cur_part_index = 0;
      const nav_title_2_boundary = [];
      nav_title_1_list.forEach((btn, index) => {
        btn.onclick = function () {
          part_title_1_list[index].scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        };
      });
      nav_title_2_list.forEach((btn, index) => {
        btn.onclick = function () {
          part_title_2[index].scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        };
      });
    }
    
    //loading-ani
    const loading_container = document.querySelector(".loading-container");
    const loading_item = document.querySelector(".loading");
    
    loading_item.classList.add("loading-move-1");
    document.body.classList.add("loading-body");
    const loading_ani = function () {
      // loading_container.classList.add("loading-move-2");
      loading_container.style.display = "none";
      document.body.classList.remove("loading-body");
    };
    const header_item = document.querySelector(".header");
    window.onload = function () {
      header_item.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      stopThen(1000, loading_ani);
    };
    
    const reference_title = document.querySelector(".reference");
    if (typeof reference_title != "undefined") {
      let reference_list;
      reference_list = document.querySelectorAll(".reference + .part > .part-text");
      if (reference_list.length == 0) {
        reference_list = document.querySelectorAll(
          ".reference + .reference-box > .part-text"
        );
      }
    
      reference_list.forEach((item, index) => {
        let temp_string = "[" + (index + 1) + "] ";
        console.log(typeof temp_string);
        item.style.setProperty("--re", `'${temp_string}'`);
      });
    }
    }
    
    
    
    