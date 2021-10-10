# Demo of how to using @apply in Tailwind 

## Main Point to apply `@apply`


### Overview 
To use `@apply` feature, needs the followings:
- Make sure PostCss is installed.
- Add your own Css.
- Run the Tailwind command with `-i`.
- Link the css in your HTML.

### Make sure PostCss is installed.
```
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

### Add your own Css. 
```css
@tailwind base;            
@tailwind components;      
@tailwind utilities;       
@tailwind screens;         
BODY {
    @apply bg-blue-300;
}
```

### Run the Tailwind command with `-i`. 
```
npx tailwind -i main.css -o dist/main.css
```

### Link the css in your HTML.
```html
<link href="dist/main.css" rel="stylesheet">    
```


## Reference 
- https://egghead.io/lessons/tailwind-set-up-tailwind-and-postcss
- https://tailwindcss.com/docs/functions-and-directives
- https://docs.tailwindchina.com/docs/functions-and-directives

