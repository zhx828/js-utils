/**
 * Created by zhangh2 on 8/31/15.
 */
var islands = (function () {

    var area = [
        [{val: 1, visited: false}, {val: 0, visited: false}, {val: 0, visited: false}, {
            val: 0,
            visited: false
        }, {val: 1, visited: false}, {val: 0, visited: false}, {val: 0, visited: false}],
        [{val: 0, visited: false}, {val: 0, visited: false}, {val: 0, visited: false}, {
            val: 1,
            visited: false
        }, {val: 1, visited: false}, {val: 0, visited: false}, {val: 1, visited: false}],
        [{val: 0, visited: false}, {val: 0, visited: false}, {val: 0, visited: false}, {
            val: 0,
            visited: false
        }, {val: 0, visited: false}, {val: 0, visited: false}, {val: 0, visited: false}],
        [{val: 1, visited: false}, {val: 0, visited: false}, {val: 0, visited: false}, {
            val: 1,
            visited: false
        }, {val: 1, visited: false}, {val: 0, visited: false}, {val: 1, visited: false}],
        [{val: 0, visited: false}, {val: 1, visited: false}, {val: 0, visited: false}, {
            val: 0,
            visited: false
        }, {val: 0, visited: false}, {val: 0, visited: false}, {val: 0, visited: false}],
        [{val: 0, visited: false}, {val: 0, visited: false}, {val: 0, visited: false}, {
            val: 0,
            visited: false
        }, {val: 1, visited: false}, {val: 0, visited: false}, {val: 0, visited: false}],
        [{val: 0, visited: false}, {val: 0, visited: false}, {val: 0, visited: false}, {
            val: 0,
            visited: false
        }, {val: 1, visited: false}, {val: 0, visited: false}, {val: 0, visited: false}]
    ];
    var xL = yL = 7;

    function init() {
        var i = j = 0;
        var islands = 0;
        var queue = []; //{x: 0, y: 0}

        for (; i < xL; i++) {
            for (j = 0; j < yL; j++) {
                if (area[i][j].visited === false) {
                    if (area[i][j].val === 1) {
                        queue.push({x: i, y: j});
                        search(queue);
                        islands++;
                    } else {
                        area[i][j].visited = true;
                    }
                }
            }
        }
        return islands;
    }

    function search(queue) {
        var data = queue.shift();
        var datum = area[data.x][data.y];
        if (datum.visited === false) {
            datum.visited = true;
            if (datum.val === 1) {

                if (data.x + 1 < xL) {
                    queue = sub(queue, area[data.x + 1][data.y], data.x + 1, data.y);
                }
                if (data.y + 1 < yL) {
                    queue = sub(queue, area[data.x][data.y + 1], data.x, data.y + 1);
                }
                if (data.y > 1) {
                    queue = sub(queue, area[data.x][data.y - 1], data.x, data.y - 1);
                }
                if (data.x > 1) {
                    queue = sub(queue, area[data.x - 1][data.y], data.x - 1, data.y);
                }
            }
        }

        if (queue.length > 0) {
            queue = search(queue);
        }

        return queue;
    }

    function sub(queue, datum, x, y) {
        if (datum.visited === false && datum.val === 1) {
            queue.push({x: x, y: y});
        }
        return queue;
    }

    return {
        init: init
    };
})();

console.log(islands.init());
