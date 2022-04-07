$('#addSkill').on('click', function(){
    console.log("add skill button clicked");
    if($('input').val().length > 0){
        let newSkill = $('input').val();
        let newRowEle = `
        <tr>
            <td><button class="btn btn-xs btn-danger">X</button></td>
            <td>${newSkill}</td>
        </tr>
        `;
        if($('input').val().length > 0)
        $('tbody').append(newRowEle);
        
        $('input').val('')
        localStorage.setItem(newSkill, newSkill)
    }
})


$('tbody').on('click','button', function(){
    $(this).closest('tr').fadeOut(1000, function(){
        $(this).remove();
    })
})

$('#continue').on('click', function(){
    let oldSkills = Object.values(localStorage)
    for(let i=0;i<oldSkills.length;i++){
        let oldSkill = oldSkills[i]
        let newRowEle = `
            <tr>
                <td><button class="btn btn-xs btn-danger">X</button></td>
                <td>${oldSkill}</td>
            </tr>
            `;
        $('tbody').append(newRowEle);
    }
    $('#continue').attr('disabled', true)
})

$('#gameOver').on(('click'), function() {
    localStorage.clear()
})

console.log(localStorage)