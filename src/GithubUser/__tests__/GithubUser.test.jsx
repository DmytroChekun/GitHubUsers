import React from "react";
import { shallow } from 'enzyme';
import GithubUser from "../GithubUser";
import getUserData from "../userGateway";

jest.mock('../userGateway', ()=> {
    return {
        getUserData: jest.fn(() => Promise.resolve())
    }
})

describe('GithubUser', ()=> {


    it('should not render profile block if no data', () => {
        const wrappedComponent = shallow( <GithubUser /> )
        wrappedComponent.setState({

        })
        expect(wrappedComponent.find('.user__info').exists()).toEqual(false);
    });

    it('should render profile block if data exist', () => {
        const wrappedComponent = shallow( <GithubUser /> )
        expect(wrappedComponent.find('.user__info').exists()).toEqual(true);
    });
})




// npm i -D enzyme

//  npm i -D @babel/core @babel/preset-env @babel/preset-react