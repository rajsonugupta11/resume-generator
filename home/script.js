// Jab user name likhega, yeh code chalega
document.getElementById("name").addEventListener("input", function () {
  // Input box se value lo
  const nameValue = this.value;

  // Middle section me naam dikhana
  document.getElementById("previewName").textContent = nameValue || "[Your Name]";
});

 // <-- download start -----------------------------------------------------------------------------------------------
 document.addEventListener("DOMContentLoaded", function () {
  const downloadBtn = document.getElementById("downloadBtn");
  const resumeArea = document.querySelector(".resume-container");

  downloadBtn.addEventListener("click", function () {
    const opt = {
      margin: [0, 0, 0, 4],
      filename: "resume.pdf",
      html2canvas: { scale: 2, scrollY: 0 }, // keep this for high quality
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
      // 👇 remove 'image' option to avoid JPG rendering
    };

    html2pdf().from(resumeArea).set(opt).save();
  });
});
 // <-- download end ---------------------------------------------------------------------------------------------------

// <-- Location data
document.getElementById("location").addEventListener("input", function (){
const locationValue= this.value;
document.getElementById("previewLocation").textContent = locationValue || "[Your Location]";
});
// <-- mobile number data 
document.getElementById("number").addEventListener("input" , function (){
const numberValue=this.value ;
document.getElementById ("previewnumber").textContent= numberValue || "[Your Phone Number]"
}) ;
// <-- headline-------
document.getElementById("headline").addEventListener("input", function(){
const headlineValue = this.value;
document.getElementById ("previewheadline"). textContent = headlineValue || " [Your Job Title]"
  });
// <--gmail-----------
document.getElementById("gmail").addEventListener("input", function(){
  const gmailValue= this.value ;
  document.getElementById ("previewgmail"). textContent=gmailValue || "[Your Email]"
});
// <-- linkedin  ----------
document.getElementById("linkedin").addEventListener("input", function(){
  const linkedinValue= this.value;
  document.getElementById ("previewlinkedin"). textContent=linkedinValue || " [Your LinkedIn Profile]"
});
// hide or show buton function start -----------------------------------------------------------------------------------------------------------
function showCustomInput() {
  const customField = document.getElementById("customField");
  const hideBtn = document.getElementById("hideBtn");
  customField.style.display = "block";
  hideBtn.style.display = "inline-block";
}

function saveData() {
  const customValue = document.getElementById("customInput").value;
  const customSpan = document.getElementById("customHeaderField");

  if (customValue.trim() !== "") {
    customSpan.textContent = customValue;
  } else {
    customSpan.textContent = "[Custom Field]";
  }

  // Optional: Clear the input field after save
  document.getElementById("customInput").value = "";
}

function hideCustomField() {
  document.getElementById("customField").style.display = "none";
  document.getElementById("hideBtn").style.display = "none";

  // Optionally also clear the preview
  document.getElementById("customHeaderField").textContent = "";
}

// hide or show buton function end -----------------------------------------------------------------------------------------------------------

// <-- live update for custom input field
document.getElementById("customInput").addEventListener("input", function () {
  const customValue = this.value;
  document.getElementById("customHeaderField").textContent = customValue || "[Custom Field]";
});

function setGlobalFontSize() {
  const size = document.getElementById("globalFontSizeSelector").value;

  // Apply to whole page
  document.body.style.fontSize = size;

  // Apply to editors
  const summaryEditor = document.getElementById("summaryEditor");
  const skillsEditor = document.getElementById("skillsEditor");
  const projectEditor = document.getElementById("projectEditor");

  if (summaryEditor) summaryEditor.style.fontSize = size;
  if (skillsEditor) skillsEditor.style.fontSize = size;
  if (projectEditor) projectEditor.style.fontSize = size;

  // Apply to preview
  const previewProjects = document.querySelector(".projects");
  if (previewProjects) previewProjects.style.fontSize = size;

  // Update the font size dropdown (inside project editor toolbar)
  const projectFontSizeSelector = document.getElementById("projectFontSizeSelector");
  if (projectFontSizeSelector) {
    projectFontSizeSelector.value = size;
  }
}
function setGlobalFontSize() {
  const size = document.getElementById("globalFontSizeSelector").value;

  // Set a CSS variable on the root
  document.documentElement.style.setProperty('--global-font-size', size);

  // Sync other font size selectors if needed
  const projectFontSizeSelector = document.getElementById("projectFontSizeSelector");
  if (projectFontSizeSelector) {
    projectFontSizeSelector.value = size;
  }
}
function setGlobalFontFamily() {
  const selectedFont = document.getElementById("globalFontSelector").value;
  const resume = document.getElementById("resumeArea");
  resume.style.fontFamily = selectedFont;
}

