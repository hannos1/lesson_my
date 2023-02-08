const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

//容器元素的监听
for(const empty of empties){
    empty.addEventListener('dragover',dragOver);// 当某被拖动的对象在另一对象容器范围内拖动时触发此事件
    empty.addEventListener('dragenter',dragEnter);// 进入时
    empty.addEventListener('drop',dragDrop);// 放手时
    empty.addEventListener('dragleave',dragLeave);// 离开时
}

//被拖拽元素的监听
fill.addEventListener('dragstart',dragStart)
fill.addEventListener('dragend',dragEnd)

function dragStart(){
    this.className += ' hold';//同步
    setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd(){
    this.className = 'fill'
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
    this.className += ' hovered';
}

function dragDrop(e){
    // e.preventDefault();
    this.className = 'empty';
    this.append(fill);
}

function dragLeave(e){
    this.className = 'empty';
}