<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: ../auth/login.php"); 
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Resume</title>

  <!-- main stylesheet -->
  <link rel="stylesheet" href="style.css">
  <!-- Font‑Awesome icons -->
  <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

  <!-- Include html2pdf.js Library -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.15.0/Sortable.min.js"></script>
</head>

<body>
  <div class="container">
    <a href="../logout.php" class="logout-btn">Logout</a>


    <!-- ▬▬ LEFT PANEL ▬▬ -->
    <div class="left">
      <h2 style=" color: white ;"class="center-label">Input Section</h2><footer><p>Resume project by sonu kumar and my team</p></footer>

      <label>Full Name</label>
      <input id="name" type="text" placeholder="Rajsonu Gupta">

      <label>Headline</label>
      <input id="headline" type="text" placeholder="Web Developer">

      <label>Email</label>
      <input id="gmail" type="email" placeholder="rajsonugupta9@gm">

      <label>Website</label>
      <input id="linkedin" type="text" placeholder="https://example.com">

      <label>Phone</label>
      <input id="number" type="text" placeholder="6203889565">

      <label>Location</label>
      <input id="location" type="text" placeholder="Ranchi, Jharkhand">

      <!-- Add Custom Field Trigger -->
      <div class="add-custom-field" onclick="showCustomInput()">
        <i class="fas fa-link"></i><span class="plus-icon">+</span> Add custom field<i class="fas fa-link"></i>
      </div>

      <!-- Hidden Input Field with Icon -->
      <div class="custom-field" id="customField" style="display:none; margin-top:10px;">
        <label for="customInput">Custom Field:</label>
        <div style="display:flex; align-items:center; gap:8px;">
          <i class="fas fa-link" style="color:#4da6ff;"></i>
          <input type="text" id="customInput" placeholder="Enter link or text">
        </div>
      </div>

      <!-- Show/Hide Buttons -->
      <button onclick="saveData()">Save</button>
      <button id="hideBtn" onclick="hideCustomField()" style="display:none;">Hide</button>




<!-- ====== SUMMARY EDITOR START ====== ---------------------------------------------------------------------------------->
 <!-- Editable Summary Title with Pen Icon -->
<div style="margin-bottom: 10px;">
  <label>
    Summary Title
    <i class="fas fa-pen edit-icon" onclick="toggleSummaryTitleInput()" style="cursor: pointer; margin-left: 5px;"></i>
  </label>
  <input id="summaryTitleInput" type="text" placeholder="Summary" style="display: none; margin-top: 5px;" />
  <div id="summaryTitleButtons" style="display: none; margin-top: 5px;">
    <button onclick="saveSummaryTitle()">Save</button>
    <button onclick="hideSummaryInput()">Hide</button>
  </div>
</div>

<hr class="sep">
      <!-- Toolbar -->
      <div class="summary-toolbar">
        <button onclick="toggleFormat(this,'bold')"><i class="fa-solid fa-bold"></i></button>
        <button onclick="toggleFormat(this,'italic')"><i class="fa-solid fa-italic"></i></button>
        <button onclick="toggleFormat(this,'underline')"><i class="fa-solid fa-underline"></i></button>
        <button onclick="toggleFormat(this,'strikeThrough')"><i class="fa-solid fa-strikethrough"></i></button>
        <button onclick="toggleFormat(this,'insertOrderedList')"><i class="fa-solid fa-list-ol"></i></button>
        <button onclick="toggleFormat(this,'insertUnorderedList')"><i class="fa-solid fa-list-ul"></i></button>
        <button onclick="toggleFormat(this,'justifyLeft')"><i class="fa-solid fa-align-left"></i></button>
        <button onclick="toggleFormat(this,'justifyCenter')"><i class="fa-solid fa-align-center"></i></button>
        <button onclick="toggleFormat(this,'justifyRight')"><i class="fa-solid fa-align-right"></i></button>
        <button onclick="toggleFormat(this,'justifyFull')"><i class="fa-solid fa-align-justify"></i></button>
        <button onclick="insertLink()"><i class="fa-solid fa-link"></i></button>
        

