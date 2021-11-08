// const skills = $('.skills')
// const input = $('.text')
// const submit = $('button')

function addSkill() {
    let val = $('.text').val()
    let skill = $('.skills').append(`<div>${val}</div>`)

}

$('button').click(addSkill)