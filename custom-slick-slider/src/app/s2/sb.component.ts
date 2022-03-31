import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-sb',
  templateUrl: './sb.component.html',
  styleUrls: ['./sb.component.css'],
})

export class SBComponent {
  // num=0;
  images:any;
  images2:any;
  images3:any;
  slideIndex:any;
  initialIndex:any;

  // nexta:any;
  // preva:any;
  // slides:any;

  // showAllImages = false;
  constructor() {
    this.slideIndex=5;
    this.initialIndex=0;
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
    this.images2 = [
      "https://i.ibb.co/5cyWgrR/86569ff32bf66e39dcd79d66fcfae814.jpg",
      "https://support.content.office.net/en-us/media/d1cb75cb-e05c-4bd0-ba88-bb7dce04dcbd.png",
      "https://support.content.office.net/en-us/media/f4f04c87-b062-4690-81ff-d5dfa5f3c5cd.png",
      // "https://support.content.office.net/en-us/media/b6ee0400-8f67-45df-a014-ad7dd8dc5449.png",
      "https://www.wpbeginner.com/wp-content/uploads/2021/01/best-alternatives-for-google-forms.png",
      "https://www.wpbeginner.com/wp-content/uploads/2021/10/hubspot-form-builder.png",
      "https://www.wpbeginner.com/wp-content/uploads/2021/01/typform.png",
      // "https://www.wpbeginner.com/wp-content/uploads/2021/01/zoho-forms.png",
      // "https://www.wpbeginner.com/wp-content/uploads/2021/01/wufoo.png",
      // "https://www.wpbeginner.com/wp-content/uploads/2021/01/microsoft-forms.png"
    ];
    this.images3 = [
      "https://i.ibb.co/5cyWgrR/86569ff32bf66e39dcd79d66fcfae814.jpg",
      "https://support.content.office.net/en-us/media/d1cb75cb-e05c-4bd0-ba88-bb7dce04dcbd.png",
      "https://support.content.office.net/en-us/media/f4f04c87-b062-4690-81ff-d5dfa5f3c5cd.png",
      "https://support.content.office.net/en-us/media/b6ee0400-8f67-45df-a014-ad7dd8dc5449.png",
      "https://www.wpbeginner.com/wp-content/uploads/2021/01/best-alternatives-for-google-forms.png",
      "https://www.wpbeginner.com/wp-content/uploads/2021/10/hubspot-form-builder.png",
      "https://www.wpbeginner.com/wp-content/uploads/2021/01/typform.png",
      "https://www.wpbeginner.com/wp-content/uploads/2021/01/zoho-forms.png",
      "https://www.wpbeginner.com/wp-content/uploads/2021/01/wufoo.png",
      "https://www.wpbeginner.com/wp-content/uploads/2021/01/microsoft-forms.png"
    ];
    console.log('CONSTRUCTOR: ');
            console.log('initial: '+this.initialIndex);
            console.log('slick: '+ this.slideIndex);
            console.log('length: '+(this.images.length-1));
  }

  next()
  {
    /** Because NEXT Click eVENT lISTENED so Indexes will Increament and Decrement. */
    this.slideIndex++;
    this.initialIndex++;
      // console.log('NEXT: ');
      //       console.log('initial: '+this.initialIndex);
      //       console.log('slick: '+ this.slideIndex);
      //       console.log('length: '+(this.images.length-1));

    this.disableNext();
        /** */
      var non_slide = document.getElementById((this.initialIndex-1)+'-img');
      (<any>non_slide).style.display = 'none';
                      //  console.log(non_slide);

                  /** */
      var flex_slide = document.getElementById((this.slideIndex) + '-img');
      (<any>flex_slide).style.display = 'flex';
                      //  console.log(flex_slide);
                      //  console.log('slides');
          // for(let i=0;i<this.images.length;i++) {
          //   var slide = document.getElementById(i + '-img');
          //   console.log(slide);
          // }

    this.enablePrevious();

  }
  previous()
  {
    this.slideIndex--;
    this.initialIndex--;

    // console.log('PREVIOUS: ');
    // console.log('initial: '+this.initialIndex);
    // console.log('slick: '+ this.slideIndex);
    // console.log('length: '+(this.images.length-1));

    this.enableNext();
      /** */
      var non_slide = document.getElementById((this.initialIndex)+'-img');
      (<any>non_slide).style.display = 'flex';
                      //  console.log(non_slide);

                  /** */
      var flex_slide = document.getElementById((this.slideIndex+1) + '-img');
      (<any>flex_slide).style.display = 'none';
                      //  console.log(flex_slide);
                      //  console.log('slides');
          // for(let i=0;i<this.images.length;i++) {
          //   var slide = document.getElementById(i + '-img');
          //   console.log(slide);
          // }

    this.disablePrevious();
  }


