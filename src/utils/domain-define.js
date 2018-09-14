export const tabs = {
    
  }
  
  export const articleSchema = {
    id: '',
    user_id: '',
    title: '',
    content: '',
    visits: 0,
    create_time: '',
    // is_collect: '',
    // author: {
    //   username: '',
    //   avatar_url: '',
    // }
  }
  
  export const replySchema = {
    id: '',
    author: {
      loginname: '',
      avatar_url: '',
    },
    content: '',
    ups: [],
    create_at: '',
    reply_id: null,
    is_uped: false,
  }
  
  export default {
    tabs,
  }
  