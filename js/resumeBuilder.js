var bio = {
    "name": "Sam Selimovski",
    "role": "Web Developer",
    "welcomeMessage": "Welcome to my Resume",
    "pic":"images/me.jpg",
        "contacts" : {
            "mobile": "7738659809",
            "email": "SamSelimi@hotmail.com",
            "github": "samselimi",
            "twitter": "@samselimi",
            "location": "Chicago IL"
            },
    "skills": [
        "Web Design",
        "Database Management",
        "Perl Programming"
    ]
};

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedRole).prepend(formattedName);
    var formattedBioPic = HTMLbioPic.replace("%data%",bio.pic);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").append(formattedBioPic).append(formattedWelcomeMsg);


    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $('#skills').append(formattedSkill);
        });
    }
    var contacts = bio["contacts"];
    var formattedMobile = HTMLmobile.replace("%data%",contacts["mobile"]);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts["email"]);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts["github"]);
    var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts["twitter"]);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
    $("#topContacts").append(formattedMobile).append(formattedEmail).append(formattedGithub).append(formattedTwitter).append(formattedLocation);
    $("#footerContacts").append(formattedMobile).append(formattedEmail).append(formattedGithub).append(formattedTwitter).append(formattedLocation);
    $("#main").append(internationalizeButton);
};
bio.display();

function inName(name) {
    name = bio.name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " "+name[1];

};

var work = {
    "jobs": [
        {
            "employer": "AT&T DSL & Narrowband Care",
            "title": "Technology Manager",
            "dates_worked": "2006 - 2014",
            "location": [
                "Hoffman Estates, IL",
                "San Diego, CA",
                "San Francisco, CA",
                "Winston Salem, NC"
            ],
            "description": "Technology Management including web design."
        },
        {
            "employer": "AT&T Service Delivery and Assurance",
            "title": "Network Manager",
            "dates_worked": "2014 - Current",
            "location": "Loves Park, IL",
            "description": "Leading a group of Uverse Internet field technicians."
        }
    ]
};
work.display = function() {
        work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedworkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedworkTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedworkDates = HTMLworkDates.replace("%data%", job.dates_worked);
        var formattedworkLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedworkDescription = HTMLworkDescription.replace("%data%", job.description);
        var formattedworkEmployerTitle = formattedworkEmployer + formattedworkTitle;

        $(".work-entry:last").append(formattedworkEmployerTitle);
        $(".work-entry:last").append(formattedworkDates);
        $(".work-entry:last").append(formattedworkDescription);
        $(".work-entry:last").append(formattedworkLocation);
    });

};
work.display();

var education = 
{
    "schools": 
    [
        {
            "name": "Pace University",
            "location": "White Plains, NY",
            "degree": "Associates in Information Technology",
            "majors": 
            [
                "Broadband Essentials",
                "Electronics"
            ],
            "dates": "2006 - 2010",
            "url": "http://pace.edu"
        },
        {
            "name": "AT&T University",
            "location": "Hoffman Estates, IL",
            "degree": "LWD",
            "majors": 
            [
                "Leading with distinction",
                "Six Sigma"
            ],
            "dates": "2013",
            "url": "http://hr.web.att.com/tuniversity/TU/SitePages/Default.aspx"
        }
    ],
    "onlineCourses": 
    [
        {
            "title": "HTML & CSS",
            "school": "Code Academy",
            "dates": "2013-2014",
            "url": "http://www.codecademy.com/courses/web-beginner-en-y2Yjd/0/5?curriculum_id=50579fb998b470000202dc8b"
        },
        {
            "title": "Front End Web Developer",
            "school": "Udacity",
            "dates": "2014",
            "url": "https://www.udacity.com"
        }
    ]
};
education.display = function()
{
    education.schools.forEach(function(school) 
    {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace('#', school.url);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        $(".education-entry:last").append(formattedSchoolName);
        $(".education-entry:last a").append(formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolLocation).append(formattedSchoolDates);

        school.majors.forEach(function(major) 
        {
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);
            $(".education-entry:last").append(formattedSchoolMajor);
        });
    });
        if (education.onlineCourses.length > 0) 
        {
            $(".education-entry:last").append(HTMLonlineClasses);
            education.onlineCourses.forEach(function(course) 
            {
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title).replace('#', course.url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool).append(formattedOnlineDates).append('<br>');
            });
        };
};
education.display();

var projects = 
{
    "projects": 
    [
        {
            "title": "WorkBook",
            "dates_worked": "2010 - 2014",
            "description": "Create Design deploy and manage Internal website for AT&T",
            "images": "images/wbimg1.png"
        },
        {
            "title": "Service Promise Library",
            "dates_worked": "2013",
            "description": "Create and deploy AT&T's Service Promise Library, which houses evaluated contacts for quality and rates them for adhering to the Service Promise.",
            "images": "images/wbimg3.png"
        }
    ]
};
projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates_worked);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images){
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
            }
                $(".project-entry:last").append(formattedImage);
        }
    }
};
projects.display();

$("#mapDiv").append(googleMap);