//your JS code here. If required.
const text = document.getElementById("text");
const delay = document.getElementById("delay");
const submitBtn = document.getElementById("btn");
const output = document.getElementById("output");

async function delayOperation(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function showData() {
  await delayOperation(delay.value);
  output.innerHTML = "";
  output.innerText = text.value;
}


submitBtn.addEventListener("click", showData);