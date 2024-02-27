// Fetch Skills and display them with descriptions
fetch('skills.json')
  .then(response => response.json())
  .then(skills => {
    const skillsContainer = document.getElementById('skillsContainer');
    skills.forEach(skill => {
      skillsContainer.innerHTML += `
        <div class="skill">
          <img src="${skill.icon}" alt="${skill.name}" class="skill-icon" />
          <div>
            <h3>${skill.name}</h3>
            <p>${skill.description}</p>
          </div>
        </div>
      `;
    });
  })
  .catch(error => console.error('Error loading skills:', error));
