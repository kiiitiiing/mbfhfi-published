var connection = new signalR.HubConnectionBuilder()
    .withUrl('/chat')
    .withAutomaticReconnect()
    .build();

connection.on('refreshAssessmentList', function (message) {
    LoadAssessments('#assessments_container');
}); 
connection.on('refreshUsersList', function () {
    LoadUsers('#users_container');
});
connection.on('notifMobile', function (message) {
    toastr['success'](message);
});

connection.on('loginMobile', function (message) {
    toastr['success'](message);
});

// Transport fallback functionality is now built into start.
connection.start()
    .then(function () {
        console.log('connection started');
    })
    .catch(error => {
        console.error(error.message);
    });