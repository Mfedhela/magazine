const mainToggler = document.getElementById('mainToggler');

const mainContent = document.getElementById('mainContent');

let iconOne = document.querySelector('.fa-home');
let iconTwo = document.querySelector('.fa-list');
let iconThree = document.querySelector('.fa-plus');
let iconFour = document.querySelector('.fa-user');
let iconFive = document.querySelector('.fa-heart');

let iconArray = [iconOne,iconTwo,iconThree,iconFour,iconFive];

const coding = document.getElementById('coding');
const poa = document.getElementById('poa');
const gaming = document.getElementById('gaming');
const crypto = document.getElementById('crypto'); 
const nft = document.getElementById('nft'); 
const pc = document.getElementById('pc');
const userInfo = document.getElementById('userInfo');
const sub = document.getElementById('sub');

let secArray = [mainContent,coding,poa,gaming,crypto,nft,pc,userInfo,sub];

const bottNav = document.querySelector('.bottom-nav'); 

mainToggler.addEventListener('click', () => {
				
				mainContent.style.transform = "translateX(0)";
});

const homeBtn = document.getElementById('homeBtn');

const codBtn = document.getElementById('codBtn');
codBtn.addEventListener('click', () => {
				coding.style.transform = "translateX(0)";
				mainContent.style.overflowY = "hidden";
				coding.style.overflowY = "scroll";
			 bottNav.classList.add('add_class_one');
			 		 
		  	iconArray.forEach( icon => {
							icon.classList.add('add_class_code');
										
			});
			 
});

const poaBtn = document.getElementById('poaBtn');
poaBtn.addEventListener('click', () => {
				poa.style.transform = "translateX(0)";
				mainContent.style.overflowY = "hidden";
				poa.style.overflowY = "scroll";
				
});

const gameBtn = document.getElementById('gameBtn');
gameBtn.addEventListener('click', () => {
				gaming.style.transform = "translateX(0)";
				mainContent.style.overflowY = "hidden";
				gaming.style.overflowY = "scroll";
				bottNav.classList.add('add_class');
				
				iconArray.forEach( icon => {
							icon.classList.add('add_class_game');
										
			});
				
});

const cryptoBtn = document.getElementById('cryptoBtn');
cryptoBtn.addEventListener('click', () => {
				crypto.style.transform = "translateX(0)";
				mainContent.style.overflowY = "hidden";
				crypto.style.overflowY = "scroll";
				bottNav.classList.add('add_class_one');
});

const nftBtn = document.getElementById('nftBtn');
nftBtn.addEventListener('click', () => {
				nft.style.transform = "translateX(0)";
				mainContent.style.overflowY = "hidden";
				nft.style.overflowY = "scroll";
				bottNav.classList.add('add_class_nft');
});

const pcBtn = document.getElementById('pcBtn');
pcBtn.addEventListener('click', () => {
				pc.style.transform = "translateX(0)";
				mainContent.style.overflowY = "hidden";
				pc.style.overflowY = "scroll";
				bottNav.classList.add('add_class_pc');
				iconArray.forEach( icon => {
							icon.classList.add('add_class_code');
								
			});
});

const userBtn = document.getElementById('userBtn');
userBtn.addEventListener('click', () => {
				userInfo.style.transform = "translateX(0)";
				mainContent.style.overflowY = "hidden";
				userInfo.style.overflowY = "scroll";
				bottNav.style.display="none";
});

const likeBtn = document.getElementById('likeBtn');
likeBtn.addEventListener('click', () => {
				sub.style.transform = "translateX(0)";
				mainContent.style.overflowY = "hidden";
				sub.style.overflowY = "scroll";
				bottNav.style.display="none";
});

//Back buttons

const backBtn = document.getElementById('backBtn');
backBtn.addEventListener('click', () => {
				coding.style.transform = "translateX(100%)";
				bottNav.classList.remove('add_class_one');
				mainContent.style.overflowY = "scroll";
				coding.style.overflowY = "hidden";
				
				iconArray.forEach( icon => {
							icon.classList.remove('add_class_code');
								
			});
				
});

const backBtn1 = document.getElementById('backBtn1');
backBtn1.addEventListener('click', () => {
				gaming.style.transform = "translateX(100%)";	
				mainContent.style.overflowY = "scroll";
				gaming.style.overflowY = "hidden";
				bottNav.classList.remove('add_class');
				
				iconArray.forEach( icon => {
							icon.classList.remove('add_class_game');
										
			});
}); 

const backBtn2 = document.getElementById('backBtn2');
backBtn2.addEventListener('click', () => {
				poa.style.transform = "translateX(100%)";	
				mainContent.style.overflowY = "scroll";
				poa.style.overflowY = "hidden";
				
}); 

const backBtn3 = document.getElementById('backBtn3');
backBtn3.addEventListener('click', () => {
				crypto.style.transform = "translateX(100%)";	
				mainContent.style.overflowY = "scroll";
				crypto.style.overflowY = "hidden";
				bottNav.classList.remove('add_class_one');
}); 

const backBtn4 = document.getElementById('backBtn4');
backBtn4.addEventListener('click', () => {
				nft.style.transform = "translateX(100%)";	
				mainContent.style.overflowY = "scroll";
				nft.style.overflowY = "hidden";
				bottNav.classList.remove('add_class_nft');
}); 

const backBtn5 = document.getElementById('backBtn5');
backBtn5.addEventListener('click', () => {
				pc.style.transform = "translateX(100%)";	
				mainContent.style.overflowY = "scroll";
				pc.style.overflowY = "hidden";
				bottNav.classList.remove('add_class_pc');
				
				iconArray.forEach( icon => {
							icon.classList.remove('add_class_code');
										
			});
}); 

const backBtn6 = document.getElementById('backBtn6');
backBtn6.addEventListener('click', () => {
				userInfo.style.transform = "translateX(100%)";	
				mainContent.style.overflowY = "scroll";
				userInfo.style.overflowY = "hidden";
				bottNav.style.display="block";
});

const backBtn7 = document.getElementById('backBtn7');
backBtn7.addEventListener('click', () => {
				sub.style.transform = "translateX(100%)";	
				mainContent.style.overflowY = "scroll";
				sub.style.overflowY = "hidden";
				bottNav.style.display="block";
});

homeBtn.addEventListener('click', () => {
				
				secArray.forEach( section => {
								section.style.transform = "translateX(100%)";
				});
				mainContent.style.overflowY = "scroll";
				
				
				
});
 
