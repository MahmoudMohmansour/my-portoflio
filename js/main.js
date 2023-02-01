/*======= tayping animation======== */
var typed = new Typed(".typing" , {
    strings:["","","Web Developer" , "Using React-js" , "Freelancer"],
    typeSpeed:120,
    BackSpeed:60,
    loop:true
})
/*======= Aside active class======== */
const nav=document.querySelector(".nav"),
      navlist=nav.querySelectorAll("li"),
      totalNavList=navlist.length,
      allSection=document.querySelectorAll(".section"),
      totalSection=allSection.length
      for(let i=0; i<totalNavList;i++)
      {
        const a=navlist[i].querySelector("a");
        a.addEventListener("click" , function(){

            removeBackSection()
            for(let j=0; j<totalNavList; j++)
            {
                for(let i=0; i<totalSection;i++)
                {
                    allSection[i].classList.remove("back-section")
                }

                if(navlist[j].querySelector("a").classList.contains("active"))
                {
                    addBackSection(j)
                   // allSection[j].classList.add("back-section")
                }

                navlist[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this)
            if(window.innerWidth<1200){
                asideSectionTogglerBtn()
            }
        })
      }
      function removeBackSection(){
        for(let i=0; i<totalSection;i++){
            allSection[i].classList.remove("back-section")
        }
      }
      function addBackSection(num){
        allSection[num].classList.add("back-section")
      }
      function showSection(element){
        for(let i=0; i<totalSection;i++)
        {
            allSection[i].classList.remove("active")
        }
        const target=element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
      }


      /*=========== span nav togller to show Aside============ */
      function updateNav(element){
        for(let i=0; i<totalNavList; i++){
            navlist[i].querySelector("a").classList.remove("active");
            const target=element.getAttribute("href").split("#")[1];
            if(target=== navlist[i].querySelector("a").getAttribute("href").split("#")[1]){
                navlist[i].querySelector("a").classList.add("active");
            }
        }
      }
      document.querySelector(".hire-me").addEventListener("click" , function(){
        const sectionIndex=this.getAttribute("data-section-index")
        showSection(this);
        updateNav(this)
        removeBackSection()
        addBackSection(sectionIndex)
      })
      const navTogglerBtn=document.querySelector(".nav-toggler");
            aside=document.querySelector(".aside")
            navTogglerBtn.addEventListener("click",()=>{
                asideSectionTogglerBtn()
            })
            function asideSectionTogglerBtn(){
                aside.classList.toggle("open")
                navTogglerBtn.classList.toggle("open")
                for(let i =0; i<totalSection ; i++){
                    allSection[i].classList.toggle("open")
                }
            }