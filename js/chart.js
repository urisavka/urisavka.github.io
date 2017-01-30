$(function () {
    $('.programming-languages .chart').easyPieChart({
        easing: 'easeOutBounce',
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
    $('.frameworks .chart').easyPieChart({
        easing: 'easeOutBounce',
        barColor: '#0089ff',
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
    var chart = window.chart = $('.personal-skills .chart').data('easyPieChart1');
});