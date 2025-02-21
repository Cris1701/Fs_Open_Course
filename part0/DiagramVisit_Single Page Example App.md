## Sequence Diagram Visiting Single Page Example App - Exercise 0.5

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
    server->>browser: HTML Document with the tags to shipping form and notes list- HTTP CODE 304

    browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server->>browser: CSS Document with the styles for the HTML Document- HTTP CODE 304

    browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    server->>browser: Javascript Document with the functions to use in the shipping form and show the notes list- HTTP CODE 304

    browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server->>browser: JSON Document with the data to displays in the notes list- HTTP CODE 304
```
