import React, {Component} from 'react';

import Header from './components/Header';
import Input from './components/Input';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Input />
            </div>
        )
    }
}

export default App;