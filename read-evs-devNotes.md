#Needs-to-return list 



## Future Commit messages for GIT:
0) strange problem  -- If manual entry works for  http://localhost:4001/api/ideas, BUT the red app does not, do something to make the red app actually work.
0) Will need to restore the routes then to some semblance of what is supposed to be happening!
0) I downloaded a solution from a classmate
0) SEE IF THAT RUNS -- it does!!  Start imitating that before you move to next step.
0) Probably it is HIGH TIME I started using Chai cocoa or whatever, to just test.


    axios.get('http://localhost:4001/api/minions'),
    axios.get('http://localhost:4001/api/ideas'),
    axios.get('http://localhost:4001/api/meetings'),
  ])
1) Set up SERVER.JS middleware. 
2) Make SERVER.JS create some kind of console.log output so you can figure out what the Hades is going on when the react.js legacy buttons are pressed.
3) Experiment with 'Listen on 4001' PORT to make sure that is not a bug.
4) Move, temporarily, routes to API.JS until their REQ and RES objects are well understood. 
5) Write error middleware (error-ware?) into the routes so you know where they die if they die.




Monday next action:  
Pepper some more lines of console.log around, to trace what happens when I press the red SAVE BUTTOn in app.
Biggest question is examining what an incoming req has in it.  If same as Hahn's Commentor there should be a "req.body" "req.body.title".  
At Metcalfes tried to get it to print.   Went from 'NODINNAGETNUTTIN', then changed route to better(?) and now get some silence.   Mystery: now get no console.log.  Pepper some more lines of console.log around, to trace what happens when I press the red SAVE BUTTOn in app.

Sunday to-do:
Next action!  Very clear, 
0) read about what request object has.  how that red app sends request OBJECT
MAKE THE RESPONSE PRINT WHAT IS IN THE REQUEST OBJECT IT RECEIVED.
1) build a post following the line116 schema from README
2) once you get that working, then go back and rewrite the GET and GET by:id to reflect the
/api/minions/:minionId/work  route. (Every route you wrote yesterday was wrong; they lacked the '/api' at the front.  That's why they only ran in Node.) There is actually NO route that says /work/33, only there are routes that say api/minions/minId/work....


Saturday:
The object that is returned by find by Id has these keys:
[ id,title,description,hours,minionId ]



From db.js:
returns db.allIdeas<-findData

### __Based__ on _video_
Press SAVE under a form = POST new MinionObject
Press SAVE under a form = put existing M.O. MinionObject
Press center of minions while on homescreen =
GET all minions
Press lowest left facing arrow = TOUGH!  give the most recently enacted request (maybe always store recent route in a buffer variable?)


##The database object (in db.js) AT FIRST...
const db = {
  allMinions: {
    data: allMinions,  //RECURSIVE?
    nextId: minionIdCounter,
    isValid: isValidMinion,
  },
  allIdeas: {
    data: allIdeas,
    nextId: ideaIdCounter,
    isValid: isValidIdea,
  },
  allWork: {
    data: allWork,
    nextId: workIdCounter,
    isValid: isValidWork,
  },
  allMeetings: {
    data: allMeetings,
    nextId: meetingIdCounter,
    isValid: isValidMeeting,
  }
}

##...BUT ALSO:
1
    id: `${ideaIdCounter++}`,
    name: `${name} but for ${noun}`,
    description: 'The name says it all!!!',
    weeklyRevenue: weeklyRevenue,
    numWeeks: numWeeks,
2
  return {
    id: `${minionIdCounter++}`,
    name: faker.name.findName(),
    title: faker.name.jobTitle(),
    weaknesses: weaknesses,
    salary: 40000,
  }
3
  return {
    id: `${meetingIdCounter++}`,
    time: date.toTimeString().slice(0, 5),
    date: date,
    day: date.toDateString(),
    note: `${option} ${faker.company.catchPhrase()}`,
  }
4
  return {
    id: `${workIdCounter++}`,
    title: `Close deal #${Math.floor(Math.random() * 4) + 3}`,
    description: 'Close the biggest deal!',
    hours: Math.floor(Math.random() * 8) + 1,
    minionId: `${minionId}`,
  }



  
#Overview of files.   
(*) = most active development

##SERVER.JS
1-parse
2-CORS
3-listen 
This is big.  Holds most of the non-router middleware.
app.use...
require...

##DATA_STRUCT.js
Unofficial.
I made this as a scratchpad for writing the data objects.
###1 ./server/db.js 
### Methods:
SomeMethd(minions);
SomeMethd(ideas);
SomeMethd(meetings);
SomeMethd(work);

`getAllFromDatabase`:

`getFromDatabaseById`:

`addToDatabase`:

`updateInstanceInDatabase`:

`deleteFromDatabasebyId`:

`deleteAllFromDatabase`:

##INDEX.HTML
Front end; don't touch.  
Built in react.js, I think.

##API.JS (in Server folder)
All routes start here !
1-minions
2-ideas
3-meetings 
Probably need to all have their own folders.

##DB.JS (in Server folder)
Your non-persistant data has to re-start here every time the app runs.  
Write custom functions your routes can use.  Export!
Write these seven functions here:
const LOVELYNAME = () => {}; 
const LOVELYNAME = (a|b|c|d) => {}; 

where abcd can be
`'minions'`, `'ideas'`, `'meetings'`, or `'work'`.
These titles:
`getAllFromDatabase`
`getFromDatabaseById`
`addToDatabase`
`updateInstanceInDatabase`
`deleteFromDatabasebyId`:
`deleteAllFromDatabase`:

##ROUTES.JS (in Server folder)

##CHECK-M-D-IDEA.JS (in Server folder)
