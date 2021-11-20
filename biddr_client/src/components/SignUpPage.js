import React from 'react'
import {User} from '../requests'

export default function SignUpPage(props) {

    const { onSignUp } = props;

    const handleSubmit = event => {
        const { currentTarget } = event
        event.preventDefault()
        const formData = new FormData(currentTarget)
        const params = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
            password_confirmation: formData.get('password_confirmation')
        }
        console.log(params)
        User.create({user: params}).then(user => {
            console.log(user)
            if (user?.id){
                onSignUp()
                window.location.replace('/auctions') 
            }
        })
    }

    return (
        <main>
            <form onSubmit={(event) => {handleSubmit(event)}} className="col-12 col-md-12 d-flex flex-column align-items-center">
                <div className="form-group d-flex mx-3 col-12 my-3 col-md-8">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" name="name" id="name" />   
                </div>
                <div className="form-group d-flex mx-3 col-12 my-3 col-md-8">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" name="email" id="email" />   
                </div>
                <div className="form-group d-flex col-12 mx-3 my-3 col-md-8">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" id="password" />   
                </div>
                <div className="form-group d-flex col-12 mx-3 my-3 col-md-8">
                    <label htmlFor="password_confirmation">Confirm Password</label>
                    <input type="password" className="form-control" name="password_confirmation" id="password_confirmation" />   
                </div>
                <input type="submit" value="Sign Up" className="btn btn-dark col-md-8 my-3 col-12 mx-3" />
            </form>
        </main>
    )
}
