const projects={
  quiet:{title:"Quiet Luxury",location:"PRIVATUS INTERJERAS · KAUNAS",number:"01",image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85",about:"Privatus gyvenamasis interjeras, kuriame pagrindinis dėmesys skirtas natūralioms medžiagoms, šiltai šviesai ir ramiai spalvinei gamai.",solution:"Erdvė suskaidyta į aiškias funkcines zonas, o medžio, akmens ir tekstilės derinys suteikia interjerui vientisumo ir ilgaamžiškumo.",case:"Tikslas — sukurti prabangos pojūtį be perteklinių detalių. Kiekvienas elementas parinktas tam, kad erdvė išliktų jauki ir praktiška kasdieniam gyvenimui."},
  warm:{title:"Warm Minimalism",location:"PRIVATUS INTERJERAS · VILNIUS",number:"02",image:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85",about:"Šviesus miesto būstas, kuriame minimalistinė architektūra derinama su šiltais medžio tonais ir minkšta tekstile.",solution:"Vizualinis triukšmas sumažintas naudojant vientisus paviršius, paslėptus sprendimus ir ribotą, bet išraiškingą medžiagų paletę.",case:"Rezultatas — švari, šviesi ir lengvai gyvenama erdvė, kurioje funkcija ir estetika veikia kartu."},
  soft:{title:"Soft Geometry",location:"BIURAS · KAUNAS",number:"03",image:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=85",about:"Šiuolaikinė darbo erdvė, kuriai reikėjo daugiau charakterio, tačiau išlaikant profesionalią atmosferą.",solution:"Naudotos apvalesnės formos, akcentinis apšvietimas ir natūralios tekstūros, kad griežta biuro architektūra taptų jaukesnė.",case:"Projekte balansuojama tarp reprezentatyvumo ir komforto — erdvė pritaikyta tiek susitikimams, tiek koncentruotam darbui."},
  earth:{title:"Earth & Light",location:"PRIVATUS INTERJERAS · VILNIUS",number:"04",image:"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=85",about:"Natūralių medžiagų ir šviesos projektas, kuriame pagrindinį vaidmenį atlieka tekstūros ir subtilūs žemės tonai.",solution:"Spalvų paletė paremta smėlio, molio ir medžio atspalviais, o apšvietimas suplanuotas taip, kad keistų erdvės nuotaiką visos dienos metu.",case:"Sukurta rami, natūrali aplinka, kuri išlieka vizualiai įdomi dėl medžiagų, proporcijų ir šviesos žaismo."}
};

const modal=document.getElementById("projectModal");
const visual=document.getElementById("modalVisual");
const title=document.getElementById("modalTitle");
const locationEl=document.getElementById("modalLocation");
const number=document.getElementById("modalNumber");
const about=document.getElementById("modalAbout");
const solution=document.getElementById("modalSolution");
const caseEl=document.getElementById("modalCase");

function openProject(key){
  const p=projects[key];
  visual.style.backgroundImage=`url("${p.image}")`;
  title.textContent=p.title;
  locationEl.textContent=p.location;
  number.textContent=p.number;
  about.textContent=p.about;
  solution.textContent=p.solution;
  caseEl.textContent=p.case;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden";
}
function closeProject(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  document.body.style.overflow="";
}
document.querySelectorAll(".project-card").forEach(card=>{
  card.addEventListener("click",()=>openProject(card.dataset.project));
});
document.querySelector(".modal-close").addEventListener("click",closeProject);
document.querySelector(".modal-backdrop").addEventListener("click",closeProject);
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&modal.classList.contains("open"))closeProject()});
