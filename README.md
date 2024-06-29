# Tap Essays

Inspired by Robin Sloan's 
[*Fish*](https://www.robinsloan.com/fish/), a tap essay in 
the form of an iPhone app.

## Feature Suggestion:

- Animations

[Flexbox 
Guide](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/)

### Devlog

#### Saturday Jun 29

(14:53) Add link to animate.css library (using CDN) inside `tapped.html`:

```html 
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
```

(15:03) Next, we add the class name of our animation within the JavaScript code
block that makes the paragraph.

```javascript
 // Show the current paragraph code-block
if (currentIndex < paragraphs.length) {
    paragraphs[currentIndex].style.display = 'block';
    paragraphs[currentIndex].classList.add('animate__fadeInRight'); // add this line
    currentIndex++;
}
```




#### Fri Jun 28

(16:48) Turn this into a Jekyll site to leverage markdown -> HTML conversion.

```sh
$ bundle init
```

(16:50) Edit the `Gemfile` in a text editor and add jekyll as a dependency.

```sh
gem "jekyll"
```

(16:52) Run `bundle` to install jekyll.

```sh
$ bundle
```

(16:56) Update CSS to prevent text from being selected:

```css
.container p {
    display: none;
    text-align: center;
    font-size: 1.5rem;
    user-select: none;
}
```

# File Structure

(17:00) 

Create these Jekyll-specific folders: `_layouts`, `_posts`, `_includes`.

```sh
$ mkdir _layouts _posts _includes
```

## Step 1

Create default HTML template. Copy the contents of `index.html` into `default.html`.

`$ touch _layouts/default.html`

Next, replace the placeholder paragraph elements with the Liquid content tag: `{{ content }}`. Don’t forget the front matter lines at the top of the file.

## Step 2

Update `index.html` file to be a simple markdown file with plain text content, all HTML info will have been moved to the `default.html`.

## Step 3

We will define three new layouts:

- default (static content)
- tapped (one paragraph at a time)
- typed (automatically typed content)

To do this, first we will move the content within the `<script>` over to the `tapped.html`. We will also have to update our CSS to produce a readable document.

## Step 4

(17:34) We refactor our code to include an `assets` directory to hold CSS and JavaScript files. We’ve moved the script from `tapped.html` to its own file.

# JavaScript HTML parsing

First we create constant values for markup tags, e.g., headers, paragraphs, block quotes, code blocks, etc.





