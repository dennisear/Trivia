function resultado() {
    var p1, p2, p3, p4, nota;
     
    // 1ª pregunta -->
    if (document.getElementById('p11').checked==true) {p1=1}
    if (p1==1) {document.querySelectorAll('.pregunta1')[0].style.color='#00FF00'}
    else {p1=0}
    // 2ª pregunta -->
    if (document.getElementById('p22').checked==true) {p2=1}
    if (p2==1) {document.querySelectorAll('.pregunta2')[1].style.color='#00FF00'}
    else {p2=0}
    // 3ª pregunta -->
    if (document.getElementById('p33').checked==true) {p3=1}
    if (p3==1) {document.querySelectorAll('.pregunta3')[2].style.color='#00FF00'}
    else {p3=0}
    // 4ª pregunta -->
    if (document.getElementById('p44').checked==true) {p4=1}
    if (p4==1) {document.querySelectorAll('.pregunta4')[3].style.color='#00FF00'}
    else {p4=0}
    
    
    // 5ª pregunta -->
    if (document.getElementById('p53').checked==true) {p5=1}
    if (p5==1) {document.querySelectorAll('.pregunta5')[2].style.color='#00FF00'}
    else {p5=0}
    // 6ª pregunta -->
    if (document.getElementById('p61').checked==true) {p6=1}
    if (p6==1) {document.querySelectorAll('.pregunta6')[0].style.color='#00FF00'}
    else {p6=0}


    nota=p1+p2+p3+p4+p5+p6;
    document.getElementById('resultado').innerHTML="Aciertos: "+nota;

    rs=confirm("¿Desea conocer su número de aciertos?");
    if (rs==false) {document.forms[0].reset();location.reload()}
}