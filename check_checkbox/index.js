const checkboxes = document.querySelectorAll(
  '.inbox input[type="checkbox"]'
);

let lastChecked;
function handleCheck(e) {
  //we need to check if they had the shift key down
  //and check that they are checking it not unchecking it
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    //loop over every single checkbox
    checkboxes.forEach((checkbox) => {
      // console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        // console.log("starting to check in between");
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);