// Apply font size Global ---------------------------------------------------END----------------------------------------------------------

// certificate area start============================================================================================
//Toggle the title input field visibility
function toggleCertificationsTitleInput() {
  const titleInput = document.getElementById("certificationsTitleInput");
  const previewTitle = document.getElementById("previewCertificationsTitle");
  const buttons = document.getElementById("certificationsTitleButtons");

  if (titleInput.style.display === "none") {
    titleInput.style.display = "block";
    titleInput.value = previewTitle.innerText;
    buttons.style.display = "block";
    previewTitle.style.display = "none";
  } else {
    titleInput.style.display = "none";
    buttons.style.display = "none";
    previewTitle.style.display = "block";
  }
}
// Save the title change
function saveCertificationsTitle() {
  const titleInput = document.getElementById("certificationsTitleInput");
  const previewTitle = document.getElementById("previewCertificationsTitle");
  const middlePanelTitle = document.querySelector(".certifications h3");
  // Update both left panel and middle panel
  previewTitle.innerText = titleInput.value;
  if (middlePanelTitle) {
    middlePanelTitle.innerText = titleInput.value;
  }
  toggleCertificationsTitleInput(); // Hide input after saving
}
// Hide the title input
function hideCertificationsInput() {
  const titleInput = document.getElementById("certificationsTitleInput");
  const buttons = document.getElementById("certificationsTitleButtons");
  const previewTitle = document.getElementById("previewCertificationsTitle");

  titleInput.style.display = "none";
  buttons.style.display = "none";
  previewTitle.style.display = "block";
}
// Apply formatting
function toggleCertificationsFormat(button, format) {
  const editor = document.getElementById("certificationsEditor");

  if (format === 'insertUnorderedList') {
    document.execCommand('insertUnorderedList', false, null);
  } else if (format === 'insertOrderedList') {
    document.execCommand('insertOrderedList', false, null);
  } else {
    document.execCommand(format, false, null);
  }

  updateCertificationsPreview();
}
// Set font size
function setCertificationsFontSize() {
  const fontSize = document.getElementById("certificationsFontSizeSelector").value;
  document.getElementById("certificationsEditor").style.fontSize = fontSize;
  updateCertificationsPreview();
}
// Set text color
function setCertificationsTextColor() {
  const textColor = document.getElementById("certificationsTextColor").value;
  document.getElementById("certificationsEditor").style.color = textColor;
  updateCertificationsPreview();
}
// Set background color
function setCertificationsBgColor() {
  const bgColor = document.getElementById("certificationsBgColor").value;
  document.getElementById("certificationsEditor").style.backgroundColor = bgColor;
  updateCertificationsPreview();
}
// Set column layout
function setCertificationsColumns() {
  const columns = document.getElementById("certificationsCols").value;
  const editor = document.getElementById("certificationsEditor");

  // Apply column styling directly to the editable container
  editor.style.columnCount = columns;
  editor.style.columnGap = "10px"; // Optional: adjust space between columns

  updateCertificationsPreview();
}
// Function to handle live preview updates
function updateCertificationsPreview() {
  const editor = document.getElementById("certificationsEditor");
  const preview = document.querySelector(".certifications ul") || document.querySelector(".certifications div");
  if (!preview) return;
  // Update content
  preview.innerHTML = editor.innerHTML;
  // Sync column styles
  preview.style.columnCount = editor.style.columnCount || "1";
  preview.style.columnGap = editor.style.columnGap || "0";
}

// Fix: Insert new line properly without breaking list
document.getElementById("certificationsEditor").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.execCommand('insertHTML', false, "<div><br></div>");
  }
});

// Initialize preview on load
document.addEventListener("DOMContentLoaded", () => {
  const editor = document.getElementById("certificationsEditor");
  const preview = document.querySelector(".certifications ul");
  if (preview) preview.innerHTML = editor.innerHTML;
});
//certificate section end========================================================================================


