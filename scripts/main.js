const anticipatedElements = [
    {
        id:'data-input',
        name: 'dataInput',
        parent: 'data-area',
        type: 'div'
    },
    {
        id:'chart-display',
        name: 'chart',
        parent: 'data-area',
        type:
    }
];
const bootConfigURL = './config/test_config.json';
const RegEl = {};

function elle(type, params = {}){
    let el = document.createElement(type);
    if(params.classes && params.classes.length > 0){
        el.classList.add(...params.classes);
    }
    if(params.id && params.id.length > 0){
        el.id = params.id;
    }
    if(params.attrs && params.attrs.length > 0){
        for(let attr of params.attrs){
            el.setAttribute(attr.name, attr.value === 0 ? '0' : attr.value || '');
        }
    }
    if(params.data && params.data.length > 0){
        for(let item of params.data){
            el.dataset[item.key] = item.value;
        }
    }
    if(params.hasOwnProperty('text') && params.text.toString().length > 0){
        let lines = params.text.toString().split('\n');
        if(lines.length === 1){
            el.appendChild(document.createTextNode(params.text.toString()));
        }else{
            let i = 0;
            for(let line of lines){
                el.appendChild(document.createTextNode(line));
                i++;
                if(i < lines.length){
                    el.appendChild(document.createElement('br'));
                }
            }
        }
    }
    return el;
}

function setupElements(){
    let parent;
    for (let el of anticipatedElements){
        if(document.getElementById(el.id)===null){
            parent = document.getElementById(el.parent);
            if(parent === null){
                throw new Error(`No element with ID [${el.parent}] found to append [${el.id}] to.`);
            }
            parent.appendChild(
                document.createElement()
            )
        }
    }
}

function startUp(){
    setupElements();
}

startUp();
