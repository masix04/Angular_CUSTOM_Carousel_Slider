import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-sb',
  templateUrl: './sb.component.html',
  styleUrls: ['./sb.component.scss'],
})

export class SBCloneComponent {
  num=0;
  images:any;
  slideIndex:any;

  nexta:any;
  preva:any;
  slides:any;

  showAllImages = false;
  constructor() {
    this.slideIndex=5;
    this.images = [
      "https://i.ibb.co/5cyWgrR/86569ff32bf66e39dcd79d66fcfae814.jpg",
      "https://support.content.office.net/en-us/media/d1cb75cb-e05c-4bd0-ba88-bb7dce04dcbd.png",
      "https://support.content.office.net/en-us/media/f4f04c87-b062-4690-81ff-d5dfa5f3c5cd.png",
      "https://support.content.office.net/en-us/media/b6ee0400-8f67-45df-a014-ad7dd8dc5449.png",
      "https://www.wpbeginner.com/wp-content/uploads/2021/01/best-alternatives-for-google-forms.png",
      "https://www.wpbeginner.com/wp-content/uploads/2021/10/hubspot-form-builder.png",
      "https://www.wpbeginner.com/wp-content/uploads/2021/01/typform.png",
      // "https://www.wpbeginner.com/wp-content/uploads/2021/01/zoho-forms.png",
      // "https://www.wpbeginner.com/wp-content/uploads/2021/01/wufoo.png",
      // "https://www.wpbeginner.com/wp-content/uploads/2021/01/microsoft-forms.png"
    ];

      this.showSlides(5);

    //   this.images.forEach((el) => {
    //     const minPerSlide = 4;
    //     let next = el.nextElementSibling;
    //     console.log(next);
    //     for (var i=1;i<minPerSlide;i++) {
    //       // next = next.next();

    //       // wrap around if at end of item collection
    //       // if (!next.length) {
    //       //   next = next.siblings(':first');
    //       // }

    //       // grab item, clone, add marker class, add to collection
    //       // next.children(':first-child').clone()
    //       //   .addClass("cloneditem-"+(i))
    //       //   .appendTo(next);
    //     }


    //     // let next = el.nextElementSibling;
    //     // console.log(el);
    //     // for (var i=1; i<minPerSlide; i++) {
    //     //     if (!next) {
    //     //         // wrap carousel by using first child
    //     //       next = this.images[0];
    //     //     }
    //     //     let cloneChild = (<any>next).cloneNode;
    //     //     console.log(cloneChild);
    //     //     // el.appendChild(cloneChild.children[0])
    //     //     // next = next.nextElementSibling
    //     // }
    // })
  }
  showSlides(n, event='') {
    // var i;
    // let next = slides.nextElementSibling;

    // console.log(n);
    if(n>=this.images.length){
      n=0;
      this.slideIndex = 0
    } else if(n<0 && this.images.length%2===0){
      n=this.images.length-2;
      this.slideIndex = this.images.length-2
    } else if(n<0 && this.images.length%2===1) {
      n=this.images.length-1;
      this.slideIndex = this.images.length-1
    }

    // console.log(document.getElementById('apple'));
      let slidesShow = Array.from(this.images).slice(n,n+2);
      Array.from(this.images).forEach(item=>{
        // item.style.display='none'
      })
      for(let i= 0; i< slidesShow.length;i++){
        // slidesShow[i].style.display = 'block'
      }
    // this.images[this.slideIndex-1].style.display = "flex";
    // this.images[this.slideIndex-2].style.display = "flex";
  }
  next()
  {

    this.showSlides(this.slideIndex);
    // var slider = document.getElementById('slider').parentElement.parentElement.parentElement;
                     // console.log(this.slideIndex+'-img');
    // var slider = document.getElementById(this.slideIndex+'-img');
                      // console.log(slider);
                      console.log(this.slideIndex);
                      console.log(this.images.length-1);

      /** NOTE: fOR dIABLE AND eNABLE BUTTON */
    if(this.slideIndex == this.images.length-1) {
      document.getElementById('nxt-btn').classList.add('disable_btn');
      var next_slide = document.getElementById('nxt-btn');
                console.log("next-Slide");
                console.log(next_slide);
      // var next_sib = document.getElementById(this.slideIndex+'-img').nextSibling;
      // (<any>next_sib).classList.add('disable_btn');
      //                 console.log(next_sib);
      //                 var slides = document.getElementsByClassName('slide');
      //                 console.log(slides);
      //                 var prev_slide = document.getElementById('pv-btn');
      //                 console.log("prev-Slide");
      //                 console.log(prev_slide);
    }
    // console.log(this.slideIndex);
    // console.log(this.images.length-1);
    if(this.slideIndex != this.images.length-1) {
      document.getElementById('pv-btn').classList.remove('disable_btn');
      var prev_slide = document.getElementById('pv-btn');
                console.log("prev-Slide");
                console.log(prev_slide);
      var non_slide = document.getElementById(0+'-img');
      //                 // console.log(prev_sib);
      (<any>non_slide).style.display = 'none';
                       console.log(non_slide);

      var flex_slide = document.getElementById((this.slideIndex+1)+'-img');
      //                 // console.log(prev_sib);
      (<any>flex_slide).style.display = 'flex';
                       console.log(flex_slide);
      // var non_slide = document.getElementById(0+'-img').previousSibling.previousSibling;
      // //                 // console.log(prev_sib);
      // (<any>non_slide).classList.remove('disable_btn');
      //                 console.log(non_slide);
    }
    this.slideIndex++;
    // this.num++;

    // //checking whether the new position of image is greater or equal to the no. of images we use
    // if(this.num >= this.images.length)//images is the defined arary
    // {
    //   this.num = 0;
    //   //if the condition is true num is defined to hold to first image of the slider
    // }
    // slider.setAttribute('src',this.images[this.num])
  }

  previous()
  {
    this.slideIndex--;
    this.showSlides(this.slideIndex);
    // var slider = document.getElementById('slider');
    // this.num--;
    // var slider = document.getElementById(this.slideIndex+'-img');
                        // console.log(slider);
                        console.log(this.slideIndex);
                        console.log(this.images.length-1);

      /** NOTE: When you show previous slides The next-btn Enables */
          /** WHY 5: because List is already showing 6 items, So eliminate that 6 list */
          /** If there was 1 slide shown, Then we will use 1 so, that 1 will eliminate */
    if(this.slideIndex != this.images.length-1 && this.slideIndex != 5) {
      var next_sib = document.getElementById((this.images.length-1)+'-img').nextSibling;
      (<any>next_sib).classList.remove('disable_btn');
                        // console.log(next_sib);
    }
    else if(this.slideIndex == 5) {
      var prev_sib = document.getElementById(0+'-img').previousSibling.previousSibling;
                        // console.log(prev_sib);
      (<any>prev_sib).classList.add('disable_btn');
                        console.log(prev_sib);
    }
    // //checking whether the new position of image is bfore or after the first image
    // if(this.num < 0)//images is the defined arary
    // {
    //   this.num = this.images.length-1;
    //   //if the condition is true num is defined to hold to last image of the slider
    // }
    // slider.setAttribute('src',this.images[this.num]);
  }





}