<!-- Summary Font Size Selector -->


        <!-- Color pickers -->
        <label class="picker">Text <input type="color" id="summaryTextColor" onchange="setTextColor()"></label>
        <label class="picker">BG <input type="color" id="summaryBgColor" onchange="setBgColor()"></label>

        <!-- Font -->


        <!-- Columns -->
        <select id="summaryCols" onchange="setColumns()">
          <option value="1">1 Col</option><option value="2">2 Col</option><option value="3">3 Col</option>
        </select>
      </div>

      <!-- Editable summary -->
      <div id="summaryEditor" class="summary-editor" contenteditable="true">
        Write your summary here...
      </div>
      <!-- ====== SUMMARY EDITOR END ====== -->

      <!-- ====== TECHNICAL SKILLS EDITOR START ====== -->
<!-- ====== TECHNICAL SKILLS EDITOR START ====== -->
<hr class="sep">

<!-- Editable Title -->
<div style="margin-bottom: 10px;">
  <label>
    Technical Skills Title
    <i class="fas fa-pen edit-icon" onclick="toggleSkillsTitleInput()" style="cursor: pointer; margin-left: 5px;"></i>
  </label>
  <input id="skillsTitleInput" type="text" placeholder="Technical Skills" style="display: none; margin-top: 5px;" />
  <div id="skillsTitleButtons" style="display: none; margin-top: 5px;">
    <button onclick="saveSkillsTitle()">Save</button>
    <button onclick="hideSkillsInput()">Hide</button>
  </div>
</div>

<!-- Toolbar -->
<div class="summary-toolbar">
  <button onclick="toggleSkillsFormat(this,'bold')"><i class="fa-solid fa-bold"></i></button>
  <button onclick="toggleSkillsFormat(this,'italic')"><i class="fa-solid fa-italic"></i></button>
  <button onclick="toggleSkillsFormat(this,'underline')"><i class="fa-solid fa-underline"></i></button>
  <button onclick="toggleSkillsFormat(this,'strikeThrough')"><i class="fa-solid fa-strikethrough"></i></button>
  <button onclick="toggleSkillsFormat(this,'insertOrderedList')"><i class="fa-solid fa-list-ol"></i></button>
  <button onclick="toggleSkillsFormat(this,'insertUnorderedList')"><i class="fa-solid fa-list-ul"></i></button>
  <button onclick="toggleSkillsFormat(this,'justifyLeft')"><i class="fa-solid fa-align-left"></i></button>
  <button onclick="toggleSkillsFormat(this,'justifyCenter')"><i class="fa-solid fa-align-center"></i></button>
  <button onclick="toggleSkillsFormat(this,'justifyRight')"><i class="fa-solid fa-align-right"></i></button>
  <button onclick="toggleSkillsFormat(this,'justifyFull')"><i class="fa-solid fa-align-justify"></i></button>
  <!-- Skills Font Size Selector -->


  <!-- Font Picker -->


  <!-- Column Picker -->
  <select id="skillsCols" onchange="setSkillsColumns()">
    <option value="1">1 Col</option>
    <option value="2">2 Col</option>
    <option value="3">3 Col</option>
  </select>
</div>

<!-- Editor Area -->
<div id="skillsEditor" class="summary-editor" contenteditable="true">
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>React</li>
  </ul>
</div>
<!-- ====== TECHNICAL SKILLS EDITOR END ====== -->
 
<!-- editable title for project start    ----------------------------------------------------------------------- -->


<!-- ====== PROJECTS EDITOR START ====== -->


<hr class="sep">
<!-- ====== PROJECTS EDITOR START ====== -->

<div style="margin-bottom: 10px;">
  <label>
    Projects
    <i class="fas fa-pen edit-icon" onclick="toggleProjectsTitleInput()" style="cursor: pointer; margin-left: 5px;"></i>
  </label>
  <input id="projectsTitleInput" type="text" placeholder="Projects" style="display: none; margin-top: 5px;" />
  <div id="projectsTitleButtons" style="display: none; margin-top: 5px;">
    <button onclick="saveProjectsTitle()">Save</button>
    <button onclick="hideProjectsInput()">Hide</button>
  </div>
</div>


<!-- ===== Title & Date Inputs as Editable Divs ===== -->



