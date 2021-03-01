function testGS(){
    
    const url="https://script.google.com/macros/s/AKfycbwye4OYprVe-DNPY_A40VtkIJ-dYps3rYGa-nqZEqGfHBnzrOg7JLky/exec"

    fetch(url)
      .then(d => d.json())
      .then(d => {
        document.getElementById("app").textContent = d[0].status;
      });

}

document.getElementById("btn").addEventListener("click",testGS);


function addGS(){
    
    const url="https://script.google.com/macros/s/AKfycbwye4OYprVe-DNPY_A40VtkIJ-dYps3rYGa-nqZEqGfHBnzrOg7JLky/exec"

    fetch(url,{
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      headers: {
          'Content-Type': 'application/json'
      },
      redirect: 'follow',
      body: JSON.stringify({name:"Jason"})
    });

}

document.getElementById("btn").addEventListener("click",testGS);

document.getElementById("btn2").addEventListener("click",addGS);



