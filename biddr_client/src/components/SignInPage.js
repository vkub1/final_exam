import React from 'react';
import { Session } from '../requests'

function SignInPage(props) {
    const { onSignIn } = props;

    function handleSubmit(event) {
        event.preventDefault();
        const { currentTarget } = event;
        const formData = new FormData(currentTarget)
        const params = {
            email: formData.get('email'),
            password: formData.get('password')
        }
        Session.create(params).then(user => {
            if (user?.id) {
                onSignIn();
                props.history.push('/auctions');
            }
        })
    }

    return( 
        <main>
            <form onSubmit={handleSubmit} className="col-12 col-md-12 d-flex flex-column align-items-center">
                <div className="form-group d-flex mx-3 col-12 my-3 col-md-8">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" name="email" id="email" />   
                </div>
                <div className="form-group d-flex col-12 mx-3 my-3 col-md-8">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" id="password" />   
                </div>
                <input type="submit" value="Sign In" className="btn btn-dark col-md-8 my-3 col-12 mx-3" />
            </form>
        </main>
    )
} 

export default SignInPage;