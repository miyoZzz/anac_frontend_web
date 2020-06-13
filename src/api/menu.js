import $$request from '../http/index'

const menu = {
  list(){
    return $$request.post('menu/list')
  },
}

export default menu