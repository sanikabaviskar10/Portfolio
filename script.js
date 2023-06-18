/******************* typing animation************ */
var typed = new Typed(".typing",{
    strings:["","Web Designer","Web Developer","Graphic Designer","YouTuber"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;
    for(len=0;i<totalNavList;i++)
    {
        
        const a=navList[i].querySelector("a");
        a.addEventListener("click",function()
        {
            for(let j=0;j<totalNavList;j++)
            {
                this.classList.add("active")
            }
        }
        )

    }
    