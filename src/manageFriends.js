export function manageFriends(state, action) {
  switch (action.type) {
    case "friends/add":
      return {
        friends: [ ...state.friends, action.payload ]
      }
    case "fiends/remove":
      return { 
        friends: [ ...state ].filter((obj) => { obj.id !== action.payload.id
      })
    }
    default: 
      return state   
  }
}
