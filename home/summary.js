
/* sumarry title edit hide save start------------------------------------------------------------------------------ */

function toggleSummaryTitleInput() {
    const input = document.getElementById('summaryTitleInput');
    const buttons = document.getElementById('summaryTitleButtons');
    input.style.display = 'block';
    buttons.style.display = 'flex';
    input.focus();
  }

  function saveSummaryTitle() {
    const title = document.getElementById('summaryTitleInput').value.trim();
    const preview = document.getElementById('previewSummaryTitle');
    preview.textContent = title || 'Summary';
  }

  function hideSummaryInput() {
    document.getElementById('summaryTitleInput').style.display = 'none';
    document.getElementById('summaryTitleButtons').style.display = 'none';
  }

/* sumarry title edit hide save End------------------------------------------------------------------------------ */

// ---------- SUMMARY EDITOR FUNCTIONS ----------

// Sync summary content to preview in real-time
const summaryEditor = document.getElementById("summaryEditor");
const previewSummary = document.querySelector(".summary p");

// Real-time content sync
summaryEditor.addEventListener("input", () => {
  previewSummary.innerHTML = summaryEditor.innerHTML;
});

// Formatting buttons (bold, italic, underline, justify, etc.)
function toggleFormat(btn, cmd) {
  document.execCommand(cmd, false, null);
  btn.classList.toggle('active', document.queryCommandState(cmd));
  previewSummary.innerHTML = summaryEditor.innerHTML; // sync after format
}

// Insert link
function insertLink() {
  const url = prompt("Enter the URL:");
  if (url) {
    document.execCommand("createLink", false, url);
    previewSummary.innerHTML = summaryEditor.innerHTML;
  }
}

// Set text color
function setTextColor() {
  const color = document.getElementById("summaryTextColor").value;
  document.execCommand("foreColor", false, color);
  previewSummary.style.color = color;
}

// Set background color
function setBgColor() {
  const bgColor = document.getElementById("summaryBgColor").value;
  document.execCommand("hiliteColor", false, bgColor);
  previewSummary.style.backgroundColor = bgColor;
}

// Set font family
function setFont() {
  const font = document.getElementById("summaryFont").value;
  document.execCommand("styleWithCSS", true);
  document.execCommand("fontName", false, font);
  summaryEditor.style.fontFamily = font;
  previewSummary.style.fontFamily = font;
}

// Set columns
function setColumns() {
  const cols = document.getElementById("summaryCols").value;
  summaryEditor.style.columnCount = cols;
  previewSummary.style.columnCount = cols;
}

// Custom field show/hide
function showCustomInput() {
  document.getElementById("customField").style.display = "block";
  document.getElementById("hideBtn").style.display = "inline-block";
}

function hideCustomField() {
  document.getElementById("customField").style.display = "none";
  document.getElementById("hideBtn").style.display = "none";
}

// Summary Title Save
function saveSummaryTitle() {
  const newTitle = document.getElementById("summaryTitleInput").value;
  if (newTitle.trim()) {
    document.getElementById("previewSummaryTitle").innerText = newTitle;
  }
  hideSummaryInput();
}

function toggleSummaryTitleInput() {
  const input = document.getElementById("summaryTitleInput");
  const buttons = document.getElementById("summaryTitleButtons");
  input.style.display = "block";
  buttons.style.display = "block";
}

function hideSummaryInput() {
  document.getElementById("summaryTitleInput").style.display = "none";
  document.getElementById("summaryTitleButtons").style.display = "none";
}

// Save form data to preview
function saveData() {
  document.getElementById("previewName").innerText = document.getElementById("name").value;
  document.getElementById("previewheadline").innerText = document.getElementById("headline").value;
  document.getElementById("previewgmail").innerText = document.getElementById("gmail").value;
  document.getElementById("previewlinkedin").innerText = document.getElementById("linkedin").value;
  document.getElementById("previewnumber").innerText = document.getElementById("number").value;
  document.getElementById("previewLocation").innerText = document.getElementById("location").value;

  // Custom field
  const custom = document.getElementById("customInput").value;
  if (custom.trim()) {
    document.getElementById("customHeaderField").innerHTML = `| <i class="fas fa-link"></i> ${custom}`;
  } else {
    document.getElementById("customHeaderField").innerHTML = "";
  }
}

