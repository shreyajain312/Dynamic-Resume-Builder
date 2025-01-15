document.addEventListener("DOMContentLoaded", () => {
    const addimg = document.getElementById('addimg');
    const photo = document.getElementById('photo');

    // Photo
    addimg.onchange = () => {
        photo.src = URL.createObjectURL(addimg.files[0]);
    };

    // Name
    function addname() {
        const name = document.querySelector('.name');
        const fname = document.getElementById('fname');
        if (fname.value.trim() !== "") {
            const fndisplay = document.createElement('h4');
            fndisplay.textContent = fname.value;
            name.textContent = '';
            name.appendChild(fndisplay);
        }
        else {
            window.alert("Please fill your Name.");
        }
    }

    // About
    const addabout = document.getElementById('addabout');
    const counter0=document.querySelector('.counter');

    addabout.addEventListener("keyup",()=>{
        counter0.textContent=addabout.value.length;
    });

    function addAbout() {
        const dis = document.createElement('div');
        const about = document.querySelector('.about');

        dis.classList.add('About')
        if (addabout.value.trim() !== "") {
            about.innerHTML = "";
            dis.textContent = addabout.value;
            about.appendChild(dis);
        }
        else {
            window.alert("Please fill your summary.");
        }
    }



    // Contacts
    const addcontact = document.getElementById('addcontact');
    const contacts = document.querySelector('.contacts');
    function addcontactdata() {
        const ul = addcontact.getElementsByTagName('li');
        for (let i = 0; i < ul.length; i++) {
            const li = ul[i].getElementsByTagName('input')[0];

            if (li.value.trim() !== "") {
                const list = document.createElement('li');
                list.textContent = li.value;
                list.classList.add('contacts')
                contacts.appendChild(list);
            }
            else {
                window.alert("Please enter your Contacts.");
            }

            li.value = "";

        }
    }

    // Skills

    const skills = document.querySelector('.skills');
    const addskill = document.getElementById('addskill');
    function addskilldata() {
        const ul = addskill.getElementsByTagName('li');
        for (let i = 0; i < ul.length; i++) {
            const li = ul[i].getElementsByTagName('input')[0];

            if (li.value.trim() !== "") {
                const list = document.createElement('li');
                list.textContent = li.value;
                skills.appendChild(list);
            }
            else {
                window.alert("Please enter your Contacts.");
            }
            li.value = "";
        }
    }


    // Input button for contacts and skill
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
        const add = container.querySelector('.add');
        const addinput = container.querySelector('.addinput');
        add.addEventListener("click", () => {
            const li = document.createElement('li');
            const br = document.createElement('br');

            const input = document.createElement('input');
            const skillinput = addskill.getElementsByTagName('input');
            const contactinput = addcontact.getElementsByTagName('input');
            addInput(li, br, input, addinput);

            for (let i = 0; i < skillinput.length; i++) {
                skillinput[i].setAttribute("placeholder", "Eg- Java , C++ , JavaScript etc")
            }
            for (let i = 0; i < contactinput.length; i++) {
                contactinput[i].setAttribute("placeholder", "Eg- Email , Phone-No , Linkedin etc")
            }
        });
    });

    function addInput(li, br, input, addinput) {
        addinput.appendChild(br);
        addinput.appendChild(li);
        li.appendChild(input);
    }

    // Achievements
    const ac = document.getElementById('addachievements-container');
    const addachievements = document.getElementById('addachievements-item');
    let add2 = document.querySelector('.add2');
    // Counter
    const achievementsdis = addachievements.querySelector('textarea');
    let counter = addachievements.querySelector('.counter');
    achievementsdis.addEventListener("keyup", () => {
        counter.textContent = achievementsdis.value.length
    });

    add2.addEventListener("click", () => {
        const newachievementscontainer = addachievements.cloneNode(true);
        newachievementscontainer.classList.add('achievement');

        const inputs = newachievementscontainer.getElementsByTagName('input');
        const textareas = newachievementscontainer.getElementsByTagName('textarea');
        const newCounterContainer = newachievementscontainer.querySelectorAll('.counter');

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = "";
        }
        for (let i = 0; i < textareas.length; i++) {
            textareas[i].value = "";
        }
        for (let i = 0; i < newCounterContainer.length; i++) {
            newCounterContainer[i].textContent = "0";
        }


        ac.appendChild(newachievementscontainer);

        // Counter
        const newCounter = newachievementscontainer.querySelector('.counter');
        const newTextarea = newachievementscontainer.querySelector('textarea');
        newTextarea.addEventListener("keyup", () => {
            newCounter.textContent = newTextarea.value.length;
        });

    });



    function addachievementsdata() {
        const achievement = document.querySelectorAll('.achievement');
        const achievementsdata = document.querySelector('.achievements-data');
        const h3 = document.createElement('h3');
        h3.textContent = "Achievement";
        achievementsdata.appendChild(h3);

        achievement.forEach(achievement => {
            const achievementsinput = achievement.getElementsByTagName('input');
            const achievementstextarea = achievement.getElementsByTagName('textarea');

            let allFieldsFilled = checkFields(achievementsinput, achievementstextarea);

            if (allFieldsFilled) {
                const br = document.createElement('br');
                const classes = ['achievement-name-holder', 'achievement-date-holder', 'achievement-org-holder'];
                const nameAndDateContainer = document.createElement('div');
                nameAndDateContainer.classList.add('name-and-date-container');
                for (let i = 0; i < achievementsinput.length; i++) {
                    const div = document.createElement('div');
                    div.classList.add(classes[i]);
                    div.textContent = achievementsinput[i].value;

                    if (i < 2) {
                        nameAndDateContainer.appendChild(div);
                    } else {
                        achievementsdata.appendChild(nameAndDateContainer);
                        achievementsdata.appendChild(div);
                    }
                }

                for (let i = 0; i < achievementstextarea.length; i++) {
                    const div = document.createElement('div');
                    div.textContent = achievementstextarea[i].value;
                    div.classList.add('achievement-dis-holder');
                    achievementsdata.appendChild(div);
                }
                achievementsdata.appendChild(br);
            } else {
                window.alert("Please fill all the data for Achievements.");
            }
        });
    }

    // Experience
    const ae = document.getElementById('addexperience-container');
    const addexperience = document.getElementById('addexperience-item');
    let add3 = document.querySelector('.add3');
    // Counter
    const experiencedis = addexperience.querySelector('textarea');
    let counter2 = addexperience.querySelector('.counter');
    experiencedis.addEventListener("keyup", () => {
        counter2.textContent = experiencedis.value.length
    });

    add3.addEventListener("click", () => {
        const newexperiencecontainer = addexperience.cloneNode(true);
        newexperiencecontainer.classList.add('experience');

        const input = newexperiencecontainer.getElementsByTagName('input');
        const textarea = newexperiencecontainer.getElementsByTagName('textarea');
        const newCounterContainer = newexperiencecontainer.querySelectorAll('.counter');

        for (let i = 0; i < input.length; i++) {
            input[i].value = "";
        }
        for (let i = 0; i < textarea.length; i++) {
            textarea[i].value = "";
        }
        for (let i = 0; i < newCounterContainer.length; i++) {
            newCounterContainer[i].textContent = "0";
        }

        ae.appendChild(newexperiencecontainer);
        // Counter
        const newCounter = newexperiencecontainer.querySelector('.counter');
        const newTextarea = newexperiencecontainer.querySelector('textarea');
        newTextarea.addEventListener("keyup", () => {
            newCounter.textContent = newTextarea.value.length;
        });

    });

    function addexperiencedata() {
        const experience = document.querySelectorAll('.experience');
        const experiencedata = document.querySelector('.experience-data');
        const h3 = document.createElement('h3');
        h3.textContent = "Experience";
        experiencedata.appendChild(h3);

        experience.forEach(experience => {
            const experienceinput = experience.getElementsByTagName('input');
            const experiencetextarea = experience.getElementsByTagName('textarea');
            let allFieldsFilled = checkFields(experienceinput, experiencetextarea);

            if (allFieldsFilled) {
                const br = document.createElement('br');
                const classes = ['job-title', 'start-date', 'end-date', 'Employer'];
                const nameAndDateContainer = document.createElement('div');
                nameAndDateContainer.classList.add('name-and-date-container');

                for (let i = 0; i < experienceinput.length; i++) {
                    const div = document.createElement('div');
                    div.classList.add(classes[i]);
                    div.textContent = experienceinput[i].value;

                    if (i < 3) {
                        nameAndDateContainer.appendChild(div);
                    } else {
                        experiencedata.appendChild(nameAndDateContainer);
                        experiencedata.appendChild(div);
                    }
                }

                for (let i = 0; i < experiencetextarea.length; i++) {
                    const div = document.createElement('div');
                    div.textContent = experiencetextarea[i].value;
                    div.classList.add('role');
                    experiencedata.appendChild(div);
                }

                experiencedata.appendChild(br);
            } else {
                window.alert("Please fill all the data for Experience.");
            }
        });
    }


    // Project
    const ap = document.getElementById('addprojects-container');
    const addproject = document.getElementById('addprojects-item');
    let add4 = document.querySelector('.add4');

    // Counter
    const projectdis = addproject.querySelector('textarea');
    let counter3 = addproject.querySelector('.counter');
    projectdis.addEventListener("keyup", () => {
        counter3.textContent = projectdis.value.length
    });

    add4.addEventListener("click", () => {
        const newprojectcontainer = addproject.cloneNode(true);
        newprojectcontainer.classList.add('project');
        const input = newprojectcontainer.getElementsByTagName('input');
        const textarea = newprojectcontainer.getElementsByTagName('textarea');
        const newCounterContainer = newprojectcontainer.querySelectorAll('.counter');

        for (let i = 0; i < input.length; i++) {
            input[i].value = "";
        }
        for (let i = 0; i < textarea.length; i++) {
            textarea[i].value = "";
        }
        for (let i = 0; i < newCounterContainer.length; i++) {
            newCounterContainer[i].textContent = "0";
        }
        ap.appendChild(newprojectcontainer);
        // Counter
        const newCounter = newprojectcontainer.querySelector('.counter');
        const newTextarea = newprojectcontainer.querySelector('textarea');
        newTextarea.addEventListener("keyup", () => {
            newCounter.textContent = newTextarea.value.length;
        });

    });



    function addprojectdata() {
        const project = document.querySelectorAll('.project');
        const projectdata = document.querySelector('.projects-data');
        const h3 = document.createElement('h3');
        h3.textContent = "Project";
        projectdata.appendChild(h3);


        project.forEach(project => {
            const projectinput = project.getElementsByTagName('input');
            const projecttextarea = project.getElementsByTagName('textarea');
            let allFieldsFilled = checkFields(projectinput, projecttextarea);


            if (allFieldsFilled) {
                const br = document.createElement('br');
                for (let i = 0; i < projectinput.length; i++) {
                    const div = document.createElement('div');
                    div.textContent = projectinput[i].value;
                    div.classList.add('display-project-name');
                    projectdata.appendChild(div);
                }

                for (let i = 0; i < projecttextarea.length; i++) {
                    const div = document.createElement('div');
                    div.textContent = projecttextarea[i].value;
                    div.classList.add('project-discription');
                    projectdata.appendChild(div);
                }
                projectdata.appendChild(br);
            } else {
                window.alert("Please fill all the data for Projects.");
            }
        });
    }



    // Education
    const ed = document.getElementById('addeducation-container');
    const addeducation = document.getElementById('addeducation-item');
    let add5 = document.querySelector('.add5');

    add5.addEventListener("click", () => {
        const neweducationcontainer = addeducation.cloneNode(true);
        neweducationcontainer.classList.add('education');
        const input = neweducationcontainer.getElementsByTagName('input');

        for (let i = 0; i < input.length; i++) {
            input[i].value = "";
        }

        ed.appendChild(neweducationcontainer);
    });

    function addeducationdata() {
        const education = document.querySelectorAll('.education');
        const educationdata = document.querySelector('.education-data');
        const h3 = document.createElement('h3');
        h3.textContent = "Education";
        educationdata.appendChild(h3);

        education.forEach(education => {
            const educationinput = education.getElementsByTagName('input');
            let allFieldsFilled = checkFields(educationinput);


            if (allFieldsFilled) {
                const br = document.createElement("br");
                const classes = ['degree', 'date', 'institution'];
                const nameAndDateContainer = document.createElement('div');
                nameAndDateContainer.classList.add('name-and-date-container');

                for (let i = 0; i < educationinput.length; i++) {
                    const div = document.createElement('div');
                    div.classList.add(classes[i]);
                    div.textContent = educationinput[i].value;

                    if (i < 2) {
                        nameAndDateContainer.appendChild(div);
                    } else {
                        educationdata.appendChild(nameAndDateContainer);
                        educationdata.appendChild(div);
                    }
                }
                educationdata.appendChild(br);

            } else {
                window.alert("Please fill all the data for Education.");
            }
        });
    }



    // checking fields
    function checkFields(input, textarea) {
        let allFieldsFilled = true;

        for (let i = 0; i < input.length; i++) {
            if (input[i].value.trim() === "") {
                allFieldsFilled = false;
                return false;
            }
            else {
                return true;
            }
        }

        for (let i = 0; i < textarea.length; i++) {
            if (textarea[i].value.trim() === "") {
                allFieldsFilled = false;
                return false;
            }
            else {
                return true;
            }
        }
        return checkFields();
    }

    const uplode = document.getElementById('uplode');
    uplode.addEventListener("click", () => {
        const achievementsdata = document.querySelector('.achievements-data');
        achievementsdata.textContent = "";
        const educationdata = document.querySelector('.education-data');
        educationdata.textContent = "";
        const projectdata = document.querySelector('.projects-data');
        projectdata.textContent = "";
        const experiencedata = document.querySelector('.experience-data');
        experiencedata.textContent = "";
        addname();
        addAbout();
        addcontactdata();
        addskilldata();
        addachievementsdata();
        addexperiencedata();
        addprojectdata();
        addeducationdata();
    })

    // Downlode button
    window.onload = () => {
        const save = document.getElementById('save');

        save.addEventListener("click", () => {
            const result = this.document.getElementsByClassName('result')[0];
            html2pdf().from(result).save()
        });
    }

});