// achivment section start======================================================================================
// Editable Title Handling
function toggleAchievementsTitleInput() {
  const input = document.getElementById("achievementsTitleInput");
  const preview = document.getElementById("previewAchievementsTitle");
  const buttons = document.getElementById("achievementsTitleButtons");

  input.style.display = "block";
  input.value = preview.innerText;
  preview.style.display = "none";
  buttons.style.display = "block";
}

function saveAchievementsTitle() {
  const input = document.getElementById("achievementsTitleInput");
  const preview = document.getElementById("previewAchievementsTitle");
  const midTitle = document.querySelector(".achievements h3");

  preview.innerText = input.value;
  if (midTitle) midTitle.innerText = input.value;

  hideAchievementsInput();
}

function hideAchievementsInput() {
  document.getElementById("achievementsTitleInput").style.display = "none";
  document.getElementById("achievementsTitleButtons").style.display = "none";
  document.getElementById("previewAchievementsTitle").style.display = "block";
}

// Formatting Toolbar
function toggleAchievementsFormat(button, format) {
  document.execCommand(format, false, null);
  updateAchievementsPreview();
}

function setAchievementsFontSize() {
  const size = document.getElementById("achievementsFontSizeSelector").value;
  document.getElementById("achievementsEditor").style.fontSize = size;
  updateAchievementsPreview();
}

function setAchievementsTextColor() {
  const color = document.getElementById("achievementsTextColor").value;
  document.getElementById("achievementsEditor").style.color = color;
  updateAchievementsPreview();
}

function setAchievementsBgColor() {
  const color = document.getElementById("achievementsBgColor").value;
  document.getElementById("achievementsEditor").style.backgroundColor = color;
  updateAchievementsPreview();
}

function setAchievementsColumns() {
  const cols = document.getElementById("achievementsCols").value;
  const editor = document.getElementById("achievementsEditor");
  editor.style.columnCount = cols;
  editor.style.columnGap = "10px";
  updateAchievementsPreview();
}

function updateAchievementsPreview() {
  const editor = document.getElementById("achievementsEditor");
  const preview = document.querySelector(".achievements ul") || document.querySelector(".achievements div");

  if (!preview) return;

  preview.innerHTML = editor.innerHTML;
  preview.style.columnCount = editor.style.columnCount || "1";
  preview.style.columnGap = editor.style.columnGap || "0";
}

// Allow new line handling
document.getElementById("achievementsEditor").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.execCommand('insertHTML', false, "<div><br></div>");
  }
});

// On load
document.addEventListener("DOMContentLoaded", () => {
  const editor = document.getElementById("achievementsEditor");
  const preview = document.querySelector(".achievements ul");
  if (preview) preview.innerHTML = editor.innerHTML;
});
// Achivment section end=============================================================================================

// interest code start ===============================================================================================
// Editable Title Handling
function toggleInterestsTitleInput() {
  const input = document.getElementById("interestsTitleInput");
  const preview = document.getElementById("previewInterestsTitle");
  const buttons = document.getElementById("interestsTitleButtons");

  input.style.display = "block";
  input.value = preview.innerText;
  preview.style.display = "none";
  buttons.style.display = "block";
}

function saveInterestsTitle() {
  const input = document.getElementById("interestsTitleInput");
  const preview = document.getElementById("previewInterestsTitle");
  const midTitle = document.querySelector(".interests h3");

  preview.innerText = input.value;
  if (midTitle) midTitle.innerText = input.value;

  hideInterestsInput();
}

function hideInterestsInput() {
  document.getElementById("interestsTitleInput").style.display = "none";
  document.getElementById("interestsTitleButtons").style.display = "none";
  document.getElementById("previewInterestsTitle").style.display = "block";
}

// Toolbar formatting
function toggleInterestsFormat(button, format) {
  document.execCommand(format, false, null);
  updateInterestsPreview();
}

function setInterestsFontSize() {
  const size = document.getElementById("interestsFontSizeSelector").value;
  document.getElementById("interestsEditor").style.fontSize = size;
  updateInterestsPreview();
}