// Adjust left panel height
function adjustLeftPanelHeight() {
  const leftPanel = document.querySelector('.left');
  const containerHeight = document.querySelector('.container').clientHeight;
  leftPanel.style.height = containerHeight + 'px';
}

// Init default on load
window.addEventListener('DOMContentLoaded', () => {
  setFont();
  setColumns();
  adjustLeftPanelHeight();
  summaryEditor.dispatchEvent(new Event('input')); // initial content sync
});

// Skills edit section start-----------------------------------------------------------------------------------------
// Elements
const skillsEditor = document.getElementById("skillsEditor");
const previewSkills = document.querySelector(".skills ul");
const skillsCols = document.getElementById("skillsCols");

// Real-time sync
skillsEditor.addEventListener("input", () => {
  previewSkills.innerHTML = skillsEditor.innerHTML;
});

// Format buttons
function toggleSkillsFormat(btn, cmd) {
  document.execCommand(cmd, false, null);
  btn.classList.toggle('active', document.queryCommandState(cmd));
  previewSkills.innerHTML = skillsEditor.innerHTML;
}

// Font select
function setSkillsFont() {
  const font = document.getElementById("skillsFont").value;
  document.execCommand("styleWithCSS", true);
  document.execCommand("fontName", false, font);
  skillsEditor.style.fontFamily = font;
  previewSkills.style.fontFamily = font;
  
  // Ensure the text is bold by default
  skillsEditor.style.fontWeight = "bold";  // Make text bold
  previewSkills.style.fontWeight = "bold";  // Make preview bold
}

// Columns select
function setSkillsColumns() {
  const cols = skillsCols.value;
  skillsEditor.style.columnCount = cols;
  previewSkills.style.columnCount = cols;

  // Adjust column layout after selection
  if (cols == 1 || cols == 2 || cols == 3) {
    // Ensure proper alignment
    previewSkills.style.paddingTop = "7px";
  }
}

// Title edit
function toggleSkillsTitleInput() {
  document.getElementById("skillsTitleInput").style.display = "block";
  document.getElementById("skillsTitleButtons").style.display = "flex";
}

function saveSkillsTitle() {
  const newTitle = document.getElementById("skillsTitleInput").value.trim();
  const titleElement = document.querySelector(".skills h3");
  titleElement.innerText = newTitle || "Technical Skills";
  hideSkillsInput();
}

function hideSkillsInput() {
  document.getElementById("skillsTitleInput").style.display = "none";
  document.getElementById("skillsTitleButtons").style.display = "none";
}

// Initialize font & columns on load
window.addEventListener("DOMContentLoaded", () => {
  setSkillsFont();  // Ensure the text is bold when initialized
  setSkillsColumns();
  skillsEditor.dispatchEvent(new Event("input"));
});
// Project edit section start-----------------------------------------------------------------------------------------
// Toggle the Projects Title Input field
function toggleProjectsTitleInput() {
  const input = document.getElementById("projectsTitleInput");
  const buttons = document.getElementById("projectsTitleButtons");

  if (input.style.display === "none") {
    input.style.display = "block";
    buttons.style.display = "block";
    input.value = document.getElementById("previewProjectTitle").innerText;
  } else {
    input.style.display = "none";
    buttons.style.display = "none";
  }
}

// Save Projects Title
function saveProjectsTitle() {
  const newTitle = document.getElementById("projectsTitleInput").value.trim();
  if (newTitle) {
    document.getElementById("previewProjectTitle").innerText = newTitle;
  }
  hideProjectsInput();
}

// Hide input & buttons without saving
function hideProjectsInput() {
  document.getElementById("projectsTitleInput").style.display = "none";
  document.getElementById("projectsTitleButtons").style.display = "none";
}

let projectCount = 0;
let activeEditor = null;

// Track active editable area
function setupFocusTracking() {
  document.querySelectorAll('[contenteditable]').forEach(el => {
    el.setAttribute("tabindex", "0");
    el.addEventListener('focus', () => {
      activeEditor = el;
    });
  });
}

document.addEventListener('DOMContentLoaded', setupFocusTracking);

function toggleFormat(button, command) {
  if (!activeEditor) return;
  activeEditor.focus();
  document.execCommand(command, false, null);
  updateProjectsPreview();
}