<!-- Toolbar -->
<div class="summary-toolbar">
  <button onclick="toggleFormat(this,'bold')"><i class="fa-solid fa-bold"></i></button>
  <button onclick="toggleFormat(this,'italic')"><i class="fa-solid fa-italic"></i></button>
  <button onclick="toggleFormat(this,'underline')"><i class="fa-solid fa-underline"></i></button>
  <button onclick="toggleFormat(this,'strikeThrough')"><i class="fa-solid fa-strikethrough"></i></button>
  <button onclick="toggleFormat(this,'insertOrderedList')"><i class="fa-solid fa-list-ol"></i></button>
  <button onclick="toggleFormat(this,'insertUnorderedList')"><i class="fa-solid fa-list-ul"></i></button>
  <button onclick="toggleFormat(this,'justifyLeft')"><i class="fa-solid fa-align-left"></i></button>
  <button onclick="toggleFormat(this,'justifyCenter')"><i class="fa-solid fa-align-center"></i></button>
  <button onclick="toggleFormat(this,'justifyRight')"><i class="fa-solid fa-align-right"></i></button>
  <button onclick="toggleFormat(this,'justifyFull')"><i class="fa-solid fa-align-justify"></i></button>
  <button onclick="insertLink()"><i class="fa-solid fa-link"></i></button>
  

  

  <label class="picker">Text <input type="color" id="projectsTextColor" onchange="setTextColor('projectsEditor')"></label>
  <label class="picker">BG <input type="color" id="projectsBgColor" onchange="setBgColor('projectsEditor')"></label>

  <select id="projectsFont" onchange="setFont('projectsEditor', this.value)">
    <option value="Arial">Arial</option><option value="Calibri">Calibri</option>
    <option value="Georgia">Georgia</option><option value="Helvetica">Helvetica</option>
    <option value="Times New Roman">Times New Roman</option>
  </select>

  <select id="projectsCols" onchange="setColumns('projectsEditor', this.value)">
    <option value="1">1 Col</option><option value="2">2 Col</option><option value="3">3 Col</option>
  </select>
</div>
<!-- Project name & date -->
<div style="display: flex; gap: 10px; margin-bottom: 10px;">
  <div id="projectNameInput" contenteditable="true" placeholder="Project Title" style="flex: 1; border: 1px solid #ccc; padding: 5px;" oninput="updateProjectsPreview()">Project Name</div>
  <div id="projectDateInput" contenteditable="true" placeholder="Aug 2024 - Dec 2025" style="flex: 1; border: 1px solid #ccc; padding: 5px;" oninput="updateProjectsPreview()">Aug 2024 - Dec 2025</div>
</div>
<!-- Editable Projects Description Editor -->
<div id="projectsEditor" class="summary-editor" contenteditable="true" oninput="updateProjectsPreview()">
  Describe your project here...
</div>

<button onclick="addNewProject()" style="margin-top: 10px;">➕ Add Project</button>


<!-- ====== PROJECTS EDITOR END ====== -->
<hr class="sep">
<!-- ====== EDUCATION EDITOR START ====== -->



<div style="margin-bottom: 10px;">
  <label>
    Education
    <i class="fas fa-pen edit-icon" onclick="toggleEducationTitleInput()" style="cursor: pointer; margin-left: 5px;"></i>
  </label>
  <input id="educationTitleInput" type="text" placeholder="Education" style="display: none; margin-top: 5px;" />
  <div id="educationTitleButtons" style="display: none; margin-top: 5px;">
    <button onclick="saveEducationTitle()">Save</button>
    <button onclick="hideEducationInput()">Hide</button>
  </div>
</div>

<!-- Toolbar -->
<div class="summary-toolbar">
  <button onclick="toggleEducationFormat(this,'bold')"><i class="fa-solid fa-bold"></i></button>
  <button onclick="toggleEducationFormat(this,'italic')"><i class="fa-solid fa-italic"></i></button>
  <button onclick="toggleEducationFormat(this,'underline')"><i class="fa-solid fa-underline"></i></button>
  <button onclick="toggleEducationFormat(this,'strikeThrough')"><i class="fa-solid fa-strikethrough"></i></button>
  <button onclick="toggleEducationFormat(this,'insertOrderedList')"><i class="fa-solid fa-list-ol"></i></button>
  <button onclick="toggleEducationFormat(this,'insertUnorderedList')"><i class="fa-solid fa-list-ul"></i></button>
  <button onclick="toggleEducationFormat(this,'justifyLeft')"><i class="fa-solid fa-align-left"></i></button>
  <button onclick="toggleEducationFormat(this,'justifyCenter')"><i class="fa-solid fa-align-center"></i></button>
  <button onclick="toggleEducationFormat(this,'justifyRight')"><i class="fa-solid fa-align-right"></i></button>
  <button onclick="toggleEducationFormat(this,'justifyFull')"><i class="fa-solid fa-align-justify"></i></button>
  <button onclick="insertLink()"><i class="fa-solid fa-link"></i></button>



  <label class="picker">Text <input type="color" id="educationTextColor" onchange="setEducationTextColor()"></label>
  <label class="picker">BG <input type="color" id="educationBgColor" onchange="setEducationBgColor()"></label>

  <select id="educationFont" onchange="setEducationFont(this.value)">
    <option value="Arial">Arial</option>
    <option value="Calibri">Calibri</option>
    <option value="Georgia">Georgia</option>
    <option value="Helvetica">Helvetica</option>
    <option value="Times New Roman">Times New Roman</option>
  </select>

  <select id="educationCols" onchange="setEducationColumns(this.value)">
    <option value="1">1 Col</option>
    <option value="2">2 Col</option>
    <option value="3">3 Col</option>
  </select>
