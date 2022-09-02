import subject from '../src/client/reducers/UserReducer.js'

describe('User Reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      profile: {
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        currentRotation: {},
        retiredShoes: {},
      },
      loginStatus:false,
    }
  })
  describe('default state', () => {
    it('Should return a default state when given undefined input', () => {
      expect(subject(undefined, {type:undefined})).toEqual(state)
    })
  })
  describe('unrecognized action types', ()=>{
    it('Should return current state', () => {
      const action = {type:'unrecognized'};
      expect(subject(state,action)).toBe(state);
    });
  });
 describe('ADD_USER', () => {
   it('Should return the same state', () => {
    expect(subject(state, {type:'Types.ADD_USER'})).toBe(state)
   })
 })
 describe('LOGIN', () => {
  const action = {
    type: 'LOGIN',
    payload:{
      profile:{
      username:'shellbell',
      firstName:'shelby', 
      lastName:'carlin', 
      email:'shelbycarlin@comcast.net',
      currentRotation:{},
      retiredShoes:{},
      },
      loginStatus:true,
    }
  }
  xit('logs in and updates state to user info', () => {
    const { profile } = subject(state,action);
    console.log(profile);
    expect(profile).toEqual({
      profile:{
      username:'shellbell',
      firstName:'shelby', 
      lastName:'carlin', 
      email:'shelbycarlin@comcast.net',
      currentRotation:{},
      retiredShoes:{}
      },
      loginStatus:true,
    })
  })
 })
})