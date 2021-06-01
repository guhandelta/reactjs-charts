import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import styled from 'styled-components';
import { Home, BarChart, StackedBarChart, DoughnutChart, TreeList, MultiSelectTreeView, RecursiveTreeView } from '../pages';

const Nav = () => {
    return (
        <>
            <Router>
                <nav>
                    <StyledUnorderedList>
                        <StyledList>
                            <Link to="/"><StyledLink>Home</StyledLink></Link>&emsp;
                        </StyledList>
                        <StyledList>
                            <Link to="/barchart"><StyledLink>Bar Chart</StyledLink></Link>&emsp;
                        </StyledList>
                        <StyledList>
                            <Link to="/stackedbarchart"><StyledLink>Stacked Bar Chart</StyledLink></Link>&emsp;
                        </StyledList>
                        <StyledList>
                            <Link to="/DoughnutChart"><StyledLink>Doughut Chart</StyledLink></Link>&emsp;
                        </StyledList>
                        <StyledList>
                            <Link to="/OrgTree"><StyledLink>Org Tree</StyledLink></Link>&emsp;
                        </StyledList>
                        <StyledList>
                            <Link to="/MaterialTree"><StyledLink>Material Tree</StyledLink></Link>&emsp;
                        </StyledList>
                        <StyledList>
                            <Link to="/RecursiveTreeView"><StyledLink>STree</StyledLink></Link>&emsp;
                        </StyledList>
                    </StyledUnorderedList>
                </nav>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/barchart" component={BarChart}></Route>
                    <Route path="/stackedbarchart" component={StackedBarChart}></Route>
                    <Route path="/DoughnutChart" component={DoughnutChart}></Route>
                    <Route path="/OrgTree" component={TreeList}></Route>
                    <Route path="/MaterialTree" component={MultiSelectTreeView}></Route>
                    <Route path="/RecursiveTreeView" component={RecursiveTreeView}></Route>
                </Switch>
            </Router>
        </>
    )
}

export default Nav

const StyledUnorderedList = styled.ul`
    top: 0;
    padding: 1% 25%;
    border-bottom: 0.5px double green;
    list-style-type: none;
`
const StyledList = styled.li`
    display: inline;
`

const StyledLink = styled.a`
    text-decoration: none;
    font-family: 'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', 'sans-serif';
`