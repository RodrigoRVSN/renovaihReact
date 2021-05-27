import * as firebase from 'firebase';

const web_database = {};

(function () {
    let user_id = false;
    function new_user(user1, points) {
        const user_data = {
            user1: user1,
            points: points,
            createdAt: firebase.database.ServerValue.TIMESTAMP,
        };

        if (!user_id) {
            user_id = firebase.database().ref().child('users').push().key;
        }

        let updates = {};
        updates['/users/' + user_id] = user_data;

        let user_ref = firebase.database().ref();

        user_ref.update(updates)
            .then(function () {
                return { success: true, message: '' };
            })
            .catch(function (error) {
                return { success: false, message: `Errouuuu ${error.message}` };
            })
    }


    function remove_user() { }
    function update_user() { }
    function reset_user() { }
    
    web_database.new = new_user;
    web_database.remove = remove_user;
    web_database.update = update_user;
    web_database.reset = reset_user;
})()