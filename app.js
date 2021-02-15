






document.querySelector('#search-btn').addEventListener('click',function(){
    let url = "https://restapieducon.herokuapp.com/api/";
    let word = document.querySelector('#word').value;
    url = url.concat(word)
    getData(url)
    
})



function getData(url){
    document.querySelector('#data').innerHTML = ` <div class='row mt-5'>
                                                    <div class='col-md-4'>
                                                        <h3>Meanings:</h3>
                                                        <ul class="list-group" id='meanings-data'>
                                                        </ul>
                                                    </div>
                                                    <div class='col-md-4'>
                                                        <h3>Synonyms:</h3>
                                                        <ul class="list-group" id='synonyms-data'>
                                                        </ul>
                                                    </div>
                                                    <div class='col-md-4'>
                                                        <h3>Sentences:</h3>
                                                        <ul class="list-group" id='sentences-data'>
                                                        </ul>
                                                    </div>
                                                </div>`
    //document.querySelector('#meanings-data').innerHTML = ``

    fetch(url).then((response) => {
        return response.json()
    }).then((data) => {
        
        data.meaning.forEach(element => {

            document.querySelector('#meanings-data').innerHTML += `<li class="list-group-item">${element}</li>`
            
        });

        data.synonyms.forEach(element => {

            document.querySelector('#synonyms-data').innerHTML += `<li class="list-group-item">${element}</li>`
            
        });

        data.sentences.forEach(element => {

            document.querySelector('#sentences-data').innerHTML += `<li class="list-group-item">${element}</li>`
            
        });




    })
}










