const myNum = document.querySelectorAll(".count");
let speed = 133;

myNum.forEach((myCount) => {
  let target_count = myCount.dataset.count;
  let init_count = +myCount.innerText;

  let new_increment_num = Math.floor(target_count / speed);

  //   (updateNumber = () => {
  //     init_count += speed;
  //     myCount.innerText = init_count;

  //     setTimeout(() => {
  //       updateNumber();
  //     }, 100);
  //   })();

  const updateNumber = () => {
    init_count += new_increment_num;
    myCount.innerText = init_count;

    if (init_count < target_count) {
      setTimeout(() => {
        updateNumber();
      }, 15);
    }

    if (init_count > target_count) {
      myCount.innerText = target_count;
    }
  };

  updateNumber();
});
