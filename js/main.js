const computer = {
    name: 'MacBook',
    isOn: false,
    turnOn() {
        this.isOn = true;
        return (`The ${this.name} is On`);
    },
    turnOff() {
        this.isOn = false;
        return (`The ${this.name} is Off`);
    }
};
console.log(computer);

const server = {
    name: 'Dell PowerEdge T30',
    isOn: false
};


document.write(computer.turnOn.apply(server));