function insertLink() {
  if (!activeEditor) return;
  const url = prompt("Enter URL:");
  if (url) document.execCommand("createLink", false, url);
  updateProjectsPreview();
}



// Modify to set font size in both input fields and preview
function setFontSize() {
  if (!activeEditor) return;

  const size = document.getElementById('fontSizeSelector').value;
  activeEditor.style.fontSize = size;

  // Apply the font size to the preview section as well
  const projectPreviews = document.querySelectorAll(".project-preview-line, .project-desc");
  projectPreviews.forEach(preview => {
    preview.style.fontSize = size;
  });

  // Update the preview content dynamically
  updateProjectsPreview();
}


function setTextColor(editorId) {
  const el = document.getElementById(editorId);
  const color = document.getElementById("projectsTextColor").value;
  if (el) el.style.color = color;
  updateProjectsPreview();
}

function setBgColor(editorId) {
  const el = document.getElementById(editorId);
  const color = document.getElementById("projectsBgColor").value;
  if (el) el.style.backgroundColor = color;
  updateProjectsPreview();
}

function setColumns(editorId, colCount) {
  const el = document.getElementById(editorId);
  if (!el) return;
  el.style.columnCount = colCount;
}

function addNewProject() {
  projectCount++;
  const editorWrapper = document.createElement('div');
  editorWrapper.classList.add('project-block');
  editorWrapper.style.border = "1px solid #ddd";
  editorWrapper.style.padding = "10px";
  editorWrapper.style.marginBottom = "10px";
  editorWrapper.setAttribute("data-project-id", projectCount);

  editorWrapper.innerHTML = `
    <div style="display: flex; gap: 10px; margin-bottom: 10px;">
      <div contenteditable="true" class="project-name-input" style="flex: 1; border: 1px solid #ccc; padding: 5px;"><b>Project Name</b></div>
      <div contenteditable="true" class="project-date-input" style="flex: 1; border: 1px solid #ccc; padding: 5px;"><b>Month YYYY - Month YYYY</b></div>
      <button onclick="removeProject(this)" style="background: #f44336; color: white; border: none; padding: 4px 8px; cursor: pointer;">Delete</button>
    </div>

    <button onclick="toggleProjectVisibility(this)" style="margin-bottom: 5px; background: #2196F3; color: white; border: none; padding: 4px 8px; cursor: pointer;">Hide</button>

    <div class="toolbar" style="margin-bottom: 6px;">
      <button onclick="toggleFormat(this,'bold')"><b>B</b></button>
      <button onclick="toggleFormat(this,'italic')"><i>I</i></button>
      <button onclick="toggleFormat(this,'underline')"><u>U</u></button>
      <button onclick="toggleFormat(this,'insertUnorderedList')">&#8226; List</button>
    </div>

    <div contenteditable="true" class="project-desc-input summary-editor" style="border: 1px solid #ccc; padding: 8px; min-height: 100px;">
      Describe your project here...
    </div>
  `;

  const addButton = document.querySelector('button[onclick="addNewProject()"]');
  addButton.parentElement.insertBefore(editorWrapper, addButton);

  editorWrapper.querySelectorAll('[contenteditable]').forEach(el => {
    el.setAttribute("tabindex", "0");
    el.addEventListener('focus', () => {
      activeEditor = el;
    });
    el.addEventListener('input', updateProjectsPreview);
  });

  updateProjectsPreview();
}

function removeProject(button) {
  const block = button.closest('.project-block');
  block.remove();
  updateProjectsPreview();
}