</div>

<!-- Education Editor Container -->
<div id="educationEditorContainer"></div>

<button onclick="addNewEducation()" style="margin-top: 10px;">➕ Add Education</button>

<!-- ====== EDUCATION EDITOR END ====== -->
<!-- ====== LANGUAGE SKILLS EDITOR START ====== ----------------------------------------------------------------------->
<hr class="sep">

<!-- Editable Title -->

<div style="margin-bottom: 10px;">
  <label>
    <span id="previewLanguageTitle">Language</span>
    <i class="fas fa-pen edit-icon" onclick="toggleLanguageTitleInput()" style="cursor: pointer; margin-left: 5px;"></i>
  </label>
  <input id="languageTitleInput" type="text" placeholder="Language" style="display: none; margin-top: 5px;" />
  <div id="languageTitleButtons" style="display: none; margin-top: 5px;">
    <button onclick="saveLanguageTitle()">Save</button>
    <button onclick="hideLanguageInput()">Hide</button>
  </div>
</div>


<!-- Toolbar -->
<div class="summary-toolbar">
  <button onclick="toggleLanguageFormat(this,'bold')"><i class="fa-solid fa-bold"></i></button>
  <button onclick="toggleLanguageFormat(this,'italic')"><i class="fa-solid fa-italic"></i></button>
  <button onclick="toggleLanguageFormat(this,'underline')"><i class="fa-solid fa-underline"></i></button>
  <button onclick="toggleLanguageFormat(this,'strikeThrough')"><i class="fa-solid fa-strikethrough"></i></button>
  <button onclick="toggleLanguageFormat(this,'insertOrderedList')"><i class="fa-solid fa-list-ol"></i></button>
  <button onclick="toggleLanguageFormat(this,'insertUnorderedList')"><i class="fa-solid fa-list-ul"></i></button>
  <button onclick="toggleLanguageFormat(this,'justifyLeft')"><i class="fa-solid fa-align-left"></i></button>
  <button onclick="toggleLanguageFormat(this,'justifyCenter')"><i class="fa-solid fa-align-center"></i></button>
  <button onclick="toggleLanguageFormat(this,'justifyRight')"><i class="fa-solid fa-align-right"></i></button>
  <button onclick="toggleLanguageFormat(this,'justifyFull')"><i class="fa-solid fa-align-justify"></i></button>

  <label for="achievementsFontSizeSelector">Font Size:</label>
  <select id="achievementsFontSizeSelector" onchange="setAchievementsFontSize()">
    <option value="12px">12px</option>
    <option value="14px">14px</option>
    <option value="16px" selected>16px</option>
    <option value="18px">18px</option>
    <option value="20px">20px</option>
    <option value="22px">22px</option>
    <option value="24px">24px</option>
    <option value="26px">26px</option>
    <option value="28px">28px</option>
  </select>

  <!-- Column Picker -->
  <select id="languageCols" onchange="setLanguageColumns()">
    <option value="1">1 Col</option>
    <option value="2">2 Col</option>
    <option value="3">3 Col</option>
  </select>
</div>

<!-- Editor Area -->
<div id="languageEditor" class="summary-editor" contenteditable="true">
  <ul>
    <li>English</li>
    <li>Hindi</li>
    <li>Spanish</li>
    <li>French</li>
  </ul>
</div>

<!-- ====== LANGUAGE SKILLS EDITOR END--------------------------------------------------------------------------------------------- ====== -->


<!-- ====== CERTIFICATIONS EDITOR START ====== ------------------------------------------------------------------------------------------->
<hr class="sep">

