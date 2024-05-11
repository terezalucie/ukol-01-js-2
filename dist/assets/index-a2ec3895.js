const t=document.querySelector("#content"),s=[{name:"Hořčice",price:5,selected:!1},{name:"Kečup",price:5,selected:!1},{name:"Cibule",price:5,selected:!1},{name:"Okurka",price:5,selected:!1},{name:"Paprika",price:5,selected:!1},{name:"Rajče",price:5,selected:!1},{name:"Chilli",price:5,selected:!1},{name:"Sýr",price:10,selected:!1},{name:"Slanina",price:10,selected:!1}],a=()=>{s.forEach(e=>{t.innerHTML+=`
        <div class='topping'>
        <h3>${e.name}</h3>
        <p>${e.price}Kč</p>
        </div>`}),document.querySelectorAll(".topping").forEach((e,l)=>{e.addEventListener("click",()=>{e.classList.toggle("topping--selected"),n(l)})})},n=c=>{s[c].selected===!0?s[c].selected=!1:s[c].selected=!0};a();
