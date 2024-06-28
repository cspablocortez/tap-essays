# Tap Essays

Inspired by Robin Sloan's 
[*Fish*](https://www.robinsloan.com/fish/), a tap essay in 
the form of an iPhone app.

## Feature Suggestion:

- Animations

[Flexbox 
Guide](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/)

### Devlog

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

### File Structure

(17:00) 

Create these Jekyll-specific folders: `_layouts`, `_posts`, `_includes`.

```sh
$ mkdir _layouts _posts _includes
```