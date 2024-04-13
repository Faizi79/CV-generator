function enterData(){
    ///
    event.preventDefault();

    // Get the uploaded image
    var file = document.getElementById('img').files[0];
    
    if (file) {
        // Create an object URL for the uploaded image
        var imgUrl = URL.createObjectURL(file);

        // Set the src attribute of the image with the uploaded image
        document.getElementById('img-p').src = imgUrl;
    } else {
        // If no image is selected, you may want to handle this case
        alert("Please upload an image.");
    }
    ///
    let name= document.getElementById('name').innerText=document.getElementById("fullname").value;
    let mainSkill= document.getElementById('mSkill').innerText=document.getElementById("mainSkill").value;
    let linkedIn= document.getElementById('lknid').innerText=document.getElementById("email-1").value;
    let email= document.getElementById('email').innerText=document.getElementById("email-1").value;
    let phone= document.getElementById('phone').innerText=document.getElementById("phone-1").value;
    let address= document.getElementById('add').innerText=document.getElementById("address").value;
    // ///////
    let eductaion= document.getElementById('ed1').innerText=document.getElementById("edu1").value;
    let eductaion2= document.getElementById('ed2').innerText=document.getElementById("edu2").value;
    let eductaion3= document.getElementById('ed3').innerText=document.getElementById("edu3").value;
////////////////////////////////////
let certification1= document.getElementById('cf1').innerText=document.getElementById("ctf1").value;
let certification2= document.getElementById('cf2').innerText=document.getElementById("ctf2").value;
let certification3= document.getElementById('cf3').innerText=document.getElementById("ctf3").value;
////
let language= document.getElementById('lang1').innerText=document.getElementById("lg1").value;
    let language1= document.getElementById('lang2').innerText=document.getElementById("lg2").value;
    ////////
    let about= document.getElementById('abt').innerHTML=document.getElementById("about").value;
    ////
    let skill1= document.getElementById('skl1').innerText=document.getElementById("skill1").value;
    let skill2= document.getElementById('skl2').innerText=document.getElementById("skill2").value;
    let skill3= document.getElementById('skl3').innerText=document.getElementById("skill3").value;
    let skill4= document.getElementById('skl4').innerText=document.getElementById("skill4").value;
    ///
    let experiece= document.getElementById('exp').innerText=document.getElementById("experience").value;
///
let project1= document.getElementById('p1').innerText=document.getElementById("pj1").value;
let project2= document.getElementById('p2').innerText=document.getElementById("pj2").value;
let project3= document.getElementById('p3').innerText=document.getElementById("pj3").value;
let project4= document.getElementById('p4').innerText=document.getElementById("pj4").value;

}
/////
function downloadPDF() {
    const content = document.getElementById('content').innerHTML;
    const filename = 'example.pdf';

    const pdf = new jsPDF();
    pdf.text(content, 10, 10);
    pdf.save(filename);
}