  disablePrevious() {
    if(this.slideIndex == 5 || this.initialIndex == 0) {
      var prev_sib = document.getElementById(0+'-img').previousSibling.previousSibling;
                        // console.log(prev_sib);
      // (<any>prev_sib).classList.add('disable_btn');
      //                   console.log(prev_sib);
    }
  }
  enablePrevious() {
    if(this.initialIndex != 0) {
      document.getElementById('pv-btn').classList.remove('disable_btn');
      // var prev_slide = document.getElementById('pv-btn');
      //           console.log("prev-Slide");
      //           console.log(prev_slide);
    }
  }

  disableNext() {
      /** NOTE: fOR dIABLE BUTTON */
    if(this.slideIndex == this.images.length-1) {
      document.getElementById('nxt-btn').classList.add('disable_btn');
      // var next_slide = document.getElementById('nxt-btn');
      //   console.log("next-Slide");
      //   console.log(next_slide);
    }
  }
  enableNext() {
     /** NOTE: When you show previous slides The next-btn Enables */
          /** WHY 5: because List is already showing 6 items, So eliminate that 6 list */
          /** If there was 1 slide shown, Then we will use 1 so, that 1 will eliminate */
    if(this.slideIndex != this.images.length-1 ) {
      var next_sib = document.getElementById((this.images.length-1)+'-img').nextSibling;
      (<any>next_sib).classList.remove('disable_btn');
                        // console.log(next_sib);
    }
  }






