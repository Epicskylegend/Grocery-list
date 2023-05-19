$(function() {
    var callback = function(event) {
        event.preventDeault();
        var input = $('input[type=text][name=item]')
        value = input.val(),
        need = ($(event.target).attr('id') === 'addNeed'),
        item = $('<li><input type = "checkbox" name="item"> ' + value + ' <a href')
    }
}