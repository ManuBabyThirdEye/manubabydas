import { Component, HostListener } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  mainBody: HTMLElement | null=null;
  medvand: HTMLElement | null=null;
  medvandTyped: boolean = false;

  edulearn: HTMLElement | null=null;
  edulearnTyped: boolean = false;

  auxileo: HTMLElement | null=null;
  auxileoTyped: boolean = false;

  shopping: HTMLElement | null=null;
  shoppingTyped: boolean = false;

  constructor(){

    const app = initializeApp(environment.firebaseConfig);
    const analytics = getAnalytics(app);

    setInterval(() => {
      this.mainBody = window.document.getElementById("mainBody");

      if( this.mainBody && this.mainBody.childElementCount<50){
        var img = document.createElement('img');
        img.src = "../assets/star.png";
        let width = Math.floor(Math.random() * 9)+3;
        let left = Math.floor(Math.random() * 90)+5;
        let speed = Math.floor(Math.random() * 30)+25;
        img.style.cssText = 'z-index:1; width: '+width+'px;left: '+left+'%;position:fixed;animation: star '+speed+'s 1;';
        img.addEventListener("animationend",()=>{
          this.mainBody?.removeChild(img);
        });
        this.mainBody?.appendChild(img);
      }
    },1500)
    
  }
  onScroll(event : any) {
    this.medvand = window.document.getElementById("medvand");
    if(this.medvand && !this.medvandTyped && this.isInViewport(this.medvand)){
      this.medvandTyped = true;
      this.typing(this.medvand,
        "Medvand is a healthcare startup engaged in managing health plan(insurance)data and"+
        " providing value added analytics");
    }
    this.edulearn = window.document.getElementById("edulearn");
    if(this.edulearn && !this.edulearnTyped && this.isInViewport(this.edulearn)){
      this.edulearnTyped = true;
      this.typing(this.edulearn,
        "Regular courses are offered to all students from YR3 to YR12. "+
        "These courses continue throughout the year (regardless of school holidays and public holidays)"+
        " and aim to further develop students’ knowledge and enhance understanding of fundamentals in subjects Maths/English/Science areas."
        );
    }
    this.auxileo = window.document.getElementById("auxileo");
    if(this.auxileo && !this.auxileoTyped && this.isInViewport(this.auxileo)){
      this.auxileoTyped = true;
      this.typing(this.auxileo,
        "Auxileo labs is an education technology company that empowers learners by providing quality training on advanced technologies. "+
        "We promote applied learning and redefines the learning process in a research-oriented manner.");
    }
    this.shopping = window.document.getElementById("shopping");
    if(this.shopping && !this.shoppingTyped && this.isInViewport(this.shopping)){
      this.shoppingTyped = true;
      this.typing(this.shopping,
        "Auxileo labs is an education technology company that empowers learners by providing quality training on advanced technologies. "+
        "We promote applied learning and redefines the learning process in a research-oriented manner.");
    }
  }

  typing(element : HTMLElement,midvandInnerText: string) {
      let newMidvandInnerText = "";
      let i=0;
      if(midvandInnerText){
          let minvandIntervel = setInterval(()=>{
            if(midvandInnerText){
              newMidvandInnerText+=midvandInnerText.charAt(i);
              if(element){
                if(i%2==0){
                  element.innerHTML = newMidvandInnerText+"__";
                }else{
                  element.innerHTML = newMidvandInnerText;
                }
              }
            }
            i++;
            if(i==midvandInnerText?.length){
              if(element){
                element.innerHTML = newMidvandInnerText;
              }
              clearInterval(minvandIntervel);
            }
          },70);
        
    }
    
  }

  isInViewport(element:any) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
  
}