function toggleProjectVisibility(button) {
  const block = button.closest('.project-block');
  const editorArea = block.querySelector('.project-desc-input');
  const toolbar = block.querySelector('.toolbar');

  const visible = editorArea.style.display !== "none";
  editorArea.style.display = visible ? "none" : "block";
  toolbar.style.display = visible ? "none" : "block";
  button.textContent = visible ? "Show" : "Hide";
}
function updateProjectsPreview() {
  const previews = [];

  // Get the text content from input fields
  const nameHTML = document.getElementById("projectNameInput")?.innerHTML.trim();
  const dateHTML = document.getElementById("projectDateInput")?.innerHTML.trim();
  const descHTML = document.getElementById("projectsEditor")?.innerHTML.trim();

  // Get the font family and font size applied to the editor
  const fontFamily = document.getElementById("projectsEditor")?.style.fontFamily || ''; // Default to Arial
  const fontSize = document.getElementById("projectsEditor")?.style.fontSize || ''; // Default to 16px

 // Apply font family and font size to the preview content
const fontFamilyPreview = fontFamily ? fontFamily : '';  // No default font family
const fontSizePreview = fontSize ? fontSize : '';  // No default font size


  // If there's content in the input fields, add it to the preview
  if (nameHTML || dateHTML || descHTML) {
    previews.push(`
      <div class="project-preview-line" style="display: flex; justify-content: space-between; font-family: ${fontFamilyPreview}; font-size: ${fontSizePreview};">
        <span class="project-name">${nameHTML}</span>
        <span class="project-date">${dateHTML}</span>
      </div>
      <div class="project-desc" style="font-family: ${fontFamilyPreview}; font-size: ${fontSizePreview};">${descHTML}</div>
    `);
  }

  // Loop through each project block for multi-project entries
  document.querySelectorAll(".project-block").forEach(project => {
    const pname = project.querySelector(".project-name-input")?.innerHTML.trim();
    const pdate = project.querySelector(".project-date-input")?.innerHTML.trim();
    const pdesc = project.querySelector(".project-desc-input")?.innerHTML.trim();

    if (pname || pdate || pdesc) {
      previews.push(`
        <div class="project-preview-line" style="display: flex; justify-content: space-between; font-family: ${fontFamilyPreview}; font-size: ${fontSizePreview};">
          <span class="project-name">${pname}</span>
          <span class="project-date">${pdate}</span>
        </div>
        <div class="project-desc" style="font-family: ${fontFamilyPreview}; font-size: ${fontSizePreview};">${pdesc}</div>
      `);
    }
  });

  // Update the preview content
  document.getElementById("projectPreviewContent").innerHTML = previews.join("");
}
/* sumary and skill font size Start---------------------------------------------------------------------------------------------------*/


function setSummaryFontSize() {
  const size = document.getElementById("summaryFontSizeSelector").value;
  const editor = document.getElementById("summaryEditor");
  const preview = document.querySelector(".summary p");
  editor.style.fontSize = size;
  preview.style.fontSize = size;
}

function setSkillsFontSize() {
  const size = document.getElementById("skillsFontSizeSelector").value;
  const editor = document.getElementById("skillsEditor");
  const preview = document.querySelector(".skills ul");
  editor.style.fontSize = size;
  preview.style.fontSize = size;
}

/* sumary and skill font size ------------------------------END--------------------------------------------------------------------*/

// ========== GLOBAL VARIABLE TO TRACK ACTIVE EDUCATION EDITOR     START----------------------------------------- ==========
let activeEducationEditor = null;
let educationCount = 0;

// Setup focus tracking function for all contenteditable elements inside education blocks
function setupEducationFocusTracking() {
  document.querySelectorAll('.education-block [contenteditable]').forEach(el => {
    el.setAttribute("tabindex", "0");
    el.addEventListener('focus', () => {
      activeEducationEditor = el;
    });
  });
}

// ========== FONT SIZE FUNCTIONALITY ==========
function setEducationFontSize() {
  if (!activeEducationEditor) return;

  const size = document.getElementById("educationFontSizeSelector").value;
  activeEducationEditor.style.fontSize = size;
  document.getElementById("educationPreviewContent").style.fontSize = size;

  updateEducationPreview();
}

// ========== EDUCATION TITLE EDIT, SAVE, HIDE ==========
function toggleEducationTitleInput() {
  const input = document.getElementById('educationTitleInput');
  const buttons = document.getElementById('educationTitleButtons');
  input.style.display = 'block';
  buttons.style.display = 'flex';
  input.focus();
}

function saveEducationTitle() {
  const input = document.getElementById('educationTitleInput');
  const newTitle = input.value.trim();
  const previewTitle = document.getElementById('previewEducationTitle');
  previewTitle.textContent = newTitle || "Education";
  hideEducationInput();
}

function hideEducationInput() {
  document.getElementById('educationTitleInput').style.display = 'none';
  document.getElementById('educationTitleButtons').style.display = 'none';
}

