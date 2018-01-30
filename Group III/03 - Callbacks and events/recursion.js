//let callCount = 0;

function endless() {
    callCount += 1;
    return endless();
}

let tree = {
    name: "f1",
    size: 10,
    children: [{
            name: "f11",
            size: 20,
            children: [{
                    name: "f111",
                    size: 10,
                    children: []
                },
                {
                    name: "f112",
                    size: 7,
                    children: []
                }
            ]
        },
        {
            name: "f12",
            size: 20,
            children: [{
                    name: "f121",
                    size: 10,
                    children: [{
                        name: "f1211",
                        size: 10,
                        children: []
                    }]
                },
                {
                    name: "f122",
                    size: 7,
                    children: []
                }
            ]

        }
    ]
}


function getTreeSizeIterative(tree) {
    let total = tree.size;
    for (let index = 0; index < tree.children.length; index++) {
        const child = tree.children[index];
        total += child.size;
        for (let index = 0; index < child.children.length; index++) {
            const grandchild = child.children[index];
            total += grandchild.size;
            for (let index = 0; index < grandchild.children.length; index++) {
                const chukunchild = grandchild.children[index];
                total += chukunchild.size;
                // ...
            }
        }
    }
    return total;
}

function getTreeSize(tree) {
    //console.log(`Being called for tree ${tree.name}`);
    let total = tree.size;
    for (let index = 0; index < tree.children.length; index++) {
        const child = tree.children[index];
        total += getTreeSize(child);
    }
    //console.log(`Call for tree ${tree.name} finished`);
    return total;
}

console.log(getTreeSize(tree));

let callCount = 0;

function fibbonacci(n) {
    callCount +=1;
    if (n===0 || n===1)
        return 1;

    return fibbonacci(n - 1) + fibbonacci(n - 2);
}

console.log(fibbonacci(42));
console.log(callCount);