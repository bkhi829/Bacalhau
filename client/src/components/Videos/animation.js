import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const scrollAnimation = async (ref,pos) => {
  await gsap.to(ref.current,{scrollTo:{x:pos}});
}

export const btnAnimation = (ref,show)=> {
  const tl = gsap.timeline();
  if(show){
    tl.to(ref.current,{visibility:'visible',duration:0})
    .to(ref.current,{opacity:1,cursor:'pointer',duration:.2});
  } else {
    tl.to(ref.current,{opacity:0,cursor:'unset',duration:.2})
    .to(ref.current,{visibility:'hidden',duration:0},"<.5");
  }
}

export const fadeOutAnimation = (ref) => {
  return new Promise((resolve,reject) => {
    resolve(gsap.fromTo(ref.current,{opacity: 1},{opacity: 0,duration:.3}));
  });
}

export const fadeInAnimation = (ref) => {
  return new Promise((resolve,reject) => {
    resolve(gsap.fromTo(ref.current,{opacity: 0},{opacity: 1,duration:.3,delay:.2}));
  });
}

export const goToAnimation = () => {
  var obj = document.querySelector('.menuContainer');
  var top = obj.offsetTop - window.innerHeight/10;
  gsap.to(window,{scrollTo:{y:top}});
}