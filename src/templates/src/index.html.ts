const content = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <title><%= htmlWebpackPlugin.options.title %></title>
</head>

<body>
    <noscript>
        This is your fallback content in case JavaScript fails to load.
    </noscript>
    <div id="app"></div>
</body>

</html>
`;

export default content;
