export default ({ body, initData }: { body: string, initData: Object }) => `
  <!DOCTYPE html>
  <html>
  <head>
  <meta charset="utf-8" />
  <meta http-equiv="Content-Security-Policy" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script>window.INITIAL_DATA = ${JSON.stringify({ initData })}</script>
  </head>
    <body style="margin:0">
      <div id="ssr">${body}</div>
    </body>
  </html>
`;
