 fecha= new Date(); dia=fecha.getDate();if(dia<10){dia='0'+dia} minuto=fecha.getMinutes(); mes=fecha.getMonth()+1;if(mes<10){mes='0'+mes} ano=fecha.getFullYear(); time=Number(ano+''+mes+''+dia)
 if(localStorage.us==undefined){localStorage.time=0;localStorage.db=JSON.stringify([]);localStorage.us=""}
 db=JSON.parse(localStorage.db);





//CARGAR Y CREAR LA DB
function cargaDb(){           bd=[]
 if(free==true||localStorage.time!=time && diario==true|| localStorage.db==undefined && new_user==true && actualice==true || Number(localStorage.time) < timep && actualice==true ||input.value==admin){
  notas("Se está actualizando la DB espere")
  var xhr= new XMLHttpRequest()
 	 xhr.open('get','https://'+pgi+'/apps/ddPsyqytvcROk-fKOxW5vX/dtypes/entity/'+app+'.json?rest_api_key='+keys+'&amp;view=')
 	 xhr.send(null)
xhr.onreadystatechange = function(){
  if(xhr.readyState==4){
     if(xhr.responseText!=''){
        xhr=JSON.parse(xhr.responseText)
 //CREAR BD
for(var i=0; i<xhr.records.length; i++){
     lect=xhr.records[i];
ob={
 "name_p":lect.values.a6WQ41W4bmWQnqWQ4WWOam,
   "info":lect.values.awbJKtwejcLyk0WQ_dHCkt,
   "pass":lect.values.c3gXDTW7jeWRxcUSkyu8op,
  "phone":lect.values.btWR5CFSngqyo2ASoAW6bE,
     "id":lect.id,
   "fcre":lect.created_at,
   "fupd":lect.updated_at,
 },
  bd.splice(i,0,ob);
  localStorage.db=JSON.stringify(bd)
}
       db=JSON.parse(JSON.stringify(bd))
       notas('Actualizada la DB')
       setTimeout("notas()",600)
       localStorage.time=time
     }else{
       notas("No tiene conexión")
       setTimeout("notas()",2000)
 }}}} 
 cto.innerHTML=`<b>${db.length}.0</b><br>Developers`
 if(db.length==0){resulta.innerHTML=`No hay base de datos`}
 }
 
 
 //BUSCADOR
function buscar(){
     arg=input.value.toUpperCase()
     conteo=0
     resulta.innerHTML=''
if(arg==admin.toUpperCase()){cargaDb();input.value=""}
 if(arg!='' && arg.length>=1){
  for(var i=0; i<db.length; i++){
   if(conteo<5){
     if((db[i].phone).indexOf(arg)!=-1 || (db[i].name_p.toUpperCase()).indexOf(arg)!=-1 || (db[i].info.toUpperCase()).indexOf(arg)!=-1){
      conteo++; url='https://'+pgi+'/widgets/ddPsyqytvcROk-fKOxW5vX/dtype/'+db[i].id+'?view='+app
      resulta.innerHTML+=`<hr/><div onclick="openPage(url)"><b>${db[i].name_p}</b> <br>${db[i].info}</div>`
     }
   }
  }
   localStorage.ult=input.value
   if(conteo==0){resulta.innerHTML='<div class="resaltado">No hay Resultados.</div>'}
 }
}



//CARGA PAGE WEB
function openPage(arg){  notas('Cargando app')
  var xhr= new XMLHttpRequest()
  	   xhr.open('get',arg)
  	   xhr.send(null)
  xhr.onreadystatechange = function(){
  if(xhr.readyState==4){
    if(xhr.responseText!=''){
  //CONECTADO A LA PAGE
    notas()
    none="none"
    pageDiv.style.display="inline"
    pageDiv.innerHTML=`<iframe class="full" src="${arg}"></iframe> <div class="close" onclick="pageDiv.style.display=none">x</div>`
    }else{
  //SIN CONEXIÓN
    notas('Sin conexión')
    setTimeout("notas()",2000)
    }
  }
 }
}


function notas(txt){
 nota.style.height='0px';
 if(txt!=undefined){nota.style.height='auto';nota.innerHTML=`<p>${txt}</p>`}
}
