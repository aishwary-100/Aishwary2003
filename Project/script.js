

// <!--Here I created the trendingOffersData array -->    
var trendingOffersData=[{image:"https://static.thcdn.com/images/small/webp/widgets/121-us/52/AMPM_Replenishing_Antioxidant_Regimen_-_2-045452.jpg",name:"NEW IN: SkinCeuticals Regimens",content:"LIMITED EDITION: Discover innovative antioxidant and cosmeceutical formulations with the new exclusive SkinCeuticals Regimens. Hurry, offer ends on 1/30!",pageUrl:"Shop1.html"},
{image:"https://static.thcdn.com/images/small/webp/widgets/121-us/41/STDCRE-13898-CR-ST-Single-Product-Range-KV-Shot16-600x600-EMAIL-014311-114541.png",name:"Christophe Robin Gift",content:"Receive a Christophe Robin Cleansing Volumising Deluxe Paste 12ml (Free Gift) when you spend $80 or more.",pageUrl:"Shop2.html"},
{image:"https://static.thcdn.com/images/small/webp/widgets/121-us/30/1224-STDCRE-28425-WC-SS-SkinStore-January-Photography-2022-BATCHING_Shot13-580x384-072830.jpg",name:"New! Latest Beauty Products",content:"We scour the globe around the clock to bring you a diverse range of skincare from breakthrough, results-driven brands to natural, organic and vegan options.",pageUrl:"Shop3.html"},
{image:"https://static.thcdn.com/images/small/webp/widgets/121-us/07/Circle_-_Untitled_Page_%2813%29-055807.png",name:"DERMAdoctor Gift",content:"Receive a DERMAdoctor Kakadu C Brightening Daily Cleanser 7.1 oz Tube when you spend $60 or more on the brand.",pageUrl:"Shop4.html"},
{image:"https://static.thcdn.com/images/small/webp/widgets/121-us/26/original-neo_sq-060026.jpg",name:"Neocutis Gift",content:"Receive a Neocutis Lumiere Firm Illuminating and Tightening Eye Cream 4ml when you spend $100 or more.",pageUrl:"Shop5.html"},
{image:"https://static.thcdn.com/images/small/webp/widgets/121-us/36/original-1224-STDCRE-28425-WC-SS-SkinStore-January-Photography-2022-BATCHING_Shot14-600x600-034336.jpg",name:"Brand of the Month: Decorté + Gift",content:"NEW IN: Decorté Liposome Serum! Experience the wisdom of traditional Japanese skincare, powered by unparalleled techno-innovation to transform your skin with Decorté. Plus, get a Decorté Liposome Duo (Worth $33) when you spend $90 on your purchase.",pageUrl:"Shop6.html"},
];


trendingOffersData.map(function(elem){
    var boxDiv=document.createElement("div")
    var boxImage=document.createElement("img")
        boxImage.setAttribute("src",elem.image)
    var boxh3=document.createElement("h3")
        boxh3.textContent=elem.name
    var boxp=document.createElement("p")
        boxp.textContent=elem.content
    var boxbtm=document.createElement("button")
        boxbtm.textContent="SHOP NOW"
        boxbtm.addEventListener("click", function(){
            window.location.href=elem.pageUrl
        });
        
        boxDiv.append(boxImage,boxh3,boxp,boxbtm)
        document.querySelector("#trendingOffers").append(boxDiv) 
});

// <!--Here I created the rightNowOffersData array -->    
var rightNowOffersData=[{image:"https://static.thcdn.com/images/large/webp//productimg/300/300/13547807-1444926019361532.jpg",name:"SkinCeuticals AM/PM Replenishing Antioxidant Regimen Worth $449",bPrice:0,aPrice:395.12,pageUrl:"######"},
{image:"https://static.thcdn.com/images/large/webp//productimg/300/300/13232822-1544908361367298.jpg",name:"SkinStore Selects Limited Edition Collection (Worth Over $350)",bPrice:111.00,aPrice:55.50,pageUrl:"######"},
{image:"https://static.thcdn.com/images/large/webp//productimg/300/300/13232824-6374902588484311.jpg",name:"SkinStore Holiday Edit 2021 (Worth Over $500)",bPrice:150.00,aPrice:75,pageUrl:"######"},
{image:"https://static.thcdn.com/images/large/webp//productimg/300/300/13468234-5434916661811767.jpg",name:"Decorté Liposome Advanced Repair Serum (Various Sizes)",bPrice:0,aPrice:75,pageUrl:"######"},

];


rightNowOffersData.map(function(elem){
    var boxDiv=document.createElement("div")
    var boxImage=document.createElement("img")
        boxImage.setAttribute("src",elem.image)
    var boxh3=document.createElement("h3")
        boxh3.textContent=elem.name
    var boxp=document.createElement("p")
         check0(elem.bPrice);
         function check0(val){
        if(val!=0){
            boxp.innerHTML=`MSRP:<s>$${elem.bPrice.toFixed(2)}</s>`
        }else{
            boxp.innerHTML= "<br>"
        }
         }
       
    var boxh5=document.createElement("h5")
        boxh5.innerHTML=`$${elem.aPrice.toFixed(2)}`
    var boxbtm=document.createElement("button")
        boxbtm.textContent="SHOP NOW"
        boxbtm.addEventListener("click", function(){
            window.location.href=elem.pageUrl
        });
        
        boxDiv.append(boxImage,boxh3,boxp,boxh5,boxbtm)
        document.querySelector("#rightNowOffers").append(boxDiv) 
});

// <!--Here I created the BlogData array -->    
// var BlogData=[{image:"https://static.thcdn.com/images/small/webp/widgets/121-us/00/original-pexels-kristin-vogt-54204-1_16-025300.jpg",name:"How to Protect Your Skin This Winter",content:"To help you in your search for the best skincare for dry skin in winter, we’ve curated a list of the best products to combat dry skin.",pageUrl:"######"},
// {image:"https://static.thcdn.com/images/small/webp/widgets/121-us/05/original-Webp.net-resizeimage_%2827%29-025305.jpg",name:"Hydration 101: Ingredient Focus",content:"Here are some of the top products that every moisture-starved skin type deserves during these winter months!",pageUrl:"######"},
// {image:"https://static.thcdn.com/images/small/webp/widgets/121-us/36/original-Untitled_design_-_2021-11-10T153711.183-083736.png",name:"Winter Skincare Routine",content:"We’re on hand to provide you with the very best products to keep your skin in optimum condition all season long.",pageUrl:"######"},

// ];


     BlogData.map(function(elem){
    var boxDiv=document.createElement("div")
    var boxImage=document.createElement("img")
        boxImage.setAttribute("src",elem.image)
    var boxh3=document.createElement("h3")
        boxh3.textContent=elem.name
    var boxp=document.createElement("p")
        boxp.textContent=elem.content
    var boxbtm=document.createElement("button")
        boxbtm.textContent="READ MORE"
        boxbtm.addEventListener("click", function(){
            window.location.href=elem.pageUrl
        });
        
        boxDiv.append(boxImage,boxh3,boxp,boxbtm)
        document.querySelector("#Blog").append(boxDiv) 
});

function navSlideOut(){
    document.querySelector("#nav-link").style.left="-16px"
}
function navSlideIn(){
   document.querySelector("#nav-link").style.left="-2000px"
}
var cartLength =JSON.parse(localStorage.getItem("cartthings"))
document.querySelector("#cardAval").innerHTML=`There are currently ${cartLength.length} items in your cart.`;
document.querySelector("#cartLen").innerHTML=`${cartLength.length}`;
