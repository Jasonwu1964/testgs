function testGS(){
    
    const url="https://script.google.com/macros/s/AKfycbwye4OYprVe-DNPY_A40VtkIJ-dYps3rYGa-nqZEqGfHBnzrOg7JLky/exec"
    fetch(url)
      .then(d => d.json())
      .then(d => {
        document.getElementById("app").textContent = d[0].status;
      });

}

document.getElementById("btn").addEventListener("click",testGS);
