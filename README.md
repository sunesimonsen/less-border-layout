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

## License: BSD-3-Clause

```
Copyright (c) 2013, Sune Simonsen
All rights reserved.
Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1) Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2) Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3) Neither the name of the ORGANIZATION nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
```
