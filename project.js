const dataBlog = []
function submitProject() {
    let displayDiv = document.getElementById('myCard')
    displayDiv.style.display = 'block';

    let projectName = document.getElementById('project-name').value
    let projectStart = document.getElementById('start-date').value
    let projectEnd = document.getElementById('end-date').value
    let projectDesc = document.getElementById('description').value
    let projectImg = document.getElementById('upload').files
    projectImg = URL.createObjectURL(projectImg[0])
    
    // Untuk memfilter pilihan checkbox
    let projectOption = document.getElementById('html')
    let projectOption2 = document.getElementById('js')
    let projectOption3 = document.getElementById('css')
    let projectOption4 = document.getElementById('node')

    const optionFilter =[]
    const options =[projectOption, projectOption2, projectOption3, projectOption4]
    for(i = 0; i < options.length; i++){
        if(options[i].checked == true){
            optionFilter.push(options[i].value)
        }

    }
    const optionFilter2 =[]
    for(i = 0; i < optionFilter.length; i++){
        if(optionFilter[i] === 'HTML'){
            optionFilter2.push('<i class="fa-solid fa-file-code fa-xl"></i>')
        }
        if(optionFilter[i] === 'JS'){
            optionFilter2.push('<i class="fa-brands fa-js-square fa-xl"></i>')
        }
        if(optionFilter[i] === 'CSS'){
            optionFilter2.push('<i class="fa-brands fa-css3-alt fa-xl"></i>')
        }
        if(optionFilter[i] === 'Node JS'){
            optionFilter2.push('<i class="fa-brands fa-node-js fa-xl"></i>')
        }
    }
    // ----------------------------------------------------------------------------------
    
    let projectData = {
        title: projectName,
        startDate: projectStart,
        endDate: projectEnd,
        description: projectDesc,
        option: optionFilter2,
        image: projectImg,
    }
    dataBlog.push(projectData)
    console.log(projectData)
    blogPush()
}

    function blogPush(){
        let card = document.getElementById('card')
        card.innerHTML = ''
            
        for(i =0; i < dataBlog.length; i++) {

                
            //------Ambil waktu
                
                //--- Startdate
                let awal = dataBlog[i].startDate.split('-')
                let tahun = parseInt(awal[0])
                let bulann;
                let hari = parseInt(awal[2])
                if(awal[1].indexOf('0') === 0){
                    bulann = parseInt(awal[1].substring(1))
                    
                }
                else if(awal[2].indexOf('0') === 0) {
                    hari = parseInt(awal[2].substring(1))
                }
                awal.splice(0,3)
                awal.push(tahun, bulann, hari)
                // ---------------------------------------------------------
                
                
                // End date-----------------------------------------------------------
                let akhir = dataBlog[i].endDate.split('-')
                let tahunAkhir = parseInt(akhir[0])
                let bulanAkhir;
                let hariAkhir = parseInt(akhir[2])
                if(akhir[1].indexOf('0') === 0){
                    bulanAkhir = parseInt(akhir[1].substring(1))
                    
                }
                else if(akhir[2].indexOf('0') === 0) {
                    hariAkhir = parseInt(akhir[2].substring(1))
                }
                akhir.splice(0,3)
                akhir.push(tahunAkhir, bulanAkhir, hariAkhir)
                // -------------------------------------------------------------------- 
                
                let durasiWaktu;
                if(awal[1] == akhir[1]){
                    durasiWaktu = `${akhir[2] - awal[2]} hari`
                }
                else{
                    durasiWaktu = `${akhir[1] - awal[1]} bulan`
                }

        // push card---------------------------------------------------------------------------------------------
        card.innerHTML += `<div class="card">
        <img src="${dataBlog[i].image}">
        <div class="atas">
            <h3><a href="blog-detail.html">${dataBlog[i].title}</a></h3>
            <p>durasi = ${durasiWaktu}</p>
        </div>
        <p style="text-align: justify; font-size: 14px; margin-bottom: 27px;">
            ${dataBlog[i].description}</p>
            
        <div class="icon" id="icon2">
            ${(dataBlog[i].option[0] == undefined)? dataBlog[i].option.splice(0, 1) :dataBlog[i].option[0]}
            ${(dataBlog[i].option[1] == undefined)? dataBlog[i].option.splice(1, 1) :dataBlog[i].option[1]}
            ${(dataBlog[i].option[2] == undefined)? dataBlog[i].option.splice(2, 1) :dataBlog[i].option[2]}
            ${(dataBlog[i].option[3] == undefined)? dataBlog[i].option.splice(3, 1) :dataBlog[i].option[3]}
        </div>
    
        <div class="button">
            <button type="button">edit</button>
            <button type="delete">delete</button>
        </div>
    </div>`
    }   
}






