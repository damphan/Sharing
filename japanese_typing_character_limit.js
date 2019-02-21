var compositionStatus = false;

$(document).ready(function() {
    $('#text_file').on('change keyup paste cut copy input', function() {
        if (!compositionStatus) {
            $(this).val(checkTyping($(this).val()));
        }
    }).on('compositionstart', function(event) {
        compositionStatus = true;
    }).on('compositionend', function(event) {
        compositionStatus = false;
        $(this).val(checkTyping($(this).val()));
    });
});

// Japanese unicode sheet
// http://www.rikai.com/library/kanjitables/kanji_codes.unicode.shtml
function checkTyping(str, type) {
    var reg = /[^\u4E00-\u9FFF\u3040-\u309Fー\u30A0-\u30FFa-z0-9０-９ａ-ｚ　 ]/gi;
    return str.replace(reg, '');
}
