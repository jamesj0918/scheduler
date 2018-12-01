
const ADD_CLASS = "ADD_CLASS";
const GET_CLASS = "GET_CLASS";
const DELETE_ADD_CLASS = "DELETE_ADD_CLASS";
const state = {
    active_table: 0,
    origin_time_table: [],
    add_time_table: [],
};

const mutations = {

    ADD_CLASS (state, subject){
        state.add_time_table.push({id: state.active_table, subject: subject});
    },
    DELETE_ADD_CLASS(state, subject){
        const found_index = state.add_time_table.findIndex(function(element){
            return element.subject.code == subject.subject.code;
        });
        state.add_time_table.splice(found_index,1);
        console.log(state.add_time_table);
    }
};
const actions = {

    ADD_CLASS({commit},subject){
        commit(ADD_CLASS,subject);
    },
    DELETE_ADD_CLASS({commit},subject){
        commit(DELETE_ADD_CLASS,subject);
    }
};

const getters = {
    GET_CLASS: function(state){
        let id_subject = [];

        for(var i = 0;i<state.add_time_table.length;i++){
            if(state.add_time_table[i].id == state.active_table){
                id_subject.push(state.add_time_table[i]);
            }
        }
        return id_subject;
    }
};

export default {

    state,
    mutations,
    actions,
    getters,
}
