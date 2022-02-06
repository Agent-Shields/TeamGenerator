module.exports = generateEmployeeCard;
module.exports = generateHTML;

// create employee card
const generateEmployeeCard = (questionsData) => {
return `
<div class="card">
    <div class="header bg-primary">
        <h1>Name</h1>
        <h1>Role</h1>
    </div>
    
    <div class="body">
        <h1>ID</h1>
        <h1>Email</h1>
        <h1>Office # / GitHub</h1>
    </div>
</div>
`
}

// layout HTML structure
const generateHTML = () =>{
return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Generator</title>
</head>

<body>
    <header>
        <div>
            <h1>My Team</h1>
        </div>
    </header>
    <main class="container">
    </main>
</body>
</html>
`
}