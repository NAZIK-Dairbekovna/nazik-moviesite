import React from 'react';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


class LayOut extends React.Component<{ children: any }> {
    render() {
        let {children} = this.props;
        return (
            <div>
                <Header/>
                <div>
                    {children}
                </div>
                <Footer/>
            </div>
        );
    }
}

export default LayOut;