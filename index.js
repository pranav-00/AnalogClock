document.documentElement.style.setProperty('--hr','#ff105e')
document.documentElement.style.setProperty('--mn','#fff')
document.documentElement.style.setProperty('--sc','#fff')
setInterval(() => {
    let day = new Date();
    let ss = day.getSeconds()*6;
    let mm = day.getMinutes()*6+(ss/60);
    let hh = day.getHours()*30+(mm/12);
    hr.style.transform = `rotateZ(${hh}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
    // console.log(checkbox.checked);
   
}, 500);

checkbox.addEventListener('click',()=>{
    let clock = document.getElementsByClassName('clock');
    if (checkbox.checked) {
        document.body.style.backgroundColor = 'royalblue'; // changing background color
        document.documentElement.style.setProperty('--hr','#474747') // changing color of hour hand
        document.documentElement.style.setProperty('--mn','#606060') // changing color of min hand
        document.documentElement.style.setProperty('--sc','#ff105e') // changing color of sec hand
        clock[0].classList.add('clockL');
    } else {
        document.body.style.backgroundColor = '#091921';
        document.documentElement.style.setProperty('--hr','#ff105e')
        document.documentElement.style.setProperty('--mn','#fff')
        document.documentElement.style.setProperty('--sc','#fff')
        clock[0].classList.remove('clockL');
    }
})