<!-- Left Panel (Editor) -->
<div style="margin-bottom: 10px;">
  <label>
    <span id="previewCertificationsTitle">Certifications</span>
    <i class="fas fa-pen edit-icon" onclick="toggleCertificationsTitleInput()" style="cursor: pointer; margin-left: 5px;"></i>
  </label>
  <input id="certificationsTitleInput" type="text" placeholder="Certifications" style="display: none; margin-top: 5px;" />
  <div id="certificationsTitleButtons" style="display: none; margin-top: 5px;">
    <button onclick="saveCertificationsTitle()">Save</button>
    <button onclick="hideCertificationsInput()">Hide</button>
  </div>
</div>

<div class="summary-toolbar">
  <button onclick="toggleCertificationsFormat(this, 'bold')"><i class="fa-solid fa-bold"></i></button>
  <button onclick="toggleCertificationsFormat(this, 'italic')"><i class="fa-solid fa-italic"></i></button>
  <button onclick="toggleCertificationsFormat(this, 'underline')"><i class="fa-solid fa-underline"></i></button>
  <button onclick="toggleCertificationsFormat(this, 'strikeThrough')"><i class="fa-solid fa-strikethrough"></i></button>
  <button onclick="toggleCertificationsFormat(this, 'insertOrderedList')"><i class="fa-solid fa-list-ol"></i></button>
  <button onclick="toggleCertificationsFormat(this, 'insertUnorderedList')"><i class="fa-solid fa-list-ul"></i></button>
  <button onclick="toggleCertificationsFormat(this, 'justifyLeft')"><i class="fa-solid fa-align-left"></i></button>
  <button onclick="toggleCertificationsFormat(this, 'justifyCenter')"><i class="fa-solid fa-align-center"></i></button>
  <button onclick="toggleCertificationsFormat(this, 'justifyRight')"><i class="fa-solid fa-align-right"></i></button>
  <button onclick="toggleCertificationsFormat(this, 'justifyFull')"><i class="fa-solid fa-align-justify"></i></button>
  <button onclick="insertLink()"><i class="fa-solid fa-link"></i></button>



  <label class="picker">Text <input type="color" id="certificationsTextColor" onchange="setCertificationsTextColor()"></label>
  <label class="picker">BG <input type="color" id="certificationsBgColor" onchange="setCertificationsBgColor()"></label>

  <select id="certificationsCols" onchange="setCertificationsColumns()">
    <option value="1">1 Col</option>
    <option value="2">2 Col</option>
    <option value="3">3 Col</option>
  </select>
</div>



<!-- Editable Certifications Content -->
<div id="certificationsEditor" class="summary-editor" contenteditable="true" oninput="updateCertificationsPreview()">
  <div>[Certification Name] | [Issuing Organization] | [Year]</div>
</div>

<!-- ====== ACHIEVEMENTS EDITOR START ====== -->
<hr class="sep">

<!-- Editable Title -->
<div style="margin-bottom: 10px;">
  <label>
    <span id="previewAchievementsTitle">Achievements & Leadership</span>
    <i class="fas fa-pen edit-icon" onclick="toggleAchievementsTitleInput()" style="cursor: pointer; margin-left: 5px;"></i>
  </label>
  <input id="achievementsTitleInput" type="text" placeholder="Achievements & Leadership" style="display: none; margin-top: 5px;" />
  <div id="achievementsTitleButtons" style="display: none; margin-top: 5px;">
    <button onclick="saveAchievementsTitle()">Save</button>
    <button onclick="hideAchievementsInput()">Hide</button>
  </div>
</div>

<!-- Toolbar -->
<div class="summary-toolbar">
  <button onclick="toggleAchievementsFormat(this, 'bold')"><i class="fa-solid fa-bold"></i></button>
  <button onclick="toggleAchievementsFormat(this, 'italic')"><i class="fa-solid fa-italic"></i></button>
  <button onclick="toggleAchievementsFormat(this, 'underline')"><i class="fa-solid fa-underline"></i></button>
  <button onclick="toggleAchievementsFormat(this, 'strikeThrough')"><i class="fa-solid fa-strikethrough"></i></button>
  <button onclick="toggleAchievementsFormat(this, 'insertOrderedList')"><i class="fa-solid fa-list-ol"></i></button>
  <button onclick="toggleAchievementsFormat(this, 'insertUnorderedList')"><i class="fa-solid fa-list-ul"></i></button>
  <button onclick="toggleAchievementsFormat(this, 'justifyLeft')"><i class="fa-solid fa-align-left"></i></button>
  <button onclick="toggleAchievementsFormat(this, 'justifyCenter')"><i class="fa-solid fa-align-center"></i></button>
  <button onclick="toggleAchievementsFormat(this, 'justifyRight')"><i class="fa-solid fa-align-right"></i></button>
  <button onclick="toggleAchievementsFormat(this, 'justifyFull')"><i class="fa-solid fa-align-justify"></i></button>
  <button onclick="insertLink()"><i class="fa-solid fa-link"></i></button>



  <label class="picker">Text <input type="color" id="achievementsTextColor" onchange="setAchievementsTextColor()"></label>
  <label class="picker">BG <input type="color" id="achievementsBgColor" onchange="setAchievementsBgColor()"></label>

  <select id="achievementsCols" onchange="setAchievementsColumns()">
    <option value="1">1 Col</option>
    <option value="2">2 Col</option>
    <option value="3">3 Col</option>
  </select>
