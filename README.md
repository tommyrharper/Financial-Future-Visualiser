# Financial Future Visualiser

This project is designed to help you visualise your financial potential if you have a regular savings and investment plan.

## Developer Journal

### Design

### User Stories

- [] 1

> As a user,  
> So the program responds to my personal situation
> I would like to be able to enter my details.

- [] 2

> As a user,  
> So that I can see my financial future,
> I would like the page to generate a graph.

- [] 3

> As a user,  
> So that I can see how changes will affect my future,
> I would like the values to be adjustable.

- [] 4

> As a user,  
> So that so I can enjoy playing with the graph,
> I would like there to be sliders for the values.

- [] 5

> As a user,  
> So that so that I can save my details,
> I would like to be able to sign up.

- [] 6

> As a user,  
> So that so that I can save my details,
> I would like to be able to sign up.

- [] 6

> As a user,  
> So that so that I make accuracte calculations with my income,
> I would like to automatically deduct tax from the values.

### Domain model

| Objects | Messages |
|---------|----------|
| User | this.startingCash <br> this.savingsPercentage <br> this.currentIncome <br> this.futureIncome <br> this.futureIncomeYear <br> this.investmentLength <br> this.ROI |
| Graph | this.props.graphData<br> this.generateGraph()<br> this.updateGraph() |
| InvestmentCalculator | this.props.userData <br> this.calculateGraphData() |

### Set up

I started this project by creating an empty repository on github and then a react app on my local machine using:
```
npx create-react-app finacial-future-visualiser
```
Then I pushed it up to this repository.

### Creating a User Component

- [] 1

> As a user,  
> So the program responds to my personal situation
> I would like to be able to enter my details.

First I wrote a simple test to see if the User component renders.

In order to do this I whad to set up enzyme:
```
npm install enzyme
```
Then I wrote a smoke test:
```JavaScript
it('renders without crashing', () => {
  shallow(<User />)
});
```
And then created a react component.

I had to use the ```setupTests.js``` file and add additional code there:

```JavaScript
import '@testing-library/jest-dom/extend-expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme'

configure({ adapter: new Adapter() });
```

### Redesign

Immediately I realised my current design is insufficient so lets remodel it.

### New Domain Model

| Objects | Messages |
|---------|----------|
| User | this.props.startingCash <br> this.props.savingsPercentage <br> this.props.currentIncome <br> this.props.futureIncome <br> this.props.futureIncomeYear <br> this.props.investmentLength <br> this.props.ROI |
| Graph | this.props.graphData<br> this.generateGraph()<br> this.updateGraph() |
| InvestmentCalculator | this.props.userData <br> this.calculateGraphData() |
| Form | this.state.startingCash <br> this.state.savingsPercentage <br> this.state.currentIncome <br> this.state.futureIncome <br> this.state.futureIncomeYear <br> this.state.investmentLength <br> this.state.ROI |

### Spike time

At this second stage in planning it became evident I have no idea what I am doing and I need to spike some code in order to see what I am really going to create.

Okay so I have managed to get some basic user input into the state in react. Lets use that to create a graph.

### Graph

Okay I am going to use react-chartist:
```
npm install chartist --save
npm install react-chartist --save
```