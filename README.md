## Less border layout example

This example shows how to do border layouts using Less mixins.

![Border layout](http://sunesimonsen.github.com/less-border-layout/images/border-layout.png)

You can see the example [here](http://sunesimonsen.github.com/less-border-layout/).

index.html:

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
  
Style.less:

    @import 'border-layout.less';
    
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
    
## Advanved example

[Click here to open the advanced example](http://sunesimonsen.github.com/less-border-layout/advanced.html "Advanced example")

![Border layout](http://sunesimonsen.github.com/less-border-layout/images/border-layout-advanced-thumb.png)
