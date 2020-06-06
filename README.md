# state problem and process the problem
- todo list 
    - make grid( may 25)
    - make start point and end destinate
    - make the isWall respond on backend properly , when click on any node of grid it return the right behavior , but not display in the frontend yet (may 28)
    - handleMouseDown:
        - try to get the click wall behaviour, node is empty first click make wall, second click remove the wall
        - behaviour of handlemousedown is good - wall return true when node is mark, and wall return false when no mark or unmark, (may 29) 
    - handleMouseUp:
        - try to get behaviour as release it will responde something.(may 29)
    - handleMouseEnter
        - when the mouse enter the grid notthing happen unless it has been press
        - when the mouse is press it will mark all the node it travel over
        - the handlMouseEnter is handled by call the function onMouseEnter in the Node, then it will process the function handleMouseEnter in main Grid  and return the ispress value
        - it will take that value to draw the wall as each node
        - but the remove wall of wall build by handle mouse enter need 2 click(may 31)
        - solve double click remove (jun 1)
    - build the start and finish for user can put anywhere
        - behaviour need; when click on the start/finish button, and move the mouse to the grid and click on any node of grid 
        - it will mark as node start/finish  
    - build algorithm find best path
        - let the initial node is start node
        - let distance of node Y is distance from the initial node to Y
             1. mark all node unvisited, create a set of all the unvisited nodes called the unvisited set 
             2.  Assign to every node a tentative distance  value: 
                - set it to zero for our initial node 
                - to infinity for all other nodes, 
                - set initial node as current
             3. for the current node , consider all of its unvisted  neighbour and calculate their tentative  distances through the current node, 
                - compare the newly calculated tentative distance to the current assigned  value and assign the smaller one
             4. when we are done with all unvisited neighbours of current node mark the current node as visited  adn remove it from the unvisited set, a visited node will never be checked again.
             5. if the destination node has been marked visited or if the smallest tentative distance amonng the nodes in the unvisited set is infinity then stop, the algorithm has finished
             6. Otherwise, select the unvisited node that marked with the smallest tentaive distancem set it as the new "current node", and go back to step 3

            
            
            

        
    


  
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
