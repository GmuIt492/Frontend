import { Component } from 'react'
import { withRouter } from 'react-router-dom';

class ScrollToTop extends Component {
    //listen for page click / change
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0)
        }
    }

    //apply scroll upon page click / change
    render() {
        return this.props.children
    }
}
  
export default withRouter(ScrollToTop)