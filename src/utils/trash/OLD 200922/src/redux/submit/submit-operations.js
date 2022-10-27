import axios from 'axios';
import * as actions from'./submit-actions';
const {addSubmitAction}=actions;



// example for middleware form------------------------------------------------------------------------
const gaMd=store=>next=>action=>{
    if( action?.meta?.ga){
// шлем аналитику в гугл
    }
    next (action);
}
//--------------------------------------------------------------------------------------


