const empName = document.getElementById("empName");
const empID = document.getElementById("empID");
const empDesg = document.getElementById("empDesg");
const empDOJ = document.getElementById("empDOJ");
const empExp = document.getElementById("empExp");
const empLoc = document.getElementById("empLoc");
const empTech = document.getElementById("empTech");
const empImgURL = document.getElementById("empImgURL");

const empData = [
  {
    id: 1,
    image: "umar-kashif-GTHfD5XbkSw-unsplash.jpg",
    Name: "Nicholas Walker",
    position: "Associate",
    EmpId: 12356,
    DOJ: "02/05/199",
    TotalExp: 3,
    WrkLocation: "Pune",
    Technologies: "Java, Html, Jquery",
  },
  {
    id: 2,
    image: "abdullah-ali-1w9I6H4aftw-unsplash.jpg",
    Name: "Austin Scott",
    position: "Associate",
    EmpId: 25869,
    DOJ: "13/12/1998",
    TotalExp: 1,
    WorkLocation: "Gurgaon",
    Technologies: "DotNet, C, C#",
  },
  {
    id: 3,
    image: "adam-winger-aCajfuNQAN4-unsplash.jpg",
    Name: "Jason Morgan",
    position: "Associate",
    EmpId: 56325,
    DOJ: "25/5/2000",
    TotalExp: 2,
    WorkLocation: "Pune",
    Technologies: "Ruby, Html, Java",
  },
  {
    id: 4,
    image: "alex-suprun-ZHvM3XIOHoE-unsplash.jpg",
    Name: "Gary Aderson",
    position: "Associate",
    EmpId: 45896,
    DOJ: "15/6/1999",
    TotalExp: 3,
    WorkLocation: "Pune",
    Technologies: "Java, Html, C, Css",
  },
  {
    id: 5,
    image: "alexander-hipp-iEEBWgY_6lA-unsplash.jpg",
    Name: "Robert Richards",
    position: "Associate",
    EmpId: 47852,
    DOJ: "30/6/2000",
    TotalExp: 3,
    WorkLocation: "Gurgaon",
    Technologies: "javascript, Html, Css, Java",
  },
  {
    id: 6,
    image: "art-hauntington-jzY0KRJopEI-unsplash.jpg",
    Name: "Joseph Thomas",
    position: "Associate",
    EmpId: 85693,
    DOJ: "23/3/2000",
    TotalExp: 1,
    WorkLocation: "Mumbai",
    Technologies: "Java, Html, Css, JQuery",
  },
  {
    id: 7,
    image: "avinash-ratnaji-BYgZAJsNU80-unsplash.jpg",
    Name: "Daniel Robinson ",
    position: "Associate",
    EmpId: 41256,
    DOJ: "18/9/1999",
    TotalExp: 3,
    WorkLocation: "Pune",
    Technologies: "IoT, Html, Css",
  },
  {
    id: 8,
    image: "imansyah-muhamad-putera-n4KewLKFOZw-unsplash.jpg",
    Name: "Rebecca Cooper",
    position: "Associate",
    EmpId: 74586,
    DOJ: "12/3/1998",
    TotalExp: 1,
    WorkLocation: "Gurgaon",
    Technologies: "C#, Html, Css, Java",
  },
  {
    id: 9,
    image: "midas-hofstra-a6PMA5JEmWE-unsplash.jpg",
    Name: "Michelle Clark",
    position: "Associate",
    EmpId: 14523,
    DOJ: "17/9/1999",
    TotalExp: 2,
    WorkLocation: "Mumbai",
    Technologies: "Java, Html, Css, C",
  },
  {
    id: 10,
    image: "nicolas-horn-MTZTGvDsHFY-unsplash.jpg",
    Name: "Sharon Perry",
    position: "Associate",
    EmpId: 95123,
    DOJ: "27/8/2000",
    TotalExp: 1,
    WorkLocation: "Pune",
    Technologies: "Ruby, Html, Css",
  },

  {
    id: 11,
    image: "potters-media-MmSYKyYe0-w-unsplash.jpg",
    Name: " Margaret Howard",
    position: "Associate",
    EmpId: 75325,
    DOJ: "28/3/1999",
    TotalExp: 2,
    WorkLocation: "Gurgaon",
    Technologies: "DotNet, Html, Css",
  },
];

const getEmp = (empid) => {
  for (let emp of empData) {
    if (emp.EmpId == empid) return emp;
  }
  return null;
};

const ul = document.getElementById("list");
empData.map((e) => {
  console.log(e);
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(`Name :  ${e.Name} (${e.EmpId})`));
  ul.appendChild(li);
});

ul.addEventListener("click", function (e) {
  if (e.target && e.target.nodeName == "LI") {
    const clickedEmpId = parseInt(
      e.target.innerText.split("(")[1].replace(")", "")
    );
    const clickedEmp = getEmp(clickedEmpId);

    empName.innerText = clickedEmp.Name;
    empID.innerText = clickedEmp.EmpId;
    empExp.innerText = clickedEmp.TotalExp;
    empDOJ.innerText = clickedEmp.DOJ;
    empLoc.innerText = clickedEmp.WorkLocation;
    empTech.innerText = clickedEmp.Technologies;
    empImgURL.src = clickedEmp.image;
    empDesg.innerText = clickedEmp.position;
  }
});
