# Short Response Questions

## Question 1: Promise Chaining

The following code logs `undefined` in the second `.then()`. Identify the bug and fix it.

```js
fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then((response) => {
    if (!response.ok) throw Error(`Fetch failed.`);
    const readingPromise = response.json();
    // We need to return a variable here:
    return readingPromise;
  })
  .then((data) => {
    console.log(data); // undefined!
  })
  .catch((error) => console.error(error.message));
```

**Your Answer:**
- This throughs undefined because nothing has been `return` after the variable been created for `readingPromise`. 
- We need to return that variable so it will render to the next `.then()`.


## Question 2: Development Servers and CORS

A student opens their `index.html` file directly in the browser (using the `file://` protocol). Their `<script type="module">` tag and `fetch()` call both fail. Explain why, and what they should do instead.

**Your Answer:**
Opening `index.html` file directly in the browser means it's not running through HTTP server.
- We need a use a development server like Vite or Live Server extention for that purpose.
- So that way it will not block the loading files that we are about to use.  
- `fetch()` follows the same origin policy. When a page is loaded by file:// has a null origin.


## Question 3: The `fetch` Response Object

When we use `fetch()`, why do we check `response.ok` before reading the response body? What kinds of errors does this catch that `.catch()` alone would miss if we skipped this step as shown in the code below:

```js
const response = await fetch(url);
const data = await response.json();
```

**Your Answer:**
- We have to check `feth()` with `response.ok` because `fetch()` only rejects on network errors. However, using `response.ok` check its HTTP and if the status is between 200 to 299 rage it'll pass successfully. 
- At this point `.catch()` misses the HTTP status such as (404, 500, 403).


## Question 4: Async/Await Conversion

Rewrite the following `.then()`-based code using `async`/`await` with `try`/`catch`:

```js
const getJoke = () => {
  return fetch('https://v2.jokeapi.dev/joke/Programming?type=twopart')
    .then((response) => {
      if (!response.ok) throw Error(`Fetch failed. ${response.status}`);
      return response.json();
    })
    .then((data) => {
      return { data, error: null };
    })
    .catch((error) => {
      return { data: null, error };
    });
};
```

**Your Answer:**
```js
const getJoke = async () => {
  try{
    const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=twopart')
  
    if (!response.ok)
    throw Error(`Fetch failed. ${response.status}`);

  const data = await response.json();
  return { data, error: null };
  
  } catch (error){
    return { data: null, error };
  }
};
```


## Question 5: `event.preventDefault()` and Form Handling

A student writes a form handler but the data never displays. Their code:

```js
form.addEventListener('submit', (event) => {
  const name = form.elements.name.value;
  document.querySelector('#output').textContent = name;
});
```

What is wrong? What happens when they click submit, and how do they fix it?

**Your Answer:**
When the submit button clicked the `form.addEventListener` trigger the sumbit, then the `name` reads what has been assigned to it. 
- That is what it all does the browser send data to the server and it reload before we see anything and it would look like nothing happened. 
- We need to add `event.preventDefault()` to the `form.addEventListener` so the page does not reload and user can see data.  


## Question 6: Putting It All Together

The steps below describe how to build a form that fetches Pokemon data from `https://pokeapi.co/api/v2/pokemon/{name}` based on the name entered in the form and displays the pokemon's data on the page. The steps are listed in a **random order**. Rearrange them into the correct sequence.

- A. Parse the response body with `await response.json()`
- B. Call `event.preventDefault()` to stop the page from reloading ^
- C. Check `response.ok` and throw an error if the response failed
- D. Update the DOM with the Pokemon's data
- E. Add a `'submit'` event listener to the form ^
- F. Handle errors in the `catch` block (display an error message) ^
- G. Extract the Pokemon name from the form input ^
- H. Send a GET request with `fetch()` using the Pokemon name in the URL ^
- I. Reset the form with `form.reset()` ^
- J. Create the HTML form with a name input and output elements for displaying results ^

**Your Answer:**
A. Create the HTML form with a name input and output elements for displaying results
B. Add a `'submit'` event listener to the form
C. Call `event.preventDefault()` to stop the page from reloading
D. Extract the Pokemon name from the form input 
E. Send a GET request with `fetch()` using the Pokemon name in the URL
F. Check `response.ok` and throw an error if the response failed
G. Parse the response body with `await response.json()`
H. Update the DOM with the Pokemon's data
I. Reset the form with `form.reset()`
J. Handle errors in the `catch` block (display an error message)