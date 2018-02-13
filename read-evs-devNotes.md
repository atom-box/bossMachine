#Needs-to-return list 
## Newest notes first, starting from today:
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
