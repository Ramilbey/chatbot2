# Chatbot Project

This is a simple **Chatbot UI** built with **React** (using a lightweight version from `supersimpledev`).  
It shows a basic conversation between a **user** and a **robot**, including images and text.

## Key Concepts Learned
1. **Component** = a piece of the website.
2. **Component** = a way to create our own HTML elements.
3. **Started** the Chatbot Project.
4. **Split** the chatbot into smaller components: `<ChatInput>` and `<ChatMessage>`.
5. **Props** = make components **reusable**.
6. **Destructuring** and using the **Guard Operator (`&&`)**.
7. **Code cleanup** for better readability.
8. **Created** the main `<App>` component.
9. Saving Data using arrays and objects.
10. Generating HTML dynamically using .map() and the key prop.
11. Making it Interactive using onClick and onChange events.
12. Understanding State: Data that changes over time and connects to the HTML.
13. Updater Functions: Functions to update the state and the displayed UI.
14. Array Destructuring to simplify code.
15. Lifting State Up: Sharing state between components.
16. Making the <ChatInput> component interactive.
17. Getting automatic chatbot responses.

## Features
- User and Robot messages displayed side-by-side with avatars.
- Chat input field with placeholder text and a send button.
- Clean, reusable component structure.

## Technologies Used
- **React.js  (via SuperSimpleDev CDN)** (`supersimpledev` CDN)
-  **JavaScript**
-  **HTML**
- **ReactDOM** (`supersimpledev` CDN)
- **Babel** (for running JSX directly in the browser)

##  Key Concepts Explained:
- **State** is managed using `useState`.
- **Components** are built for input, individual messages, and the whole message list.
- **Array spread `...` operator** is used to append new messages.
- **Conditional Rendering** is used to show different avatars (`user` and `robot`).
