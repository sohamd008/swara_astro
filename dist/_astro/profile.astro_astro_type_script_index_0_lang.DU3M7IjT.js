import{u as n,s as i}from"./authStore.B4Ww63-g.js";import"./firebase.HaRU0pKT.js";import"./index.D8u1G3xY.js";const o=document.querySelector(".user-info");document.getElementById("profile-card");const e=document.getElementById("logout-btn");n.subscribe(t=>{if(t!==null){if(!t){window.location.href="/login";return}o&&(o.innerHTML=`
                <div class="avatar">
                    ${t.photoURL?`<img src="${t.photoURL}" />`:"<span>"+t.email[0].toUpperCase()+"</span>"}
                </div>
                <h3>${t.displayName||"Music Lover"}</h3>
                <p>${t.email}</p>
            `)}});e?.addEventListener("click",async()=>{await i(),window.location.href="/"});
