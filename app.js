const packages = [{
    heavy: true,
    priority: false,
    fragile: false,
    to: 'Harrington',
    trackingNumber: '1324kjs',
    lost: false,
},
{
    heavy: false,
    priority: true,
    fragile: true,
    to: 'Mark',
    trackingNumber: '1325sdk',
    lost: false,
},
{
    heavy: true,
    priority: false,
    fragile: true,
    to: 'Mick',
    trackingNumber: 'jffd147',
    lost: false,
},
{
    heavy: false,
    priority: false,
    fragile: false,
    to: 'Jake',
    trackingNumber: 'acdc145',
    lost: false,
},
{
    heavy: true,
    priority: true,
    fragile: true,
    to: 'Brittany',
    trackingNumber: '65ljh5k',
    lost: false,

},
{
    heavy: false,
    priority: true,
    fragile: false,
    to: 'Zach',
    trackingNumber: '8081baz',
    lost: false,
},
{
    heavy: true,
    priority: false,
    fragile: true,
    to: 'Jeremy',
    trackingNumber: 'suz2367',
    lost: false,
}
]

function loosePackage(){
    let randomPackage = packages[Math.floor(Math.random()* packages.length)]
    console.log("random", randomPackage)
    randomPackage.lost = true;
}

loosePackage()

let currentPackage = packages
console.log(packages)



function drawPackage(){
    let template = ''
    currentPackage.forEach(p => template += `<div class="col-5 btn btn-warning m-3 " onclick="find('${p.trackingNumber}')">${p.to}'s <br> Package Tracking ID = ${p.trackingNumber}</div>`);
    let packageElm = document.getElementById('packages');
    packageElm.innerHTML = template
}

drawPackage();

function find(trackingNumber){
    let find = packages.find(p => p.trackingNumber == trackingNumber)
    console.log("lost?", trackingNumber)
    if(find.lost == true){
        window.alert('CONGRATS: You found the lost package')
        location.reload()
    }else{
        window.alert("This isn't the lost package...you suck")
    }
}

function filterHeavy(){
    let lost = packages.find(p => p.lost == true)
    currentPackage = currentPackage.filter(p => p.heavy == lost.heavy)
    drawPackage()
}

function filterPriority(){
    let lost = packages.find(p => p.lost == true)
    currentPackage = currentPackage.filter(p => p.priority == lost.priority)
    drawPackage()
}

function filterFragile(){
    let lost = packages.find(p => p.lost == true)
    currentPackage = currentPackage.filter(p => p.fragile == lost.fragile)
    drawPackage()
}

function filterStuff(property){
    console.log(property,"stuff")
    let lost = packages.find(p => p.lost == true)
    currentPackage = currentPackage.filter(p => p[property] == lost[property])
    drawPackage()
}

function clearFilter(){
    currentPackage = packages
    drawPackage()
}


