console.log("********************************************************Event management application************************************************");

class Organizerss {
    public id: number;
    public name: string;
    public discription: string;
    public starttime: string;
    public address: string

    public display(): void {
        // console.log(`Organizer details=  ${this.id} , ${this.name}`);
    }
}

//child classes

class Organizer extends Organizerss {
    id: number;
    name: string
    constructor(id: number, name: string) {

        // calling parent class constructor.
        super()
        this.id = id;
        this.name = name;

    }

    // overriding parent class print method .
    public display(): void {
        super.display()
        console.log(` ID:  ${this.id} ,Name:  ${this.name}  `);

        console.log("-------------------------------------------------------------------------------------------------------------------------------------------------------------");

    }
}

class Events1 extends Organizerss {
    discription: string;
    starttime: string
    constructor(id: number, name: string, discription: string, starttime: string) {

        super()
        this.id = id;
        this.name = name;
        this.discription = discription;
        this.starttime = starttime
    }

    public display(): void {
        super.display()
        console.log(`Event ID:  ${this.id} ,  Event Name:  ${this.name} , Event Discription:  ${this.discription} , Event Start Time:  ${this.starttime}`);

        console.log("-------------------------------------------------------------------------------------------------------------------------------------------------------------");

    }
}

class Venue extends Organizerss {
    discription: string;
    address: string
    constructor(id: number, name: string, discription: string, address: string) {

        super()
        this.id = id;
        this.name = name;
        this.discription = discription;
        this.address = address
    }

    public display(): void {
        super.display()
        console.log(`Venue ID:  ${this.id}  , Venue Name:  ${this.name} , Venue Discription:  ${this.discription} , Venue Address:  ${this.address}`);

        console.log("-------------------------------------------------------------------------------------------------------------------------------------------------------------");

    }
}


let org: Organizerss[] = new Array(new Organizer(1, "Yash"), new Events1(2, " Book Publication ", " The Golden Door  ", "sunday from 9 AM"), new Venue(3, "'Harshada' Lawns", "sangola", "Near Miraj-Pandharpur road,Sangola"));

for (const child of org) {
    child.display();
}