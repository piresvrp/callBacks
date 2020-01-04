

var ax = new XMLHttpRequest();

ax.open('GET', 'https://api.github.com/users/piresvrp')
ax.send(null)

ax.onreadystatechange = function () {
    if(ax.readyState === 4){
        console.log(JSON.parse(ax.responseText))
    }
}