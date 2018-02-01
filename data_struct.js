class Minion {
	constructor(id, nam, tit, sal){
		this.id = id;
		this.name = nam;
		this.title = tit;
		this.salary = sal;
	}
}

class Idea {
	constructor(id, nam, des, wks, rev){
		this.id = id;
		this.name = nam;
		this.description = des;
		this.numWeeks = wks;
		this.weeklyRevenue = rev;
	}
}

class Meeting {
	constructor(tim, dat, day, not){
		this.time = tim;
		this.date = dat;
		this.day = day;
		this.note = not;
	}
}

const jack = new Minion(3, 'jack', 'Potatohead', 2.25);

console.log(Object.keys(jack) );