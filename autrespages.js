
const retour = document.querySelector(".RetourEnHaut");

window.addEventListener("scroll", ()=>{

    if (window.pageYOffset>100){
        retour.classList.add("active");
    } else {
        retour.classList.remove("active");

    }
})

const fas1 = document.querySelector('.fa1')
const fas2 = document.querySelector('.fa2')
const fas3 = document.querySelector('.fa3')


const TL1 = new TimelineMax({paused: false})

TL1

.from (fas1,1,{opacity:0, x:-100})
.from (fas2,1,{opacity:0, x:100})
.from (fas3,1,{opacity:0, x:-100})


// const carte1 = document.querySelector('.exp1')
// const caceis= document.querySelector('.im1')
// const friedland = document.querySelector('.im2')
// const carte2= document.querySelector('.exp2')
// const carte3 = document.querySelector('.exp3')
// const grdf = document.querySelector('.im3')


// const TL2 = new TimelineMax({paused: true}); 

// TL2
// .from (carte1,1,{opacity:0, x:-100})
// .from (caceis,1,{opacity:0, x:100})
// .from (friedland,1,{opacity:0, x:-100})
// .from (carte2,1,{opacity:0, x:100})
// .from (carte3,1,{opacity:0, x:-100})
// .from (grdf,1,{opacity:0, x:100})



// const carte4 = document.querySelector('.child1')
// const lamanu1 = document.querySelector('.child2')
// const lamanu2 = document.querySelector('.child3')
// const carte5 = document.querySelector('.child4')
// const carte6 = document.querySelector('.child5')
// const iae = document.querySelector('.child6')
// const carte7 = document.querySelector('.child8')
// const uca = document.querySelector('.child7')



// const TL3 = new TimelineMax({paused: true});

// TL3
// .from (carte4,1,{opacity:0, x:-100})
// .from (lamanu1,1,{scale:0}, '-=0.4') 
// .from (lamanu2,1,{scale:0}, '-=0.4') 
// .from (carte5,1,{opacity:0, x:100},'-=0.4')
// .from (carte6,1,{opacity:0, x:-100}, '-=0.4')
// .from (iae,1,{scale:0},'-=0.4')
// .from (uca,1,{scale:0},'-=0.4')
// .from (carte7,1,{opacity:0, x:100},'-=0.4')


// page compétences
const txtAnim=document.querySelector('h5');

 new Typewriter( txtAnim, {
    //  loop:true,
     deleteSpeed: 20
 })

.changeDelay(20)
.typeString('<span style="font-family:oxygen,helvetica, sans-serif;">Bonjour, </span>') 
.pauseFor(1300)
.typeString('<span style="font-family:oxygen,helvetica, sans-serif;">j\'ai fait ci-dessous une liste de mes compétences  </br> en finance et de mes capacités à automatiser des tâches grâce à l\'informatique.</span>')
.start()


// page formation

const txtAnim2=document.querySelector('.page_formation');

 new Typewriter( txtAnim2, {
    //  loop:true,
     deleteSpeed: 20
 })

.changeDelay(20)
.typeString('<span style="font-family:oxygen,helvetica, sans-serif;">Bonjour, </span>') 
.pauseFor(1300)
.typeString('<span style="font-family:oxygen,helvetica, sans-serif;">j\'ai un profil aussi bien compétent en gestion d\'actifs, </br> </span>')
.pauseFor(800)
.typeString('<span style="font-family:oxygen,helvetica, sans-serif;">en contrôle de risques</span>')
.typeString('<span style="font-family:oxygen,helvetica, sans-serif;"> et en conformité.</span>')
.start()


// page realisation

const txtAnim3=document.querySelector('.page_realisation');

 new Typewriter( txtAnim3, {
    //  loop:true,
     deleteSpeed: 20
 })

.changeDelay(20)
.typeString('<span style="font-family:oxygen,helvetica, sans-serif;">Bonjour, </span>') 
.pauseFor(1300)
.typeString('<span style="font-family:oxygen,helvetica, sans-serif;">vous pouvez consultez ci-dessous </br> </span>')
.pauseFor(800)
.typeString('<span style="font-family:oxygen,helvetica, sans-serif;">mes différentes réalisations.</span>')
.start()



// page contact

const txtAnim4=document.querySelector('.page_contact');

 new Typewriter( txtAnim4, {
    //  loop:true,
     deleteSpeed: 20
 })

.changeDelay(20)
.typeString('<span style="font-family:oxygen,helvetica, sans-serif;">Bonjour, </span>') 
.pauseFor(1300)
.typeString('<span style="font-family:oxygen,helvetica, sans-serif;"> Je suis actuellement disponible pour collaborer, pour m\'écrire </br> </span>')
.pauseFor(300)
.typeString('<span style="font-family:oxygen,helvetica, sans-serif;">c\'est juste en bas ⬇️ , cordialement,</span>')
.start()


// page expériences pro

const txtAnim5=document.querySelector('.page_carriere');

 new Typewriter( txtAnim5, {
    //  loop:true,
     deleteSpeed: 20
 })

.changeDelay(20)
.typeString('<span style="font-family:oxygen,helvetica, sans-serif;">Bonjour, </span>') 
.pauseFor(1300)
.typeString('<span style="font-family:oxygen,helvetica, sans-serif;">j\'ai acquis de mes différentes expériences professionnelles:</br> </span>')
.pauseFor(1100)
.typeString('<span style="font-family:oxygen,helvetica, sans-serif;"> la rigueur,</span>')
.pauseFor(1100)
.typeString('<span style="font-family:oxygen,helvetica, sans-serif;"> le sens de l\'initiative </span>')
.pauseFor(1100)
.typeString('<span style="font-family:oxygen,helvetica, sans-serif;">et de l\'entraide en travail d\'équipe.</span>')
.start()

