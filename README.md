# Less border layout

LessCSS mixins for doing border layouts in web-pages.

Install:

    npm install less-border-layout

## Less border layout example

This example shows how to do border layouts using Less mixins.

![Border layout](https://raw.github.com/sunesimonsen/less-border-layout/master/examples/images/border-layout.png)

You can see the example [here](http://sunesimonsen.github.io/less-border-layout/examples/).

index.html:

``` html
    <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet/less" type="text/css" href="style.less">
        <script src="less.js" type="text/javascript"></script>
      </head>
      <body>
        <div class="layout main">
          <div class="layout top"></div> 
          <div class="layout left"></div> 
          <div class="layout center content">
            <div class="layout top"></div> 
            <div class="layout center"></div> 
            <div class="layout right"></div> 
          </div> 
          <div class="layout right"></div> 
          <div class="layout bottom"></div> 
        </div>
      </body>
    </html>
```

Style.less:

    @import "../layouts.less";
    @import "../border-layout.less";
    
    .layout.main {
        min-width: 600px;
        min-height: 400px;
        
        .border-layout-top(100px);
        .border-layout-left(150px);
        .border-layout-right(200px);
        .border-layout-bottom(50px);
    
        .content {
            .border-layout-top(40px);
            .border-layout-right(60px);
        }
    }

## Advanced example

[Click here to open the advanced example](http://sunesimonsen.github.com/less-border-layout/examples/advanced.html "Advanced example")

<a href="http://sunesimonsen.github.com/less-border-layout/examples/advanced.html">
<img src="https://raw.github.com/sunesimonsen/less-border-layout/gh-pages/examples/images/border-layout-advanced-thumb.png" alt="Border layout example">
</a>
