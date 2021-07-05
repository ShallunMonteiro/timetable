export function gatah(lname)
{
return window[lname];
}
export function reach(x)
{
    window.location.replace(x);
}
export function ctm()
{
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    return h*60+m;
}
export function tft(t1,t2)
{   if(ctm()>=t1 && ctm()<=t2){return true;}
    else{return false;}}