class Counter {
    _count = 0;
    incremet() { this._count++; }
    decrement() { this._count--; }
    getValue() { return this._count;}
}

interface UndoableCommand {
    execute();
    undo();
}

class AddCounterCommand implements UndoableCommand {
    _counter;
    constructor(counter) {
        this._counter = counter;
    }
    execute() {
        this._counter.incremet();
    }
    undo() {
        this._counter.decrement();
    }
}

function refreshText() {
    text.textContent = String(cnt.getValue());
}

function performAddCommand() {
    let cmd = new AddCounterCommand(cnt);
    cmd.execute();
    history.push(cmd);
    refreshText();
}

function undoLastCommand() {
    if (history.length > 0) {
        let cmd = history.pop();
        cmd.undo();
        redoHistory.push(cmd);
        refreshText();
    }
}

let cnt = new Counter();
let history = [];
let redoHistory = [];

const doButton: HTMLButtonElement = document.createElement('button');
doButton.textContent = 'Click';
doButton.addEventListener('click', e => performAddCommand(), false);

const undoButton: HTMLButtonElement = document.createElement('button');
undoButton.textContent = 'Undo';
undoButton.addEventListener('click', e => undoLastCommand(), false);

const text: HTMLElement = document.createElement('h1');

const appDiv: HTMLElement = document.getElementById('app');
appDiv.appendChild(doButton);
appDiv.appendChild(undoButton);
appDiv.appendChild(text);

refreshText();
