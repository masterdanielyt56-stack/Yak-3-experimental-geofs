(async function(){
const B="https://cdn.jsdelivr.net/gh/masterdanielyt56-stack/Yak-3-experimental-geofs@main/";
try{
let a=geofs.aircraft.instance.aircraftRecord;
let d=atob(a.definition);
let n=d.replace(/"[^"]*\.glb"/g,'"'+B+'yak3.glb"');
let r={id:3857,name:"Yak-3R CORUPA",fullPath:B,isPremium:false,isCommunity:false,definition:btoa(unescape(encodeURIComponent(n)))};
let p=geofs.aircraft.instance.parseRecord(JSON.stringify(r));
geofs.aircraft.instance.unloadAircraft();
geofs.aircraft.instance.fullPath=B;
geofs.aircraft.instance.aircraftRecord=r;
geofs.aircraft.instance.init(p,geofs.aircraft.instance.getCurrentCoordinates());
alert("YAK-3R SOVIETICO CARREGADO! 2.29MB");
}catch(e){alert("ERRO: "+e.message);}
})();
