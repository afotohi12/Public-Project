const profile = [
    {
        id:1,
        name : "شبنم",
        img:"img/R (1).jpeg",
        job:"FullStack Developer",
        info : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque minus explicabo adipisci voluptas?",
    },
    {
        id:1,
        name : "ساقی",
        img:"img/R (3).jpeg",
        job:"UI/UX",
        info : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit error hic sapiente eveniet.",
    },
    {
        id:1,
        name : "مهرداد",
        img:"img/R (2).jpeg",
        job:"Java Developer",
        info : "Lorem ipsum, dolor sit amet adipisicing elit. Quaerat a corporis laudantium consequatur fugiat.",
    },
    {
        id:1,
        name : "علیرضا",
        img:"img/R.jpeg",
        job:"Node.Js Developer",
        info : "Lorem ipsum dolor sit amet, consectetur elit.Perferendis iste animi atque minus distinctio.",
    },
];



const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let curentItem = 0;

window.addEventListener('DOMContentLoaded', function (){
  showPerson(curentItem);
});


function showPerson(){
    const item = profile[curentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.info;
};


randomBtn.addEventListener('click',function (){
    curentItem = Math.floor(Math.random() * profile.length);
    showPerson(curentItem);
})