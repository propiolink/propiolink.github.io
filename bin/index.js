
 if(localStorage.us==undefined){localStorage.db=JSON.stringify([])}
db=JSON.parse(localStorage.db);
url=[]
 if((document.location.href).indexOf('?')>0){ 
   uri=(document.location.href).split('?')[1]
   url=uri.split('&')
 }
   keys=url[0]
   keys="cFW77dNSnbniZcVx0wW7nT";

//CARGAR Y CREAR LA DB
function cargaDb(){  bd=[]; 
 if(free==true && localStorage.us==undefined || novo==1){
  novo=0;
  var xhr= new XMLHttpRequest()
 	 xhr.open('get','https://quintadb.com/apps/ddPsyqytvcROk-fKOxW5vX/dtypes/entity/cmWPT4mSjaxik9amkih8oz.json?rest_api_key='+keys+'&amp;view=')
 	 xhr.send(null)
xhr.onreadystatechange = function(){
  if(xhr.readyState==4){
     if(xhr.responseText!=''){
        xhr=JSON.parse(xhr.responseText)
 //CREAR BD
for(var i=0; i<xhr.records.length; i++){
     lect=xhr.records[i];
ob={
 "caduce":lect.values.ccW4bgn8ndWPq2oLPoWPeU,
   "pass":lect.values.c3gXDTW7jeWRxcUSkyu8op,
  "phone":lect.values.btWR5CFSngqyo2ASoAW6bE,
     "id":lect.id,
  },
  bd.splice(i,0,ob);
  localStorage.db=JSON.stringify(bd)
}
       db=JSON.parse(JSON.stringify(bd))
       localStorage.us=1
       alert("listo")
        cargaDb()       
     }else{
 //sin conexión 
  alert("Error de conexión")
 }}}}
if(localStorage.us==1){
 registro.style.display="inline" 
}else{
 if(localStorage.id!=undefined){homeApp.style.display="inline";user()}}
}
 cargaDb()
 




for(var i=0; i<plantillas_n.length-1; i++){
plantillas_sp.innerHTML+=`
 <a href="plantillas/nup${plantillas_n[i].fto}.html"><div class="plant"> <img src="img/${plantillas_n[i].fto}"> <div> <b>${plantillas_n[i].nam}</b><br> ${plantillas_n[i].des}</div> </div></a>`
}
plantillas_sp.style.width=(271*(plantillas_n.length-1))+"px"
disponibles.innerHTML=`Plantillas Disponibles ${plantillas_n.length-1}`






function user(){
if(localStorage.id!=undefined && localStorage.id!=0){
 us.innerHTML=`
   <div class="text" id="admin">Desarrollador</div>
   <pre class="text b">https://propiolink.github.io?${localStorage.id}</pre>
   <div class="free center">
     <input type="button" value="Visita" onclick="openPage('https://propiolink.github.io?${localStorage.id}')">
     <input type="button" value="Editor" onclick="edi.style.display='inline';editorD.innerHTML=localStorage.editor;ctl()">
     <input type="button" value="Editar" onclick="openPage('https://quintadb.com/apps/ddPsyqytvcROk-fKOxW5vX/dtypes/${localStorage.id}/edit?entity_id=cmWPT4mSjaxik9amkih8oz?&overal_dtypes_size=1&widget=true')">
     <input type="button" value="Salir" onclick="if(window.confirm('Seguro que desea cerrar su acceso Esto puede provocar errores en su link  hágalo sólo por problemas de seguridad. Puede que la base de datos ya no esté accesible desde su dispositivo. Si está seguro de cerrar la session presione Ok o Aceptar')){localStorage.us=1;cargaDb()}">
   </div>
`
}
}
function login(){
if(pass_n.value!="" &&phone_n.value!="" && user_n.value!=""){
  for(var i=0; i<db.length; i++){
   if(Number(phone_n.value)==Number(db[i].phone)){
    if(pass_n.value==db[i].pass||pass_n.value==adm){
      localStorage.id=db[i].id
 localStorage.phone=phone_n.value
 localStorage.us=2
 registro.style.display="none" 
 //localStorage.db=JSON.stringify([])
 cargaDb()
      break;
    }else{alert("La contraseña es incorrecta");break; }
   }
if(i==db.length-1){alert("Registrado");
 localStorage.phone=phone_n.value
localStorage.clave=pass_n.value
 localStorage.id=0
 localStorage.user=user_n.value
 localStorage.us=2
 registro.style.display="none" 
 cargaDb()
 //localStorage.db=JSON.stringify([])
}
  }
}}


//CARGA PAGE WEB
function openPage(arg){ 
  var xhr= new XMLHttpRequest()
  	   xhr.open('get',arg)
  	   xhr.send(null)
  xhr.onreadystatechange = function(){
  if(xhr.readyState==4){
    if(xhr.responseText!=''){
  //CONECTADO A LA PAGE
     none="none"
    pageDiv.style.display="inline"
    pageDiv.innerHTML=`<iframe class="full" src="${arg}"></iframe> <div class="close" onclick="if(novo==1){cargaDb()}pageDiv.style.display=none">x</div>`
    }else{
  //SIN CONEXIÓN
    alert("sin conexión")
    }
  }
 }
}



//if(url[0]==undefined){pnt.innerHTML='err.uknown'}