function setInterestsTextColor() {
  const color = document.getElementById("interestsTextColor").value;
  document.getElementById("interestsEditor").style.color = color;
  updateInterestsPreview();
}

function setInterestsBgColor() {
  const color = document.getElementById("interestsBgColor").value;
  document.getElementById("interestsEditor").style.backgroundColor = color;
  updateInterestsPreview();
}

function setInterestsColumns() {
  const cols = document.getElementById("interestsCols").value;
  const editor = document.getElementById("interestsEditor");
  editor.style.columnCount = cols;
  editor.style.columnGap = "10px";
  updateInterestsPreview();
}

// Live preview sync
function updateInterestsPreview() {
  const editor = document.getElementById("interestsEditor");
  const preview = document.querySelector(".interests ul") || document.querySelector(".interests div");

  if (!preview) return;

  preview.innerHTML = editor.innerHTML;
  preview.style.columnCount = editor.style.columnCount || "1";
  preview.style.columnGap = editor.style.columnGap || "0";
}

// Line break handler
document.getElementById("interestsEditor").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.execCommand('insertHTML', false, "<div><br></div>");
  }
});

// Load preview on startup
document.addEventListener("DOMContentLoaded", () => {
  const editor = document.getElementById("interestsEditor");
  const preview = document.querySelector(".interests ul");
  if (preview) preview.innerHTML = editor.innerHTML;
});

//custom fild start ==================================================================================================

let sectionCounter = 0;
function addCustomField() {
  sectionCounter++;
  const id = `custom-${sectionCounter}`;

  const editor = document.createElement("div");
  editor.classList.add("custom-field");
  editor.innerHTML = `
    <hr class="sep">
    <div style="margin-bottom: 10px;">
      <label>
        <span id="${id}-title-preview">Section Title</span>
        <i class="fas fa-pen edit-icon" onclick="toggleTitleInput('${id}')" style="cursor: pointer; margin-left: 5px;"></i>
      </label>
      <input id="${id}-title-input" type="text" style="display:none; margin-top:5px;" placeholder="Section Title">
      <div id="${id}-title-buttons" style="display:none; margin-top:5px;">
        <button onclick="saveTitle('${id}')">Save</button>
        <button onclick="hideTitleInput('${id}')">Hide</button>
      </div>
    </div>

    <div class="summary-toolbar">
      <button onclick="formatField(this, '${id}', 'bold')"><i class="fa-solid fa-bold"></i></button>
      <button onclick="formatField(this, '${id}', 'italic')"><i class="fa-solid fa-italic"></i></button>
      <button onclick="formatField(this, '${id}', 'underline')"><i class="fa-solid fa-underline"></i></button>
      <button onclick="formatField(this, '${id}', 'strikeThrough')"><i class="fa-solid fa-strikethrough"></i></button>
      <button onclick="formatField(this, '${id}', 'insertUnorderedList')"><i class="fa-solid fa-list-ul"></i></button>
      <button onclick="formatField(this, '${id}', 'justifyLeft')"><i class="fa-solid fa-align-left"></i></button>
      <button onclick="formatField(this, '${id}', 'justifyCenter')"><i class="fa-solid fa-align-center"></i></button>
      <button onclick="formatField(this, '${id}', 'justifyRight')"><i class="fa-solid fa-align-right"></i></button>
      <button onclick="formatField(this, '${id}', 'justifyFull')"><i class="fa-solid fa-align-justify"></i></button>

      <label>Font Size:
        <select onchange="setFontSize('${id}', this.value)">
          <option value="14px">14px</option>
          <option value="16px" selected>16px</option>
          <option value="18px">18px</option>
        </select>
      </label>

      <label>Text <input type="color" onchange="setTextColor('${id}', this.value)"></label>
      <label>BG <input type="color" onchange="setBgColor('${id}', this.value)"></label>

      <label>Columns:
        <select onchange="setCustomColumns('${id}', this.value)">
          <option value="1">1 Col</option>
          <option value="2">2 Col</option>
          <option value="3">3 Col</option>
        </select>
      </label>
    </div>

    <div id="${id}-editor" class="summary-editor" contenteditable="true" oninput="updatePreview('${id}')">
      <div>[Content]</div>
    </div>

    <button style="margin-top:10px;" onclick="deleteField('${id}')">🗑 Delete Section</button>
  `;
  document.getElementById("editorFields").appendChild(editor);
  const preview = document.createElement("section");
  preview.classList.add("custom-preview");
  preview.id = `${id}-preview`;
  preview.innerHTML = `
    <h3 id="${id}-preview-title">Section Title</h3>
    <div></div>
  `;
  document.getElementById("previewFields").appendChild(preview);
}

