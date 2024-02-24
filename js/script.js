function addProfessionalText() {
    var professionalContainer = document.getElementById('additionalTextContainer');
    var professionalText = document.getElementById('professionalText');

    if (professionalText) {
        professionalContainer.removeChild(professionalText);
    } else {
        professionalText = document.createElement('div');
        professionalText.id = 'professionalText';
        professionalText.innerHTML = 'Currently, I am a student pursuing a degree in Software Engineering at the university. While my professional background is still in the making, my journey is fueled by a passion for technology and a hunger for knowledge.';
        professionalContainer.appendChild(professionalText);
    }
}


function addEducationText() {
    var educationContainer = document.getElementById('educationContainer');
    var educationText = document.getElementById('educationText');

    if (educationText) {
        educationContainer.removeChild(educationText);
    } else {
        educationText = document.createElement('div');
        educationText.id = 'educationText';
        educationText.innerHTML = 'Although I have not received a degree at the university yet, I garnered numerous accolades during my high school years, laying the foundation for my academic pursuits.';
        educationContainer.appendChild(educationText);
    }
}

function addSkillText() {
    var skillsContainer = document.getElementById('skillsContainer');
    var skillsText = document.getElementById('skillsText');

    if (skillsText) {
        skillsContainer.removeChild(skillsText);
    } else {
        skillsText = document.createElement('div');
        skillsText.id = 'skillsText';
        skillsText.innerHTML = 'I am a flexible individual with a knack for adapting to various challenges. My strength lies in tackling mathematical challenges, a skill that has proven invaluable in my academic journey.';
        skillsContainer.appendChild(skillsText);
    }
}

function addInterestText() {
    var interestContainer = document.getElementById('interestContainer');
    var interestText = document.getElementById('interestText');

    if (interestText) {
        interestContainer.removeChild(interestText);
    } else {
        interestText = document.createElement('div');
        interestText.id = 'interestText';
        interestText.innerHTML = 'Beyond coding and problem-solving, I find joy in playing volleyball and basketball. These sports not only keep me active but also serve as a great way to unwind.';
        interestContainer.appendChild(interestText);
    }
}

function addMissionText() {
    var missionContainer = document.getElementById('missionContainer');
    var missionText = document.getElementById('missionText');

    if (missionText) {
        missionContainer.removeChild(missionText);
    } else {
        missionText = document.createElement('div');
        missionText.id = 'missionText';
        missionText.innerHTML = 'My core values revolve around creating positive change. I aspire to contribute to my country is growth by developing innovative applications that can benefit people worldwide.';
        missionContainer.appendChild(missionText);
    }
}

function addAchievementsText() {
    var achievementContainer = document.getElementById('achievementContainer');
    var achievementText = document.getElementById('achievementText');

    if (achievementText) {
        achievementContainer.removeChild(achievementText);
    } else {
        achievementText = document.createElement('div');
        achievementText.id = 'achievementText';
        achievementText.innerHTML = 'I have accumulated a wealth of mathematical knowledge through a specialized course preparing for the ORT test. This foundation has been instrumental in my academic success and serves as a guiding light for my future endeavors.';
        achievementContainer.appendChild(achievementText);
    }
}