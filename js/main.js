var width = 1000,
    height = 930;

var star = [
    {
        'color': 'white',
        'radius': 2,
        'rotation': 0,
        'speed': 35 * Math.PI / 180,
        'distance': 60,
    },
    {
        'color': 'hot',
        'radius': 4,
        'rotation': 0,
        'speed': 25 * Math.PI / 180,
        'distance': 80,
    },
    {
        'color': 'purple',
        'radius': 6,
        'rotation': 0,
        'speed': 10 * Math.PI / 180,
        'distance': 200,
    },
    {
        'color': 'red',
        'radius': 5,
        'rotation': 0,
        'speed': 8 * Math.PI / 180,
        'distance': 240,
    },
    {
        'color': 'blue',
        'radius': 8,
        'rotation': 0,
        'speed': 3 * Math.PI / 180,
        'distance': 360,
    },
    {
        'color': 'faraway',
        'radius': 6,
        'rotation': 0,
        'speed': 2 * Math.PI / 180,
        'distance': 430,
    }

];


var svg = d3.select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

svg.append('circle')
    .attr('cx', width / 2)
    .attr('cy', height / 2)
    .attr('r', 30)
    .attr('id', 'blackhole');

svg = svg.append('g');

svg.selectAll('circle')
    .data(star)
    .enter()
    .append('circle')
    .attr('class', 'star')
    .attr('cx', function (d) {
        return width / 2;
    })
    .attr('cy', function (d) {
        return height / 2 - d.distance;
    })
    .attr('r', function (d) {
        return d.radius;
    })
    .attr('id', function (d) {
        return d.color;
    });

setInterval(newPlace, 100);

function newPlace() {
    for (var key in star)
        star[key].rotation += star[key].speed;

    svg.selectAll('circle')
        .data(star)
        .transition()
        .delay(0)
        .duration(100)
        .attr('cx', function (d) {
            return width / 2 + Math.cos(d.rotation) * d.distance;
        })
        .attr('cy', function (d) {
            return height / 2 + Math.sin(d.rotation) * d.distance;
        });
}