</div>

<!-- Editable Content -->
<div id="achievementsEditor" class="summary-editor" contenteditable="true" oninput="updateAchievementsPreview()">
  <div>[Achievement/Role] | [Year]</div>
</div>

<!-- ====== CERTIFICATIONS EDITOR END ----------------------------------------------------------------------------------------------====== -->
<!-- ====== INTERESTS EDITOR START ====== -->
 <!-- interest Content END ----------------------------------------------------------------------------------------------->
<hr class="sep">

<!-- Editable Title -->
<div style="margin-bottom: 10px;">
  <label>
    <span id="previewInterestsTitle">Interests</span>
    <i class="fas fa-pen edit-icon" onclick="toggleInterestsTitleInput()" style="cursor: pointer; margin-left: 5px;"></i>
  </label>
  <input id="interestsTitleInput" type="text" placeholder="Interests" style="display: none; margin-top: 5px;" />
  <div id="interestsTitleButtons" style="display: none; margin-top: 5px;">
    <button onclick="saveInterestsTitle()">Save</button>
    <button onclick="hideInterestsInput()">Hide</button>
  </div>
</div>

<!-- Toolbar -->
<div class="summary-toolbar">
  <button onclick="toggleInterestsFormat(this, 'bold')"><i class="fa-solid fa-bold"></i></button>
  <button onclick="toggleInterestsFormat(this, 'italic')"><i class="fa-solid fa-italic"></i></button>
  <button onclick="toggleInterestsFormat(this, 'underline')"><i class="fa-solid fa-underline"></i></button>
  <button onclick="toggleInterestsFormat(this, 'strikeThrough')"><i class="fa-solid fa-strikethrough"></i></button>
  <button onclick="toggleInterestsFormat(this, 'insertOrderedList')"><i class="fa-solid fa-list-ol"></i></button>
  <button onclick="toggleInterestsFormat(this, 'insertUnorderedList')"><i class="fa-solid fa-list-ul"></i></button>
  <button onclick="toggleInterestsFormat(this, 'justifyLeft')"><i class="fa-solid fa-align-left"></i></button>
  <button onclick="toggleInterestsFormat(this, 'justifyCenter')"><i class="fa-solid fa-align-center"></i></button>
  <button onclick="toggleInterestsFormat(this, 'justifyRight')"><i class="fa-solid fa-align-right"></i></button>
  <button onclick="toggleInterestsFormat(this, 'justifyFull')"><i class="fa-solid fa-align-justify"></i></button>
  <button onclick="insertLink()"><i class="fa-solid fa-link"></i></button>



  <label class="picker">Text <input type="color" id="interestsTextColor" onchange="setInterestsTextColor()"></label>
  <label class="picker">BG <input type="color" id="interestsBgColor" onchange="setInterestsBgColor()"></label>

  <select id="interestsCols" onchange="setInterestsColumns()">
    <option value="1">1 Col</option>
    <option value="2">2 Col</option>
    <option value="3">3 Col</option>
  </select>
</div>

<!-- Editable Interests Content -->
<div id="interestsEditor" class="summary-editor" contenteditable="true" oninput="updateInterestsPreview()">
  <div>[Interest 1]</div>
