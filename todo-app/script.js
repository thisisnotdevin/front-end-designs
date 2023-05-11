function createDiv() {
  const newDiv = document.createElement('div');

  newDiv.classList.add('my-div');
  
const newHeading = document.createElement('input');
newHeading.id = "header";
newHeading.placeholder = "Enter a Title";
newHeading.addEventListener("input", function() {
  newHeading.style.border = "none";
});
newDiv.appendChild(newHeading);

const newBody = document.createElement('textarea');
newBody.placeholder = "Enter a description";
newDiv.appendChild(newBody);
  
const newFooter = document.createElement('div');
 newFooter.className = "footer";
newDiv.appendChild(newFooter);
  
const newTime = document.createElement('input');
newTime.type = "time";
newTime.id = "appt";
newTime.name = "appt";
newTime.min = "09:00";
newTime.max = "18:00";
newTime.required = true;
newFooter.appendChild(newTime);
  

  
const checkboxWrapper = document.createElement('div');
checkboxWrapper.className = "checkbox-wrapper-15";
checkboxWrapper.innerHTML = `
  <input class="inp-cbx" id="cbx-15" type="checkbox" style="display: none;"/>
  <label class="cbx" for="cbx-15">
    <span>
      <svg width="12px" height="9px" viewbox="0 0 12 9">
        <polyline points="1 5 4 8 11 1"></polyline>
      </svg>
    </span>
    <span>To-do</span>
  </label>
`;
newFooter.appendChild(checkboxWrapper);
  const container = document.getElementById('container');
  const firstDiv = container.firstChild;
  container.insertBefore(newDiv, firstDiv);
  
}

