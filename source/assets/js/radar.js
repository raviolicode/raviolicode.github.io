var w = 580,
    h = 400;

//Data
var d = [
    [{
        axis: "Front End",
        value: 0.75
    }, {
        axis: "Agile Coaching",
        value: 0.50
    }, {
        axis: "Back End",
        value: 0.97

    }, {
        axis: "Dev Ops",
        value: 0.40
    }, {
        axis: "Software Engineering",
        value: 0.80
    }, {
        axis: "Performance",
        value: 0.65
    }]
];

//Options for the Radar chart, other than default
var mycfg = {
    w: w,
    h: h,
    maxValue: 0.6,
    levels: 6,
    ExtraWidthX: 180,
    TranslateX: 60,
    color: d3.scale.ordinal().range(["#de5b28"])
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#skills-graph", d, mycfg);

var chart = $("#skills-graph svg"),
    aspect = chart.width() / chart.height(),
    container = chart.parent();

$(window).on("resize", function() {
    var targetWidth = container.width();
    chart.attr("width", targetWidth);
    chart.attr("height", Math.round(targetWidth / aspect));
}).trigger("resize");