// ========== RICH TEXT FORMATTING FUNCTIONS ==========
function toggleEducationFormat(button, command) {
  if (!activeEducationEditor) return;
  activeEducationEditor.focus();

  if (command === 'bold' || command === 'italic' || command === 'underline' || command === 'strikeThrough') {
    document.execCommand("styleWithCSS", false);
  }

  document.execCommand(command, false, null);
  button.classList.toggle("active", document.queryCommandState(command));
  updateEducationPreview();
}

// ========== COLOR, FONT, COLUMNS ==========
function setEducationTextColor() {
  if (!activeEducationEditor) return;
  const color = document.getElementById("educationTextColor").value;
  activeEducationEditor.focus();
  document.execCommand("foreColor", false, color);
  updateEducationPreview();
}

function setEducationBgColor() {
  if (!activeEducationEditor) return;
  const color = document.getElementById("educationBgColor").value;
  activeEducationEditor.focus();
  document.execCommand("hiliteColor", false, color);
  updateEducationPreview();
}

function setEducationFont(font) {
  if (!activeEducationEditor) return;
  document.execCommand("styleWithCSS", true);
  activeEducationEditor.focus();
  document.execCommand("fontName", false, font);
  activeEducationEditor.style.fontFamily = font;
  updateEducationPreview();
}

function setEducationColumns(cols) {
  const educationEditorElements = document.querySelectorAll('.education-block');
  educationEditorElements.forEach(el => {
    el.style.columnCount = cols;
  });

  document.getElementById('educationPreviewContent').style.columnCount = cols;
}

// ========== MULTI EDUCATION SUPPORT ==========
function addNewEducation() {
  educationCount++;
  const educationWrapper = document.createElement('div');
  educationWrapper.classList.add('education-block');
  educationWrapper.style.border = "1px solid #ccc";
  educationWrapper.style.padding = "10px";
  educationWrapper.style.marginBottom = "10px";
  educationWrapper.setAttribute("data-education-id", educationCount);

  educationWrapper.innerHTML = `
  <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
    <div contenteditable="true" class="education-degree-input" style="flex: 1; border: 1px solid #ccc; padding: 5px;" oninput="updateEducationPreview()">Degree / Major</div>
    <div contenteditable="true" class="education-date-input" style="flex: 1; border: 1px solid #ccc; padding: 5px; text-align: right;" oninput="updateEducationPreview()">2018 - 2022</div>
  </div>

  <div class="education-input-content">
    <div contenteditable="true" class="education-name-input" style="border: 1px solid #ccc; padding: 5px; margin-bottom: 10px;" oninput="updateEducationPreview()">School/College Name</div>
    <div contenteditable="true" class="education-cgpa-input" style="border: 1px solid #ccc; padding: 5px; margin-bottom: 10px;" oninput="updateEducationPreview()">Percentage / CGPA | 95%</div>
    <div contenteditable="true" class="education-desc-input" style="border: 1px solid #ccc; padding: 8px;" oninput="updateEducationPreview()">Describe your education or achievements here...</div>
  </div>

  <div style="margin-top: 10px;">
    <button onclick="toggleEducationBlock(this)" style="background: #2196F3; color: white; border: none; padding: 4px 8px; cursor: pointer; margin-right: 5px;">Hide</button>
    <button onclick="removeEducation(this)" style="background: #f44336; color: white; border: none; padding: 4px 8px; cursor: pointer;">Delete</button>
  </div>
`;

  const container = document.getElementById('educationEditorContainer');
  container.appendChild(educationWrapper);

  educationWrapper.querySelectorAll('[contenteditable]').forEach(el => {
    el.setAttribute("tabindex", "0");
    el.addEventListener('focus', () => {
      activeEducationEditor = el;
    });
  });

  updateEducationPreview();
}

function removeEducation(button) {
  const block = button.closest('.education-block');
  if (block) {
    block.remove();
    updateEducationPreview();
  }
}