 /** 2nd Case */

//  disablePrevious2() {
//   if(this.slideIndex == 5 || this.initialIndex == 0) {
//     var prev_sib = document.getElementById(0+'-img2').previousSibling.previousSibling;
//                       // console.log(prev_sib);
//     (<any>prev_sib).classList.add('disable_btn');
//                       console.log(prev_sib);
//   }
// }
// enablePrevious2() {
//   if(this.initialIndex != 0) {
//     document.getElementById('pv-btn2').classList.remove('disable_btn');
//     var prev_slide = document.getElementById('pv-btn2');
//               console.log("prev-Slide");
//               console.log(prev_slide);
//   }
// }

// disableNext2() {
//     /** NOTE: fOR dIABLE BUTTON */
//   if(this.slideIndex == this.images2.length-1) {
//     document.getElementById('nxt-btn2').classList.add('disable_btn');
//     var next_slide = document.getElementById('nxt-btn2');
//       console.log("next-Slide");
//       console.log(next_slide);
//   }
// }
// enableNext2() {
//    /** NOTE: When you show previous slides The next-btn Enables */
//         /** WHY 5: because List is already showing 6 items, So eliminate that 6 list */
//         /** If there was 1 slide shown, Then we will use 1 so, that 1 will eliminate */
//   if(this.slideIndex != this.images2.length-1 ) {
//     var next_sib = document.getElementById((this.images2.length-1)+'-img2').nextSibling;
//     (<any>next_sib).classList.remove('disable_btn');
//                       // console.log(next_sib);
//   }
// }

// next2()
// {
//   /** Because NEXT Click eVENT lISTENED so Indexes will Increament and Decrement. */
//   this.slideIndex++;
//   this.initialIndex++;
//     console.log('NEXT: ');
//           console.log('initial: '+this.initialIndex);
//           console.log('slick: '+ this.slideIndex);
//           console.log('length: '+(this.images2.length-1));

//   this.disableNext2();
//       /** */
//     var non_slide = document.getElementById((this.initialIndex-1)+'-img');
//     (<any>non_slide).style.display = 'none';
//                      console.log(non_slide);

//                 /** */
//     var flex_slide = document.getElementById((this.slideIndex) + '-img');
//     (<any>flex_slide).style.display = 'flex';
//                      console.log(flex_slide);
//                      console.log('slides');
//         for(let i=0;i<this.images2.length;i++) {
//           var slide = document.getElementById(i + '-img');
//           console.log(slide);
//         }

//   this.enablePrevious2();

// }
// previous2()
// {
//   this.slideIndex--;
//   this.initialIndex--;

//   console.log('PREVIOUS: ');
//   console.log('initial: '+this.initialIndex);
//   console.log('slick: '+ this.slideIndex);
//   console.log('length: '+(this.images2.length-1));

//   this.enableNext2();
//     /** */
//     var non_slide = document.getElementById((this.initialIndex)+'-img');
//     (<any>non_slide).style.display = 'flex';
//                      console.log(non_slide);

//                 /** */
//     var flex_slide = document.getElementById((this.slideIndex+1) + '-img');
//     (<any>flex_slide).style.display = 'none';
//                      console.log(flex_slide);
//                      console.log('slides');
//         for(let i=0;i<this.images2.length;i++) {
//           var slide = document.getElementById(i + '-img');
//           console.log(slide);
//         }

//   this.disablePrevious2();
// }




/** 3rd Case */

// disablePrevious3() {
//   if(this.slideIndex == 5 || this.initialIndex == 0) {
//     var prev_sib = document.getElementById(0+'-img3').previousSibling.previousSibling;
//                       // console.log(prev_sib);
//     (<any>prev_sib).classList.add('disable_btn');
//                       console.log(prev_sib);
//   }
// }
// enablePrevious3() {
//   if(this.initialIndex != 0) {
//     document.getElementById('pv-btn3').classList.remove('disable_btn');
//     var prev_slide = document.getElementById('pv-btn3');
//               console.log("prev-Slide");
//               console.log(prev_slide);
//   }
// }

// disableNext3() {
//     /** NOTE: fOR dIABLE BUTTON */
//   if(this.slideIndex == this.images3.length-1) {
//     document.getElementById('nxt-btn3').classList.add('disable_btn');
//     var next_slide = document.getElementById('nxt-btn3');
//       console.log("next-Slide");
//       console.log(next_slide);
//   }
// }
// enableNext3() {
//    /** NOTE: When you show previous slides The next-btn Enables */
//         /** WHY 5: because List is already showing 6 items, So eliminate that 6 list */
//         /** If there was 1 slide shown, Then we will use 1 so, that 1 will eliminate */
//   if(this.slideIndex != this.images3.length-1 ) {
//     var next_sib = document.getElementById((this.images3.length-1)+'-img3').nextSibling;
//     (<any>next_sib).classList.remove('disable_btn');
//                       // console.log(next_sib);
//   }
// }

// next3()
// {
//   /** Because NEXT Click eVENT lISTENED so Indexes will Increament and Decrement. */
//   this.slideIndex++;
//   this.initialIndex++;
//     console.log('NEXT: ');
//           console.log('initial: '+this.initialIndex);
//           console.log('slick: '+ this.slideIndex);
//           console.log('length: '+(this.images3.length-1));

//   this.disableNext3();
//       /** */
//     var non_slide = document.getElementById((this.initialIndex-1)+'-img');
//     (<any>non_slide).style.display = 'none';
//                      console.log(non_slide);

//                 /** */
//     var flex_slide = document.getElementById((this.slideIndex) + '-img');
//     (<any>flex_slide).style.display = 'flex';
//                      console.log(flex_slide);
//                      console.log('slides');
//         for(let i=0;i<this.images3.length;i++) {
//           var slide = document.getElementById(i + '-img');
//           console.log(slide);
//         }

//   this.enablePrevious3();

// }
// previous3()
// {
//   this.slideIndex--;
//   this.initialIndex--;

//   console.log('PREVIOUS: ');
//   console.log('initial: '+this.initialIndex);
//   console.log('slick: '+ this.slideIndex);
//   console.log('length: '+(this.images3.length-1));

//   this.enableNext3();
//     /** */
//     var non_slide = document.getElementById((this.initialIndex)+'-img');
//     (<any>non_slide).style.display = 'flex';
//                      console.log(non_slide);

//                 /** */
//     var flex_slide = document.getElementById((this.slideIndex+1) + '-img');
//     (<any>flex_slide).style.display = 'none';
//                      console.log(flex_slide);
//                      console.log('slides');
//         for(let i=0;i<this.images3.length;i++) {
//           var slide = document.getElementById(i + '-img');
//           console.log(slide);
//         }

//   this.disablePrevious3();
// }
}
