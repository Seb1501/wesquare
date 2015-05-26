

var n_place = $('.lce_number');
$('.line_count_elements').on('click', '.lce_add', function() {
    var n = parseInt(n_place.text(), 10);
    n_place.empty().append(n + 1);
});
$('.line_count_elements').on('click', '.lce_remove', function() {
    var n = parseInt(n_place.text(), 10);
    n_place.empty().append(Math.max(0, n - 1));
});


<div class="line_count_elements">
    <span class="lce_number">1</span>
    <span class="lce_add">+</span>
    <span class="lce_remove">-</span>
</div>

.line_count_elements span {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid #ccc;
    text-align: center;
}

.lce_add, .lce_remove {
    cursor: pointer;
}
 

<div id="header">
    <div id="music"><a href="#">Music</a></div>             
    <div id="about"><a href="#">About</a></div>
    <div id="contact"><a href="#">Contact</a></div>
</div>

<div id="musicinfo">
    <p>Music info div</p>
</div>

$(document).ready(
    function() {
        $("#music").click(function() {
            $("#musicinfo").toggle();
        });
    });


#musicinfo {
    display: none;
}
    