</div>
<!-- interest Content END ----------------------------------------------------------------------------------------------->


  <div id="customFieldsContainer" style="display: flex; gap: 20px; align-items: flex-start; margin-top: 20px;">
    <!-- Left side (Editor) -->
    <div style="flex: 1; max-width: 100%;">
      <button onclick="addCustomField()">➕ You Can Add New Section</button>
      <div id="editorFields"></div>
    </div>
  </div>
    

              <!-- ====================== FOOTER ====================== -->
        <footer><p>Resume by sk project</p></footer>

    </div><!-- left panel end -->

    <!-- ▬▬ MIDDLE PANEL ▬▬ -->
    <div class="middle">
      
      <!-- download ke liye hai sirf middle section ka download  Button -->
      <div class="resume-container" id="resumeArea">

        <!-- ====================== HEADER ====================== -->
        <header>
          <h1 id="previewName">[Your Name]</h1>
          <h2 id="previewheadline">[Your Job Title]</h2>
          <p>
            <i class="fas fa-map-marker-alt"></i> <span id="previewLocation">[Your Location]</span> |
            <i class="fas fa-phone"></i> <span id="previewnumber"> [Your Phone Number] </span> |
            <i class="fas fa-envelope"></i> <span id="previewgmail"> [Your Email] </span> |
            <i class="fab fa-linkedin"></i> <span id="previewlinkedin"> [Your LinkedIn Profile] </span>
            <span id="customHeaderField"></span>
          </p>
        </header>

        <!-- ====================== SUMMARY ====================== -->
        <section class="summary">
          <h3 id="previewSummaryTitle">Summary</h3>
          <p id="previewSummaryContent">[Write a brief summary about yourself, your skills, and your career goals.]</p>
        </section>
        

        <!-- ====================== SKILLS ====================== -->
        <section class="skills">
          <h3>Technical Skills</h3>
          <ul>
            <li>[Skill 1]</li><li>[Skill 2]</li><li>[Skill 3]</li><li>[Skill 4]</li>
          </ul>
        </section>

        <!-- ====================== PROJECTS ====================== -->
        <!-- Preview -->
        <div class="preview-section">
          <h3 id="previewProjectTitle" class="preview-title">Projects</h3>
          <div id="projectPreviewContent" class="preview-content">
            <div class="project-preview-line">
              <span class="project-name">Project Name</span>
              <span class="project-date">Aug 2024 - Dec 2025</span>
            </div>
            <div class="project-desc">Describe your project here...</div>
          </div>
        </div>
        
 <!-- ====================== EDUCATION ====================== -->
        <section class="education">
          
          <!-- Add your education details here -->
        </section>
<!-- Preview Section -->

<h3 id="previewEducationTitle">Education</h3>
<div id="educationPreviewContent"></div>
        
        <!-- ====================== LANGUAGES ====================== -->
        <section class="languages">
          <h3>Languages</h3>
          <ul><li>[Language 1]</li><li>[Language 2]</li></ul>
        </section>

        <!-- ====================== CERTIFICATIONS ====================== -->
<!-- Middle Panel (Live Preview) -->
<section class="certifications">
  <h3>Certifications</h3>
  <ul>
    <li>[Certification Name] | [Issuing Organization] | [Year]</li>
    <li>[Certification Name] | [Issuing Organization] | [Year]</li>
  </ul>
</section>
        

        <!-- ====================== ACHIEVEMENTS ====================== -->
       
        <section class="achievements">
          <h3>Achievements & Leadership</h3>
          <ul>
            <li>[Achievement/Role] | [Year]</li>
            <li>[Achievement/Role] | [Year]</li>
          </ul>
        </section>
        

        <!-- ====================== INTERESTS ====================== -->
        <section class="interests">
          <h3>Interests</h3>
          <ul><li>[Interest 1]</li><li>[Interest 2]</li><li>[Interest 3]</li></ul>
        </section>

<!-- ====================== CUSTOM FIELD PREVIEW ====================== -->
    <!-- Middle side (Live Preview) -->
    <div id="previewFields" ></div>


      </div><!-- resume-container -->

    </div><!-- middle panel end -->

    <!-- ▬▬ RIGHT PANEL ▬▬ -->
    <div class="right">
      <h2>Quick Actions</h2><footer><p>Resume by sk project</p></footer>
    
      <!-- Download Resume -->
      <button id="downloadBtn">Download Resume</button>
    
      <!-- Icon Links Stack -->
      <div class="icon-links">
        <!-- ChatGPT Icon -->
        <a href="https://chat.openai.com" target="_blank" class="icon-card">
          <img src="chatgpt-icon.png" alt="ChatGPT" class="icon-img">
          <span>Open ChatGPT</span>
        </a>
    
        <!-- Another Link -->
        <a href="https://www.livecareer.com/resume/check" target="_blank" class="icon-card">
          <img src="link-icon.png" alt="Web Link" class="icon-img">
          <span>Visit Website</span>
        </a>
      </div>
    <!-- Global Font Size Selector -->
