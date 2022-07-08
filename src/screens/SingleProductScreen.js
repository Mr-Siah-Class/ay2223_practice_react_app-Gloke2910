import React from 'react';

class SingleProductcreen extends React.Component
{
    constructor() {
        super()
    }

    render()
    {
        return (
            <div className='Main'>
                <h1>Product {this.props.productId}</h1>
            </div>
        );
    }
}

export default SingleProductcreen;