import { expect } from 'chai';
import User from '../src/classes/User';
import sampleUsersData from '../src/data/sampleUsersData';

let user;

describe('User Class', () => {

    beforeEach(() => {
      user = new User(sampleUsersData[0]);
    })

    it('Should be a function', () => {
      expect(User).to.be.a('function');
    })

    it('Should be an instance of User', () => {
      expect(user).to.be.an.instanceof(User);
    })

    it('Should have property that contains a user\'s name', () => {
      expect(user.name).to.eql('Saige O\'Kon')
    })

    it('Should have a property that contains a user\'s id', () => {
      expect(user.id).to.eql(1);
    })

    it('Should have a property that contains a user\'s pantry', () => {
      console.log(user.pantry)
      expect(user.pantry).to.eql([
        {
          "ingredient": 11297,
          "amount": 4
        },
        {
          "ingredient": 1082047,
          "amount": 10
        },
        {
          "ingredient": 20081,
          "amount": 5
        },
        {
          "ingredient": 11215,
          "amount": 5
        },
        {
          "ingredient": 2047,
          "amount": 6
        },
        {
          "ingredient": 1123,
          "amount": 8
        },
        {
          "ingredient": 11282,
          "amount": 4
        },
        {
          "ingredient": 6172,
          "amount": 2
        },
        {
          "ingredient": 2044,
          "amount": 2
        },
        {
          "ingredient": 2050,
          "amount": 4
        },
        {
          "ingredient": 1032009,
          "amount": 3
        },
        {
          "ingredient": 5114,
          "amount": 3
        },
        {
          "ingredient": 1017,
          "amount": 2
        },
        {
          "ingredient": 18371,
          "amount": 7
        },
        {
          "ingredient": 1001,
          "amount": 6
        },
        {
          "ingredient": 99223,
          "amount": 2
        },
        {
          "ingredient": 1230,
          "amount": 2
        },
        {
          "ingredient": 9152,
          "amount": 4
        },
        {
          "ingredient": 10611282,
          "amount": 2
        },
        {
          "ingredient": 93607,
          "amount": 2
        },
        {
          "ingredient": 14106,
          "amount": 4
        },
        {
          "ingredient": 1077,
          "amount": 4
        },
        {
          "ingredient": 6150,
          "amount": 2
        },
        {
          "ingredient": 1124,
          "amount": 2
        },
        {
          "ingredient": 10011693,
          "amount": 4
        },
        {
          "ingredient": 1102047,
          "amount": 2
        },
        {
          "ingredient": 19206,
          "amount": 2
        },
        {
          "ingredient": 1145,
          "amount": 4
        },
        {
          "ingredient": 1002030,
          "amount": 4
        },
        {
          "ingredient": 12061,
          "amount": 2
        },
        {
          "ingredient": 19335,
          "amount": 4
        },
        {
          "ingredient": 15152,
          "amount": 3
        },
        {
          "ingredient": 9003,
          "amount": 2
        },
        {
          "ingredient": 18372,
          "amount": 3
        },
        {
          "ingredient": 2027,
          "amount": 2
        }
      ])
    })

    it('Should start with no favorite recipes', () => {
      console.log(user.favoriteRecipes)
      expect(user.favoriteRecipes).to.eql([])
    })

    it('Should start with no recipes to cook', () => {
      console.log(user.recipesToCook)
      expect(user.recipesToCook).to.eql([])
    })





})