<label for="globalFontSizeSelector" class="center-label">Global Font Size:</label>
<select id="globalFontSizeSelector" onchange="setGlobalFontSize()">
  <option value="12px">12px</option>
  <option value="14px">14px</option>
  <option value="16px" selected>16px</option>
  <option value="18px">18px</option>
  <option value="20px">20px</option>
  <option value="22px">22px</option>
  <option value="24px">24px</option>
  <option value="26px">26px</option>
  <option value="28px">28px</option>
</select>


<!-- Global Font Family Selector -->
<label for="globalFontSelector">Global Font:</label>
<select id="globalFontSelector" onchange="setGlobalFontFamily()">
  <option value="Arial">Arial</option>
  <option value="Calibri">Calibri</option>
  <option value="Cambria">Cambria</option>
  <option value="Georgia">Georgia</option>
  <option value="Helvetica">Helvetica</option>
  <option value="Times New Roman" selected>Times New Roman</option>
  <option value="Trebuchet MS">Trebuchet MS</option>
  <option value="Verdana">Verdana</option>
  <option value="Tahoma">Tahoma</option>
  <option value="Courier New">Courier New</option>
  <option value="Lucida Console">Lucida Console</option>
  <option value="Palatino Linotype">Palatino Linotype</option>
  <option value="Segoe UI">Segoe UI</option>
  <option value="Franklin Gothic Medium">Franklin Gothic Medium</option>
  <option value="Garamond">Garamond</option>
  <option value="Impact">Impact</option>
  <option value="Century Gothic">Century Gothic</option>
  <option value="Gill Sans">Gill Sans</option>
  <option value="Arial Black">Arial Black</option>
  <option value="Book Antiqua">Book Antiqua</option>
</select>



<label for="lineHeightRange" class="center-label">Line Height (1.15 is Default)</label>
<input type="range" id="lineHeightRange" min="0.5" max="2" step="0.01" value="1.15">
<span id="lineHeightValue">1.15</span>

<!-- Title Text Color -->
<label for="titleColorPicker">Title Text Color</label>
<input type="color" id="titleColorPicker" value="#333333">
<span id="titleColorValue">#333333</span>



<!-- Line (Border-Bottom) Color -->
<label for="lineColorPicker" class="center-label">Under Line Color</label>
<input type="color" id="lineColorPicker" value="#333333">
<span id="lineColorValue">#333333</span>

<label for="titleAlignSelect">Title Alignment</label>
<select id="titleAlignSelect">
  <option value="left">Left Align</option>
  <option value="center">Center Align</option>
</select>
 
<!-- Name Font Size ---------------------------------------------------------------------------------------------->
<label for="nameFontSizeRange" class="center-label">Name Font Size(36 px )</label>
<input type="range" id="nameFontSizeRange" min="16" max="72" step="1" value="36">
<span id="nameFontSizeValue">36px</span>



<!-- Job Title Font Size -->
<label for="jobFontSizeRange" class="center-label">Job Title Size( 24 px )</label>
<input type="range" id="jobFontSizeRange" min="12" max="48" step="1" value="24">
<span id="jobFontSizeValue">24px</span>

<!--- ---------------End ---------------------------------------------------------------------------------------  
<label for="titleAlignToggle"><strong>Title Alignment</strong> (Name + Job Title)</label><br>
<select id="titleAlignToggle">
  <option value="left">Left Align</option>
  <option value="center">Center Align</option>
</select>
  -------------------->
<label for="titleAlignToggle"><h4 style=" color: white ;"class="center-label" >Name Alignment</h4></label>
<select id="titleAlignToggle">
  <option value="center">Center Align</option>
  <option value="left">Left Align</option>
  
</select>

<!-- page colour  Start------------------------------------------------------------------------------------------------>
<label for="middleBgColorPicker">Page colour</label>
<input type="color" id="middleBgColorPicker" value="#ffffff">
<span id="middleBgColorValue">#ffffff</span>
<!-- page colour  end------------------------------------------------------------------------------------------------>
    

<!-- DELETE ZONE -->
<div id="deleteZone" style="border: 2px dashed red; padding: 20px; margin-top: 30px; text-align: center; color: red; font-weight: bold; border-radius: 8px; cursor: pointer;">
  🗑 Drop Section Here to Delete
</div>


<div class="controls">
  <button id="undoButton">Undo</button>
</div>



</div>
 
<!-- container -->
  
  <!-- Main JS -->
  <script src="script.js"></script>
  <!-- Summary‑Editor JS -->
  <script src="summary.js"></script>
</body>
</html>
