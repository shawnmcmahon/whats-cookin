import { expect } from 'chai';
import User from '../src/classes/User';
import sampleUsersData from '../src/data/sampleUsersData';

let user;

describe('User Class', () => {

    beforeEach(() => {
      user = new User(sampleUsersData);
    })

    it('Should be a function', () => {
      expect(User).to.be.a('function');
    })

    it.only('Should be an instance of User', () => {
      expect(user).to.be.an.instanceof(User);
    })



})
