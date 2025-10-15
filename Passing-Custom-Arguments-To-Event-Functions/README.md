Excellent follow-up, Sanket 👏 — you’re moving into an important React concept now:
👉 Passing custom arguments to event handler functions.

Let’s break it down clearly and practically 👇

🧠 The Problem

When you attach an event in React like this:

<button onClick={handleClick}>Click Me</button>

React automatically passes an event object (like MouseEvent) to handleClick.

So your handler looks like:

function handleClick(event) {
console.log(event); // contains info about the click
}

But sometimes, you want to pass your own data, not just the event.

Example:

You have a list of users, and each "Delete" button should delete a different user.

⚙️ The Solution: Wrap the Function in an Arrow Function
<button onClick={() => handleClick(user.id)}>Delete</button>

Now you’re passing your custom argument (user.id) to the function.

🧩 Example
function App() {
const users = ["Sanket", "Ravi", "Pooja"];

function handleDelete(name) {
alert("Deleting user: " + name);
}

return (
<div>
{users.map((user) => (
<button key={user} onClick={() => handleDelete(user)}>
Delete {user}
</button>
))}
</div>
);
}

✅ Here’s what happens:

You pass a custom argument (user) via arrow function.

handleDelete receives that argument directly.

You can still access the event too if you want:

<button onClick={(event) => handleDelete(user, event)}>Delete</button>

💡 Why Not Just Write onClick={handleDelete(user)}?

Because this will call the function immediately during render ❌ instead of waiting for the click.

The correct way is:

onClick={() => handleDelete(user)}

— this creates a function reference that’s called only when clicked ✅

✅ Summary Table
Goal Syntax Notes
Pass event only onClick={handleClick} React automatically passes event
Pass custom data onClick={() => handleClick(data)} Wrap in arrow function
Pass data + event onClick={(e) => handleClick(data, e)} Include both arguments

Would you like me to show a real example of this — like a list of cards, and clicking a “View Profile” button logs that specific user’s name?
