import{u as i}from"./authStore.B4Ww63-g.js";import"./firebase.HaRU0pKT.js";import"./index.D8u1G3xY.js";const n=document.getElementById("auth-link");i.subscribe(a=>{a!==null&&(a?n&&(n.innerHTML=`<a href="/profile" class="glass-btn profile-btn">
            <span class="user-name">${a.displayName||"Profile"}</span>
        </a>`):n&&(n.innerHTML='<a href="/login" class="glass-btn">Login</a>'))});
