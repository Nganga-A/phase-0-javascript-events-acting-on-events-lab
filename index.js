// Your code here
function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    let left = parseInt(dodger.style.left) || 0;
    left -= 1;
    dodger.style.left = `${left}px`;
  }
  
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    let left = parseInt(dodger.style.left) || 0;
    left += 1;
    dodger.style.left = `${left}px`;
  }