function formatField(btn, id, command) {
  const editor = document.getElementById(`${id}-editor`);
  editor.focus();
  document.execCommand(command, false, null);
  updatePreview(id);
}

function setFontSize(id, size) {
  document.getElementById(`${id}-editor`).style.fontSize = size;
  updatePreview(id);
}

function setTextColor(id, color) {
  document.getElementById(`${id}-editor`).style.color = color;
  updatePreview(id);
}

function setBgColor(id, color) {
  document.getElementById(`${id}-editor`).style.backgroundColor = color;
  updatePreview(id);
}

function setCustomColumns(id, cols) {
  const editor = document.getElementById(`${id}-editor`);
  const preview = document.querySelector(`#${id}-preview div`);

  editor.style.columnCount = cols;
  editor.style.columnGap = "10px";

  if (preview) {
    preview.style.columnCount = cols;
    preview.style.columnGap = "10px";
  }
}

function updatePreview(id) {
  const content = document.getElementById(`${id}-editor`).innerHTML;
  const previewDiv = document.querySelector(`#${id}-preview div`);
  previewDiv.innerHTML = content;
}

function toggleTitleInput(id) {
  document.getElementById(`${id}-title-input`).style.display = "block";
  document.getElementById(`${id}-title-input`).value = document.getElementById(`${id}-title-preview`).innerText;
  document.getElementById(`${id}-title-preview`).style.display = "none";
  document.getElementById(`${id}-title-buttons`).style.display = "block";
}

function saveTitle(id) {
  const input = document.getElementById(`${id}-title-input`).value;
  document.getElementById(`${id}-title-preview`).innerText = input;
  document.getElementById(`${id}-preview-title`).innerText = input;
  hideTitleInput(id);
}

function hideTitleInput(id) {
  document.getElementById(`${id}-title-input`).style.display = "none";
  document.getElementById(`${id}-title-buttons`).style.display = "none";
  document.getElementById(`${id}-title-preview`).style.display = "block";
}

function deleteField(id) {
  document.getElementById(`${id}-preview`)?.remove();
  document.getElementById(`${id}-editor`)?.parentElement?.remove();
}
// custom field End====================================================================================================

// line hight start---------------------------------------------------------------------------------------------------------------------

  const lineHeightRange = document.getElementById('lineHeightRange');
  const lineHeightValue = document.getElementById('lineHeightValue');
  const resumeArea = document.getElementById('resumeArea');

  lineHeightRange.addEventListener('input', () => {
    const newLineHeight = lineHeightRange.value;
    lineHeightValue.textContent = newLineHeight;
    
    // Apply line height to all text inside resume area
    resumeArea.style.lineHeight = newLineHeight;
  });


// line hight end ----------------------------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
  const deleteZone = document.getElementById('deleteZone');
  const middle = document.querySelector('.middle');
  
  let draggedElement = null;
  let removedElements = [];  // Array to store removed elements and their original parent

  const resumeArea = document.getElementById('resumeArea');
  let draggableElements = [];

  // Make header draggable
  const header = resumeArea.querySelector('header');
  if (header) {
    header.setAttribute('draggable', 'true');
    draggableElements.push(header);
  }

  const sections = resumeArea.querySelectorAll(':scope > section, :scope > div.preview-section, #previewEducationTitle, #educationPreviewContent');
  sections.forEach(el => {
    el.setAttribute('draggable', 'true');
    draggableElements.push(el);
    
    el.addEventListener('dragstart', function (e) {
      draggedElement = this;
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', 'dragging');
      this.classList.add('dragging');
    });

    el.addEventListener('dragend', function () {
      draggedElement = null;
      this.classList.remove('dragging');
    });
    
    // Allow elements to be moved up and down
    el.addEventListener('dragover', function (e) {
      e.preventDefault();
      if (this !== draggedElement) {
        this.parentNode.insertBefore(draggedElement, this);
      }
    });
  });

  deleteZone.addEventListener('dragover', function (e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    this.classList.add('drag-over');
  });

  deleteZone.addEventListener('drop', function (e) {
    e.preventDefault();
    this.classList.remove('drag-over');
    if (draggedElement) {
      // Store the original parent and its index
      removedElements.push({
        element: draggedElement,
        parent: draggedElement.parentNode,
        nextSibling: draggedElement.nextSibling
      });
      draggedElement.remove();
      draggedElement = null;
    }
  });

  // Undo functionality
  const undoButton = document.getElementById('undoButton');
  undoButton.addEventListener('click', function () {
    if (removedElements.length > 0) {
      const lastRemoved = removedElements.pop();
      const restoredElement = lastRemoved.element;

      // Append it back to its original parent at the correct position
      if (lastRemoved.parent) {
        lastRemoved.parent.insertBefore(restoredElement, lastRemoved.nextSibling);
      }
    }
  });

  draggableElements.forEach(el => {
    el.style.cursor = 'grab';
  });
});