// ========== SYNC EDUCATION CONTENT TO PREVIEW ==========
function updateEducationPreview() {
  const previews = [];

  const educationBlocks = document.querySelectorAll(".education-block");
  educationBlocks.forEach(education => {
    const degree = education.querySelector(".education-degree-input")?.innerHTML.trim() || "";
    const date = education.querySelector(".education-date-input")?.innerHTML.trim() || "";
    const name = education.querySelector(".education-name-input")?.innerHTML || "";
    const cgpa = education.querySelector(".education-cgpa-input")?.innerHTML || "";
    const desc = education.querySelector(".education-desc-input")?.innerHTML || "";

    if (degree || date || name || cgpa || desc) {
      let nameCgpaLine = name;
      if (cgpa) {
        nameCgpaLine += ` | ${cgpa}`;
      }

      previews.push(`
        <div style="display: flex; justify-content: space-between;  margin-bottom: 4px;">
          <span>${degree}</span>
          <span>${date}</span>
        </div>
        <div style="margin-bottom: 4px;">
          ${nameCgpaLine}
        </div>
        <div class="education-desc">${desc}</div>
      `);
    }
  });

  document.getElementById("educationPreviewContent").innerHTML = previews.join("");
}

// Initialization call if needed
document.addEventListener('DOMContentLoaded', () => {
  // Initialize any existing education editable fields if present
  setupEducationFocusTracking();
  updateEducationPreview();
});

function toggleEducationBlock(button) {
  const block = button.closest('.education-block').querySelector('.education-input-content');
  if (block) {
    block.style.display = (block.style.display === 'none') ? 'block' : 'none';
    button.textContent = (block.style.display === 'none') ? 'Show' : 'Hide';
  }
}

// ---------- LANGUAGE EDITOR FUNCTIONS start --------------------------------------------------------------- ----------

function toggleLanguageTitleInput() {
  document.getElementById("languageTitleInput").style.display = "block";
  document.getElementById("languageTitleButtons").style.display = "block";

  // Set current value
  const currentTitle = document.getElementById("previewLanguageTitle").innerText;
  document.getElementById("languageTitleInput").value = currentTitle;
}

function saveLanguageTitle() {
  const newTitle = document.getElementById("languageTitleInput").value;
  document.getElementById("previewLanguageTitle").innerText = newTitle;
  document.querySelector(".languages h3").innerText = newTitle;

  hideLanguageInput();
}

function hideLanguageInput() {
  document.getElementById("languageTitleInput").style.display = "none";
  document.getElementById("languageTitleButtons").style.display = "none";
}

// Live preview as user types
document.getElementById("languageTitleInput").addEventListener("input", function () {
  const liveText = this.value;
  document.getElementById("previewLanguageTitle").innerText = liveText;
  document.querySelector(".languages h3").innerText = liveText;
});



// Sync language content to preview in real-time
const languageEditor = document.getElementById("languageEditor");
const previewLanguages = document.querySelector(".languages ul");

// Real-time content sync
languageEditor.addEventListener("input", () => {
previewLanguages.innerHTML = languageEditor.innerHTML;
});

// Formatting buttons for language section
function toggleLanguageFormat(btn, cmd) {
document.execCommand(cmd, false, null);
btn.classList.toggle('active', document.queryCommandState(cmd));
previewLanguages.innerHTML = languageEditor.innerHTML; // sync after format
}

// Set language font size
function setLanguageFontSize() {
const size = document.getElementById("languageFontSizeSelector").value;
languageEditor.style.fontSize = size;
previewLanguages.style.fontSize = size;
}

// Set language columns
function setLanguageColumns() {
const cols = document.getElementById("languageCols").value;
languageEditor.style.columnCount = cols;
previewLanguages.style.columnCount = cols;
}

// ---------- LANGUAGE EDITOR FUNCTIONS start --------------------------------------------------------------- ----------














// URL fix function: add https:// if missing
function fixURL(url) {
  if (!url) return "#";
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return "https://" + url;
  }
  return url;
}

// Update preview function
function updateWebsitePreview() {
  const name = document.getElementById("websiteName").value.trim();
  let url = document.getElementById("websiteURL").value.trim();
  const preview = document.getElementById("previewWebsite");

  url = fixURL(url);

  if (name) {
    preview.textContent = name;
    preview.href = url;
  } else {
    preview.textContent = "[Your Website]";
    preview.href = "#";
  }
}

// Event listeners for live update
document.getElementById("websiteName").addEventListener("input", updateWebsitePreview);
document.getElementById("websiteURL").addEventListener("input", updateWebsitePreview);