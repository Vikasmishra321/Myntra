function allclearResult()
{
    document.getElementById('result').value='';
}
function dellastResult()
{
    document.getElementById('result').value=document.getElementById('result').value.slice(0,-1);
}
function addresult(value)
{
    document.getElementById('result').value +=value;
}
function finalResult()
{
    let p = document.getElementById('result').value;
    let q = eval(p);
    document.getElementById('result').value = q;


}