// text colour and line colour Start===============================================================================================
  const titleColorInput = document.getElementById('titleColorPicker');
  const titleColorValue = document.getElementById('titleColorValue');

  const lineColorInput = document.getElementById('lineColorPicker');
  const lineColorValue = document.getElementById('lineColorValue');

  // Title text color change
  titleColorInput.addEventListener('input', function () {
    const selectedColor = titleColorInput.value;
    titleColorValue.textContent = selectedColor;

    document.querySelectorAll('.resume-container h3').forEach(h => {
      h.style.color = selectedColor;
    });
  });

  // Line color change
  lineColorInput.addEventListener('input', function () {
    const selectedLineColor = lineColorInput.value;
    lineColorValue.textContent = selectedLineColor;

    document.querySelectorAll('.resume-container h3').forEach(h => {
      h.style.borderBottom = `2px solid ${selectedLineColor}`;
    });
  });

// text colour and line colour end ==================================================================================================

// Title left right start===============================================================================================
  const titleAlignSelect = document.getElementById('titleAlignSelect');

  titleAlignSelect.addEventListener('change', function () {
    const selectedAlign = titleAlignSelect.value;

    // Apply text alignment to all h3 headings in the resume
    document.querySelectorAll('.resume-container h3').forEach(h => {
      h.style.textAlign = selectedAlign;
    });
  });
 // Title left right End ===============================================================================================
 
// Name and Job title font size Start================================================================================
  const nameRange = document.getElementById('nameFontSizeRange');
  const nameValue = document.getElementById('nameFontSizeValue');
  const nameElement = document.getElementById('previewName');

  const jobRange = document.getElementById('jobFontSizeRange');
  const jobValue = document.getElementById('jobFontSizeValue');
  const jobElement = document.getElementById('previewheadline');

  // Name font size control
  nameRange.addEventListener('input', function () {
    const size = nameRange.value;
    nameElement.style.fontSize = size + 'px';
    nameValue.textContent = size + 'px';
  });

  // Job title font size control
  jobRange.addEventListener('input', function () {
    const size = jobRange.value;
    jobElement.style.fontSize = size + 'px';
    jobValue.textContent = size + 'px';
  });
// Name and job title font size end===================================================================================


// name title Alignment start=========================================================================================
  const alignToggle = document.getElementById('titleAlignToggle');

  alignToggle.addEventListener('change', function () {
    const align = alignToggle.value;

    // All header elements to be aligned
    document.getElementById('previewName').style.textAlign = align;
    document.getElementById('previewheadline').style.textAlign = align;

    // Contact info container: <p> inside <header>
    const headerParagraph = document.querySelector('header p');
    headerParagraph.style.textAlign = align;
  });

// name title left midle end ============================================================================================

// background page colour start======================================================================================

  const middleBgPicker = document.getElementById('middleBgColorPicker');
  const middleBgValue = document.getElementById('middleBgColorValue');
  const resumeMiddle = document.querySelector('.resume-container'); // or '#resumeArea'

  middleBgPicker.addEventListener('input', function () {
    const color = middleBgPicker.value;
    resumeMiddle.style.backgroundColor = color;
    middleBgValue.textContent = color;
  });
// background page colour end ========================================================================================


